<script setup>
import { ref, onMounted } from "vue";

/*
проход по соседям идет и в отрицательные числаБ возможно поэтому он не корректно отображается



Удаление свойств из объектов во вью через стандартный "delete" не будет работать корректно, если объект/массив является реактивным.
добавить счетчик эпох.
что будет, если все поле будет в живых клетках.
*/



let centerX = ref(0);
let centerY = ref(0);
const canvasElementRef = ref(null);
let canvasContext = null;
let epochCounter = ref(0)
let timerId = null;
let allCellX = 400;
let allCellY = 400;

let population = {};
let deadCells = [];
let bornCells = {};

onMounted(() => {
  canvasContext = canvasElementRef.value.getContext("2d");
  allCellX = allCellX / 10;
  allCellY = allCellY / 10;
  console.log(allCellX, allCellY)
  for (let x = 0; x <= allCellX * 10; x += 10) {
    canvasContext.moveTo(x, 0);
    canvasContext.lineTo(x, allCellX * 10);
  }
  for (let y = 0; y < allCellY * 10; y += 10) {
    canvasContext.moveTo(0, y);
    canvasContext.lineTo(allCellY * 10, y);
  }
  canvasContext.strokeStyle = "silver";
  canvasContext.stroke();
});

/* подумать что бы поуляция была в виде массива. сделать второй вариант отдельно, где популешин будет массивов.
  [
    [0, 1, 0],
    [0, 1, 1],
    [0, 0, 0]
  ]
*/

// вызвать отдельно популяцию, по которой канвас уже нарисует все. В отдельной функции.
function test() {
  population = {
    "60,60": [60, 60],
    "60,70": [60, 70],
    "60,80": [60, 80],
    "80,40": [80, 40],
    "100,80": [100, 80],
    "110,80": [110, 80],
    "120,80": [120, 80],
    "120,90": [120, 90],
    "120,100": [120, 100],
    "110,100": [110, 100],
    "100,100": [100, 100],
    "100,90": [100, 90],
    "30,30": [30, 30],
    "40,40": [40, 40],
    "40,50": [40, 50],
    "30,50": [30, 50],
    "20,50": [20, 50],
    "0,0": [0, 0],
    "10,0": [10, 0],
    "20,0": [20, 0],
    "0,390": [0, 390],
  };
  for (let key in population) {
    canvasContext.fillRect(population[key][0], population[key][1], 10, 10);
  }

  //console.log("популяция", population);
}
/**
 * Следующий шаг эволюции.
 */
function nextStep() {
  //console.log("шаг эволюции");
  let coordinateX = 0;
  let coordinateY = 0;
  for (let key in population) {
    coordinateX = population[key][0];
    coordinateY = population[key][1];
    //console.log("шаг", coordinateX, coordinateY);
    checkingNeighbors(coordinateX, coordinateY);
  }
  epochCounter.value++;
  cellEvolution();
}
/**
 * Проверяет сколько соседей есть у живой клетки.
 * @param x {number}
 * @param y {number}
 */
function checkingNeighbors(x, y) {
  //console.log("приняли", x, y);
  const neighboringCell = [
    [x - 10, y - 10],
    [x, y - 10],
    [x + 10, y - 10],
    [x + 10, y],
    [x + 10, y + 10],
    [x, y + 10],
    [x - 10, y + 10],
    [x - 10, y],
  ];

  // индекс мертвой клетки что бы проверить, родится ли она
  let indexPossiblyBornCell = -1;
  let livingNeighbor = 0;

  const identifyNeighbors = {
    1: population[`${neighboringCell[0][0]},${neighboringCell[0][1]}`],
    2: population[`${neighboringCell[1][0]},${neighboringCell[1][1]}`],
    3: population[`${neighboringCell[2][0]},${neighboringCell[2][1]}`],
    4: population[`${neighboringCell[3][0]},${neighboringCell[3][1]}`],
    5: population[`${neighboringCell[4][0]},${neighboringCell[4][1]}`],
    6: population[`${neighboringCell[5][0]},${neighboringCell[5][1]}`],
    7: population[`${neighboringCell[6][0]},${neighboringCell[6][1]}`],
    8: population[`${neighboringCell[7][0]},${neighboringCell[7][1]}`],
  };

  // перебор соседей.
  for (let key in identifyNeighbors) {
    //тут делаем реверс на противоположную сторону. Проверяем отрицательные либо плюсовые значения.
    // Внутри уже проверяем наличие данных
    indexPossiblyBornCell += 1; // подумать как переименовать что бы было понятно.
    if (identifyNeighbors[key] != undefined) {
      livingNeighbor += 1;

      //console.log("координаты и сосед", livingNeighbor, indexPossiblyBornCell);
    }
    if (identifyNeighbors[key] === undefined) {
      birthCell(neighboringCell[indexPossiblyBornCell][0], neighboringCell[indexPossiblyBornCell][1]);

      // console.log(
      //   " смотрим что передаст",
      //   x,
      //   y,
      //   neighboringCell[indexPossiblyBornCell][0],
      //   neighboringCell[indexPossiblyBornCell][1]
      // );
    }
  }

  if (livingNeighbor < 2 || livingNeighbor > 3) {
    //console.log("клетка умирает", livingNeighbor);

    deadCells.push([x, y]);
    // console.log(
    //   "клетка умирает",
    //   livingNeighbor,
    //   population,
    //   deadCells,
    //   deadCells[0]
    // );
  }
}

/**
 * Проверяем родится ли новая клетка.
 * @param x {number}
 * @param y {number}
 */
function birthCell(x, y) {
  //console.log("сюда кидаем пустую клетку и проверяем соседей", x, y);
  const neighboringCell = [
    [x - 10, y - 10],
    [x, y - 10],
    [x + 10, y - 10],
    [x + 10, y],
    [x + 10, y + 10],
    [x, y + 10],
    [x - 10, y + 10],
    [x - 10, y],
  ];
  let livingNeighbor = 0;

  const identifyNeighbors = {
    1: population[`${neighboringCell[0][0]},${neighboringCell[0][1]}`],
    2: population[`${neighboringCell[1][0]},${neighboringCell[1][1]}`],
    3: population[`${neighboringCell[2][0]},${neighboringCell[2][1]}`],
    4: population[`${neighboringCell[3][0]},${neighboringCell[3][1]}`],
    5: population[`${neighboringCell[4][0]},${neighboringCell[4][1]}`],
    6: population[`${neighboringCell[5][0]},${neighboringCell[5][1]}`],
    7: population[`${neighboringCell[6][0]},${neighboringCell[6][1]}`],
    8: population[`${neighboringCell[7][0]},${neighboringCell[7][1]}`],
  };

  // перебор соседей.
  for (let key in identifyNeighbors) {
    if (identifyNeighbors[key] != undefined) {
      livingNeighbor += 1;
      //console.log("смотрим пустых соседей", livingNeighbor, x, y);
    }
  }
  if (livingNeighbor === 3 && population[`${x},${y}`] == undefined) {
    if (x >= 0 && (x < 400) & (y >= 0) && y < 400) {
      bornCells[`${x},${y}`] = [x, y];
    }
  }
  //console.log("рождение", x, y, bornCells, livingNeighbor);
}

/**
 * отрисовка следующего поколения.
 */
function cellEvolution() {
  //console.log("Тут смотрим финал");
  deadCells.forEach((i) => {
    delete population[`${i[0]},${i[1]}`];
    canvasContext.clearRect(i[0], i[1], 10, 10);
    // console.log(
    //   "удалим мертвых",
    //   population,
    //   population[(i[0], i[1])],
    //   i[0],
    //   i[1]
    // );
  });

  for (let key in bornCells) {
    population[`${bornCells[key][0]},${bornCells[key][1]}`] = [
      bornCells[key][0],
      bornCells[key][1],
    ];
    canvasContext.fillRect(bornCells[key][0], bornCells[key][1], 10, 10);

    // console.log(
    //   "добавим живых",
    //   bornCells[key],
    //   bornCells[key][0],
    //   bornCells[key][1],
    //   population
    // );
  }
  bornCells = {};
  deadCells = [];

  // Восстанавливаем клетки. Цвет меняется потому что разметка становится сверху?
  for (let x = 0; x <= allCellX * 10; x += 10) {
    canvasContext.moveTo(x, 0);
    canvasContext.lineTo(x, allCellX * 10);
  }
  for (let y = 0; y < allCellY * 10; y += 10) {
    canvasContext.moveTo(0, y);
    canvasContext.lineTo(allCellY * 10, y);
  }
  canvasContext.strokeStyle = "silver";
  canvasContext.stroke();
};
/**
 * Рисуем живие клетки в поле.
 * @param x {number}
 * @param y {number}
 */
function positionDiv(x, y) {
  centerX.value = Math.floor((x - canvasElementRef.value.getBoundingClientRect().x) / 10);
  centerY.value = Math.floor((y - canvasElementRef.value.getBoundingClientRect().y) / 10);
  if( centerX.value >= allCellX) {
    centerX.value --;
  }
  if (centerY.value >= allCellY) {
    centerY.value --;
  }
}
function positionCanvas(x, y) {
  x =  Math.floor((x - canvasElementRef.value.getBoundingClientRect().x) / 10);
  y =  Math.floor((y - canvasElementRef.value.getBoundingClientRect().y) / 10);
  if( x >= allCellX) {
    x --;
  }
  if (y >= allCellY) {
    y --;
  }

  canvasContext.fillRect(x * 10, y * 10, 10, 10);
  population[`${x * 10},${y * 10}`] = [x * 10, y * 10];
  console.log(population)
  /*
  556/10 = 55,6
  работать как с числами, а не строками.
  */
}

function clearArea() {
  canvasContext.clearRect(0, 0, allCellX * 10, allCellY * 10);
  population = {};

  epochCounter.value = 0;
  // Восстанавливаем клетки
  for (let x = 0; x <= allCellX * 10; x += 10) {
    canvasContext.moveTo(x, 0);
    canvasContext.lineTo(x, allCellX * 10);
  }
  for (let y = 0; y < allCellY * 10; y += 10) {
    canvasContext.moveTo(0, y);
    canvasContext.lineTo(allCellY * 10, y);
  }
  canvasContext.strokeStyle = "silver";
  canvasContext.stroke();
}
function autoStartGame() {
  timerId = setInterval(() => nextStep(), 0);
  timerId;
}
function stopGame() {
  clearInterval(timerId);
  console.log(population);
}
</script>

<template>
  <div class="container text-center">
    <button
      type="button"
      @click="nextStep"
    >
      шаг
    </button>
    <button
      type="button"
      @click="autoStartGame"
    >
      старт
    </button>
    <button 
      type="button"
      @click="stopGame"
    >
      стоп
    </button>
    <button 
      type="button" 
      @click="clearArea"
    >
      сброс
    </button>
    <button
      type="button"
      @click="test"
    >
      тест
    </button>
  </div>
  <div class="container text-center">
    <canvas
      ref="canvasElementRef"
      class="position canvas-style border border-black center"
      height="400px"
      width="400px"
      @mousemove="positionDiv($event.clientX, $event.clientY)"
      @click="positionCanvas($event.clientX, $event.clientY)"
    />
  </div>
  <div class="container text-center">
    Текущее поколение: {{ epochCounter }}
  </div>
</template>
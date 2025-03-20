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
let timerId = null;

let population = {};
let deadCells = [];
let bornCells = {};

onMounted(() => {
  canvasContext = canvasElementRef.value.getContext("2d");
  for (let x = 0; x < 400; x += 10) {
    canvasContext.moveTo(x, 0);
    canvasContext.lineTo(x, 400);
  }
  for (let y = 0; y < 400; y += 10) {
    canvasContext.moveTo(0, y);
    canvasContext.lineTo(400, y);
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
  canvasContext.fillRect(60, 60, 10, 10);
  population["60,60"] = [60, 60];
  canvasContext.fillRect(60, 70, 10, 10);
  population["60,70"] = [60, 70];
  canvasContext.fillRect(60, 80, 10, 10);
  population["60,80"] = [60, 80];
  canvasContext.fillRect(80, 40, 10, 10);
  population["80,40"] = [80, 40];

  canvasContext.fillRect(100, 80, 10, 10);
  population["100,80"] = [100, 80];
  canvasContext.fillRect(110, 80, 10, 10);
  population["110,80"] = [110, 80];
  canvasContext.fillRect(120, 80, 10, 10);
  population["120,80"] = [120, 80];
  canvasContext.fillRect(120, 90, 10, 10);
  population["120,90"] = [120, 90];
  canvasContext.fillRect(120, 100, 10, 10);
  population["120,100"] = [120, 100];
  canvasContext.fillRect(110, 100, 10, 10);
  population["110,100"] = [110, 100];
  canvasContext.fillRect(100, 100, 10, 10);
  population["100,100"] = [100, 100];
  canvasContext.fillRect(100, 90, 10, 10);
  population["100,90"] = [100, 90];

  canvasContext.fillRect(30, 30, 10, 10);
  population["30,30"] = [30, 30];
  canvasContext.fillRect(40, 40, 10, 10);
  population["40,40"] = [40, 40];
  canvasContext.fillRect(40, 50, 10, 10);
  population["40,50"] = [40, 50];
  canvasContext.fillRect(30, 50, 10, 10);
  population["30,50"] = [30, 50];
  canvasContext.fillRect(20, 50, 10, 10);
  population["20,50"] = [20, 50];

  canvasContext.fillRect(0, 0, 10, 10);
  population["0,0"] = [0, 0];
  canvasContext.fillRect(10, 0, 10, 10);
  population["10,0"] = [10, 0];
  canvasContext.fillRect(20, 0, 10, 10);
  population["20,0"] = [20, 0];
  canvasContext.fillRect(0, 390, 10, 10);
  population["0,390"] = [0, 390];

  //console.log("популяция", population);
};
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
  let aliveCell = -1;
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
    aliveCell += 1; // подумать как переименовать что бы было понятно.
    if (identifyNeighbors[key] != undefined) {
      livingNeighbor += 1;

      //console.log("координаты и сосед", livingNeighbor, aliveCell);
    }
    if (identifyNeighbors[key] === undefined) {
      // нужно решить убивать клетки, которые вышли за поле или же переносить их на противоположную сторону.
      // Перенос клетки на противоположную сторону.
      // if(neighboringCell[aliveCell][0] < 0) {
      //   birthCell(neighboringCell[aliveCell][0] + 400, neighboringCell[aliveCell][1]);
      // } else if (neighboringCell[aliveCell][0] > 400) {
      //   birthCell(neighboringCell[aliveCell][0] - 400, neighboringCell[aliveCell][1]);
      // } else if(neighboringCell[aliveCell][1] < 0) {
      //   birthCell(neighboringCell[aliveCell][0], neighboringCell[aliveCell][1] + 400);
      // } else if(neighboringCell[aliveCell][1] > 400) {
      //   birthCell(neighboringCell[aliveCell][0], neighboringCell[aliveCell][1] - 400);
      // } else {
      //   birthCell(neighboringCell[aliveCell][0], neighboringCell[aliveCell][1]);
      // }
      birthCell(neighboringCell[aliveCell][0], neighboringCell[aliveCell][1]);

      // console.log(
      //   " смотрим что передаст",
      //   x,
      //   y,
      //   neighboringCell[aliveCell][0],
      //   neighboringCell[aliveCell][1]
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
};



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
};

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
  for (let x = 0; x < 400; x += 10) {
    canvasContext.moveTo(x, 0);
    canvasContext.lineTo(x, 400);
  }
  for (let y = 0; y < 400; y += 10) {
    canvasContext.moveTo(0, y);
    canvasContext.lineTo(400, y);
  }
  canvasContext.strokeStyle = "silver";
  canvasContext.stroke();
  //console.log(bornCells, deadCells, population);
}
/**
 * Рисуем живие клетки в поле.
 * @param x {number}
 * @param y {number}
 */
function positionDiv(x, y) {
  centerX.value = x;
  centerY.value = y;
}
function positionCanvas(x, y) {
  x = x - canvasElementRef.value.getBoundingClientRect().x;
  y = y - canvasElementRef.value.getBoundingClientRect().y;
  let resultX = "";
  let resultY = "";
  let lineX = String(x);
  let lineY = String(y);
  for (let i = 0; i < lineX.length - 1; i++) {
    resultX = resultX + lineX[i];
  }
  resultX = Number(resultX + "0");
  for (let i = 0; i < lineY.length - 1; i++) {
    resultY = resultY + lineY[i];
  }
  resultY = Number(resultY + "0");

  canvasContext.fillRect(resultX, resultY, 10, 10);
  population[`${resultX},${resultY}`] = [resultX, resultY];
  /*
  556/10 = 55,6
  работать как с числами, а не строками.
  */
}

function clearArea() {
  canvasContext.clearRect(0, 0, 400, 400);
  population = {};

  // Восстанавливаем клетки
  for (let x = 0; x < 400; x += 10) {
    canvasContext.moveTo(x, 0);
    canvasContext.lineTo(x, 400);
  }
  for (let y = 0; y < 400; y += 10) {
    canvasContext.moveTo(0, y);
    canvasContext.lineTo(400, y);
  }
  canvasContext.strokeStyle = "silver";
  canvasContext.stroke();
};
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
    <div>Информация</div>
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
    {{ centerX }} {{ centerY }}
  </div>
</template>

<style>

</style>

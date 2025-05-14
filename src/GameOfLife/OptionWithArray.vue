<script setup>
import { ref, onMounted, watch } from "vue";


const props = defineProps({
  cellCountX: {
    type: Number,
    default: 40,
  },
  cellCountY: {
    type: Number,
    default: 40,
  },
})




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
let epochCounter = ref(0);
let timerId = null;





// три параметра. Один это кол-во клеток(кол-во клеток по оси X и Y), третий размер клетки в px,
let allCellX = ref(props.cellCountX);
let allCellY = ref(props.cellCountY);
const cellSize = 10;


let testX = ref(0);


let indexY = 0;
let indexX = 0;

let population = [];
let deadCells = [];
let bornCells = [];

//watch смотрим.
watch([() => props.cellCountX, () => props.cellCountY], () => {
  drawGrid(props.cellCountX, props.cellCountY);
});
onMounted(() => {

  canvasContext = canvasElementRef.value.getContext("2d");
  testX.value = props.cellCountX / 10;

  drawGrid(props.cellCountX, props.cellCountY);
  // ToDo посмотреть другие способы не через циклы. Или оставить один цикл.
  //Тут надо передавать кол-во клеток, а не размер поля
  for (let i = 0; i < allCellY.value; i++) {
    indexY = i;
    population.push([]);
    for (let i = 0; i < allCellX.value; i++) {
      indexX = i;
      population[indexY].push(0);
    }
    console.log(population, indexY, indexX, "параметры из родителя", testX.value);
  }

  //Пробрасываем параметры от родителя.
});

/**
 * Разметка сетки.
 */
function drawGrid (cellCountX, cellCountY) {

  const rightBorder = cellCountX * cellSize;
  const bottomBorder = cellCountY * cellSize;

  for (let i = 0; i <= cellCountX; i++) {
    let x = i * cellSize;
    canvasContext.moveTo(x, 0);
    canvasContext.lineTo(x, bottomBorder)
  }
  for (let i = 0; i < cellCountY; i++) {
    let y =  i * cellSize;
    canvasContext.moveTo(0, y);
    canvasContext.lineTo(rightBorder, y);
  }
  canvasContext.strokeStyle = "silver";
  canvasContext.stroke();

  console.log("drawGrid", cellCountX, cellCountY, rightBorder, bottomBorder);
};

// вызвать отдельно популяцию, по которой канвас уже нарисует все. В отдельной функции.
function test() {
  console.log(allCellX.value, allCellY.value);
  canvasContext
  // Массив живых клеток для тестирования.
  let addLivingCell = [
    [6, 6],
    [7, 6],
    [8, 6],
    [4, 8],
    [8, 10],
    [8, 11],
    [8, 12],
    [9, 12],
    [10, 12],
    [10, 11],
    [10, 10],
    [9, 10],
    [3, 3],
    [4, 4],
    [5, 4],
    [5, 3],
    [5, 2],
    [0, 0],
    [0, 1],
    [0, 2],
    [39, 0],
  ]
  indexY = 0;
  //Добавляем живие клетки в массив. addLivingCell переименовать, должно нач с сущ.
  for (let key in addLivingCell) {

    population[addLivingCell[key][0]][addLivingCell[key][1]] = 1;
  }
  // Рисуем живые клетки из массива. убрать лишнее.
  for (let i = 0; i < population.length; i++) {
    indexY = i;
    population[i].forEach((item, index) => {
      if (item == 1) {
        canvasContext.fillRect(index * 10, indexY * 10, 10, 10);
      }
    });
  }

  console.log("проверим параметры", testX.value, allCellX.value, allCellY.value);
}

/**
 * Следующий шаг эволюции.
 */
function nextStep() {
  for (let y = 0; y < population.length; y++) {
    for(let x = 0; x < population[y].length; x++) {
      if (population[y][x] == 1) {
        checkingNeighbors(y, x);
      }
    }
  }
  epochCounter.value++;
  cellEvolution();
}
/**
 * Проверяет сколько соседей есть у живой клетки.
 * @param x {number}
 * @param y {number}
 */
function checkingNeighbors(y, x) {
  let livingNeighbor = 0;
  let coordinateStep = -1;
  
  const coordinate = [
    [y - 1, x - 1],
    [y - 1, x],
    [y - 1, x + 1],
    [y, x + 1],
    [y + 1, x + 1],
    [y + 1, x],
    [y + 1, x - 1],
    [y, x - 1],
  ];
  //если выдавать ноль, то он будет проверять отрицательные значения. А этого допускать нельзя!
  const neighboringCell = [
    y > 0 && x > 0 ? population[y-1][x-1] : -1,
    y > 0 ? population[y-1][x] : -1,
    y > 0 && x < allCellX.value - 1 ? population[y-1][x+1] : -1,
    y > 0 && x < allCellX.value - 1 ? population[y][x+1] : -1,
    y < allCellY.value - 1 && x < allCellX.value ? population[y+1][x+1] : -1,
    y < allCellY.value - 1 ? population[y+1][x] : -1,
    y < allCellY.value - 1 && x > 0 ? population[y+1][x-1] : -1,
    x > 0 ? population[y][x-1] : -1,
  ];

  for (let key in neighboringCell) {
    coordinateStep++
    
    if (neighboringCell[key] == 1) {
      livingNeighbor++
    } else if(neighboringCell[key] == 0) {

      //отправляет пустую клетку на проверку рождения.
      birthCell(coordinate[coordinateStep][0], coordinate[coordinateStep][1]);
    }
  }
  if(livingNeighbor < 2 || livingNeighbor > 3) {
    deadCells.push([y, x])
  }
}

/**
 * Проверяем родится ли новая клетка.
 * @param x {number}
 * @param y {number}
 */
function birthCell(y, x) {

  let livingNeighbor = 0;
  const neighboringCell = [
    y > 0 && x > 0 ? population[y-1][x-1] : -1,
    y > 0 ? population[y-1][x] : -1,
    y > 0 && x < allCellX.value - 1 ? population[y-1][x+1] : -1,
    y > 0 && x < allCellX.value - 1 ? population[y][x+1] : -1,
    y < allCellY.value - 1 && x < allCellX.value ? population[y+1][x+1] : -1,
    y < allCellY.value - 1 ? population[y+1][x] : -1,
    y < allCellY.value - 1 && x > 0 ? population[y+1][x-1] : -1,
    x > 0 ? population[y][x-1] : -1,
  ];
  // перебор соседей.
  for (let key in neighboringCell) {

    if(neighboringCell[key] == 1) {
      livingNeighbor++
    }
  }

  if(livingNeighbor == 3) {
    bornCells.push([y, x]);
  }
}

/**
 * отрисовка следующего поколения.
 */
function cellEvolution() {
  for (let key in deadCells) {
    canvasContext.clearRect(deadCells[key][1] * 10, deadCells[key][0] * 10, 10, 10);
   
    population[deadCells[key][0]].splice(deadCells[key][1], 1, 0)
  }

  for (let key in bornCells) {
    population[bornCells[key][0]].splice(bornCells[key][1], 1, 1)
    canvasContext.fillRect(bornCells[key][1] * 10 , bornCells[key][0] * 10, 10, 10);
  }
  bornCells = [];
  deadCells = [];

  // Восстанавливаем клетки. Цвет меняется потому что разметка становится сверху?
  drawGrid(props.cellCountX, props.cellCountY);
}
/**
 * координаты мыши в поле элемента.
 * @param x {number}
 * @param y {number}
 */
function positionDiv(x, y) {
  centerX.value = Math.floor((x - canvasElementRef.value.getBoundingClientRect().x));
  centerY.value = Math.floor((y - canvasElementRef.value.getBoundingClientRect().y));
  if( centerX.value >= allCellX.value) {
    centerX.value--;
  }
  if (centerY.value >= allCellY.value) {
    centerY.value--;
  }
}
//Рисуем живые клетки в поле.
function positionCanvas(x, y) {
  console.log(x, y, "сравнение", x - canvasElementRef.value.getBoundingClientRect().x, y - canvasElementRef.value.getBoundingClientRect().y)
  x = Math.floor((x - canvasElementRef.value.getBoundingClientRect().x) / 10);
  y = Math.floor((y - canvasElementRef.value.getBoundingClientRect().y) / 10);
  if( x >= allCellX.value) {
    x--;
  }
  if (y >= allCellY.value) {
    y--;
  }
  

  canvasContext.fillRect(x * 10, y * 10, 10, 10);
  population[y].splice(x, 1, 1)
}

function clearArea() {
  canvasContext.clearRect(0, 0, props.cellCountX * cellSize, props.cellCountY * cellSize);
  //переписываем массив клеток.
  allCellX.value = 400 / 10;
  allCellY.value = 400 / 10;
  population = [];
  for (let i = 0; i < allCellY.value; i++) {
    indexY = i;
    population.push([]);
    for (let i = 0; i < allCellX.value; i++) {
      indexX = i;
      population[indexY].push(0);
      console.log(population)
    }
  }
  epochCounter.value = 0;
  // Восстанавливаем клетки
  drawGrid(props.cellCountX, props.cellCountY);
};

function autoStartGame() {
  timerId = setInterval(() => nextStep(), 500);
  timerId;
};
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
    <button 
      @click="drawGrid
        (props.cellCountX, props.cellCountY)"
    >
      drawGrid
    </button>
  </div>
  <div class="container text-center">
    <canvas
      ref="canvasElementRef"
      class="canvas-size"
      :height="`${cellCountY * cellSize}px`"
      :width="`${cellCountX * cellSize}px`"
      
      @mousemove="positionDiv($event.clientX, $event.clientY)"
      @click="positionCanvas($event.clientX, $event.clientY)"
    />
  </div>
  <div class="container text-center">
    Текущее поколение: {{ epochCounter }} размер {{ cellCountX }} {{ cellCountY }} {{ centerX }} {{ centerY }}
  </div>
</template>

<style>
.canvas-size {
  border: 1px solid black;
}
</style>
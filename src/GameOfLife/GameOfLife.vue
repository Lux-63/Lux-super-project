<script setup>
import { ref, onMounted, reactive } from "vue";

let centerX = ref(0);
let centerY = ref(0);
const canvasElementRef = ref(null);
let canvasContext = null;

let coordinateCanvas = ref(0);
const canvasSize = 400;

const population = ref({
  "10,10": 1,
  "10,20": 2,
  "10,30": 3,
});

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

function LivingCell() {
  console.log("шаг")
};

function test() {
  // let a = 0;
  // let b = 0;
  // for (a; a <= canvasSize; a = a + 10) {
  //   console.log(a);
  //   canvasContext.fillRect(a, 10, 5, 5);
  // };
  canvasContext.fillRect(10, 10, 10, 10);
  canvasContext.fillRect(10, 20, 10, 10);
  canvasContext.fillRect(10, 30, 10, 10);
  canvasContext.fillRect(60, 20, 10, 10);

  

  /*
    400

      . . . . .
      . ж . . .
      . ж н ж .
      . . р . .
      . . . . .
    */
};

function positionDiv(x, y) {
  centerX.value = x;
  centerY.value = y;
};
</script>

<template>
  <div class="container text-center">
    <div>Информация</div>
    <button type="button" @click="LivingCell">старт</button>
    <button type="button">стоп</button>
    <button type="button">сброс</button>
    <button type="button" @click="test">тест</button>
  </div>
  <div class="container text-center">
    <canvas ref="canvasElementRef" class="position canvas-style border border-black center" height="400px" width="400px" @mousemove="positionDiv($event.clientX, $event.clientY)"> </canvas>
  </div>
  <div class="container text-center">{{ centerX }} {{ centerY }}</div>
</template>

<style>
.position11 {
  position: fixed;
}
</style>

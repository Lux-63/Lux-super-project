<script setup>
import { ref } from "vue";
import PageDescription from "../components/PageDescription.vue";

const targetDiv = ref("null");
let centerX = ref(0);
let centerY = ref(0);
let text = ref("");

function positionDiv(x, y) {
  targetDiv.value.style.left = x - 10 + "px";
  targetDiv.value.style.top = y - 80 + "px";
  centerX.value = x;
  centerY.value = y;
}

function divClickElem() {
  targetDiv.value.className = "div-reactive";
  console.log(targetDiv.value);
  text.value = "Я изменился";
  setTimeout(() => {
    text.value = "";
    targetDiv.value.className = "div-reactive-hidden";
  }, 2000);
  console.log("Click");
}
</script>

<template>
  <PageDescription>
    Различные тесты
  </PageDescription>
  <div class="row">
    <div class="col-4 mx-auto">
      <div>
        <h2 class="Contur">Координаты {{ centerX }} : {{ centerY }}</h2>
      </div>
    </div>
  </div>
  <br />
  <div class="row-2">
    <div class="col">
       <!-- <p class="fs-4 mx-auto text-center">Нажмите на черный квадрат, чтобы увидеть реакцию</p>
       <p class="fs-5 mx-auto text-center">При клике на квадрат появится надпись "Я изменился" и пропадет через 2 секунды</p>
       <p class="fs-5 mx-auto text-center">При наведении мыши на квадрат координаты будут отображаться вверху страницы</p> -->
      <div
        class="box mx-auto"
        @click="divClickElem($event.clientX, $event.clientY)"
        @mousemove="positionDiv($event.clientX, $event.clientY)"
      >
        <div ref="targetDiv" class="div-reactive-hidden">
          {{ text }}
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.box {
  height: 500px;
  width: 800px;
  /* top: 80px;
  left: 30px; */
  border: 3px solid black;
}
</style>

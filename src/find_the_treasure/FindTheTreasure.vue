<script setup>
import { ref } from "vue";

const coordinateX = ref(null);
const coordinateY = ref(null);
//Всплывающая подскзказка.
const targetDiv = ref("null");
let centerX = ref(0);
let centerY = ref(0);
const infoText = ref("");
const divInfoText = ref("");

const settingsGame = ref({
  width: 600,
  height: 500,
  map: document.querySelector(".js_map"),
  clicks: 0,
});

let target = {
  x: getRandomNumber(settingsGame.value.width),
  y: getRandomNumber(settingsGame.value.height),
};

function getRandomNumber(size) {
  return Math.floor(Math.random() * size);
}

function worksProcess(event) {
  settingsGame.value.clicks++;

  coordinateX.value = event.offsetX;
  coordinateY.value = event.offsetY;
  let distance = getDistance(event.offsetX, event.offsetY);
  targetDiv.value.className = "div-reactive";
  setTimeout(() => {
    divInfoText.value = "";
    targetDiv.value.className = "div-reactive-hidden";
  }, 4000);

  if (distance < 8) {
    alert(
      "Клад найден! Сделано кликов: " +
        settingsGame.value.clicks +
        " и мы перепрятали клад."
    );
    infoText.value = "Попробуй найти!";
    settingsGame.value.clicks = 0;
    target.x = target.x = getRandomNumber(settingsGame.value.width);
    target.y = target.x = getRandomNumber(settingsGame.value.width);
  } else if (distance < 10) {
    divInfoText.value = "Обожжешься!";
    infoText.value = "Обожжешься!";
  } else if (distance < 20) {
    divInfoText.value = "Очень горячо!";
    infoText.value = "Очень горячо!";
  } else if (distance < 40) {
    divInfoText.value = "Горячо!";
    infoText.value = "Очень горячо!";
  } else if (distance < 80) {
    divInfoText.value = "Тепло!";
    infoText.value = "Тепло!";
  } else if (distance < 160) {
    divInfoText.value = "Холодно!";
    infoText.value = "Холодно!";
  } else if (distance < 320) {
    divInfoText.value = "Очень холодно!";
    infoText.value = "Очень холодно!";
  } else {
    divInfoText.value = "Замерзнешь!";
    infoText.value = "Замерзнешь!";
  }
}

function getDistance(x, y) {
  let diffX = x - target.x;
  let diffY = y - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
}

function positionDiv(x, y) {
  targetDiv.value.style.left = x + 30 + "px";
  targetDiv.value.style.top = y + 10 + "px";
  centerX.value = x;
  centerY.value = y;
}
</script>

<template>
  <div class="container text-center">
    <div class="col">
      <h1>Найди клад</h1>
      <div>
        <p class="js_distance">
          {{ infoText }}
        </p>
        <img
          class="js_map"
          width="600"
          height="500"
          src="./map01.jpg"
          @click="worksProcess($event)"
          @mousemove="positionDiv($event.clientX, $event.clientY)"
        />
      </div>
    </div>
  </div>
  <div>
    <div>
      <div ref="targetDiv" class="div-reactive-hidden">
        {{ divInfoText }}
      </div>
    </div>
  </div>
</template>

<style>
.div-reactive {
  position: absolute;
  top: 0px;
  left: 0px;
  border: 3px solid black;
  background-color: white;
}
.div-reactive-hidden {
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>

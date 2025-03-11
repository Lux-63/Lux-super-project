<script setup>
import { ref } from "vue";

const targetDiv = ref("null");
let centerX = ref(0);
let centerY = ref(0);
let text = ref("");

function positionDiv(x, y) {
  //targetDiv.value.style.position = "absolute";
  targetDiv.value.style.left = x - 10 + "px";
  targetDiv.value.style.top = y - 80 + "px";
    centerX.value = x;
    centerY.value = y;
  }

  function divClickElem () {
    targetDiv.value.className = "div-reactive"
  console.log(targetDiv.value);
    text.value = "Я изменился";
    setTimeout(() => {
      text.value = "";
      targetDiv.value.className = "div-reactive-hidden"
    }, 2000);
    console.log("Click");
  };


   
</script>

<template>
  <div>
    <div>
      <h2 class="Contur">
        тык {{ centerX }} : {{ centerY }}
      </h2>
    </div>
    <div
      class="box"
      @click="divClickElem($event.clientX, $event.clientY)"
      @mousemove="positionDiv($event.clientX, $event.clientY)"
    >
      <div
        ref="targetDiv"
        class="div-reactive-hidden"
      >
        {{ text }}
      </div>
    </div>
  </div>
</template>

<style>
.box {
  position: fixed;
  height: 500px;
  width: 500px;
  top: 80px;
  left: 30px;
  border: 3px solid black;
}
.div-reactive {
  position: absolute;
  top: 0px;
  left: 0px;
  border: 3px solid black;
}
.div-reactive-hidden {
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>

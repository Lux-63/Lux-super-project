<script setup>
import { ref } from "vue";
import Calculator from "./calculator/Calculator.vue";
import GallowsGame from "./gallows_game/GallowsGame.vue";
import findTheTreasure from "./find the treasure/find the treasure.vue";

const message = ref("Привет");
const isViewCalculator = ref(false);
const isViewGallows = ref(false);
const isViewFindTheTreasure = ref(false)

function showCalculator() {
  isViewCalculator.value = true;
  isViewGallows.value = false;
  isViewFindTheTreasure.value = false;
}

function showGallows() {
  isViewGallows.value = true;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = false;
}
function showFindTheTreasure() {
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = true;
}
</script>

<template>
  <header>
    <div>
      <button type="button" @click="showCalculator">Калькулятор</button>
      <button type="button" @click="showGallows">виселица</button>
      <button type="button" @click="showFindTheTreasure">найди клад</button>
    </div>
  </header>

  <main>
    <Calculator v-if="isViewCalculator" />
    <GallowsGame v-if="isViewGallows" />
    <findTheTreasure v-if="isViewFindTheTreasure" />
  </main>
</template>

<style>

</style>

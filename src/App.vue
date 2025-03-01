<script setup>
import { ref } from "vue";
import Calculator from "./calculator/Calculator.vue";
import GallowsGame from "./gallows_game/GallowsGame.vue";
import FindTheTreasure from "./find_the_treasure/FindTheTreasure.vue";

const message = ref("Привет");
const isViewCalculator = ref(false);
const isViewGallows = ref(false);
const isViewFindTheTreasure = ref(false);
const calculator = ref(null);
const gallows = ref(null);
const findTheTreasure = ref(null);

function showCalculator() {
  isViewCalculator.value = true;
  isViewGallows.value = false;
  isViewFindTheTreasure.value = false;
  calculator.value.className += " active";
  gallows.value.className = "col btn btn-outline-secondary"
  findTheTreasure.value.className = "col btn btn-outline-secondary"
};
function showGallows() {
  isViewGallows.value = true;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = false;
  gallows.value.className += " active";
  calculator.value.className = "col btn btn-outline-secondary";
  findTheTreasure.value.className = "col btn btn-outline-secondary";
};
function showFindTheTreasure() {
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = true;
  findTheTreasure.value.className += " active";
  calculator.value.className = "col btn btn-outline-secondary";
  gallows.value.className = "col btn btn-outline-secondary";
};

</script>

<template>
  <header>
    <div>
      <button type="button" class="col btn btn-outline-secondary" @click="showCalculator" ref="calculator">Калькулятор</button>
      <button type="button" class="col btn btn-outline-secondary" @click="showGallows" ref="gallows">виселица</button>
      <button type="button" class="col btn btn-outline-secondary" @click="showFindTheTreasure" ref="findTheTreasure">найди клад</button>
    </div>

  </header>

  <main>
    <Calculator v-if="isViewCalculator" />
    <GallowsGame v-if="isViewGallows" />
    <FindTheTreasure v-if="isViewFindTheTreasure" />
  </main>
</template>

<style>

</style>

<script setup>
import { ref } from "vue";
import SimpleCalculator from "./calculator/SimpleCalculator.vue";
import GallowsGame from "./gallows_game/GallowsGame.vue";
import FindTheTreasure from "./find_the_treasure/FindTheTreasure.vue";
import GameOfLife from "./GameOfLife/GameOfLife.vue";

import VariousTesting from "./VariousTesting/VariousTesting.vue";

const isViewCalculator = ref(false);
const isViewGallows = ref(false);
const isViewFindTheTreasure = ref(false);
const isViewGameOfLife = ref(false);

const isViewTesting = ref(false);

// ref ссылки на элемент
const calculatorLink = ref(null);
const gallowsLink = ref(null);
const findTheTreasureLink = ref(null);
const gameOfLifeLink = ref(null);

const testLink = ref(null);


function showCalculator() {
  isViewCalculator.value = true;
  isViewGallows.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false

  isViewTesting.value = false;

  calculatorLink.value.className += " active";
  gallowsLink.value.className = "col btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col btn btn-outline-secondary";

  testLink.value.className = "col btn btn-outline-secondary";
};
function showGallows() {
  isViewCalculator.value = false;
  isViewGallows.value = true;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false

  isViewTesting.value = false;

  gallowsLink.value.className += " active";
  calculatorLink.value.className = "col btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col btn btn-outline-secondary";

  testLink.value.className = "col btn btn-outline-secondary";
};
function showFindTheTreasure() {
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = true;
  isViewGameOfLife.value = false

  isViewTesting.value = false;

  findTheTreasureLink.value.className += " active";
  calculatorLink.value.className = "col btn btn-outline-secondary";
  gallowsLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col btn btn-outline-secondary";

  testLink.value.className = "col btn btn-outline-secondary";

};

function showGameOfLife() {
  isViewCalculator.value = false;
  isViewGallows.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = true

  isViewTesting.value = false;

  calculatorLink.value.className = "col btn btn-outline-secondary";
  gallowsLink.value.className = "col btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className += " active";

  testLink.value.className = "col btn btn-outline-secondary";
}

function showTesting() {
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false

  isViewTesting.value = true;

  
  calculatorLink.value.className = "col btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col btn btn-outline-secondary";
  gallowsLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col btn btn-outline-secondary";

  testLink.value.className += " active";
};

</script>

<template>
  <header>
    <div>
      <button
        ref="calculatorLink"
        type="button"
        class="col btn btn-outline-secondary"
        @click="showCalculator"
      >
        калькулятор
      </button>
      <button
        ref="gallowsLink"
        type="button"
        class="col btn btn-outline-secondary"
        @click="showGallows"
      >
        виселица
      </button>
      <button
        ref="findTheTreasureLink"
        type="button"
        class="col btn btn-outline-secondary"
        @click="showFindTheTreasure"
      >
        найди клад
      </button>
      <button
        ref="gameOfLifeLink"
        type="button"
        class="col btn btn-outline-secondary"
        @click="showGameOfLife"
      >
        игра в жизнь
      </button>
      <button
        ref="testLink"
        type="button"
        class="col btn btn-outline-secondary"
        @click="showTesting"
      >
        тестовое
      </button>
    </div>
  </header>

  <main>
    <SimpleCalculator v-if="isViewCalculator" />
    <GallowsGame v-if="isViewGallows" />
    <FindTheTreasure v-if="isViewFindTheTreasure" />
    <VariousTesting v-if="isViewTesting" />
    <GameOfLife v-if="isViewGameOfLife" />
  </main>
</template>

<style>

</style>

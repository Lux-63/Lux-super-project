<script setup>
import { ref } from "vue";
import PersonalPage from "./PersonalPage.vue";
import SimpleCalculator from "./calculator/SimpleCalculator.vue";
import GallowsGame from "./gallows_game/GallowsGame.vue";
import FindTheTreasure from "./find_the_treasure/FindTheTreasure.vue";
import GameOfLife from "./GameOfLife/GameOfLife.vue";
import PageDogs from "./page_dogs/PageDogs.vue";

import VariousTesting from "./VariousTesting/VariousTesting.vue";

const isViewPersonalPage = ref(true);
const isViewCalculator = ref(false);
const isViewGallows = ref(false);
const isViewFindTheTreasure = ref(false);
const isViewGameOfLife = ref(false);
const isViewPageDogs = ref(false);

const isViewTesting = ref(false);

// ref ссылки на элемент
const personalPageLink = ref(null);
const calculatorLink = ref(null);
const gallowsLink = ref(null);
const findTheTreasureLink = ref(null);
const gameOfLifeLink = ref(null);
const pageDogs = ref(null)

const testLink = ref(null);

function showPersonalPage() {
  isViewPersonalPage.value = true;
  isViewCalculator.value = false;
  isViewGallows.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className += " active";
  calculatorLink.value.className += "col-1 btn btn-outline-secondary";
  gallowsLink.value.className = "col-1 btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col-1 btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col-1 btn btn-outline-secondary";
  isViewPageDogs.value.className = "col-1 btn btn-outline-secondary";

  testLink.value.className = "col-1 btn btn-outline-secondary";
}

function showCalculator() {
  isViewPersonalPage.value = false;
  isViewCalculator.value = true;
  isViewGallows.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "col-1 btn btn-outline-secondary";
  calculatorLink.value.className += " active";
  gallowsLink.value.className = "col-1 btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col-1 btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col-1 btn btn-outline-secondary";
  isViewPageDogs.value.className = "col-1 btn btn-outline-secondary";

  testLink.value.className = "col-1 btn btn-outline-secondary";
}
function showGallows() {
  isViewPersonalPage.value = false;
  isViewCalculator.value = false;
  isViewGallows.value = true;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "col-1 btn btn-outline-secondary";
  gallowsLink.value.className += " active";
  calculatorLink.value.className = "col-1 btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col-1 btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col-1 btn btn-outline-secondary";
  isViewPageDogs.value.className = "col-1 btn btn-outline-secondary";

  testLink.value.className = "col-1 btn btn-outline-secondary";
}
function showFindTheTreasure() {
  isViewPersonalPage.value = false;
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = true;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "col-1 btn btn-outline-secondary";
  findTheTreasureLink.value.className += " active";
  calculatorLink.value.className = "col-1 btn btn-outline-secondary";
  gallowsLink.value.className = "col-1 btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col-1 btn btn-outline-secondary";
  isViewPageDogs.value.className = "col-1 btn btn-outline-secondary";

  testLink.value.className = "col-1 btn btn-outline-secondary";
}

function showGameOfLife() {
  isViewPersonalPage.value = false;
  isViewCalculator.value = false;
  isViewGallows.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = true;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "col-1 btn btn-outline-secondary";
  calculatorLink.value.className = "col-1 btn btn-outline-secondary";
  gallowsLink.value.className = "col-1 btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col-1 btn btn-outline-secondary";
  gameOfLifeLink.value.className += " active";
  isViewPageDogs.value.className = "col-1 btn btn-outline-secondary";

  testLink.value.className = "col-1 btn btn-outline-secondary";
}

function showPageDogs() {
  isViewPersonalPage.value = false;
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = true;

  isViewTesting.value = false;

  personalPageLink.value.className = "col-1 btn btn-outline-secondary";
  calculatorLink.value.className = "col-1 btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col-1 btn btn-outline-secondary";
  gallowsLink.value.className = "col-1 btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col-1 btn btn-outline-secondary";
  isViewPageDogs.value.className += " active";

  testLink.value.className = "col-1 btn btn-outline-secondary";
}

function showTesting() {
  isViewPersonalPage.value = false;
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = true;

  personalPageLink.value.className = "col-1 btn btn-outline-secondary";
  calculatorLink.value.className = "col-1 btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col-1 btn btn-outline-secondary";
  gallowsLink.value.className = "col-1 btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col-1 btn btn-outline-secondary";
  isViewPageDogs.value.className = "col-1 btn btn-outline-secondary";

  testLink.value.className += " active";
}
</script>

<template>
  <header class="container">
    <div class="row g-4 justify-content-center">
        <button
          ref="personalPageLink"
          type="button"
          class="col-2 btn btn-outline-secondary active"
          @click="showPersonalPage"
        >
          в начало
        </button>
        <button
          ref="calculatorLink"
          type="button"
          class="col-2 btn btn-outline-secondary"
          @click="showCalculator"
        >
          калькулятор
        </button>
        <button
          ref="gallowsLink"
          type="button"
          class="col-2 btn btn-outline-secondary"
          @click="showGallows"
        >
          виселица
        </button>
        <button
          ref="findTheTreasureLink"
          type="button"
          class="col-2 btn btn-outline-secondary"
          @click="showFindTheTreasure"
        >
          найди клад
        </button>
        <button
          ref="gameOfLifeLink"
          type="button"
          class="col-2 btn btn-outline-secondary"
          @click="showGameOfLife"
        >
          игра в жизнь
        </button>
        <button
          ref="pageDogs"
          type="button"
          class="col-2 btn btn-outline-secondary"
          @click="showPageDogs"
        >
          Собаки
        </button>
        <button
          ref="testLink"
          type="button"
          class="col-2 btn btn-outline-secondary"
          @click="showTesting"
        >
          тестовое
        </button>
    </div>
  </header>

  <main class="">
    <div class="row justify-content-center">
      <div class="col-4">
        <div class="position-absolute">
          <PersonalPage v-if="isViewPersonalPage" />
          <SimpleCalculator v-if="isViewCalculator" />
          <GallowsGame v-if="isViewGallows" />
          <FindTheTreasure v-if="isViewFindTheTreasure" />
          <VariousTesting v-if="isViewTesting" />
          <GameOfLife v-if="isViewGameOfLife" />
          <pageDogs v-if="isViewPageDogs" />
        </div>
      </div>
    </div>
  </main>
</template>

<style></style>

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
const pageDogsLink = ref(null);

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
  calculatorLink.value.className = "col btn btn-outline-secondary";
  gallowsLink.value.className = "col btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col btn btn-outline-secondary";
  pageDogsLink.value.className = "col btn btn-outline-secondary";

  testLink.value.className = "col btn btn-outline-secondary";
}

function showCalculator() {
  isViewPersonalPage.value = false;
  isViewCalculator.value = true;
  isViewGallows.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "col btn btn-outline-secondary";
  calculatorLink.value.className += " active";
  gallowsLink.value.className = "col btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col btn btn-outline-secondary";
  pageDogsLink.value.className = "col btn btn-outline-secondary";

  testLink.value.className = "col btn btn-outline-secondary";
}
function showGallows() {
  isViewPersonalPage.value = false;
  isViewCalculator.value = false;
  isViewGallows.value = true;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "col btn btn-outline-secondary";
  gallowsLink.value.className += " active";
  calculatorLink.value.className = "col btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col btn btn-outline-secondary";
  pageDogsLink.value.className = "col btn btn-outline-secondary";

  testLink.value.className = "col btn btn-outline-secondary";
}
function showFindTheTreasure() {
  isViewPersonalPage.value = false;
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = true;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "col btn btn-outline-secondary";
  findTheTreasureLink.value.className += " active";
  calculatorLink.value.className = "col btn btn-outline-secondary";
  gallowsLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col btn btn-outline-secondary";
  pageDogsLink.value.className = "col btn btn-outline-secondary";

  testLink.value.className = "col btn btn-outline-secondary";
}

function showGameOfLife() {
  isViewPersonalPage.value = false;
  isViewCalculator.value = false;
  isViewGallows.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = true;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "col btn btn-outline-secondary";
  calculatorLink.value.className = "col btn btn-outline-secondary";
  gallowsLink.value.className = "col btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className += " active";
  pageDogsLink.value.className = "col btn btn-outline-secondary";

  testLink.value.className = "col btn btn-outline-secondary";
}

function showPageDogs() {
  isViewPersonalPage.value = false;
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = true;

  isViewTesting.value = false;

  personalPageLink.value.className = "col btn btn-outline-secondary";
  calculatorLink.value.className = "col btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col btn btn-outline-secondary";
  gallowsLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col btn btn-outline-secondary";
  pageDogsLink.value.className += " active";

  testLink.value.className = "col btn btn-outline-secondary";
}

function showTesting() {
  isViewPersonalPage.value = false;
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = true;

  personalPageLink.value.className = "col btn btn-outline-secondary";
  calculatorLink.value.className = "col btn btn-outline-secondary";
  findTheTreasureLink.value.className = "col btn btn-outline-secondary";
  gallowsLink.value.className = "col btn btn-outline-secondary";
  gameOfLifeLink.value.className = "col btn btn-outline-secondary";
  pageDogsLink.value.className = "col btn btn-outline-secondary";

  testLink.value.className += " active";
}
</script>

<template>

  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
  <div class="container-fluid">
    <!-- почитать -->
     <!-- сделать активными ссылки -->
    <a class="navbar-brand" href="#">Top navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav me-auto mb-2 mb-md-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" @click="showPersonalPage()">В начало</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="showCalculator()">Калькулятор</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="showGallows()">Виселица</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="showFindTheTreasure()">Найди клад</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="showGameOfLife()">Игра в жизнь</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="showPageDogs()">Собаки</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="showTesting()">Тестовое</a>
        </li>
      </ul>
    </div>
  </div>
</nav>



  <main class="container border border-5">
      <div class="row text-center">
        <div class="col">
            <PersonalPage v-if="isViewPersonalPage" />
            <SimpleCalculator v-if="isViewCalculator" />
            <GallowsGame v-if="isViewGallows" />
            <FindTheTreasure v-if="isViewFindTheTreasure" />
            <VariousTesting v-if="isViewTesting" />
            <GameOfLife v-if="isViewGameOfLife" />
            <PageDogs v-if="isViewPageDogs" />
          </div>
        </div>
  </main>
</template>

<style></style>

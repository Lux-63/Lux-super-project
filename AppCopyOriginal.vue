<script setup>
import { ref } from "vue";

import PersonalPage from "./personal_page/PersonalPage.vue";
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
  calculatorLink.value.className = "nav-link";
  gallowsLink.value.className = "nav-link";
  findTheTreasureLink.value.className = "nav-link";
  gameOfLifeLink.value.className = "nav-link";
  pageDogsLink.value.className = "nav-link";

  testLink.value.className = "nav-link";
}

function showCalculator() {
  isViewPersonalPage.value = false;
  isViewCalculator.value = true;
  isViewGallows.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "nav-link";
  calculatorLink.value.className += " active";
  gallowsLink.value.className = "nav-link";
  findTheTreasureLink.value.className = "nav-link";
  gameOfLifeLink.value.className = "nav-link";
  pageDogsLink.value.className = "nav-link";

  testLink.value.className = "nav-link";
}
function showGallows() {
  isViewPersonalPage.value = false;
  isViewCalculator.value = false;
  isViewGallows.value = true;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "nav-link";
  gallowsLink.value.className += " active";
  calculatorLink.value.className = "nav-link";
  findTheTreasureLink.value.className = "nav-link";
  gameOfLifeLink.value.className = "nav-link";
  pageDogsLink.value.className = "nav-link";

  testLink.value.className = "nav-link";
}
function showFindTheTreasure() {
  isViewPersonalPage.value = false;
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = true;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "nav-link";
  findTheTreasureLink.value.className += " active";
  calculatorLink.value.className = "nav-link";
  gallowsLink.value.className = "nav-link";
  gameOfLifeLink.value.className = "nav-link";
  pageDogsLink.value.className = "nav-link";

  testLink.value.className = "nav-link";
}

function showGameOfLife() {
  isViewPersonalPage.value = false;
  isViewCalculator.value = false;
  isViewGallows.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = true;
  isViewPageDogs.value = false;

  isViewTesting.value = false;

  personalPageLink.value.className = "nav-link";
  calculatorLink.value.className = "nav-link";
  gallowsLink.value.className = "nav-link";
  findTheTreasureLink.value.className = "nav-link";
  gameOfLifeLink.value.className += " active";
  pageDogsLink.value.className = "nav-link";

  testLink.value.className = "nav-link";
}

function showPageDogs() {
  isViewPersonalPage.value = false;
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = true;

  isViewTesting.value = false;

  personalPageLink.value.className = "nav-link";
  calculatorLink.value.className = "nav-link";
  findTheTreasureLink.value.className = "nav-link";
  gallowsLink.value.className = "nav-link";
  gameOfLifeLink.value.className = "nav-link";
  pageDogsLink.value.className += " active";

  testLink.value.className = "nav-link";
}

function showTesting() {
  isViewPersonalPage.value = false;
  isViewGallows.value = false;
  isViewCalculator.value = false;
  isViewFindTheTreasure.value = false;
  isViewGameOfLife.value = false;
  isViewPageDogs.value = false;

  isViewTesting.value = true;

  // personalPageLink.value.className = "nav-link";
  // calculatorLink.value.className = "nav-link";
  // findTheTreasureLink.value.className = "nav-link";
  // gallowsLink.value.className = "nav-link";
  // gameOfLifeLink.value.className = "nav-link";
  // pageDogsLink.value.className = "nav-link";

  // testLink.value.className += " active";

  console.log("showTesting",);
}
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

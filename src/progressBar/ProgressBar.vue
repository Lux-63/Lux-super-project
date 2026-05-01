<script setup>
import CircumFerence from "./CircumFerence.vue";
import DashBoard from "./DashBoard.vue";
import LineBoard from "./LineBoard.vue";

import PageDescription from "../components/PageDescription.vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const isViewCircleBoard = ref(true);
const isViewDashBoard = ref(false);
const isViewLineBoard = ref(false);

function showCircleboard() {
  isViewCircleBoard.value = true;
  isViewDashBoard.value = false;
  isViewLineBoard.value = false;
}
function showDashBoard() {
  isViewCircleBoard.value = false;
  isViewDashBoard.value = true;
  isViewLineBoard.value = false;
}
function showLineBoard() {
  isViewCircleBoard.value = false;
  isViewDashBoard.value = false;
  isViewLineBoard.value = true;
}
</script>

<template>
  <PageDescription>
    Различные варианты реализации прогресс бара. В проекте представлены
    круговой, линейный и Dashboard.
  </PageDescription>

  <p />
  <header>
    <!-- <button @click="showCircleboard">circleboard</button>
    <button @click="showDashBoard">dashBoard</button>
    <button @click="showLineBoard">lineBoard</button> -->
  </header>
  <p />
  <main>
    <!-- <CircumFerence v-if="isViewCircleBoard" />
    <DashBoard v-if="isViewDashBoard" />
    <LineBoard v-if="isViewLineBoard" /> -->

    <div class="row">
      <div class="col-4 mx-auto text-center">
        <router-link
          to="/progress-bar/circle"
          class="btn btn-outline-secondary mx-2"
          >Круговой</router-link
        >
        <router-link
          to="/progress-bar/dash-board"
          class="btn btn-outline-secondary mx-2"
          >Dashboard</router-link
        >
        <router-link
          to="/progress-bar/line-board"
          class="btn btn-outline-secondary mx-2"
          >Линейный</router-link
        >

        <!-- <RouterLink
          :to="{ path: '/page-dogs/carusel', query: route.query }"
          class="btn btn-outline-secondary mx-2"
          >Карусель</RouterLink
        >
        <RouterLink
          :to="{ path: '/page-dogs/gallery', query: route.query }"
          class="btn btn-outline-secondary mx-2"
          >Галерея</RouterLink
        > -->
      </div>
    </div>
    <div class="row">
      <div class="col-4 mx-auto text-center">
        <router-view />
      </div>
    </div>
  </main>
</template>

<style></style>

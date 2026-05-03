<script setup>
import PageDescription from "../components/PageDescription.vue";
</script>

<template>
  <PageDescription>
    Различные варианты реализации прогресс бара. В проекте представлены
    круговой, линейный и Dashboard.
  </PageDescription>

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
    </div>
  </div>
  <div class="container">
      <router-view />
  </div>
</template>

<style></style>

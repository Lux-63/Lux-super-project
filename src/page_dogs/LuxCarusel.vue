<script setup>
import { onMounted, onUpdated } from "vue";

const props = defineProps({
  currentDogsLinks: {
    type: Array,
    default: () => [],
  },
});

onUpdated(() => {
  if(document.querySelector(".carousel-item")) {
    document.querySelector(".carousel-item").className += " active";
  }
});

onMounted(() => {
  if(document.querySelector(".carousel-item")) {
    document.querySelector(".carousel-item").className += " active";
  }
});
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div
        id="carouselExampleAutoplaying"
        class="carousel carousel-dark slide"
        data-bs-ride="false"
      >
        <div class="carousel-inner">
          <div
            v-for="linkDog in currentDogsLinks"
            :key="linkDog"
            class="carousel-item"
          >
            <img :src="linkDog" class="d-block w-60 center" alt="..." style="height: 300px; width: 340px;"/>
          </div>
        </div>

        <button
          class="carousel-control-prev btn btn-dark btn-outline-dark"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          @keyup.left="buttonEvent"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Предыдущий</span>
        </button>
        <button
          class="carousel-control-next btn btn-outline-dark"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          @keyup.right="buttonEvent"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  </div>
</template>

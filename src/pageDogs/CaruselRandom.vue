<script setup>
import { ref, reactive, onMounted, watch } from "vue";

const props = defineProps({
  currentDogsLinks: {
    type: Array,
    default: () => [],
  },
});

let currentsDogsLinks = reactive([]);
let breedSelect = ref("random");

watch(
  () => props.currentDogsLinks,
  (newVal) => {
    currentsDogsLinks.splice(0, currentsDogsLinks.length, ...newVal);
  },
  { immediate: true, deep: true },
);

onMounted(() => {
  const myCarousel = document.querySelector("#carouselExampleAutoplaying");

  myCarousel.addEventListener("slide.bs.carousel", (event) => {
    console.log(
      "смотрим значение ивента",
      event.to,
      event.direction,
      currentsDogsLinks.length - 1,
    );
    if (event.to == currentsDogsLinks.length - 1 && event.direction == "left") {
      console.log("в конец");
      // loadOneRandomImage(false);
    } else if (event.to == 0 && event.direction == "right") {
      console.log("в начало");
      // loadOneRandomImage(true);
    }
  });
});

function buttonEvent() {}
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
            v-for="linkDog in currentsDogsLinks"
            :key="linkDog"
            class="carousel-item"
          >
            <img :src="linkDog" class="d-block w-60 center" alt="..." />
          </div>
        </div>

        <button
          class="carousel-control-prev btn btn-dark btn-outline-dark"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          @keyup.left="buttonEvent"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true" />
          <span class="visually-hidden">Предыдущий</span>
        </button>
        <button
          class="carousel-control-next btn btn-outline-dark"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          @keyup.right="buttonEvent"
        >
          <span class="carousel-control-next-icon" aria-hidden="true" />
          <span class="visually-hidden">Следующий</span>
        </button>
      </div>
    </div>
  </div>
</template>

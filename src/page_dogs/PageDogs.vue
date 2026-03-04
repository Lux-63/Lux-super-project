<script setup>
import { reactive, onMounted } from "vue";

const nextDogsLinks = reactive([]);

onMounted(() => {
  loadImageApi();
});

/**
 * Синхронный вариант выгрузки данных из API и загрузки карусели.
 * В данном случае, карусель будет загружаться после получения первого изображения из API.
 */
function loadCaruselData() {
  let imageElement = null;
  for (let i = 0; i < 3; i++) {
    imageElement = fetch("https://dog.ceo/api/breeds/image/random")
      .then((result) => {
        console.log("3");
        return result.json();
      })
      .then((result) => nextDogsLinks.push(result.message))
      .then(() => console.log("4"));
  }
  imageElement.then(
    () => (document.querySelector(".carousel-item").className += " active"),
  );
}

/**
 * Асинхронный вариант выгрузки данных из API и загрузки карусели.
 * В данном случае, карусель будет загружаться после получения всех данных из API.
 */
async function loadImageApi() {
  let imageElement = null;
  for (let i = 0; i < 3; i++) {
    imageElement = await fetch("https://dog.ceo/api/breeds/image/random");
    let result = await imageElement.json();
    nextDogsLinks.push(result.message);
  }
  document.querySelector(".carousel-item").className += " active";
}

function test() {}
</script>

<template>
  <div>
    <button @click="test">test</button>

    <div v-for="linkDog in nextDogsLinks">
      {{ linkDog }}
    </div>

    <div
      id="carouselExampleAutoplaying"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div v-for="linkDog in nextDogsLinks" class="carousel-item">
          <img :src="linkDog" class="d-block w-70" alt="..." />
        </div>
      </div>

      <button
        class="carousel-control-prev btn btn-dark btn-outline-dark"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Предыдущий</span>
      </button>
      <button
        class="carousel-control-next btn btn-outline-dark"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Следующий</span>
      </button>
    </div>
  </div>
</template>

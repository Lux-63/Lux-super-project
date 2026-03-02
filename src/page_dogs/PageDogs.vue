<script setup>
import { reactive, onMounted } from "vue";

const nextDogsLinks = reactive([]);
// let stepVariable = [srcOne.value, srcTwo.value, srcThree.value];

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
  console.log("1")
  let imageElement = null;
  for (let i = 0; i < 3; i++) {
    imageElement = fetch("https://dog.ceo/api/breeds/image/random")
      .then((result) => {
        console.log("2")
        return result.json();
      })
      .then((result) => nextDogsLinks.push(result.message)), console.log("3")
  }
  await imageElement.then(
    () => (document.querySelector(".carousel-item").className += " active"), console.log("4")
  );
};

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
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div v-for="linkDog in nextDogsLinks" class="carousel-item">
          <img :src="linkDog" class="d-block w-50" alt="..." />
        </div>
      </div>

      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Предыдущий</span>
      </button>
      <button
        class="carousel-control-next"
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

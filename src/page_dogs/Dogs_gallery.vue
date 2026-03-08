<script setup>
import { reactive, onMounted } from "vue";
let currentsDogsLinks = reactive([]);
onMounted(() => {
  console.log(
    "loading carusel",
    document.querySelectorAll(".carousel-item").length,
  );
  loadImageApi();
});

/**
 * Синхронный вариант выгрузки данных из API и загрузки карусели.
 * В данном случае, карусель будет загружаться после получения первого изображения из API.
 */
// function loadCaruselData() {
//   let imageElement = null;
//   for (let i = 0; i < 3; i++) {
//     imageElement = fetch("https://dog.ceo/api/breeds/image/random")
//       .then((result) => {
//         console.log("3");
//         return result.json();
//       })
//       .then((result) => currentsDogsLinks.push(result.message))
//       .then(() => console.log("4"));
//   }
//   imageElement.then(
//     () => (document.querySelector(".carousel-item").className += " active"),
//   );
// }

/**
 * Асинхронный вариант выгрузки данных из API и загрузки карусели.
 * В данном случае, карусель будет загружаться после получения всех данных из API.
 */
// async function loadImageApi() {
//   let imageElement = null;
//   for (let i = 0; i < 3; i++) {
//     imageElement = await fetch("https://dog.ceo/api/breeds/image/random");
//     let result = await imageElement.json();
//     currentsDogsLinks.push(result.message);
//   }
//   document.querySelector(".carousel-item").className += " active";
//   console.log("load dogs", currentsDogsLinks)
// }

/**
 * Асинхронный вариант выгрузки данных из API и загрузки карусели.
 * В данном случае, карусель будет загружаться после получения всех данных из API.
 */
async function loadImageApi() {
  let imageElement = null;
  for (let i = 0; i < 3; i++) {
    imageElement = await fetch("https://dog.ceo/api/breeds/image/random");
    let result = await imageElement.json();
    currentsDogsLinks.push(result.message);
  }
  if (document.querySelectorAll(".carousel-item.active").length == 0) {
    // document.querySelector(".carousel-item").className += " active";
    console.log("load dogs", currentsDogsLinks);
  }

  // document.querySelector(".carousel-item").className += " active";
  // console.log("load dogs", currentsDogsLinks)
}

function displayRandomSrc() {
  for (let i = currentsDogsLinks.length; i > 0; i--) {
    currentsDogsLinks.pop();
  }
  console.log(
    "typeof currentsDogsLink:",
    currentsDogsLinks,
    document.querySelectorAll(".carousel-item"),
  );
  loadImageApi();
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div>
        <button @click="displayRandomSrc">случайные изображения</button>
      </div>
    </div>
  </div>
  <div class="container-fluid" style="height: 100%; width: 100%;">
    <div class="row">
      <div class="col-md-4">
        <img
          :src="currentsDogsLinks[0]"
          class="rounded float-start"
          style="height: 100px"
          alt="..."
        />
      </div>
      <div class="col-md-4">
        <img
          :src="currentsDogsLinks[1]"
          class="rounded float-center"
          style="height: 100px"
          alt="..."
        />
      </div>
      <div class="col-md-4">
        <img
          :src="currentsDogsLinks[2]"
          class="rounded float-end"
          style="height: 100px"
          alt="..."
        />
      </div>
      <div>колонка</div>
      <div>колонка</div>
    </div>
  </div>
</template>

<style>
.div {
  height: 10px;
  width: 50;
}
</style>

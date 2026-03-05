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
    document.querySelector(".carousel-item").className += " active";
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
  <div>
    <button @click="displayRandomSrc">случайные изображения</button>
  </div>
  <div >
    <img :src="currentsDogsLinks[0]" class="rounded mx-auto d-block" alt="..." />
  </div>
  <div >
    <img :src="currentsDogsLinks[1]" class="rounded mx-auto d-block" alt="..." />
  </div>
  <div ><img :src="currentsDogsLinks[2]" class="rounded mx-auto d-block" alt="..." /></div>
  <div >колонка</div>
  <div >колонка</div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick, watch } from "vue";

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
  console.log(
    "что пришло от родителя",
     currentsDogsLinks, breedSelect.value
  );
  const myCarousel = document.getElementById("carouselExampleAutoplaying");

  myCarousel.addEventListener("slide.bs.carousel", (event) => {
    console.log(
      "смотрим значение ивента",
      event.to,
      event.direction,
      currentsDogsLinks.length - 1,
    );
    if (event.to == currentsDogsLinks.length - 1 && event.direction == "left") {
      console.log("в конец");
      loadOneRandomImage(false);
    } else if (event.to == 0 && event.direction == "right") {
      console.log("в начало");
      loadOneRandomImage(true);
    }
  });
});

/**
 *
 * @param pushLeft boolean - если true, то изображение будет добавлено в начало массива, иначе - в конец массива.
 */
// async function loadOneBreedImage(pushLeft) {
//   let imageElement = await fetch(
//     `https://dog.ceo/api/breed/${breedSelect.value}/images/random`,
//   );
//   let result = await imageElement.json();
//   console.log("фбв", pushLeft);
//   if (pushLeft == true) {
//     currentsDogsLinks.unshift(result.message);

//     console.log("добавляем в начало", result.message);
//   } else {
//     currentsDogsLinks.push(result.message);
//     console.log("добавляем в конец", result.message);
//   }
// }

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
//     console.log("for", i, document.querySelectorAll(".carousel-item").length);
//   }

//   document.querySelectorAll(".carousel-item")[1].className += " active";
//   console.log("load dogs", currentsDogsLinks);
// }



/**
 * сброс изображений
 */
// function displayRandomSrc() {
//   for (let i = currentsDogsLinks.length; i > 0; i--) {
//     currentsDogsLinks.pop();
//   }
//   console.log(
//     "typeof currentsDogsLink:",
//     currentsDogsLinks,
//     document.querySelectorAll(".carousel-item"),
//   );
//   loadImageApi();
// }
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
          <div v-for="linkDog in currentsDogsLinks" :key="linkDog" class="carousel-item">
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

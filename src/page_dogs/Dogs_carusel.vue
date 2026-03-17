<script setup>
import { ref, reactive, onMounted, nextTick } from "vue";
let currentsDogsLinks = reactive([]);
let breedsList = reactive([]);
let breedSelect = ref("random");

onMounted(() => {
  console.log(
    "loading carusel",
    document.querySelectorAll(".carousel-item").length,
  );
  loadImageApi();
  breedsDogsList();
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
 * из проблем, которые возникли при реализации данной функции - это то, что при добавлении изображения в начало массива, карусель не переключается на новое изображение, а остается на первом изображении. Это связано с тем, что при добавлении изображения в начало массива, индекс текущего изображения не изменяется, и карусель продолжает отображать первое изображение. Для решения данной проблемы, необходимо добавить условие, которое будет проверять, если изображение было добавлено в начало массива, то индекс текущего изображения будет увеличиваться на 1, чтобы карусель переключалась на новое изображение.
 */
async function loadOneRandomImage(pushLeft) {
  if (breedSelect.value != "random") {
    loadOneBreedImage(pushLeft);
    return;
  }
  let imageElement = await fetch("https://dog.ceo/api/breeds/image/random");
  let result = await imageElement.json();
  console.log("фбв", pushLeft);
  // Закоментировал участок с добавлением в начало или в конец. Вероятно проще всего будет делать карусель на 10-20 изображений, и менять весь массив.
  // if (pushLeft == true) {
  //   currentsDogsLinks.unshift(result.message);

  //   console.log("добавляем в начало", result.message);
  // } else {
  //   currentsDogsLinks.push(result.message);
  //   console.log("добавляем в конец", result.message);
  // }
  currentsDogsLinks.push(result.message);
}
/**
 *
 * @param pushLeft boolean - если true, то изображение будет добавлено в начало массива, иначе - в конец массива.
 */
async function loadOneBreedImage(pushLeft) {
  let imageElement = await fetch(
    `https://dog.ceo/api/breed/${breedSelect.value}/images/random`,
  );
  let result = await imageElement.json();
  console.log("фбв", pushLeft);
  if (pushLeft == true) {
    currentsDogsLinks.unshift(result.message);

    console.log("добавляем в начало", result.message);
  } else {
    currentsDogsLinks.push(result.message);
    console.log("добавляем в конец", result.message);
  }
}

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
 * Асинхронный вариант выгрузки данных из API и загрузки карусели.
 */
async function loadImageApi() {
  let imageElement = await fetch("https://dog.ceo/api/breeds/image/random/3");

  let result = await imageElement.json();
  console.log("результат", result.message, currentsDogsLinks);
  currentsDogsLinks.splice(0, currentsDogsLinks.length, ...result.message);
  await nextTick();
  document.querySelectorAll(".carousel-item")[1].className += " active";
  console.log("load dogs", currentsDogsLinks);
}

/**
 * выгрузка изображений по породе собак.
 * @param listDogs string - название породы собак, по которой необходимо выгрузить изображения.
 */
function selectBreedList(listDogs) {
  breedSelect.value = listDogs;
  console.log("выбрали породу", listDogs, breedSelect);
  if (breedSelect.value == "random") {
    loadImageApi();
  } else {
    fetch(`https://dog.ceo/api/breed/${listDogs}/images/random/3`)
      .then((result) => result.json())
      .then((result) => {
        for (let i = 0; i <= result.message.length; i++) {
          currentsDogsLinks.splice(
            0,
            currentsDogsLinks.length,
            ...result.message,
          );
        }
        document.querySelectorAll(".carousel-item")[1].className += " active";
        console.log("список по породе", currentsDogsLinks);
      });
    console.log("переменная породы", breedSelect.value);
  }
}

/**
 * сброс изображений
 */
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

function breedsDogsList() {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((result) => result.json())
    .then((result) => {
      breedsList = Object.keys(result.message);
      breedsList.unshift("random");
      console.log("spisok", breedsList);
    });
}

// необходимо настроить стили и выбрать вариант выпадающих списков.
function buttonEvent() {}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <select class="col-10 btn btn-outline-secondary justify-content-right">
        <option
          v-for="listDogs in breedsList"
          @click="selectBreedList(listDogs)"
        >
          {{ listDogs }}
        </option>
      </select>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row">
      <div
        id="carouselExampleAutoplaying"
        class="carousel carousel-dark slide"
        data-bs-ride="false"
      >
        <div class="carousel-inner">
          <div v-for="linkDog in currentsDogsLinks" class="carousel-item">
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

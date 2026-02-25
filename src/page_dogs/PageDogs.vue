<script setup>
import { ref, onMounted  } from 'vue';
let srcOne = ref("one");
let srcTwo = ref("dva");
let srcThree = ref("tri")
let srcDogLink = "";
const passedDogsLinks = [];
const nextDogsLinks = [];
// let stepVariable = [srcOne.value, srcTwo.value, srcThree.value];

onMounted(() => {
  addDogLink();
  console.log();
})

/**
 * Вытягиваем ссылку на собак по API.
 */
function getDogLink() {
  console.log("getDogLink", typeof srcDogLink)
  let response = fetch("https://dog.ceo/api/breeds/image/random");
  let resolve = response.then(result => result.json());
  resolve.then(result => nextDogsLinks.push(result.message));
  console.log(nextDogsLinks, "getDogLink")
};
/**
 * Закидываем линки в массив.
 */
function addDogLink() {
  let stepVariable = [srcOne, srcTwo, srcThree];
  for(let i = nextDogsLinks.length; i < 3; i++) {
    getDogLink();
    console.log("добавится ли ссылки на собак", srcDogLink, nextDogsLinks);
}
};

/**
 * Отображение линков пользователю. 
 */
function srcDogView() {
  let stepVariable = [srcOne, srcTwo, srcThree];
  // stepVariable[0] = nextDogsLinks[0]
  for(let i = 0; i < 3; i++) {
    stepVariable[i].value = nextDogsLinks[i];
    console.log("smotrim", stepVariable[i], stepVariable)
  };
};
function test() {
  console.log("nachalo", srcOne.value, srcTwo.value, srcThree.value)
  let stepVariable = [srcOne.value, srcTwo.value, srcThree.value]
  // srcDogView()
  console.log("smena link", stepVariable, srcOne.value, srcTwo.value, srcThree.value, nextDogsLinks)
};
</script>

<template>
  <div>
    <button @click="addDogLink">addDogLink</button>
    <button @click="test">test</button>
    <button @click="srcDogView">srcDogView</button>


  <div id="carouselExampleAutoplaying" class="carousel slide " data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="srcOne" class="d-block w-50" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="srcTwo" class="d-block w-50" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="srcThree" class="d-block w-50" alt="...">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Предыдущий</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Следующий</span>
  </button>
</div>
</div>
</template>

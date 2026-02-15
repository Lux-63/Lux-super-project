<script setup>
import { ref, onMounted  } from 'vue';
let srcOne = ref("https://images.dog.ceo/breeds/shiba/shiba-17.jpg");
let srcTwo = ref("https://images.dog.ceo/breeds/terrier-scottish/n02097298_2583.jpg");
let srcThree = ref("https://images.dog.ceo/breeds/sharpei/noel.jpg")
let srcDogLink = "";
const passedDogsLinks = [];
const nextDogsLinks = [];

onMounted(() => {
  console.log();
})

/**
 * вытягиваем ссылку на собак по API.
 */
function getDogLink() {
  console.log("getDogLink", typeof srcDogLink)
  let response = fetch("https://dog.ceo/api/breeds/image/random");
  let resolve = response.then(result => result.json());
  resolve.then(result => nextDogsLinks.push(result.message));
};

function addDogLink() {
  for(let i = nextDogsLinks.length; i < 3; i++) {
    getDogLink();
    
    console.log("добавится ли ссылки на собак", srcDogLink, nextDogsLinks);
}

};
</script>

<template>
  <div>
    <button @click="addDogLink">test</button>



  <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img :src="srcOne" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="srcTwo" class="d-block w-100" alt="...">
    </div>
    <div class="carousel-item">
      <img :src="srcThree" class="d-block w-100" alt="...">
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

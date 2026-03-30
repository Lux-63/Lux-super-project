<script setup>
import { ref, reactive, onMounted, watch, computed } from "vue";
import LuxCarusel from "./LuxCarusel.vue";
import LuxGallery from "./LuxGallery.vue";


const isViewCarusel = ref(true);
const isViewGallery = ref(false);
const caruselLink = ref(null);
const gallerylink = ref(null);

const currentsDogsLinks = reactive([]);
const breedsList = ref([]);
const imageCount = ref(10);
const selectedBreed = ref(null);

watch(selectedBreed, (newVal) => {
  loadBreedImages(newVal, imageCount.value);
});
watch(imageCount, (newVal) => {
  if (selectedBreed.value) {
    loadBreedImages(selectedBreed.value, newVal);
  }
});

onMounted(() => {
  loadBreedsList();
});
/**
 * Показать компонент карусели.
 */
function showCarusel() {
  isViewCarusel.value = true;
  isViewGallery.value = false;

  caruselLink.value.className += " active";
  gallerylink.value.className = "col-4 btn btn-outline-secondary";
  console.log("пород", selectedBreed.value);
}
/**
 * Показать компонент галереи.
 */
function showGallery() {
  isViewCarusel.value = false;
  isViewGallery.value = true;

  gallerylink.value.className += " active";
  caruselLink.value.className = "col-4 btn btn-outline-secondary";
}

// Далее работа с API.

/**
 * выгрузка изображений по породе собак.
 * @param listDogs string.
 */
async function loadBreedsList() {
  let response = await fetch("https://dog.ceo/api/breeds/list/all");
  let result = await response.json();
  breedsList.value = Object.keys(result.message);
  selectedBreed.value = breedsList.value[0];
}

async function loadBreedImages(breedName, count) {
  let response = await fetch(
    `https://dog.ceo/api/breed/${breedName}/images/random/${count}`,
  );
  let result = await response.json();
  currentsDogsLinks.splice(0, currentsDogsLinks.length, ...result.message);
}
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <select
          class="form-select"
          v-model="selectedBreed"
          aria-label="Пример выбора по умолчанию"
        >
          <option selected disabled value="">Откройте это меню выбора</option>
          <option v-for="breedName in breedsList" :value="breedName">
            {{ breedName }}
          </option>
        </select>
      </div>
      <div class="col">
        <select
          class="form-select"
          v-model="imageCount"
          aria-label="Пример выбора по умолчанию"
        >
          <!-- <option selected>Откройте это меню выбора</option> рядом поставить еще один селект, который будет спрашивать кол-во загружаемых изображений.-->
          <option v-for="count in 25" :value="count">
            {{ count }}
          </option>
        </select>
      </div>
    </div>
  </div>

  <div class="container-fluid justify-content-right">
    <div class="row">
      <div class="col">
        <button
          class="col-4 btn btn-outline-secondary active"
          ref="caruselLink"
          @click="showCarusel"
        >
          Карусель
        </button>
        <button
          class="col-4 btn btn-outline-secondary"
          ref="gallerylink"
          @click="showGallery"
        >
          Галерея
        </button>
      </div>
    </div>
  </div>

  <div class="container-fluid">
    <div class="row-2">
      <div class="col justify-content-center">
        <LuxCarusel
          v-show="isViewCarusel"
          :currentDogsLinks="currentsDogsLinks"
        />
        <LuxGallery
          v-show="isViewGallery"
          :currentDogsLinks="currentsDogsLinks"
        />
      </div>
    </div>
  </div>
</template>

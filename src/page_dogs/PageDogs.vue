<script setup>
import { ref, reactive} from "vue";
import Dogs_carusel from "./Dogs_carusel.vue";
import Dogs_gallery from "./Dogs_gallery.vue";

const isViewCarusel = ref(true);
const isViewGallery = ref(false);
const caruselLink = ref(null);
const gallerylink = ref(null);

let currentsDogsLinks = reactive([]);
/**
 * Показать компонент карусели.
 */
function showCarusel() {
  isViewCarusel.value = true;
  isViewGallery.value = false;

  caruselLink.value.className += " active";
  gallerylink.value.className = "col-2 btn btn-outline-secondary";
}
/**
 * Показать компонент галереи.
 */
function showGallery() {
  isViewCarusel.value = false;
  isViewGallery.value = true;

  gallerylink.value.className = "col-2 btn btn-outline-secondary";
  caruselLink.value.className += " active";
}


/**
 * Асинхронный вариант выгрузки данных из API.
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
</script>

<template>
  <div class="container-fluid justify-content-right">
    <div class="row">
      <div class="col">
        <div class="row g-4">
          <button
            class="col-2 btn btn-outline-secondary active justify-content-right"
            ref="caruselLink"
            @click="showCarusel"
          >
            Карусель
          </button>
          <button
            class="col-2 btn btn-outline-secondary justify-content-left"
            ref="gallerylink"
            @click="showGallery"
          >
            Галерея
          </button>
        </div>
        <div class="row justify-content-center">
          <Dogs_carusel v-if="isViewCarusel" />
          <Dogs_gallery v-if="isViewGallery" />
        </div>
      </div>
    </div>
  </div>
</template>

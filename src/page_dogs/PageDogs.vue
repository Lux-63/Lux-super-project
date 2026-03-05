<script setup>
import { ref } from "vue";
import Dogs_carusel from "./Dogs_carusel.vue";
import Dogs_gallery from "./Dogs_gallery.vue";

const isViewCarusel = ref(true);
const isViewGallery = ref(false);

const caruselLink = ref(null);
const gallerylink = ref(null);

function showCarusel() {
  isViewCarusel.value = true;
  isViewGallery.value = false;

  caruselLink.value.className += " active";
  gallerylink.value.className = "col-2 btn btn-outline-secondary";
}

function showGallery() {
  isViewCarusel.value = false;
  isViewGallery.value = true;

  gallerylink.value.className = "col-2 btn btn-outline-secondary";
  caruselLink.value.className += " active";
}
</script>

<template>
  <div class="row g-4">
    <button class="col-2 btn btn-outline-secondary active" ref="caruselLink" @click="showCarusel">Карусель</button>
    <button class="col-2 btn btn-outline-secondary" ref="gallerylink" @click="showGallery">Галерея</button>
  </div>
  <div class="row justify-content-center">
    <Dogs_carusel v-if="isViewCarusel" />
    <Dogs_gallery v-if="isViewGallery" />
  </div>
</template>

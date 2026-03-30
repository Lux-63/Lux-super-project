<script setup>
import { ref } from "vue";
import ModalWindow from "@/ModalWindowComponent/ModalWindow.vue";
const props = defineProps({
  currentDogsLinks: {
    type: Array,
    default: () => [],
  },
});
const myModal = ref(null);

// Добавить модальное окно с открытием полноразмерного изображения при клике на картинку в галерее.
// const elem = ref(null);
function wievModal(link, elem) {
  console.log("клик по картинке", link, elem);
  myModal.value.openModal(link, elem);
}


// // Добавить модальное окно с открытием полноразмерного изображения при клике на картинку в галерее.
// // const elem = ref(null);
// function showModal(link, elem) {
//   console.log("клик по картинке", link, elem);
//   myModal.value.openModal(link);
// }
// Бутстрап.
</script>

<template>
  <div class="container-fluid" style="height: 100%; width: 100%">
    <div class="row">
      <div class="col-md-4" v-for="(link, index) in currentDogsLinks" :key="index">
        <img
          :src="link"
          class="rounded float-start"
          style="height: 100px"
          alt="..."

          :index="index"
          @click="wievModal(link, index)"
        />


        <!-- <img
          :src="link"
          class="rounded float-start"
          style="height: 100px; cursor: pointer;"
          alt="..."
          @click="showModal(link, index)"
        /> -->
      </div>
    </div>
  </div>
  <div class="container-fluid" style="height: 100%; width: 100%">
    <div class="row">
      <div class="col-md-4">
        <ModalWindow ref="myModal" />
      </div>
    </div>
  </div>
</template>

<style>

.div {
  height: 10px;
  width: 50;
}
</style>

<script setup>
import { ref } from "vue";
import ModalWindow from "../modalWindowComponent/ModalWindow.vue";
defineProps({
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
  <div class="row">
    <div class="col">
      <div class="album py-5 bg-body-tertiary">
        <div class="row row-cols-1 row-cols-sm-3 row-cols-md-5 g-3">
          <div
            v-for="(link, index) in currentDogsLinks"
            :key="index"
            class="col"
          >
            <div class="card shadow-sm">
              <img
                :src="link"
                class="rounded float-start"
                alt="..."
                :index="index"
                @click="wievModal(link, index)"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-4">
        <ModalWindow ref="myModal">
          <template #header>
            12345
            <h1 id="exampleModalLabel" class="modal-title fs-5">
              диалоговое окно
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
            />
          </template>
        </ModalWindow>
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

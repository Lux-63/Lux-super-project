<script setup>
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";

const emit = defineEmits(["changed-form"]);
const simpleModal = ref(null);
const text = ref("");

const imageLink = ref("");
const imageIndex = ref(null);

const props = defineProps({
  currentDogsLinks: {
    type: Array,
    default: () => [],
  },
});

// const imageUrl = ref("");

let myModal = null;

onMounted(() => {
  myModal = new Modal(simpleModal.value);
  console.log(myModal);
});

function openModal(link, index) {
  imageLink.value = link;
  imageIndex.value = index;
  myModal.show();
  console.log("Open modal for", link, index);
}



// function openModal(link = "") {
//   imageUrl.value = link;
//   myModal.show();
//   console.log("Open modal for", link);
// }


defineExpose({
  openModal,
});



function test() {
  console.log("test button clicked, current image index:", imageIndex.value, imageIndex.value + 1);
  // Здесь можно добавить логику для смены изображения, например:
  // imageIndex.value = (imageIndex.value + 1) % totalImages; // totalImages - общее количество изображений
  // imageLink.value = getImageLinkByIndex(imageIndex.value); // Функция для получения ссылки по индексу
  // imageIndex.value =  
}
</script>

<template>
  <!-- Модальное окно -->
   <div
    id="exampleModal"
    ref="simpleModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 
            id="exampleModalLabel" 
            class="modal-title fs-5"
          >
            диалоговое окно
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Закрыть"
          />
        </div>
        <div class="modal-body">
          <div>
            тело
          </div>
          <div v-if="imageLink">
            <img :src="imageLink" class="rounded float-start" alt="Большое изображение" />
          </div>
          <!-- <div v-if="imageUrl">
            <img :src="imageUrl" class="img-fluid" alt="Большое изображение" />
          </div>
          <div v-else>
            Изображение не выбрано
          </div> -->
        </div>
        <div class="modal-footer">
          ноги
          <button
            type="button"
            class="btn btn-secondary" @click="test">NEXT IMG</button>
          <!-- <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Закрыть
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

<script setup>
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";

const emit = defineEmits(["changed-form"]);
const simpleModal = ref(null);
const text = ref("");
let myModal = null;

onMounted(() => {
  myModal = new Modal(simpleModal.value);
  console.log(myModal);
});

function openModal() {
  myModal.show();
};

function saveChanges() {
  emit("changed-form", text.value);
  myModal.hide();
};

defineExpose({
  openModal,
});
</script>

<template>

<!-- Модальное окно -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="simpleModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Заголовок модального окна</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
      </div>
      <div class="modal-body">
        <input v-model="text" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
        <button type="button" class="btn btn-primary" @click="saveChanges">Сохранить изменения</button>
      </div>
    </div>
  </div>
</div>
</template>

<style>

</style>

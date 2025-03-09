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
      <div class="modal-body">Сообщение какое нибудь, да.
      </div>
    </div>
  </div>
</div>
</template>

<style>

</style>

<script setup>
import { ref, reactive } from "vue";
import ModalWindow from "./ModalWindow.vue";



const viewLetterElem = ref("hello");
const inputs = ref([]);
const myModal = ref(null);

const isKeyboardOff = ref(false);

function showModal() {
    myModal.value.openModal();
};

function receiveNewData(param) {
    
    console.log(param);
};
</script>
<template>
  <div>{{ viewLetterElem }}</div>
  <div>
    <button ref="inputs" :disabled="isKeyboardOff" class="js-letter-btn col btn btn-outline-secondary" @click="viewLetterElem = '1'">1</button>
    <button ref="inputs" :disabled="isKeyboardOff" class="js-letter-btn col btn btn-outline-secondary" @click="viewLetterElem = '2'">2</button>
    <button ref="inputs" :disabled="isKeyboardOff" class="js-letter-btn col btn btn-outline-secondary" @click="viewLetterElem = '3'">3</button>
    <button ref="inputs" :disabled="isKeyboardOff" class="js-letter-btn col btn btn-outline-secondary" @click="viewLetterElem = '4'">4</button>
    <button ref="inputs" :disabled="isKeyboardOff" class="js-letter-btn col btn btn-outline-secondary" @click="viewLetterElem = '5'">5</button>
    <button ref="inputs" :disabled="isKeyboardOff" class="js-letter-btn col btn btn-outline-secondary" @click="viewLetterElem = '6'">6</button>
    <button ref="inputs" :disabled="isKeyboardOff" class="js-letter-btn col btn btn-outline-secondary" @click="viewLetterElem = '7'">7</button>
    <button ref="inputs" :disabled="isKeyboardOff" class="js-letter-btn col btn btn-outline-secondary" @click="viewLetterElem = '8'">8</button>
    <button ref="inputs" :disabled="isKeyboardOff" class="js-letter-btn col btn btn-outline-secondary" @click="viewLetterElem = '9'">9</button>
    <button ref="inputs" :disabled="isKeyboardOff" class="js-letter-btn col btn btn-outline-secondary" @click="viewLetterElem = '0'">0</button>
  </div>

  <div class="page">
    <button сlass="col btn btn-outline-secondary" @click="showModal()">Показать модальное окно</button>

    <ModalWindow  ref="myModal" @changed-form="receiveNewData"></ModalWindow>
  </div>
</template>

<style></style>

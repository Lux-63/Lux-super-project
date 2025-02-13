<script setup>

import { ref, reactive } from "vue";

const viewLetterElem = ref("hello");
const inputs = ref([]);

const isKeyboardOff = ref(false);

function test() {
    isKeyboardOff.value = !isKeyboardOff.value;
    console.log();

}

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
    <button @click="test()">тест</button>

</template>

<style>
</style>
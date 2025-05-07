<script setup>
import { ref } from "vue";
import OptionWithObject from "./OptionWithObject.vue";
import OptionWithArray from "./OptionWithArray.vue";

/*
сделать рисование в отдельной функции вообще.
*/


const isOptionWithObject = ref(false);
const isOptionWithArray = ref(true);
let fieldWidth = ref(400);
let fieldHeight = ref(400);
let epochCounter = ref(0)
//let y = ref(400);

function showOptionWithObject () {
  isOptionWithObject.value = true;
  isOptionWithArray.value = false;
};
function showOptionWithArray () {
  isOptionWithObject.value = false;
  isOptionWithArray.value = true;
};

function fieldSize() {
  fieldWidth.value = Number(prompt("ширина поля", 400));
  fieldHeight.value = Number(prompt("высота поля", 400))
  console.log(fieldWidth.value, fieldHeight.value)
}
// provide("fieldWidth", fieldWidth.value)
</script>

<template>
  <div class="container text-center">
    <div>
      <select v-bind="showOptionWithArray">
        <option
          @click="showOptionWithArray"
        >
          вариант с массивом
        </option>
        <option 
          @click="showOptionWithObject"
        >
          вариант с объектом
        </option>
      </select>
      <button
        type="button"
        @click="fieldSize"
      >
        размер поля
      </button>
    </div>

    <div>
      <OptionWithObject v-if="isOptionWithObject" />
      <OptionWithArray 
        v-if="isOptionWithArray" 
        :field-width="fieldWidth"
        :field-height="fieldHeight"
        :epoch-counter="epochCounter"
      />
    </div>
  </div>
</template>

<style>
</style>

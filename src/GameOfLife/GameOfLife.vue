<script setup>
import { ref } from "vue";
import OptionWithObject from "./OptionWithObject.vue";
import OptionWithArray from "./OptionWithArray.vue";

/*
сделать рисование в отдельной функции вообще.
*/

const isOptionWithObject = ref(false);
const isOptionWithArray = ref(true);
let cellCountX = ref(40);
let cellCountY = ref(40);

function showOptionWithObject() {
  isOptionWithObject.value = true;
  isOptionWithArray.value = false;
}
function showOptionWithArray() {
  isOptionWithObject.value = false;
  isOptionWithArray.value = true;
}

function fieldSize() {
  cellCountX.value = Number(prompt("количество клеток в ширину", 40));
  cellCountY.value = Number(prompt("количество клеток в высоту", 40));
  
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
        <option @click="showOptionWithObject">
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
      <OptionWithObject 
        v-if="isOptionWithObject" 
        :cell-count-x="cellCountX"
        :cell-count-y="cellCountY"
      />
      <OptionWithArray
        v-if="isOptionWithArray"
        :cell-count-x="cellCountX"
        :cell-count-y="cellCountY"
      />
    </div>
  </div>
</template>

<style></style>

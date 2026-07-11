<script setup>
import { ref } from "vue";
import OptionWithObject from "./OptionWithObject.vue";
import OptionWithArray from "./OptionWithArray.vue";
import PageDescription from "../components/PageDescription.vue";

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
</script>

<template>
  <PageDescription>
    <b>"Игра в жизнь"</b> - это клеточный автомат, который моделирует эволюцию
    клеток на двумерной сетке. Реализована в двух вариантах - с использованием
    <b>массивов</b> и <b>объектов</b>, с использованием <b>Canvas</b>. Игра была
    написана для практики работы с массивами и логикой, а так же для отработки
    навыков оптимизации производительности при работе с большим количеством
    данных. Изначально писался на чистом JavaScript.'
  </PageDescription>

  <div class="row justify-content-center">
    <div class="col-2 text-center">
      <select class="btn btn-outline-secondary" v-bind="showOptionWithArray">
        <option @click="showOptionWithArray">вариант с массивом</option>
        <option @click="showOptionWithObject">вариант с объектом</option>
      </select>
    </div>
    <div class="col-2 text-center">
      <button
        class="btn btn-outline-secondary"
        type="button"
        @click="fieldSize"
      >
        размер поля
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col mx-auto text-center">
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

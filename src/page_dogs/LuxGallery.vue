<script setup>
const props = defineProps({
  currentDogsLinks: {
    type: Array,
    default: () => [],
  },
});

// Добавить модальное окно с открытием полноразмерного изображения при клике на картинку в галерее.
// Бутстрап.
</script>

<template>
  <div class="container-fluid" style="height: 100%; width: 100%">
    <div class="row">
      <div class="col-md-4" v-for="link in currentDogsLinks">
        <img
          :src="link"
          class="rounded float-start"
          style="height: 100px"
          alt="..."
        />
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

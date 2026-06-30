<script setup>
import { ref, reactive, onMounted, watch } from "vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
import PageDescription from "../components/PageDescription.vue";
import { useDogImageStore } from "@/store/dogImage.js";

const dogStore = useDogImageStore();
const router = useRouter();
const route = useRoute();

const currentsDogsLinks = reactive([]);
const breedsList = ref([]);
const imageCount = ref(10);
const selectedBreed = ref(null);

watch(selectedBreed, (newVal) => {
  router.push({
    path: route.path,
    query: { breed: newVal, count: imageCount.value },
  });
});
watch(imageCount, (newVal) => {
  if (selectedBreed.value) {
    router.push({
      path: route.path,
      query: { breed: selectedBreed.value, count: newVal },
    });
  }
  console.log("pinia-atack", dogStore.currentsDogsLinks);
});

onBeforeRouteUpdate((to, from) => {
  if (
    from.query.breed !== to.query.breed ||
    from.query.count !== to.query.count
  ) {
    loadBreedImages(to.query.breed, to.query.count);
  }
});

onMounted(() => {
  loadBreedsList();
});

// Далее работа с API.

/**
 * выгрузка списка пород собак.
 * @param listDogs string.
 */
async function loadBreedsList() {
    let response = await fetch("https://dog.ceo/api/breeds/list/all");
    let result = await response.json()
    breedsList.value = Object.keys(result.message)

  if (route.query.count && route.query.breed) {
    selectedBreed.value = route.query.breed;
    imageCount.value = route.query.count;
    loadBreedImages(route.query.breed, route.query.count);
  } else {
    imageCount.value = 10;
    selectedBreed.value = breedsList.value[0];
  }
}
    

async function loadBreedImages(breedName, count) {
  let response = await fetch(
    `https://dog.ceo/api/breed/${breedName}/images/random/${count}`,
  );
  let result = await response.json()
  .catch(err => console.log("извините не удалось загрузить дог цео"))

  dogStore.currentsDogsLinks.splice(0, dogStore.currentsDogsLinks.length, ...result.message);
  console.log()
}
</script>

<template>
  <PageDescription>
    <b>Работа с API</b> и отображение данных. На странице отображаются
    фотографии собак, полученные с помощью API. Реализована пагинация для
    удобства просмотра большого количества фотографий. Варианты отображения
    данных - карусель и галерея. Компонент карусели был написан с нуля, а
    галерея была реализована с использованием <b>Bootstrap</b>. Реализована
    возможность фильтрации фотографий по породам собак и количесвтву
    отображаемых фотографий.
  </PageDescription>

  <div class="row">
    <p class="fs-4 mx-auto text-center">
      Выберите породу собак и количество изображений:
    </p>
    <div class="col-4 mx-auto text-center">
      <select
        v-model="selectedBreed"
        class="form-select"
        aria-label="Пример выбора по умолчанию"
      >
        <option selected disabled value="">Откройте это меню выбора</option>
        <option
          v-for="breedName in breedsList"
          :key="breedName"
          :value="breedName"
        >
          {{ breedName }}
        </option>
      </select>
    </div>
    <div class="col-4 mx-auto text-center">
      <select
        v-model="imageCount"
        class="form-select"
        aria-label="Пример выбора по умолчанию"
      >
        <!-- <option selected>Откройте это меню выбора</option> рядом поставить еще один селект, который будет спрашивать кол-во загружаемых изображений.-->
        <option v-for="count in 25" :key="count" :value="count">
          {{ count }}
        </option>
      </select>
    </div>
  </div>

  <br />

  <div class="row">
    <div class="col-4 mx-auto text-center">
      <RouterLink
        :to="{ path: '/page-dogs/carusel', query: route.query }"
        class="btn btn-outline-secondary mx-2"
      >
        Карусель
      </RouterLink>
      <RouterLink
        :to="{ path: '/page-dogs/gallery', query: route.query }"
        class="btn btn-outline-secondary mx-2"
      >
        Галерея
      </RouterLink>
    </div>
  </div>
  <br />
  <div class="container">
    <!-- <div class="row">
      <div class="col"> -->
    <RouterView v-slot="{ Component }">
      <component :is="Component" :current-dogs-links="dogStore.currentsDogsLinks" />
    </RouterView>
    <!-- </div>
    </div> -->
  </div>
</template>

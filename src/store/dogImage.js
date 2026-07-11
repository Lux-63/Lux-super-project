import { defineStore } from "pinia";
import { ref, reactive } from "vue";
import { useRouter, useRoute, onBeforeRouteUpdate } from "vue-router";
const route = useRoute();

export const useDogImageStore = defineStore("imagePinia", () => {
  const dogImageUrl = ref("");
  const currentsDogsLinks = reactive([]);
  const breedsList = ref([]);
  const imageCount = ref(10);
  const selectedBreed = ref(null);

  const breedName = ref("");
  const count = ref(10);

  /**
 * выгрузка списка пород собак.
 * @param listDogs string.
 */
  async function getLoadBreeds() {
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
  console.log("проверяем в роуте загрузку", breedsList.value);
};

/**
 * 
 * @param {string} breedName 
 * @param {number} count 
 */
async function loadBreedImages() {
  let response = await fetch(
    `https://dog.ceo/api/breed/${breedName.value}/images/random/${count.value}`,
  );
  let result = await response.json()
  .catch(err => console.log("извините не удалось загрузить дог цео"))

  dogStore.currentsDogsLinks.splice(0, dogStore.currentsDogsLinks.length, ...result.message);
  console.log()
}




  const getDogImageUrl = async () => {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await response.json();
    dogImageUrl.value = data.message;
  } catch (error) {
    console.error("Error fetching dog image:", error);
  }
};

  function setDogImageUrl(url) {
    dogImageUrl.value = url;
    console.log("Dog image URL updated:", dogImageUrl.value);
  }

  return {
    dogImageUrl,
    setDogImageUrl,
    currentsDogsLinks,
    breedsList,
    imageCount,
    selectedBreed,
    breedName,
    count,

    getLoadBreeds,
    getDogImageUrl,
  };
});

// export const useDogImageStore = defineStore("dogImageStore", () => {
//   const dogImageUrl = ref("");

// const getDogImageUrl = async () => {
//   try {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     const data = await response.json();
//     dogImageUrl.value = data.message;
//   } catch (error) {
//     console.error("Error fetching dog image:", error);
//   }
// };

//   return {
//     dogImageUrl,
//   };
// });

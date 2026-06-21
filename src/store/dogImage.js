import defineStore from "pinia";
import { ref } from "vue";

export const useDogImageStore = defineStore("dogImage", () => {
  const dogImageUrl = ref("");

  function setDogImageUrl(url) {
    dogImageUrl.value = url;
  }

  return {
    dogImageUrl,
    setDogImageUrl,
  };
});
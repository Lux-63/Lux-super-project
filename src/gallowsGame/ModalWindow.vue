<script setup>
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";
import { useParametrsStore } from "../store/gallowsGame";

const store = useParametrsStore();

const emit = defineEmits(["changed-form"]);
const simpleModal = ref(null);
const text = ref("");
const isGameEasy = ref(store.isGameEasy);
const selectedCategory = ref(store.selectedCategory);
let myModal = null;

onMounted(() => {
  myModal = new Modal(simpleModal.value);
});

function openModal() {
  // Переинициализируем значения из store при открытии модального окна
  // text.value = "";
  // isGameEasy.value = store.isGameEasy;
  // selectedCategory.value = store.selectedCategory;
  myModal.show();
  console.log();
}
/**
 * передача параметров в родительский компонент. Имя, сложность, категория.
 */
function saveChanges() {
  store.setNikName(text.value == "" ? store.nikName : text.value);
  store.setIsGameEasy(isGameEasy.value);
  store.setSelectCategory(selectedCategory.value);
  if (isGameEasy.value) {
    store.setDifficulty("easy");
  } else {
    store.setDifficulty("hard");
  }
  console.log(
    "параметры сохранены",
    store.difficulty
  );
  emit("changed-form");
  myModal.hide();
  
}

defineExpose({
  openModal,
});
</script>

<template>
  <!-- Модальное окно -->
  <div
    id="exampleModal"
    ref="simpleModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 id="exampleModalLabel" class="modal-title fs-5">
            Выберите нужные параметры
          </h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Закрыть"
          />
        </div>
        <div class="modal-body">
          <div>
            Ваше имя
            <input
              ref="inputFocus"
              v-model="text"
              :placeholder="store.nikName"
            />
          </div>
          <br />
          <div class="js-line-btn col">
            <div>
              <button
                class="col btn btn-outline-secondary"
                data-bs-toggle="button"
                @click="isGameEasy = !isGameEasy"
              >
                {{ isGameEasy ? "легко" : "сложно" }}
              </button>

              <select
                v-model="selectedCategory"
                class="col btn btn-outline-secondary"
                @click="changeCategory"
              >
                <option value="animal" data="животные">Животные</option>
                <option value="edible">Съедобное</option>
                <option value="inedible">Несъедобное</option>
                <option value="all">Все категории</option>
              </select>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="col btn btn-outline-secondary"
            @click="saveChanges"
          >
            Сохранить изменения
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>

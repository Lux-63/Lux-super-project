<script setup>
import { ref, onMounted } from "vue";
import { Modal } from "bootstrap";

const emit = defineEmits(["changed-form"]);
const simpleModal = ref(null);
const text = ref("");
let myModal = null;

const inputFocus = ref(null);
const isGameEasy = ref(true);
const selectedCategory = ref("animal");

onMounted(() => {
  myModal = new Modal(simpleModal.value);
  console.log(myModal);
});

function openModal() {
  myModal.show();
  //inputFocus.value.focus();
  console.log();
}
/**
 * передача параметров в родительский компонент. Имя, сложность, категория.
 */
function saveChanges() {
  emit(
    "changed-form",
    text.value == "" ? "друг" : text.value,
    isGameEasy.value,
    selectedCategory.value
  );
  //console.log(text.value == "" ? "друг" : text.value )
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
          <h1 
            id="exampleModalLabel" 
            class="modal-title fs-5"
          >
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
              placeholder="друг" 
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
                <option 
                  value="animal" 
                  data="животные"
                >
                  Животные
                </option>
                <option 
                  value="edible"
                >
                  Съедобное
                </option>
                <option 
                  value="inedible"
                >
                  Несъедобное
                </option>
                <option 
                  value="all"
                >
                  Все категории
                </option>
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

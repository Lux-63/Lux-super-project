import { defineStore } from "pinia";
import { ref, computed } from "vue";

//setup хранилище.
export const useParametersStore = defineStore("gallows", () => {
  const nikName = ref("друг");
  const totalHints = ref(2);
  const difficulty = ref("easy");
  const selectedCategory = ref("animal");
  const isGameEasy = ref(true);

  const KEY_ANIMAL = "animal";
  const KEY_EDIBLE = "edible";
  const KEY_INEDIBLE = "inedible";
  const KEY_ALL = "all";
  const KEY_TRUE = "true";
  const KEY_FALSE = "false";

  const meaningsInRussian = {
    animal: "животные",
    edible: "съедобное",
    inedible: "несъедобное",
    all: "все категории",
    true: "легко",
    false: "сложно",
  };
  // Выбор массива слов исходя из сложности и выбранной категории.
  const allWords = {
    animal: {
      easy: [
        "лиса",
        "волк",
        "бобёр",
        "ёжик",
        "медведь",
        "олень",
        "заяц",
        "кролик",
        "корова",
        "лягушка",
        "кошка",
        "собака",
        "мышь",
      ],
      hard: [
        "игуана",
        "гиппопотам",
        "трясогузка",
        "леопард",
        "аллигатор",
        "горилла",
      ],
    },
    edible: {
      easy: [
        "каша",
        "пицца",
        "арбуз",
        "лимон",
        "грибы",
        "хлеб",
        "тесто",
        "мясо",
        "салат",
        "рыба",
        "молоко",
      ],
      hard: [
        "сельдерей",
        "фейхоа",
        "картофель",
        "абрикос",
        "баклажан",
        "виноград",
        "йогурт",
        "конфета",
        "свинина",
        "говядина",
      ],
    },
    inedible: {
      easy: [
        "окно",
        "стена",
        "шкаф",
        "стол",
        "стул",
        "пакет",
        "мешок",
        "шарик",
        "очки",
        "машина",
      ],
      hard: [
        "гильотина",
        "наволочка",
        "автозаправка",
        "фортепиано",
        "антресоль",
        "домкрат",
        "электричка",
        "сноуборд",
        "программа",
        "верёвка",
      ],
    },
    all: {
      easy: [],
      hard: [],
    },
  };

  if (localStorage.getItem("app_user")) {
    nikName.value = localStorage.getItem("app_user");
    totalHints.value = parseInt(localStorage.getItem("app_totalHints")) || 2;
    difficulty.value = localStorage.getItem("app_difficulty") || "easy";
    selectedCategory.value = localStorage.getItem("app_category") || "animal";
    isGameEasy.value = localStorage.getItem("app_isGameEasy") === "true";
  }

  const getNikName = computed(() => {
    nikName.value;
  });
  const getTotalHints = computed(() => {
    totalHints.value;
  });
  const getDifficulty = computed(() => {
    difficulty.value;
  });
  const getSelectCategory = computed(() => {
    selectedCategory.value;
  });
  const getisGameEasy = computed(() => {
    isGameEasy.value;
  });

  const setNikName = (name) => {
    nikName.value = name;
    localStorage.setItem("app_user", name);
  };
  const setTotalHints = (hints) => {
    totalHints.value = hints;
    localStorage.setItem("app_totalHints", hints);
  };
  const setDifficulty = (newDifficulty) => {
    console.log("изменение сложности на", newDifficulty);
    difficulty.value = newDifficulty;
    localStorage.setItem("app_difficulty", newDifficulty);
    console.log("сложность изменена на", newDifficulty);
  };
  const setSelectCategory = (category) => {
    selectedCategory.value = category;
    localStorage.setItem("app_category", category);
  };
  const setIsGameEasy = (isEasy) => {
    isGameEasy.value = isEasy;
    localStorage.setItem("app_isGameEasy", isEasy);
  };
  console.log("хранилище создано", nikName.value);
  return {
    getNikName,
    getTotalHints,
    getDifficulty,
    getSelectCategory,
    getisGameEasy,
    setNikName,
    setTotalHints,
    setDifficulty,
    setSelectCategory,
    setIsGameEasy,

    nikName,
    totalHints,
    difficulty,
    selectedCategory,
    isGameEasy,
    KEY_ANIMAL,
    KEY_EDIBLE,
    KEY_INEDIBLE,
    KEY_ALL,
    KEY_TRUE,
    KEY_FALSE,
    meaningsInRussian,
    allWords,
  };
});

/**
 * Прочитать статью.
 * Поменять хранилище на Setup.
 * Сделать сохранение ника и тд., что бы при резет страницы, сохранялись данные.
 * перенести ключи сюда в отдельную константную переменную и импортировать в компонент.
 *
 *
 *
 *
 * Сделать новое хранилище для собак и перенести туда вызовы API.
 */

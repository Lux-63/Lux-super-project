import { defineStore } from "pinia";
import { ref, computed } from "vue";

//options хранилище.
// export const useParametrsStore = defineStore("piniaAlerts", {
//   state: () => ({
//     piniaTest: "Пиния тест в хранилище",
//     nikName: ref("друг"),
//     totalHints: 2,
//     difficulty: "easy",
//   }),
//   getters: {
//     welcomeMessage: (state) =>
//       `Привет, ${state.nikName}! У тебя есть ${state.totalHints} подсказки.`,
//   },
//     actions: {},
// });

//setup хранилище.
export const useParametrsStore = defineStore("piniaAlerts", () => {
    const piniaTest = "Пиния тест в хранилище";
    const nikName = ref("друг");
    const totalHints = ref(2);
    const difficulty = ref("easy");
    const selectedCategory = ref("animal")
    const isGameEasy = ref(true);

    if(localStorage.getItem("app_user")){ 
        console.log("данные из localStorage", localStorage.getItem("app_user"));
        nikName.value = localStorage.getItem("app_user");
        totalHints.value = parseInt(localStorage.getItem("app_totalHints")) || 2;
        difficulty.value = localStorage.getItem("app_difficulty") || "easy";
        selectedCategory.value = localStorage.getItem("app_category") || "animal";
        isGameEasy.value = localStorage.getItem("app_isGameEasy") === "true";
    }

    const getNikName = computed(() => {
        nikName.value
    })
    const getTotalHints = computed(() => {
        totalHints.value
    })
    const getDifficulty = computed(() => {
        difficulty.value
    })
    const getSelectCategory = computed(() => {
        selectedCategory.value
    }) 
    const getisGameEasy = computed(() => {
        isGameEasy.value
    })

    const setNikName = (name) => {
        nikName.value = name;
        localStorage.setItem("app_user", name);
    };
    const setTotalHints = (hints) => {
        totalHints.value = hints;
        localStorage.setItem("app_totalHints", hints);
    }
    const setDifficulty = (difficulty) => {
        difficulty.value = difficulty;
        localStorage.setItem("app_difficulty", difficulty);
    };
    const setSelectCategory = (category) => {
        selectedCategory.value = category;
        localStorage.setItem("app_category", category);
    };
    const setIsGameEasy = (isEasy) => {
        isGameEasy.value = isEasy;
        localStorage.setItem("app_isGameEasy", isEasy);
    }
console.log("хранилище создано", nikName.value);
    return {
        piniaTest,

        
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
    };
    
});

/**
 * Прочитать статью.
 * Поменять хранилище на Setup.
 * Сделать сохранение ника и тд., что бы при резет страницы, сохранялись данные.
 *
 * Сделать новое хранилище для собак и перенести туда вызовы API.
 */

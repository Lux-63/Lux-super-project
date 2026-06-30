<script setup>
import { ref, onMounted, reactive } from "vue";
import ModalWindow from "./ModalWindow.vue";
import PageDescription from "../components/PageDescription.vue";
import { useParametersStore } from "@/store/gallowsGame.js";

const infoElementRef = ref(null);
const myModal = ref(null);

const addHintOnDifficulty = ref(1);
const canvasElementRef = ref(null);
let canvasContext = null;
const isKeyboardOff = ref(false);
const isbuttonHelpOff = ref(false);

const store = useParametersStore();

// Массив количества жизней.
let chanceLife = [
  drawOneLife,
  drawTwoLife,
  drawThreeLife,
  drawFourLife,
  drawFiveLife,
  drawSixLife,
  drawSevenLife,
  drawEightLife,
  drawNineLife,
  drawTenLife,
];
const imageParts = chanceLife.length;

const gameState = reactive({
  lettersUsed: [],
  answer: [],
  randomWord: "",
  maxLife: 7,
  remainingAttempts: 0,
  remainingLetters: 0,
});

/**
 * Открывает модальное окно.
 */
function showModal() {
  myModal.value.openModal();
  // Возможно стоит вынести сохранение в отдельную функцию.
}

// Сообщения для игрока.
const gameInfo = {
  startGame:
    'Угадайте букву или нажмите "Начать заново" что бы сменить слово. ',
  letterWas: `вы уже использовали букву!`,
  correctLetter: `Поздравляем! Такая буква есть. Следующая буква?.`,
  wrong: "Такой буквы нет. Осталось попыток: ",
  playerWin: `Молодец! Было загадано слово `,
  gameOver: `Вы проиграли! Было загадано слово: `,
  help: `У вас больше не осталось подсказок`,
};

// Константа для вывода сообщения.
const messageToPlayer = ref(gameInfo.startGame);

//-----------------------------------------------------------------------------------------------------------------------------

function proverimNuzhnoemne() {
  //Math.random(gameState.randomWord.length)
  //floor(Math.random() * (max - min + 1)) + min
}

//-----------------------------------------------------------------------------------------------------------------------------

onMounted(() => {
  for (let category in store.allWords) {
    if (category != "all") {
      store.allWords["all"]["easy"] = store.allWords["all"]["easy"].concat(
        store.allWords[category]["easy"],
      );
      store.allWords["all"]["hard"] = store.allWords["all"]["hard"].concat(
        store.allWords[category]["hard"],
      );
    }
  }
  canvasContext = canvasElementRef.value.getContext("2d"); // Получаем контекст канваса и сохр. его в реакт. св-во.
  generationWord();
});

/**
 * Использование подсказок.
 */
function usingHints() {
  let unsolvedLettersIndexes = [];
  if (store.totalHints === 0) {
    messageToPlayer.value = gameInfo.help;
    isbuttonHelpOff.value = true;
    return;
  }
  for (const [
    unsolvedLetterIndex,
    unsolvedLetter,
  ] of gameState.answer.entries()) {
    if (unsolvedLetter === "-") {
      unsolvedLettersIndexes.push(unsolvedLetterIndex);
    }
  }
  const randomIndex = Math.floor(Math.random() * unsolvedLettersIndexes.length);
  const answerIndexHint = unsolvedLettersIndexes[randomIndex];
  const letter =
    gameState.randomWord[answerIndexHint] === "ё"
      ? "е"
      : gameState.randomWord[answerIndexHint];
  const buttonElement = document.querySelector(`[data-index="${letter}"]`);

  correctLetter(buttonElement, letter);
  gameState.lettersUsed.push(letter);
  checkGameEnd();
  store.totalHints--;
}

const STATE_LETTER_USED = 1;
const STATE_LETTER_CORRECT = 2;
const STATE_LETTER_WRONG = 3;

function charLetterUsage(letter) {
  if (gameState.lettersUsed.includes(letter)) {
    return STATE_LETTER_USED;
  }
  if (gameState.randomWord.includes(letter)) {
    return STATE_LETTER_CORRECT;
  } else if (letter == "е" && gameState.randomWord.includes("ё")) {
    return STATE_LETTER_CORRECT;
  } else {
    return STATE_LETTER_WRONG;
  }
}

function checkGameEnd() {
  if (gameState.remainingAttempts == 0) {
    gameOver();
  } else if (
    gameState.answer.includes("-") == false &&
    gameState.remainingAttempts > 0
  ) {
    victory();
  }
}

/**
 * Обнуляем значения.
 */
function resetGameState() {
  //переимеровать что бы с глагола начиналось.ресет гейм
  gameState.lettersUsed = [];
  gameState.answer = [];
  //определение сложности игры
  store.difficulty = store.isGameEasy ? "easy" : "hard";
  // Инфа на кнопке подсказок.
  store.difficulty == "easy"
    ? (addHintOnDifficulty.value = 1)
    : (addHintOnDifficulty.value = 2);
  canvasElementRef.value.getContext("2d").clearRect(0, 0, 250, 300);
  //Включение кнопок алфавита.
  isKeyboardOff.value = false;
  //сброс кнопок алфавита.
  for (const letterButton of document.querySelectorAll(".js-letter-btn")) {
    letterButton.className =
      "js-letter-btn col btn btn-outline-secondary button-letters";
  }
  // life
  //тернарный оператор?
  gameState.maxLife = store.isGameEasy == false ? 10 : 7;
  gameState.remainingAttempts = gameState.maxLife;
}

// Генерация слова, замена букв на символы, сброс всех значений при рестарте игры.
function generationWord() {
  // Обнуляем значения.
  resetGameState();
  // Выбираем слово из массива по категории.
  gameState.randomWord =
    store.allWords[store.selectedCategory][store.difficulty][
      Math.floor(
        Math.random() *
          store.allWords[store.selectedCategory][store.difficulty].length,
      )
    ];

  for (let i = 0; gameState.randomWord.length > i; i++) {
    gameState.answer[i] = "-";
  }
}

/**
 * Процесс игры. проверка наличия буквы, отгаданной буквы и конец игры.
 * @param {Text} meaning
 */
function gameProcess(event) {
  // Какая кнопка была нажата.
  const buttonElement = event.target;
  // Значение кнопки.
  const letter = event.target.dataset.index;

  switch (charLetterUsage(letter)) {
    case STATE_LETTER_USED: {
      messageToPlayer.value = `<b>${store.nikName}</b> ${gameInfo.letterWas}`;
      return;
    }
    case STATE_LETTER_CORRECT: {
      messageToPlayer.value = `<b>${store.nikName}</b> ${gameInfo.correctLetter}`;
      correctLetter(buttonElement, letter);
      break;
    }
    case STATE_LETTER_WRONG: {
      wrongLetter(buttonElement);
      messageToPlayer.value = `<b>${store.nikName}</b> ${gameInfo.wrong}"${gameState.remainingAttempts}"`;
      break;
    }
  }
  gameState.lettersUsed.push(letter);

  checkGameEnd();
}

/**
 * Если буква угадана верно.
 * @param buttonElement
 * @param letter
 */
function correctLetter(buttonElement, letter) {
  let letterForCheck = [letter];
  if (letter == "е") {
    letterForCheck = ["е", "ё"];
  }
  for (let j = 0; j < gameState.randomWord.length; j++) {
    if (letterForCheck.includes(gameState.randomWord[j])) {
      gameState.answer[j] = gameState.randomWord[j];

      gameState.remainingLetters--;

      // Смена цвета кнопки.
      buttonElement.className += " letter-correct";
    }
  }
}

/**
 * Если буква угадана не верно.
 * @param buttonElement
 * @param letter
 */
function wrongLetter(buttonElement) {
  // Смена цвета.
  buttonElement.className += " letter-wrong";
  // Отнимаем жизнь
  gameState.remainingAttempts--;
  // Рисуем.
  let partPerLife = imageParts / gameState.maxLife;
  let parts = imageParts - Math.ceil(partPerLife * gameState.remainingAttempts);
  parts = Math.min(parts, imageParts);
  for (let indexAnswer = 0; parts > indexAnswer; indexAnswer++) {
    chanceLife[indexAnswer]();
  }
}

/**
 * Если игрок проиграл.
 */
function gameOver() {
  messageToPlayer.value = `<b>${store.nikName}</b> ${gameInfo.gameOver} "${gameState.randomWord}"`;
  for (let j = 0; j < gameState.randomWord.length; j++) {
    gameState.answer[j] = gameState.randomWord[j];
  }
  isKeyboardOff.value = true;
}

/**
 * Если игрок выйграл.
 */
function victory() {
  messageToPlayer.value = `<b>${store.nikName}</b> ${gameInfo.playerWin}<b>"${gameState.randomWord}"</b>`;
  drawPlayerWin();
  store.totalHints += addHintOnDifficulty.value;
  isbuttonHelpOff.value = false;
  isKeyboardOff.value = true;
}

//количество жизней и отрисовка игры в canvas.
/**
 * Площадка.
 */
function drawOneLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(50, 240);
  canvasContext.lineTo(230, 240);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * Столб.
 */
function drawTwoLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(100, 240);
  canvasContext.lineTo(100, 30);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * Поперечина.
 */
function drawThreeLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(60, 30);
  canvasContext.lineTo(180, 30);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * Веревка.
 */
function drawFourLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(160, 31);
  canvasContext.lineTo(160, 80);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * Голова.
 */
function drawFiveLife() {
  canvasContext.beginPath();
  canvasContext.clearRect(140, 65, 40, 45);
  canvasContext.arc(160, 90, 25, 300, 360, false);
  //л. глаз.
  canvasContext.moveTo(147, 83);
  canvasContext.arc(147, 83, 5, 300, 360, false);
  // пр. глаз.
  canvasContext.moveTo(172, 83);
  canvasContext.arc(172, 83, 5, 300, 360, false);
  //рот.
  canvasContext.moveTo(160, 98);
  canvasContext.arc(160, 102, 5, 300, 360, false);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * Тело.
 */
function drawSixLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(160, 115);
  canvasContext.lineTo(160, 180);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * Левая рука.
 */
function drawSevenLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(160, 130);
  canvasContext.lineTo(120, 155);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * Правая рука.
 */
function drawEightLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(160, 130);
  canvasContext.lineTo(200, 155);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * Левая нога.
 */
function drawNineLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(160, 180);
  canvasContext.lineTo(135, 220);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * Game over.
 */
function drawTenLife() {
  canvasContext.beginPath();
  //очистка поля.
  canvasContext.clearRect(115, 31, 90, 190);
  //веревка.
  canvasContext.moveTo(160, 30);
  canvasContext.lineTo(160, 75);
  //голова.
  canvasContext.arc(160, 100, 25, 300, 360, false);
  //л. глаз.
  canvasContext.moveTo(145, 89);
  canvasContext.lineTo(155, 96);
  canvasContext.moveTo(155, 89);
  canvasContext.lineTo(145, 96);
  //пр. глаз.
  canvasContext.moveTo(165, 89);
  canvasContext.lineTo(175, 96);
  canvasContext.moveTo(165, 96);
  canvasContext.lineTo(175, 89);
  //рот.
  canvasContext.moveTo(160, 108); //рот
  canvasContext.arc(160, 112, 5, 300, 360, false);
  //тело.
  canvasContext.moveTo(160, 125);
  canvasContext.lineTo(160, 180);
  //л. рука.
  canvasContext.moveTo(160, 140);
  canvasContext.lineTo(130, 180);
  //пр. рука.
  canvasContext.moveTo(160, 140);
  canvasContext.lineTo(190, 180);
  //л. нога.
  canvasContext.moveTo(160, 180);
  canvasContext.lineTo(145, 225);
  //пр. нога.
  canvasContext.moveTo(160, 180);
  canvasContext.lineTo(175, 225);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * Победа..
 */
function drawPlayerWin() {
  canvasContext.beginPath();
  //очистка поля.
  canvasContext.clearRect(115, 63, 95, 165);
  //л. глаз.
  canvasContext.moveTo(148.5, 111);
  canvasContext.arc(148.5, 115, 5, 300, 360, false);
  canvasContext.fillStyle = "white";
  canvasContext.fill();
  canvasContext.moveTo(148.5, 115);
  canvasContext.arc(148.5, 115, 0.05, 300, 360, false);
  //пр. глаз.
  canvasContext.moveTo(170.5, 111);
  canvasContext.arc(170.5, 115, 5, 300, 360, false, "white");
  canvasContext.fill();
  canvasContext.moveTo(170.5, 115);
  canvasContext.arc(170.5, 115, 0.05, 300, 360, false);
  //голова.
  canvasContext.moveTo(160, 96);
  canvasContext.clearRect(140, 65, 40, 45);
  canvasContext.arc(160, 120, 25, 300, 360, false);
  //рот.
  canvasContext.moveTo(175, 132); //рот
  canvasContext.arc(160, 119, 20, 1, 2.4, false);
  //тело.
  canvasContext.moveTo(160, 145);
  canvasContext.lineTo(160, 200);
  //л. рука.
  canvasContext.moveTo(160, 160);
  canvasContext.lineTo(120, 135);
  //пр. рука.
  canvasContext.moveTo(160, 160);
  canvasContext.lineTo(200, 135);
  //л.нога.
  canvasContext.moveTo(160, 200);
  canvasContext.lineTo(135, 240);
  //пр. нога.
  canvasContext.moveTo(160, 200);
  canvasContext.lineTo(185, 240);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
</script>

<template>
  <PageDescription>
    Игра Виселица, в которой игрок должен отгадывать слова. Игра поддерживает
    рызличные категории слов, сложность, систему подсказок, а так же выбор имени
    игрока. Изначально писался на чистом <b>JavaScript</b>. Допольнительно будет
    использоваться <b>pinia</b>
    для хранения статистики игроков и их достижений. Настройки игры вынесены в
    отдельный компонент, в виде модального окна.'
  </PageDescription>

  <div class="container text-center" style="width: 600px">
    <div class="js-top-window-btn row" />

    <div class="row">
      <div>
        <div class="container text-center">
          Привет <b>{{ store.nikName }}</b
          >.
          <p />
          категория: <b>{{ store.meaningsInRussian[store.selectedCategory] }}</b
          >, сложность: <b>{{ store.meaningsInRussian[store.isGameEasy] }}</b>
        </div>
        <canvas
          ref="canvasElementRef"
          class="canvas-style border border-black center"
          height="250px"
          width="300px"
        />
      </div>
    </div>
    <div
      ref="infoElementRef"
      class="container text-center"
      v-text="messageToPlayer"
    />
    <div class="row">
      <div class="js-information-btn col" />
    </div>

    <div class="js-block-answer-btn row justify-content-center">
      <div class="js-hidden-word-btn row" style="width: 400px">
        <div
          v-for="item in gameState.answer"
          :key="item.id"
          class="js-answer-word-btn col"
        >
          {{ item }}
        </div>
      </div>
    </div>

    <div class="js-line-btn col">
      <div>
        <button
          class="js-letter-btn col btn btn-outline-secondary"
          @click="generationWord()"
        >
          Начать заново
        </button>
        <button
          class="js-letter-btn col btn btn-outline-secondary"
          @click="showModal()"
        >
          Настройки игры
        </button>
        <ModalWindow ref="myModal" @changed-form="generationWord()" />
        <button
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isbuttonHelpOff"
          @click="usingHints()"
        >
          всего подсказок: {{ store.totalHints }}
        </button>
      </div>
    </div>
    <div>
      <div class="js-line-btn row">
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="й"
          @click="gameProcess($event, 'й')"
        >
          Й
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="ц"
          @click="gameProcess($event, 'ц')"
        >
          Ц
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="у"
          @click="gameProcess($event, 'у')"
        >
          У
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="к"
          @click="gameProcess($event, 'к')"
        >
          К
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="е"
          @click="gameProcess($event, 'е')"
        >
          Е
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="н"
          @click="gameProcess($event, 'н')"
        >
          Н
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="г"
          @click="gameProcess($event, 'г')"
        >
          Г
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="ш"
          @click="gameProcess($event, 'ш')"
        >
          Ш
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="щ"
          @click="gameProcess($event, 'щ')"
        >
          Щ
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="з"
          @click="gameProcess($event, 'з')"
        >
          З
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="х"
          @click="gameProcess($event, 'х')"
        >
          Х
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="ъ"
          @click="gameProcess($event, 'ъ')"
        >
          Ъ
        </button>
      </div>
      <div class="js-line-btn row">
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="ф"
          @click="gameProcess($event, 'ф')"
        >
          Ф
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="ы"
          @click="gameProcess($event, 'ы')"
        >
          Ы
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="в"
          @click="gameProcess($event, 'в')"
        >
          В
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="а"
          @click="gameProcess($event, 'а')"
        >
          А
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="п"
          @click="gameProcess($event, 'п')"
        >
          П
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="р"
          @click="gameProcess($event, 'р')"
        >
          Р
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="о"
          @click="gameProcess($event, 'о')"
        >
          О
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="л"
          @click="gameProcess($event, 'л')"
        >
          Л
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="д"
          @click="gameProcess($event, 'д')"
        >
          Д
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="ж"
          @click="gameProcess($event, 'ж')"
        >
          Ж
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="э"
          @click="gameProcess($event, 'э')"
        >
          Э
        </button>
      </div>
      <div class="js-line-btn row">
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="я"
          @click="gameProcess($event, 'я')"
        >
          Я
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="ч"
          @click="gameProcess($event, 'ч')"
        >
          Ч
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="с"
          @click="gameProcess($event, 'с')"
        >
          С
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="м"
          @click="gameProcess($event, 'м')"
        >
          М
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="и"
          @click="gameProcess($event, 'и')"
        >
          И
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="т"
          @click="gameProcess($event, 'т')"
        >
          Т
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="ь"
          @click="gameProcess($event, 'ь')"
        >
          Ь
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="б"
          @click="gameProcess($event, 'б')"
        >
          Б
        </button>
        <button
          ref="letterButton"
          class="js-letter-btn col btn btn-outline-secondary"
          :disabled="isKeyboardOff"
          data-index="ю"
          @click="gameProcess($event, 'ю')"
        >
          Ю
        </button>
      </div>
    </div>
  </div>
</template>

<style>
.canvas-style {
  background-color: aliceblue;
  border-style: solid;
  border: 3px;

  border-color: rgb(240, 255, 245);
}
.display {
  width: 14ch;
  padding: 2ch;
}
.button-calc {
  width: 4ch;
  padding: 4ch;
  color: blue;
}
.letter-wrong {
  background-image: url(wrong_strikethrough.jpg);
  background-size: cover;
  background-blend-mode: normal;
}
.letter-correct {
  background-image: url(correct_strikethrough.jpg);
  background-size: cover;
  background-blend-mode: normal;
}
</style>

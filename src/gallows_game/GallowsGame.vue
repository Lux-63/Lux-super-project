<script setup>
/*
тут короче вопросы!
1. Диалоговое окно, где нужно будет ввести имя и выббрать сложность с категорией.
2. Закрашивание использованных букв.
3. Отключение клавиатуры.

----------------------------------------
 */

import { ref, onMounted, reactive, onUpdated, useTemplateRef, computed } from "vue";

const selectedCategory = ref("animal");
const infoElementRef = ref("null");

const isGameEasy = ref(true);
const difficulty = ref("easy");
const canvasElementRef = ref(null);
let canvasContext = null;
const isKeyboardOff = ref(false);
let nikName = ref("-__-");

//массив количества жизней.
let chanceLife = [drawOneLife, drawTwoLife, drawThreeLife, drawFourLife, drawFiveLife, drawSixLife, drawSevenLife, drawEightLife, drawNineLife, drawTenLife];
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
 * сообщения для игрока.
 */
const gameInfo = {
  hiPlayer: `<p>Привет, <b>${nikName}.</b> Начнем игру!</p> `,
  startGame: 'Угадайте букву или нажмите "Начать заново" что бы сменить слово. ',
  letterWas: `вы уже использовали букву!`,
  correctLetter: `Поздравляем! Такая буква есть. Следующая буква?.`,
  wrong: "Такой буквы нет. Осталось попыток: ",
  playerWin: `Молодец! Было загадано слово `,
  gameOver: `Вы проиграли! Было загадано слово: `,
};

//Константа для вывода сообщения.
const messageToPlayer = ref(gameInfo.startGame);
/**
 * выбор массива слов исходя из сложности и выбранной категории.
 */
const allWords = {
  animal: {
    easy: ["лиса", "волк", "бобёр", "ёжик", "медведь", "олень", "заяц", "кролик", "корова", "лягушка", "кошка", "собака", "мышь"],
    hard: ["игуана", "гиппопотам", "трясогузка", "леопард", "аллигатор", "горилла"],
  },
  edible: {
    easy: ["каша", "пицца", "арбуз", "лимон", "грибы", "хлеб", "тесто", "мясо", "салат", "рыба", "молоко"],
    hard: ["сельдерей", "фейхоа", "картофель", "абрикос", "баклажан", "виноград", "йогурт", "конфета", "свинина", "говядина"],
  },
  inedible: {
    easy: ["окно", "стена", "шкаф", "стол", "стул", "пакет", "мешок", "шарик", "очки", "машина"],
    hard: ["гильотина", "наволочка", "автозаправка", "фортепиано", "антресоль", "домкрат", "электричка", "сноуборд", "программа", "верёвка"],
  },
  all: {
    easy: [],
    hard: [],
  },
};

//-----------------------------------------------------------------------------------------------------------------------------
const items = ref([]);
const inputs = ref([]);



function proverimNuzhnoemne() {
  console.log("test", letterButton);

  for (let i = 0; letterButton.length > i; i++) {
    letterButton[i].className = "js-letter-btn col btn btn-outline-secondary button-letters";
    letterButton[i].disabled = true;
  }

  const levelWord = allWords[selectedCategory.value][difficulty.value];
  //console.log(gameState.maxLife, gameState.randomWord, gameState.answer, canvasElementRef);
}

//-----------------------------------------------------------------------------------------------------------------------------

/**
 * массив всех категорий по сложности.
 */
onMounted(() => {
  nikName = prompt('Добро пожаловать в игру "Виселица" как вас зовут?');
  for (let category in allWords) {
    if (category != "all") {
      allWords["all"]["easy"] = allWords["all"]["easy"].concat(allWords[category]["easy"]);
      allWords["all"]["hard"] = allWords["all"]["hard"].concat(allWords[category]["hard"]);
    }
  }
  canvasContext = canvasElementRef.value.getContext("2d"); // Получаем контекст канваса и сохр. его в реакт. св-во.

  console.log();

  //test = prompt('Добро пожаловать в игру "Виселица" как вас зовут?');
  generationWord();
});

const STATE_LETTER_USED = 1;
const STATE_LETTER_CORRECT = 2;
const STATE_LETTER_WRONG = 3;
function charLetterUsage(letter) {
  if (gameState.lettersUsed.includes(letter)) {
    console.log("repeat");
    return STATE_LETTER_USED;
  }
  if (gameState.randomWord.includes(letter)) {
    console.log("correct");
    return STATE_LETTER_CORRECT;
  } else if (letter == "е" && gameState.randomWord.includes("ё")) {
    console.log("correct", letter);
    return STATE_LETTER_CORRECT;
  } else {
    console.log("wrong");
    return STATE_LETTER_WRONG;
  }
}
function checkGameEnd() {
  if (gameState.remainingAttempts == 0) {
    gameOver();
  } else if (gameState.answer.includes("-") == false && gameState.remainingAttempts > 0) {
    victory();
  }
}

/**
 * обнуляем значения.
 */
function gameStateReset() {
  //переимеровать что бы с глагола начиналось.ресет гейм
  gameState.lettersUsed = [];
  gameState.answer = [];
  //определение сложности игры
  difficulty.value = isGameEasy.value ? "easy" : "hard";
  canvasElementRef.value.getContext("2d").clearRect(0, 0, 250, 300);
  //Включение кнопок алфавита.
  isKeyboardOff.value = false;
  //сброс кнопок алфавита.
  /*
  for (let i = 0; document.querySelectorAll(".js-letter-btn").length > i; i++) {
    letterButton[i].className = "js-letter-btn col btn btn-outline-secondary button-letters";
    letterButton[i].disabled = false;
  }
    */

    document.querySelectorAll(".js-letter-btn").forEach((letterButton) => {
      letterButton.className = "js-letter-btn col btn btn-outline-secondary button-letters";
    })


    

  // life
  if (isGameEasy.value == false) {
    gameState.maxLife = 10;
  } else {
    gameState.maxLife = 7;
  }
  gameState.remainingAttempts = gameState.maxLife;
}

// выбор случайного слова.
/**
 * генерация слова, замена букв на символы, сброс всех значений при рестарте игры.
 */
function generationWord() {
  //обнуляем значения.
  gameStateReset();
  //выбираем слово из массива по категории.
  gameState.randomWord =
    allWords[selectedCategory.value][difficulty.value][Math.floor(Math.random() * allWords[selectedCategory.value][difficulty.value].length)];
  console.log("пров функц генерация слова", gameState.randomWord);

  for (let i = 0; gameState.randomWord.length > i; i++) {
    gameState.answer[i] = "-";
  }
}

/**
 * процесс игры. проверка наличия буквы, отгаданной буквы и конец игры.
 * @param {Text} meaning
 */
function gameProcess(event) {
  // какая кнопка была нажата.
  const buttonPosition = event.target;
  // значение кнопки.
  const letter = event.target.dataset.index;
  console.log("бутон позития", buttonPosition);

  switch (charLetterUsage(letter)) {
    case STATE_LETTER_USED:
      console.log("было");
      messageToPlayer.value = `<b>${nikName}</b> ${gameInfo.letterWas}`;
      return;
    case STATE_LETTER_CORRECT:
      console.log("передача леттера", letter);
      messageToPlayer.value = `<b>${nikName}</b> ${gameInfo.correctLetter}`;
      correctLetter(buttonPosition, letter);
      break;
    case STATE_LETTER_WRONG:
      wrongLetter(buttonPosition, letter);
      messageToPlayer.value = `<b>${nikName}</b> ${gameInfo.wrong}"${gameState.remainingAttempts}"`;
      console.log("передача леттера", letter);
      break;
  }
  gameState.lettersUsed.push(letter);

  checkGameEnd();

  console.log(buttonPosition, letter);
}

function correctLetter(buttonPosition, letter) {
  let letterForCheck = [letter];
  if (letter == "е") {
    letterForCheck = ["е", "ё"];
  }
  for (let j = 0; j < gameState.randomWord.length; j++) {
    if (letterForCheck.includes(gameState.randomWord[j])) {
      gameState.answer[j] = gameState.randomWord[j];

      gameState.remainingLetters--;

      //смена цвета кнопки.
      buttonPosition.className += " letter-correct";
      console.log("Буква найдена", gameState.answer, "Победа");
    }
  }
}

function wrongLetter(buttonPosition, letter) {
  //смена цвета.
  buttonPosition.className += " letter-wrong";
  // отнимаем жизнь
  gameState.remainingAttempts--;
  // рисуем.

  let partPerLife = imageParts / gameState.maxLife;
  let parts = imageParts - Math.ceil(partPerLife * gameState.remainingAttempts);
  parts = Math.min(parts, imageParts);
  for (let indexAnswer = 0; parts > indexAnswer; indexAnswer++) {
    console.log("минус жизнь", indexAnswer, parts, chanceLife[indexAnswer]);
    chanceLife[indexAnswer]();
  }
}

function gameOver() {
  console.log("Проигрыш");
  messageToPlayer.value = `<b>${nikName}</b> ${gameInfo.gameOver} "${gameState.randomWord}"`;
  for (let j = 0; j < gameState.randomWord.length; j++) {
    gameState.answer[j] = gameState.randomWord[j];
    console.log("проиграл");
  }
  isKeyboardOff.value = true;
}

function victory() {
  messageToPlayer.value = `<b>${nikName}</b> ${gameInfo.playerWin}<b>"${gameState.randomWord}"</b>`;
  drawPlayerWin();
  console.log("выйграл");
  isKeyboardOff.value = true;
}


//количество жизней и отрисовка игры в canvas.
/**
 * площадка.
 */
function drawOneLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(50, 240);
  canvasContext.lineTo(230, 240);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * столб.
 */
function drawTwoLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(100, 240);
  canvasContext.lineTo(100, 30);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * поперечина.
 */
function drawThreeLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(60, 30);
  canvasContext.lineTo(180, 30);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * веревка.
 */
function drawFourLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(160, 31);
  canvasContext.lineTo(160, 80);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * голова.
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
 * тело.
 */
function drawSixLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(160, 115);
  canvasContext.lineTo(160, 180);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * левая рука.
 */
function drawSevenLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(160, 130);
  canvasContext.lineTo(120, 155);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * правая рука.
 */
function drawEightLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(160, 130);
  canvasContext.lineTo(200, 155);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * левая нога.
 */
function drawNineLife() {
  canvasContext.beginPath();
  canvasContext.moveTo(160, 180);
  canvasContext.lineTo(135, 220);
  canvasContext.lineWidth = 2;
  canvasContext.stroke();
}
/**
 * game over.
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
 * в случае победы, человек радуется спасению.
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
  <div class="container text-center" style="width: 600px">
    <div class="js-top-window-btn row"></div>

    <div class="row">
      <div>
        <div class="container text-center" v-html="`Привет <b>${nikName}</b>`"></div>
        <canvas ref="canvasElementRef" class="canvas-style border border-black center" height="250px" width="300px"> </canvas>
      </div>
    </div>
    <div class="container text-center" ref="infoElementRef" v-html="messageToPlayer"></div>
    <div class="row">
      <div class="js-information-btn col"></div>
    </div>

    <div class="js-block-answer-btn row justify-content-center">
      <div class="js-hidden-word-btn row" style="width: 400px">
        <div class="js-answer-word-btn col" v-for="item in gameState.answer">{{ item }}</div>
      </div>
    </div>

    <div class="js-line-btn col">
      <div>
        <button class="js-letter-btn col btn btn-outline-secondary" data-bs-toggle="button" @click="isGameEasy = !isGameEasy; generationWord()">
          {{ isGameEasy ? "легко" : "сложно" }}
        </button>
        <select class="js-letter-btn col btn btn-outline-secondary" v-model="selectedCategory" @click="changeCategory; generationWord()">
          <option value="animal">животные</option>
          <option value="edible">съедобное</option>
          <option value="inedible">несъедобное</option>
          <option value="all">все категории</option>
        </select>
        <button class="js-letter-btn col btn btn-outline-secondary" @click="proverimNuzhnoemne()">проверка</button>
        <button class="js-letter-btn col btn btn-outline-secondary" @click="generationWord()">начало игры</button>
      </div>
    </div>
    <div>
      <div class="js-line-btn row">
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="й" @click="gameProcess($event, 'й')">Й</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="ц" @click="gameProcess($event, 'ц')">Ц</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="у" @click="gameProcess($event, 'у')">У</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="к" @click="gameProcess($event, 'к')">К</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="е" @click="gameProcess($event, 'е')">Е</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="н" @click="gameProcess($event, 'н')">Н</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="г" @click="gameProcess($event, 'г')">Г</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="ш" @click="gameProcess($event, 'ш')">Ш</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="щ" @click="gameProcess($event, 'щ')">Щ</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="з" @click="gameProcess($event, 'з')">З</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="х" @click="gameProcess($event, 'х')">Х</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="ъ" @click="gameProcess($event, 'ъ')">Ъ</button>
      </div>
      <div class="js-line-btn row">
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="ф" @click="gameProcess($event, 'ф')">Ф</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="ы" @click="gameProcess($event, 'ы')">Ы</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="в" @click="gameProcess($event, 'в')">В</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="а" @click="gameProcess($event, 'а')">А</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="п" @click="gameProcess($event, 'п')">П</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="р" @click="gameProcess($event, 'р')">Р</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="о" @click="gameProcess($event, 'о')">О</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="л" @click="gameProcess($event, 'л')">Л</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="д" @click="gameProcess($event, 'д')">Д</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="ж" @click="gameProcess($event, 'ж')">Ж</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="э" @click="gameProcess($event, 'э')">Э</button>
      </div>
      <div class="js-line-btn row">
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="я" @click="gameProcess($event, 'я')">Я</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="ч" @click="gameProcess($event, 'ч')">Ч</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="с" @click="gameProcess($event, 'с')">С</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="м" @click="gameProcess($event, 'м')">М</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="и" @click="gameProcess($event, 'и')">И</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="т" @click="gameProcess($event, 'т')">Т</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="ь" @click="gameProcess($event, 'ь')">Ь</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="б" @click="gameProcess($event, 'б')">Б</button>
        <button class="js-letter-btn col btn btn-outline-secondary" ref="letterButton" :disabled="isKeyboardOff" data-index="ю" @click="gameProcess($event, 'ю')">Ю</button>
      </div>
    </div>

    <div class="js-line-btn"></div>
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

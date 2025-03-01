<script setup>
import { reactive, onMounted, computed } from "vue";

// Основной массив.
let calculateData = reactive([]);

const calculatedData = computed(() => {
  console.log("computed", calculateData);
  return calculateData.join("") || "0";
});

document.addEventListener("keydown", handleKey);

// Спец.символы для проверки операторов.
const specialChars = "/x-+%.";

// Проверка последовательности решения.
const priorityOperators = [".", "/", "x", "-", "+"];

// Перехват клавиатуры.
const numbersKey = {
  96: () => {
    addCharToDisplay(0);
  },
  97: () => {
    addCharToDisplay(1);
  },
  98: () => {
    addCharToDisplay(2);
  },
  99: () => {
    addCharToDisplay(3);
  },
  100: () => {
    addCharToDisplay(4);
  },
  101: () => {
    addCharToDisplay(5);
  },
  102: () => {
    addCharToDisplay(6);
  },
  103: () => {
    addCharToDisplay(7);
  },
  104: () => {
    addCharToDisplay(8);
  },
  105: () => {
    addCharToDisplay(9);
  },
  48: () => {
    addCharToDisplay(0);
  },
  49: () => {
    addCharToDisplay(1);
  },
  50: () => {
    addCharToDisplay(2);
  },
  51: () => {
    addCharToDisplay(3);
  },
  52: () => {
    addCharToDisplay(4);
  },
  53: () => {
    addCharToDisplay(5);
  },
  54: () => {
    addCharToDisplay(6);
  },
  55: () => {
    addCharToDisplay(7);
  },
  56: () => {
    addCharToDisplay(8);
  },
  57: () => {
    addCharToDisplay(9);
  },
  111: () => {
    addCharToDisplay("/");
  },
  106: () => {
    addCharToDisplay("x");
  },
  109: () => {
    addCharToDisplay("-");
  },
  107: () => {
    addCharToDisplay("+");
  },
  110: () => {
    addCharToDisplay(".");
  },
  108: () => {
    addCharToDisplay(".");
  },
  13: getResult,
  27: clearInputField,
  8: removeLastCharacter,
};

/**
 * Добавление значения по ключам.
 * @param {*} event
 */
function handleKey(event) {
  console.log(event.keyCode, event.code);
  event.preventDefault();
  numbersKey[event.keyCode]();
}

/**
 * Замена оператора на новый нажатый оператор.
 * @param {String} currentChar
 */
function addCharToDisplay(currentChar) {
  const lastChar = calculateData[calculateData.length - 1];
  const penultimateChar = calculateData[calculateData.length - 2];
  const isLastCharSpecial = specialChars.includes(lastChar);
  const isCurrentCharSpecial = specialChars.includes(currentChar);

  if (calculateData[0] === "-" && isCurrentCharSpecial === false) {
    calculateData.splice(0, 1, -currentChar);
    return;
  }
  if (currentChar === "negative") {
    calculateData.splice(-1, 1, Number(-calculateData.slice(-1)));
    return;
  }

  if (isLastCharSpecial === false && isCurrentCharSpecial === false) {
    if (lastChar === undefined) {
      calculateData.push(Number(currentChar));
      console.log(calculateData);
    } else {
      const strChars = String(lastChar) + String(currentChar);
      console.log(strChars);
      calculateData[calculateData.length - 1] = Number(strChars);
    }
  } else if (currentChar === "." && penultimateChar === ".") {
    return;
    // Проверка поставлена дробь или нет.
  } else if (isLastCharSpecial === false && isCurrentCharSpecial === true) {
    calculateData.push(currentChar);
  } else if (isLastCharSpecial === true && isCurrentCharSpecial === true) {
    if (
      currentChar === "." &&
      calculateData[calculateData.length - 3] === "."
    ) {
      // Без проверки - плюс можно заменить точкой.
      return;
    }
    calculateData.splice(-1, 1, currentChar);
  } else if (isLastCharSpecial === true && isCurrentCharSpecial === false) {
    calculateData.push(currentChar);
  }
  console.log(currentChar, calculateData);
}

// Очистка значения.
function clearInputField() {
  calculateData.splice(0);
  console.log(calculateData);
}
/**
 * Приоритет операции по правилам. сначала деление, умножение, потом сложение.
 * @returns
 */
function getPriorityOperatorIndex() {
  for (let operator of priorityOperators) {
    let priorityOperatorIndex = calculateData.indexOf(operator);
    if (priorityOperatorIndex !== -1) {
      return priorityOperatorIndex;
    }
  }
  return null;
}

// Вычисление результата и проверка на процент.
function getResult() {
  if (calculateData.length == 1) {
    return;
  }
  let priorityOperatorIndex = getPriorityOperatorIndex();
  let operandOne = calculateData[priorityOperatorIndex - 1];
  let operandTwo = calculateData[priorityOperatorIndex + 1];
  if (priorityOperatorIndex === null) {
    console.log("error");
    return;
  }
  // Проверка %
  if (calculateData.includes("%") === true) {
    // Удаление знака % и передача трех параметров в функцию процента.
    calculateData.pop();
    executeOperation(
      operandOne,
      calculateData[priorityOperatorIndex],
      operandTwo
    );
    console.log("передача в функции %", calculateData);
  }

  // Взятие чисел для вычисления результата, в зависимости от приоритетного оператора.
  if (isFinite(operandOne) && isFinite(operandTwo)) {
    let resultOperation = defineOperator(
      operandOne,
      calculateData[priorityOperatorIndex],
      operandTwo
    );

    calculateData.splice(priorityOperatorIndex - 1, 3, resultOperation);
    getResult();

    console.log(calculateData);
  }
}

/**
 * Патерн стратегия.
 * @param {Number} operandOne
 * @param {String} operator
 * @param {Number} operandTwo
 * @returns {Number}
 */
function defineOperator(operandOne, operator, operandTwo) {
  if (operator == "+") {
    return resultPlus(operandOne, operandTwo);
  } else if (operator == "-") {
    return resultMinus(operandOne, operandTwo);
  } else if (operator == "/") {
    return resultDivide(operandOne, operandTwo);
  } else if (operator == "x") {
    return resultMultiply(operandOne, operandTwo);
  } else if (operator == ".") {
    return fractions(operandOne, operandTwo);
  }
}

/**
 * Сделать дробные числа.
 * @param {Number} operandOne
 * @param {Number} operandTwo
 * @returns
 */
function fractions(operandOne, operandTwo) {
  return Number(String(operandOne) + "." + String(operandTwo));
}

/**
 * Сложение.
 * @param {Number} operandOne
 * @param {String} operator
 * @param {Number} operandTwo
 * @returns {Number}
 */
function resultPlus(operandOne, operandTwo) {
  return operandOne + operandTwo;
}

/**
 * Вычитание.
 * @param {Number} operandOne
 * @param {String} operator
 * @param {Number} operandTwo
 * @returns {Number}
 */
function resultMinus(operandOne, operandTwo) {
  return operandOne - operandTwo;
}

/**
 * Умножение.
 * @param {Number} operandOne
 * @param {String} operator
 * @param {Number} operandTwo
 * @returns {Number}
 */
function resultMultiply(operandOne, operandTwo) {
  return operandOne * operandTwo;
}

/**
 * Деление.
 * @param {Number} operandOne
 * @param {string} operator
 * @param {Number} operandTwo
 * @returns {Number}
 */
function resultDivide(operandOne, operandTwo) {
  return operandOne / operandTwo;
}

// Удаление последнего символа.
function removeLastCharacter() {
  let lastValue = calculateData.splice(-1).toString();
  console.log(lastValue, lastValue.length, calculateData);

  if (lastValue.length > 1) {
    lastValue = lastValue.slice(0, lastValue.length - 1);
    calculateData.push(+lastValue);
    console.log(lastValue, calculateData);
  }
}

// Код с процентом, проверка что делать с процентом (- + / *).
function executeOperation(operandOne, operator, operandTwo) {
  if (operator === "-") {
    minusPercentageAmount(operandOne, operandTwo);
  }
  if (operator === "+") {
    plusPercentageAmount(operandOne, operandTwo);
  }
  if (operator === "x") {
    multiplyPercentageAmount(operandOne, operandTwo);
  }
  if (operator === "/") {
    dividePercentageAmount(operandOne, operandTwo);
  }
}

/**
 * Отнимать процент.
 * @returns {Number}
 */
function minusPercentageAmount(baseValue, percentValue) {
  return baseValue - (baseValue / 100) * percentValue;
}

/**
 * Складывать процент.
 * @returns {Number}
 */
function plusPercentageAmount(baseValue, percentValue) {
  return (baseValue / 100) * percentValue + baseValue;
}

/**
 * Умножать процент.
 * @returns {Number}
 */
function multiplyPercentageAmount(baseValue, percentValue) {
  return (baseValue / 100) * percentValue * baseValue;
}

/**
 * Делить процент.
 * @returns {Number}
 */
function dividePercentageAmount(baseValue, percentValue) {
  return baseValue / ((baseValue / 100) * percentValue);
}
</script>

<template>
  <div class="col-md-5 col-lg-3 mx-auto border border-dark border-2 rounded-3">
    <div class="container">
      <div class="row border-bottom border-dark border-2">
        <div class="col">
          <div
            class="display text-end fs-1 overflow-hidden border-2"
            style="max-height: 0.5em">{{ calculatedData }}
          </div>
        </div>
      </div>

      <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <div class="row m-1">
            <div class="col">
              <button
                type="button"
                class="button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="clearInputField()">AC</button>
              <button
                type="button"
                class="button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="removeLastCharacter()"
              >&#8592;</button><button
                type="button"
                class="button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay('negative')">+/-</button>
              <button
                type="button"
                class="button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay('/')">/</button>
            </div>
          </div>

          <div class="row m-1">
            <div class="col">
              <button
                type="button"
                class="button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay(7)">7</button>
              <button
                type="button"
                class="button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay(8)">8</button>
              <button
                type="button"
                class="button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay(9)">9</button>
              <button
                type="button"
                class="button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay('x')">x</button>
            </div>
          </div>

          <div class="row m-1">
            <div class="col">
              <button
                type="button"
                class="button button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay(4)">4</button>
              <button
                type="button"
                class="button button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay(5)">5</button>
              <button
                type="button"
                class="button button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay(6)">6</button>
              <button
                type="button"
                class="button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay('-')">-</button>
            </div>
          </div>

          <div class="row m-1">
            <div class="col">
              <button
                type="button"
                class="button button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay(1)">1</button>
              <button
                type="button"
                class="button button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay(2)">2</button>
              <button
                type="button"
                class="button button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay(3)">3</button>
              <button
                type="button"
                class="button button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay('+')">+</button>
            </div>
          </div>

          <div class="row m-1">
            <div class="col">
              <button
                type="button"
                class="button button-calc button-calc-js button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay('%')">%</button>
              <button
                type="button"
                class="button button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay(0)">0</button>
              <button
                type="button"
                class="button button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="addCharToDisplay('.')">.</button>
              <button
                type="button"
                class="button button-calc button btn btn-lg btn-outline-dark p-0 fs-3"
                @click="getResult()">=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.button {
  height: 60px;
  width: 70px;
}
</style>

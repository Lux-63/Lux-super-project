<script setup>
import { ref, onMounted } from "vue";

let lengthLineference = 0;
let mistakeLoad = false; // needed to give an error or warning.
let progressLoad = 0; // how many were loaded.
let startLoading = 0; // to start painting the circle with red color.
let lineBar = ref(null); // second circle for changing colors.
let wiewStatusLoad = ref(0);
let displayInformationChange = ref(0); // change svg depending on loading status
let startIntervalChange = false;
let progressBarLoad = ref(678);
let startInterval = null;
let colorBar = "#00cc00";
onMounted(() => {
  console.log(lengthLineference);
});

function stepProgress() {
  if (startLoading == 0) {
    //if there is no check, then every time the download continues, a red color will appear.
    colorBar = "rgb(255, 0, 0)";
    lineBar.value.style.stroke = colorBar;
  }
  startLoading = 1;
  if (progressLoad < 100 && mistakeLoad === false) {
    progressLoad += 0.1;
    progressBarLoad.value = 600 * ((100 - progressLoad) / 100);

    wiewStatusLoad.value = Math.round(progressLoad);
    drawColorBar(progressLoad);
    console.log("info %", progressBarLoad.value, progressLoad);
  } else {
    stopAutoLoadBar();
  }
  console.log();
}
function drawColorBar(n) {
  let progressLoad = n;
  if (Math.round(progressLoad) >= 20 && progressLoad < 25) {
    console.log("сработало");
    colorBar = "#cb0a0a";
    lineBar.value.classList.add("dots-one");
    lineBar.value.style.stroke = "rgb(240, 115, 12)";
    colorBar = "rgb(240, 115, 12)";
  } else if (Math.round(progressLoad) >= 45 && progressLoad < 50) {
    lineBar.value.style.stroke = "rgb(240, 115, 12)";
    lineBar.value.classList.remove("dots-one");
    lineBar.value.classList.add("dots-two");
    lineBar.value.style.stroke = "rgb(233, 161, 17)";
    colorBar = "rgb(233, 161, 17)";
  } else if (Math.round(progressLoad) >= 70 && progressLoad < 75) {
    lineBar.value.style.stroke = "rgb(233, 161, 17)";
    lineBar.value.classList.remove("dots-two");
    lineBar.value.classList.add("dots-three");
    lineBar.value.style.stroke = "rgb(17, 150, 233)";
    colorBar = "rgb(17, 150, 233)";
  } else if (Math.round(progressLoad) >= 85 && progressLoad < 100) {
    lineBar.value.style.stroke = "rgb(17, 150, 233)";
    lineBar.value.classList.remove("dots-three");
    lineBar.value.classList.add("dots-four");
    lineBar.value.style.stroke = "rgb(17, 42, 233)";
    colorBar = "rgb(17, 42, 233)";
  } else if (Math.round(progressLoad) == 100) {
    lineBar.value.style.stroke = "rgb(17, 42, 233)";
    lineBar.value.classList.remove("dots-four");
    lineBar.value.classList.add("dots-five");
    lineBar.value.style.stroke = "rgb(28, 233, 17)";
    colorBar = "rgb(28, 233, 17)";
    displayInformationChange.value = 1;
  }
  lineBar.value.style.stroke = colorBar;
  (lineBar.value.setAttribute("x2", (600 * progressLoad) / 100),
    console.log(lengthLineference, progressLoad, progressBarLoad.value));
}

function resetButton() {
  lineBar.value.style.stroke = "#e0e0e0";
  colorBar = "rgb(255, 0, 0)";
  wiewStatusLoad.value = 0;
  startLoading = 1;
  progressLoad = 0;
  wiewStatusLoad.value = 0;
  mistakeLoad = false;
  lineBar.value.classList = "circle-bar-size";
  displayInformationChange.value = 0;
}

function startAutoLoadBar() {
  if (startIntervalChange == false) {
    startIntervalChange = true;
    startInterval = setInterval(() => {
      stepProgress();
    }, 10);
  }
}

function stopAutoLoadBar() {
  if (startIntervalChange === true) {
    startIntervalChange = false;
    setTimeout(clearInterval(startInterval));
  }
}

function runWarning() {
  stopAutoLoadBar();
  setTimeout(clearInterval(startInterval));
  if (wiewStatusLoad.value != "error") {
    displayInformationChange.value = 3;
    wiewStatusLoad.value = "warning";
    mistakeLoad = true;
    lineBar.value.classList.remove("dots-three");
    lineBar.value.classList.add("dots-warning");
    setTimeout(() => {
      lineBar.value.style.stroke = "rgb(233, 175, 17)";
    }, 3000);
  }
}
function runEror() {
  stopAutoLoadBar();
  setTimeout(clearInterval(startInterval));
  if (wiewStatusLoad.value != "warning") {
    displayInformationChange.value = 2;
    wiewStatusLoad.value = "error";
    mistakeLoad = true;
    lineBar.value.classList.add("dots-error");
    setTimeout(() => {
      lineBar.value.style.stroke = "rgb(233, 17, 17)";
    }, 3000);
  }
}
</script>

<template>
  <br />
  <div class="row">
    <div class="col text-center">
      <button
        type="button"
        class="btn btn-outline-secondary m-1"
        @click="startAutoLoadBar()"
      >
        start
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary m-1"
        @click="stopAutoLoadBar()"
      >
        stop
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary m-1"
        @click="stepProgress()"
      >
        step
      </button>
      <button
        type="button"
        class="btn btn-outline-secondary m-1"
        @click="resetButton()"
      >
        reset
      </button>
    </div>
    <br />
    <div class="row">
      <div class="col m-2 text-center">
        <button
          type="button"
          class="btn btn-outline-secondary m-1"
          @click="runWarning()"
        >
          warning
        </button>
        <button
          type="button"
          class="btn btn-outline-secondary m-1"
          @click="runEror()"
        >
          error
        </button>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-2 mx-auto text-center">
      <div class="wiew-line-svg">
        <div>
          <svg
            class="loading-circumference"
            height="90"
            width="290"
            viewBox="-29.5 -29.5 295 295"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            style="transform: rotate(0deg)"
          >
            <line
              x1="0"
              y1="0"
              x2="600"
              y2="0"
              stroke="rgb(224, 224, 224)"
              stroke-width="45"
            />
            <line
              ref="lineBar"
              x1="0"
              y1="0"
              x2="0"
              y2="0"
              stroke="rgb(17, 42, 233)"
              stroke-width="45"
            />
          </svg>
        </div>
        <div class="information-position">
          <div v-if="displayInformationChange == 0">
            {{ wiewStatusLoad }}
          </div>
          <div v-if="displayInformationChange == 1">
            <svg
              class="js-load-complete dots-line-complette wiew-line-complete"
              y="0px"
              style="enable-background: new 0 0 512.003 512.003"
              xml:space="preserve"
              x="0px"
              viewBox="-400 100 1212.003 512.003"
            >
              <g>
                <g>
                  <path
                    style="fill: rgb(28, 233, 17)"
                    d="M507.291,57.14c-5.605-4.851-14.094-4.204-18.998,1.455L174.383,424.81l-151.39-151.39 c-5.255-5.255-13.797-5.255-19.052,0c-5.255,5.255-5.255,13.797,0,19.052l161.684,161.684c2.533,2.506,5.982,3.934,9.539,3.934 c0.162,0,0.35,0,0.539,0.027c3.746-0.162,7.276-1.886,9.701-4.716L508.773,76.138C513.597,70.479,512.95,61.99,507.291,57.14z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div
            v-if="displayInformationChange == 2"
            class="wiew-line-error dots-line -complette"
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                fill="rgb(233, 17, 17)"
                clip-rule="evenodd"
                d="M4.11 2.697L2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z"
              />
            </svg>
          </div>
          <div
            v-if="displayInformationChange == 3"
            class="wiew-line-warning dots-line -complette"
          >
            <svg
              fill="rgb(233, 175, 17)"
              width="60px"
              height="60px"
              viewBox="0 0 36 36"
            >
              <title>exclamation-circle-solid</title>
              <path
                class="clr-i-solid clr-i-solid-path-1"
                d="M18,6A12,12,0,1,0,30,18,12,12,0,0,0,18,6Zm-1.49,6a1.49,1.49,0,0,1,3,0v6.89a1.49,1.49,0,1,1-3,0ZM18,25.5a1.72,1.72,0,1,1,1.72-1.72A1.72,1.72,0,0,1,18,25.5Z"
              />
              <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.wiew-line-svg {
  position: absolute;
  left: 36%;
  top: 50%;
}

.information-position {
  position: absolute;
  width: 10px;
  height: 10px;
  padding-top: 45px;
  left: 112px;
  top: -48px;
  text-align: center;
}
.wiew-line-error {
  position: absolute;
  width: 110px;
  height: 110px;
  padding-top: 45px;
  left: 30px;
  top: 20px;
}
.wiew-line-warning {
  position: absolute;
  width: 110px;
  height: 110px;
  padding-top: 45px;
  left: 30px;
  top: 20px;
}
.wiew-line-complete {
  position: absolute;
  width: 110px;
  height: 110px;
  padding-top: 45px;
  left: 30px;
  top: 20px;
}

.dots-line-complette {
  animation: load-complette;
  transition-delay: 3s;
  animation-duration: 3s;
}
@keyframes load-complette {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.dots-clear {
  animation: precent-clear;
  animation-duration: 5s;
}
@keyframes precent-clear {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.dots-one {
  animation-name: animation-one;
  animation-duration: 3s;
}

@keyframes animation-one {
  0% {
    stroke: rgb(255, 0, 0);
  }
  100% {
    stroke: rgb(240, 115, 12);
  }
}
.dots-two {
  animation-name: animation-twenty-five;
  animation-duration: 3s;
  stroke: rgb(240, 115, 12);
}
@keyframes animation-twenty-five {
  from {
    stroke: rgb(240, 115, 12);
  }
  to {
    stroke: rgb(233, 161, 17);
  }
}

.dots-three {
  animation-name: animation-fivty;
  animation-duration: 3s;
  stroke: rgb(233, 161, 17);
}
@keyframes animation-fivty {
  from {
    stroke: rgb(233, 161, 17);
  }
  to {
    stroke: rgb(17, 150, 233);
  }
}

.dots-four {
  animation-name: animation-seventy-five;
  animation-duration: 3s;
  stroke: rgb(17, 150, 233);
}
@keyframes animation-seventy-five {
  from {
    stroke: rgb(17, 150, 233);
  }
  to {
    stroke: rgb(17, 42, 233);
  }
}

.dots-five {
  animation-name: animation-one-hundred;
  animation-duration: 3s;
  stroke: rgb(17, 42, 233);
}
@keyframes animation-one-hundred {
  from {
    stroke: rgb(17, 42, 233);
  }
  to {
    stroke: rgb(28, 233, 17);
  }
}

.dots-warning {
  animation-name: animation-warning;
  animation-duration: 3s;
  stroke: rgb(233, 175, 17);
}
@keyframes animation-warning {
  from {
    /* stroke: rgb(17, 42, 233); */
  }
  to {
    stroke: rgb(233, 175, 17);
  }
}

.dots-error {
  animation-name: animation-error;
  animation-duration: 3s;
  stroke: rgb(233, 17, 17);
}
@keyframes animation-error {
  from {
    /* stroke: rgb(17, 42, 233); */
  }
  to {
    stroke: rgb(233, 17, 17);
  }
}
</style>

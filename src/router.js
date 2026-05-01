import { createWebHistory, createRouter } from "vue-router";
import PersonalPage from "./personalPage/PersonalPage.vue";
import SimpleCalculator from "./calculator/SimpleCalculator.vue";
import GallowsGame from "./gallowsGame/GallowsGame.vue";
import FindTheTreasure from "./findTheTreasure/FindTheTreasure.vue";
import GameOfLife from "./gameOfLife/GameOfLife.vue";

import PageDogs from "./pageDogs/PageDogs.vue";
import LuxCarusel from "./pageDogs/LuxCarusel.vue";
import LuxGallery from "./pageDogs/LuxGallery.vue";

import ProgressBar from "./progressBar/ProgressBar.vue";
import CircumFerence from "./progressBar/CircumFerence.vue";
import DashBoard from "./progressBar/DashBoard.vue";
import LineBoard from "./progressBar/LineBoard.vue";

import VariousTesting from "./variousTesting/VariousTesting.vue";

const routes = [
  {
    path: "/",
    component: PersonalPage,
    meta: {
      // title: 'Страница построена с использованием Vue.js. Используя современные технологии и подходы к разработке, я создаю интерактивные и удобные в использовании приложения. Допольнительные инструменты и технологии, которые я использую в этом проекте: Vue Router для управления маршрутизацией, а так же Bootstrap для стилизации и создания адаптивного дизайна.',
    },
  },
  {
    path: "/calculator",
    component: SimpleCalculator,
    meta: {
      // title: 'Простой калькулятор с вычислением выражений, поддержкой не целых чисел, а так же с отрицательными числами. заложен приоритет операций. Изначально писался в качестве практики на JavaScript, но в итоге был перенесён на Vue.js с минимальными изменениями в коде.',
    },
  },
  {
    path: "/gallows",
    component: GallowsGame,
    meta: {
      // title: 'Игра Виселица, в которой игрок должен отгадывать слова. Игра поддерживает рызличные категории слов, сложность, систему подсказок, а так же выбор имени игрока. Изначально писался на чистом JavaScript. Допольнительно будет использоваться pinia для хранения статистики игроков и их достижений. Настройки игры вынесены в отдельный компонент, в виде модального окна.',
    },
  },
  {
    path: "/find-the-treasure",
    component: FindTheTreasure,
    meta: {
      // title: 'Игра "Найди сокровище", в которой игрок должен найти спрятанное сокровище на карте. Была написана как отработка координантной системы и взаимодействия с мышью. Изначально была написана на чистом JavaScript.',
    },
  },
  {
    path: "/game-of-life",
    component: GameOfLife,
    meta: {
      // title: '"Игра в жизнь" - это клеточный автомат, который моделирует эволюцию клеток на двумерной сетке. Реализована в двух вариантах - с использованием массивов и объектов, с использованием Canvas. Игра была написана для практики работы с массивами и логикой, а так же для отработки навыков оптимизации производительности при работе с большим количеством данных. Изначально писался на чистом JavaScript.',
    },
  },
  {
    path: "/page-dogs/",
    component: PageDogs,
    children: [
      { path: "", redirect: "/page-dogs/carusel" },
      { path: "carusel", component: LuxCarusel },
      { path: "gallery", component: LuxGallery },
    ],
    meta: {
      // title: 'Работа с API и отображение данных. На странице отображаются фотографии собак, полученные с помощью API. Реализована пагинация для удобства просмотра большого количества фотографий. Варианты отображения данных - карусель и галерея. Компонент карусели был написан с нуля, а галерея была реализована с использованием Bootstrap. Реализована возможность фильтрации фотографий по породам собак и количесвтву отображаемых фотографий.',
    },
  },
  {
    path: "/progress-bar",
    component: ProgressBar,
    children: [
      { path: "", redirect: "/progress-bar/circle" },
      { path: "circle", component: CircumFerence },
      { path: "dash-board", component: DashBoard },
      { path: "line-board", component: LineBoard },
    ],
    meta: {
      // title: 'Различные варианты реализации прогресс бара. В проекте представлены различные варианты реализации прогресс бара, включая круговой, линейный и Dashboard. Каждый вариант имеет свои особенности и может быть использован в зависимости от конкретных требований проекта. Компоненты были написаны с нуля, с использованием Vue.js и CSS для стилизации.',
    },
  },
  {
    path: "/testing",
    component: VariousTesting,
    meta: {
      // title: 'Различные тесты',
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes,
});

export default router;

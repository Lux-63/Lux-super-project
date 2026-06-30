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
 
  },
  {
    path: "/calculator",
    component: SimpleCalculator,
   
  },
  {
    path: "/gallows",
    component: GallowsGame,
  },
  {
    path: "/find-the-treasure",
    component: FindTheTreasure,
  },
  {
    path: "/game-of-life",
    component: GameOfLife,
  },
  {
    path: "/page-dogs/",
    component: PageDogs,
    children: [
      { path: "", redirect: "/page-dogs/carusel" },
      { path: "carusel", component: LuxCarusel },
      { path: "gallery", component: LuxGallery },
    ],
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
  },
  {
    path: "/testing",
    component: VariousTesting,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes,
});

export default router;

// при переходе с 
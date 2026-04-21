import { createWebHistory, createRouter } from 'vue-router'

import PersonalPage from './personal_page/PersonalPage.vue'
import SimpleCalculator from './calculator/SimpleCalculator.vue'
import GallowsGame from './gallows_game/GallowsGame.vue'
import FindTheTreasure from './find_the_treasure/FindTheTreasure.vue'
import GameOfLife from './GameOfLife/GameOfLife.vue'
import PageDogs from './page_dogs/PageDogs.vue'
import VariousTesting from './VariousTesting/VariousTesting.vue'

const routes = [
  { path: '/', component: PersonalPage },
  { path: '/calculator', component: SimpleCalculator },
  { path: '/gallows', component: GallowsGame },
  { path: '/find-the-treasure', component: FindTheTreasure },
  { path: '/game-of-life', component: GameOfLife },
  { path: '/page-dogs', component: PageDogs },
  { path: '/testing', component: VariousTesting }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active router-link-active",
  routes
})


export default router
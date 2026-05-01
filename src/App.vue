<script setup>
import { ref } from "vue";
import { Toast } from "bootstrap";
import { useRouter } from "vue-router";

const toastContainer = ref(null);
const tostMessage = ref("Описание страницы");
const router = useRouter();

function showLiveToast() {
  const toastEl = toastContainer.value.querySelector("#liveToast");
  const toast = new Toast(toastEl);
  toast.show();

  console.log("Показать тост", router);
  tostMessage.value = router.currentRoute._rawValue.meta.title;
}
</script>

<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
    <div class="container-fluid">
      <!-- почитать -->
      <a class="navbar-brand" href="#">Lux project</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Обо мне</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/calculator" class="nav-link"
              >Калькулятор</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/gallows" class="nav-link">Виселица</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/find-the-treasure" class="nav-link"
              >Найди клад</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/game-of-life" class="nav-link"
              >Игра в жизнь</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/page-dogs" class="nav-link">Собаки</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/progress-bar" class="nav-link"
              >Прогресс бар</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink to="/testing" class="nav-link">Тестовое</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <main class="container">
    <RouterView />
  </main>
</template>

<style></style>

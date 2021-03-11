<template>
  <footer class="footer bg-blue-700">
    <div
      class="
        mx-auto
        p-4
        flex
        items-center
        justify-between
        container
      "
    >
      <router-link
        :to='routesList.main'
        class='header__logo'
      >
        <img src='@/assets/img/icons/logo-icon.svg' alt=''>
      </router-link>
      <div
        class='
          text-white
          text-xl
        '
      >
        © Copyright 2021
      </div>
    </div>
  </footer>
</template>

<script lang='ts'>
import { routes } from '@/constants';

export default {
  setup() {
    const routesList = routes;

    return {
      routesList,
    };
  },
};
</script>

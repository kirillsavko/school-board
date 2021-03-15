<template>
  <router-link
    :to='routesList.main'
    class='header__logo'
  >
    <img src='@/assets/img/icons/logo-icon.svg' alt=''>
  </router-link>
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

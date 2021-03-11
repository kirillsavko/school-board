<template>
  <header class="header bg-blue-700">
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
      <div class='header__buttons'>
        <Button
          children="Login"
          class="mr-2"
        />
        <Button
          children="Register"
        />
      </div>
    </div>
  </header>
</template>

<script lang='ts'>
import { routes } from '@/constants';
import Button from '@/components/Button.vue';

export default {
  components: {
    Button,
  },
  setup() {
    const routesList = routes;

    return {
      routesList,
    };
  },
};
</script>

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
      <Logo />
      <div class='header__buttons'>
        <router-link
          :to='routes.login'
          v-if='!isActiveLoginPage'
        >
          <Button
            children="Login"
            class="mr-2"
          />
        </router-link>
        <router-link
          :to='routes.register'
          v-if='!isActiveRegisterPage'
        >
          <Button
            children="Register"
          />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { RouteLocationNormalizedLoaded } from 'vue-router';

import { routes } from '@/constants';
import Button from '@/components/Button';
import Logo from '@/components/Logo';

export default defineComponent<{
  $route: RouteLocationNormalizedLoaded;
}>({
  components: {
    Button,
    Logo,
  },
  computed: {
    isActiveRegisterPage() {
      return this.$route.path === routes.register;
    },
    isActiveLoginPage() {
      return this.$route.path === routes.login;
    },
  },
  setup() {
    return {
      routes,
    };
  },
});
</script>

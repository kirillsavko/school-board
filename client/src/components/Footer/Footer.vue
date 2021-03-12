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
      <Logo />
      <div
        class='
          text-white
          text-xl
        '
      >
        © Copyright {{getCurrentYear()}}
      </div>
    </div>
  </footer>
</template>

<script lang='ts'>
import { routes } from '@/constants';
import Logo from '@/components/Logo';

export default {
  components: {
    Logo,
  },
  setup() {
    const routesList = routes;

    return {
      routesList,
    };
  },
  methods: {
    getCurrentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

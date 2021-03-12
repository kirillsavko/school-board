<template>
  <div class='wrapper'>
    <Header />
    <main class='main py-5'>
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  components: {
    Header,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  flex: 1;
}
</style>

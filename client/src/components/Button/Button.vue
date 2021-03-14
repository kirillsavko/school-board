<template>
  <button
    class="
      py-2
      px-4
      font-bold
      bg-white
      text-blue-700
      border-2
      border-white
      hover:bg-blue-700
      hover:text-white
      rounded
      transition
    "
  >
    {{ children }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    children: String,
  },
};
</script>

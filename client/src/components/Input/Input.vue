<template>
  <label class="mb-5 block">
    <span
      class="
        block
        text-gray-700
        text-sm
        font-bold
        mb-2
      "
      v-if='label'
    >
      {{ label }}
    </span>
    <input
      class="
        shadow
        appearance-none
        border
        rounded
        w-full
        py-2
        px-3
        text-gray-700
        leading-tight
        focus:outline-none
        focus:shadow-outline
      "
      type="text"
    >
  </label>
</template>

<script lang="ts">
export default {
  props: {
    label: String,
  },
};
</script>

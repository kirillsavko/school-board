<template>
  <div class='modal'>
    <button @click='onClose' class='modal__bg bg-black' />
    <div class='modal__container bg-white'>
      <button @click='onClose' class='modal__container-close' />
      <div class='modal__container-wrapper p-10'>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    onClose: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  &__bg {
    width: 100%;
    height: 100%;
    opacity: 0.7;
  }

  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 700px;
    max-height: 50vh;
    overflow: hidden;

    &-close {
      position: absolute;
      width: 36px;
      height: 36px;
      top: 0;
      right: 0;

      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 2px;
        height: 18px;
        background-color: #000;
        transition: 0.2s transform ease;
      }

      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        width: 2px;
        height: 18px;
        background-color: #000;
        transition: 0.2s transform ease;
      }
    }

    &-close:hover {
      &::before {
        transform: translate(-50%, -50%) rotate(135deg);
      }

      &::after {
        transform: translate(-50%, -50%) rotate(45deg);
      }
    }

    &-wrapper {
      max-height: 50vh;
      overflow-y: auto;
    }
  }
}
</style>

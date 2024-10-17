<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <button type="button" class="button" :class="type">
    <slot name="icon"></slot>
    <slot>Default Button Text</slot>
  </button>
</template>

<style scoped lang="scss">
  button {
    position: relative;
    top: 0;
    left: 0;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.5rem;
    border: 1px solid #000000;
    border-radius: .5rem;
    text-align: center;
    cursor: pointer;
    padding: 0.5rem 1rem;
    box-shadow: 1px 1px 0px #000, 2px 2px #000;

    &:hover {
      top: 1px;
      left: 1px;
      box-shadow: 1px 1px #000;
    }

    &.primary,
    &.secondary {
      color: #FFF;
    }

    &.primary {
      background-color: #007efd;
      border-color: #002040;
      box-shadow: 1px 1px #002040, 2px 2px #002040;

      &:hover {
        box-shadow: 1px 1px #002040;
      }
    }

    &.secondary {
      background-color: #de0000;
      border-color: #680000;
      box-shadow: 1px 1px #680000, 2px 2px #680000;

      &:hover {
        box-shadow: 1px 1px #680000;
      }
    }
  }
</style>
<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`
  },
  direction: {
    type: String,
    default: 'vertical'
  }
})
</script>

<template>
  <section :class="direction">
    <slot />
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;

  &.vertical {
    flex-direction: column;
  }
}
</style>
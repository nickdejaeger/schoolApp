<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: () => `input-` + useId()
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
<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: () => `field-` + useId()
  },
  label: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="field">
    <label>{{ label }}</label>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: .25rem;
  
  label {
    padding: 0 1rem;
  }
}
</style>
<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: () => `input-${Math.random().toString(36).substr(2, 9)}`
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="field">
    <label v-if="label.length" :for="id">{{ label }}</label>
    <textarea cols="10" rows="3" :id="id" :placeholder="placeholder"></textarea>
  </div>
</template>

<style scoped lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: .25rem;

  label {
    padding: 0 1.3rem;
  }

  textarea {
    background-color: rgba(0,0,0,.05);
    padding: .75rem 1.25rem;
    border-radius: .75rem;
    border: 1px solid rgba(0,0,0,.1);
    min-width: 320px;

    &::placeholder {
      font-style: italic;
      color: rgba(0,0,0,.35);
    }

    &:focus {
      border-color: #0000ff82;
    }

    &:focus-visible {
      outline: 0;
    }
  };
}
</style>
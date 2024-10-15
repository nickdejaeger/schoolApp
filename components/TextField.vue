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
    <input type="text" :placeholder="placeholder" :id="id">
  </div>
</template>

<style scoped lang="scss">
.field {
  display: flex;
  flex-direction: column;

  label {
    font-size: .75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: .05rem;
    color: rgba(0,0,0,.5);
    padding: 0 1.3rem;
  }

  input {
    background-color: rgba(0,0,0,.05);
    padding: .75rem 1.25rem;
    border-radius: 1.75rem;
    border: 1px solid rgba(0,0,0,.1);

    &::placeholder {
      font-style: italic;
      color: rgba(0,0,0,.5);
    }

    &:focus {
      border-color: #0000ff82;
    }
  };
}
</style>
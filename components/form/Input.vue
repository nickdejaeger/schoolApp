<script setup lang="ts">
defineProps({
  id: {
    type: String,
    default: () => `input-` + useId()
  },
  type: {
    type: String,
    default: 'text'
  },
  value: {
    type: String,
    default: ''
  },
  modelValue: {
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

  <textarea v-if="type === 'textarea'"
    class="input"
    :placeholder="placeholder"
  >{{ modelValue }}</textarea>

  <div v-else-if="type === 'checkbox'" class="input input--check">
    <input
      :id="id"
      :type="type"
    ><label :for="id">{{ modelValue }}</label>
  </div>

  <input v-else
    :type="type"
    :value="modelValue"
    :placeholder="placeholder"
    class="input"

    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement).value)
    "
  >

</template>

<style scoped lang="scss">
.input {
  border: 1px solid #000;
  border-radius: .5rem;
  padding: .5rem 1rem;

  &--check {
    border: 0;

    display: flex;
    align-items: center;
    gap: .5rem;
  }
}
</style>
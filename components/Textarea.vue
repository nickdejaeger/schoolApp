<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

interface Props {
  modelValue: string
  name?: string
  label?: String,
  rows?: number
  cols?: number
  disabled?: boolean
  readonly?: boolean
  maxlength?: number
  minlength?: number
  placeholder?: string
  autocomplete?: string
  autofocus?: boolean
  form?: string
  required?: boolean
  wrap?: 'soft' | 'hard'
  spellcheck?: boolean
  customClass?: string
  customStyle?: Record<string, string>
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: '',
  name: '',
  rows: 5,
  cols: 30,
  disabled: false,
  readonly: false,
  placeholder: 'I\'m still empty...',
  autocomplete: 'off',
  autofocus: false,
  required: false,
  wrap: 'soft',
  spellcheck: true,
  customClass: '',
  customStyle: () => ({})
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const updateValue = (event: Event) => {
  const target = event.target as HTMLTextAreaElement
  emit('update:modelValue', target.value)
}

const id = 'input-' + Math.random().toString(36).substr(2, 9)
</script>

<template>
  <div class="field">
    <label v-if="label" :for="id">{{ label }}</label>
    <textarea
      :id="id"
      :value="modelValue"
      @input="updateValue"
      :name="name"
      :rows="rows"
      :cols="cols"
      :disabled="disabled"
      :readonly="readonly"
      :maxlength="maxlength"
      :minlength="minlength"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :autofocus="autofocus"
      :form="form"
      :required="required"
      :wrap="wrap"
      :spellcheck="spellcheck"
      :class="customClass"
      :style="customStyle"
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
@import '~/assets/scss/components/input/index.scss';
</style>
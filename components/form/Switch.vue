<script setup lang="ts">
const props = defineProps({
  switchId: {
    type: String,
    default: () => `input-` + useId()
  },
  options: {
    type: Object
  }
})
</script>

<template>
  <div class="switch">
    <div v-for="(option, index) in props.options" :key="index">
      <input type="radio" 
        :id="option.value"
        :value="option.value"
        :name="switchId"
        :checked="option.selected"
      >
      <label :for="option.value">{{ option.label }}</label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.switch {
  display: inline-flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: .25rem;
  border-radius: 1.75rem;
  padding: .125rem;
  background-color: #eeeeee;

  > div {
    position: relative;
    display: flex;
  
    input {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      opacity: 0;

      + label {
        position: relative;
        padding: 0.5rem 1rem;
        border-radius: 1.75rem;
        background-color: #FFF;
        cursor: pointer;
        opacity: 0.5;
      }

      &:focus {
        + label {
          background-color: red;
        }
      }

      &:checked {
        + label {
          background-color: #000;
          color: #FFF;
          opacity: 1;    
        }
      }
    }
  }
}
</style>
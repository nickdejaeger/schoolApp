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
    <div type="text" :placeholder="placeholder" :id="id" contenteditable="true"></div>
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

  div[contenteditable] {
    background-color: rgba(0,0,0,.05);
    padding: .75rem 1.25rem;
    border-radius: .75rem;
    border: 1px solid rgba(0,0,0,.1);
    
    min-width: 320px;
    max-width: 750px;
    width: 100%;
    min-height: 100px;
    resize: vertical;

    resize: both;
    overflow: scroll;

    &[placeholder]:empty::before {
      content: attr(placeholder);
      font-style: italic;
      color: rgba(0,0,0,.5);
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
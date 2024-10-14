<template>
  <div class="notch">
    <slot name="icon"></slot>
    <slot />
  </div>
</template>

<style scoped lang="scss">
.notch {
  position: fixed;
  top: 1rem;
  left: 50%;
  z-index: 1;
  transform: translateX(-50%);
  padding: 0.5rem 1.5rem;
  background-color: #000;
  color: #FFF;
  border-radius: 1.75rem;
  box-shadow: 0 10px 10px -5px #0000004d;
  display: flex;
  align-items: center;
  gap: .5rem;

  &--absolute {
    position: absolute;
    
  }
}
</style>
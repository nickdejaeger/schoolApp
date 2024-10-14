<template>
  <button class="collection__row" @click="$emit('click')">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.collection {
  &__row {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: .5rem;
    padding: .5rem 1rem;
    border-radius: .5rem;
    box-shadow: none;

    @at-root a#{&}, button#{&} {
      color: #945E00;
      transition: all 0.15s ease-in-out;
    }

    &:hover {
      top: 0;
      transform: translate3d(0, 0.125rem, 0);
    }
  }
}
</style>
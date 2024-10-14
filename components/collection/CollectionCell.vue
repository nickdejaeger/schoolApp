<template>
  <div class="collection__cell">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.collection {
  &__cell {
    flex: 1 1 0%;
    min-width: 4.5rem;

    &--action {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      max-width: fit-content;
      min-width: 1.5rem;
    }
  }
}
</style>
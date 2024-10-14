<template>
  <div class="collection__items">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.collection {
  &__items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
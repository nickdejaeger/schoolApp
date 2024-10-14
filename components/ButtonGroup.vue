<template>
  <div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
  div {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    align-items: center;
    margin: var(--component-margin);
  }
</style>
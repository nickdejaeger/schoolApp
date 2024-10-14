<template>
  <section class="container">
    <slot />
  </section>
</template>

<style scoped lang="scss">
  section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 4rem 0;
  }
</style>
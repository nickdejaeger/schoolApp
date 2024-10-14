<template>
  <header>
    <h2><slot /></h2>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  align-items: center;
  margin: 0 0 1rem 0;
  h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }
}
</style>
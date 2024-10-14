<template>
  <AppHeader />

  <main>
    <slot />
  </main>

  <AppFooter />
</template>

<style scoped lang="scss">
main {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
</style>
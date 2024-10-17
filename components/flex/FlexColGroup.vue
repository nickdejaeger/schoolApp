<template>
  <div>
    <slot />
  </div>
</template>

<style scoped lang="scss">
div {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: .5rem;
}
</style>
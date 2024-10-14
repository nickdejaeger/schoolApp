<template>
  <div class="divider">
    <slot />
  </div>
</template>

<style scoped lang="scss">
.divider {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: .5rem;
  width: 100%;
  text-align: center;

  &::before,
  &::after {
      border-bottom-width: 1px;
      border-bottom-style: solid;
      border-bottom-color: #000;
  }

  &::before {
      content: '';
      flex: 0 0 .5rem;
  }

  &::after {
      content: '';
      flex: 1 0 .5rem;
      width: 100%;
  }

  &:empty {
      gap: 0;

      &::after {
          flex: 1 0 0;
      }
  }

  &--transparent {
      &::before,
      &::after {
          border: 0;
      }
  }

  &--center {
      &::before {
          flex: 1 0 .5rem;
      }
  }

  &--right {
      &::before {
          flex: 1 0 .5rem;
      }
      &::after {
          flex: 0 0 .5rem;
      }
  }

  &.is-dimmed {
      opacity: 1;

      &::before,
      &::after {
          opacity: .25;
      }
  }

  &.is-inverted {
      &::before,
      &::after {
          border-color: #FFF;
      }
  }
}
</style>
<template>
  <button type="button" class="button">
    <slot name="icon"></slot>
    <slot>Default Button Text</slot>
  </button>
</template>

<style scoped lang="scss">
  .button {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: flex-start;
    gap: .5rem;

    background-color: rgba(140, 140, 140, 0.15);
    min-height: 2.5rem;
    border: 1px solid transparent;
    border-radius: 1.75rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.25s ease-in-out;

    padding: 0.5rem 1.5rem;

    &:hover {
      background-color: rgba(140, 140, 140, 0.25);
    }

    &--primary,
    &--secondary {
      color: #FFF;
    }

    &--primary {
      background-color: #007efd;

      &:hover {
        background-color: #0066ce;
      }
    }

    &--secondary {
      background-color: #de0000;

      &:hover {
        background-color: #ca1212;
      }
    }

    &--transparent {
      background-color: transparent;
      border: 1px solid $color-border;

      &:hover {
        background-color: rgba(0,0,0,.02)
      }
    }
  }
</style>
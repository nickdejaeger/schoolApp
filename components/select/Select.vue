<script setup lang="ts">
const selectedProject = ref(0)
const projects = [
  { id: 1, name: 'Project A' },
  { id: 2, name: 'Project B' },
  { id: 3, name: 'Project C' },
]
</script>

<template>

  <div class="select">
    <select v-model="selectedProject">
      <option value disabled selected class="placeholder">Choose...</option>
      <option v-for="project in projects" :value="project.id" :key="project.id">
        {{ project.name }}
      </option>
    </select>
    <span></span>
  </div>

</template>

<style scoped lang="scss">
.select {
  position: relative;
  border-radius: .5rem;
  cursor: pointer;

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: .5rem;
    background-color: #FFF;
    border: .075rem solid $color-border;
    padding: 0.5rem 2rem 0.5rem 1rem;
    cursor: pointer;
    min-width: 150px;
    transition: all .15s ease-in-out;
    box-shadow: $component-shadow;

    &:focus-visible {
      border-color: $color-border-focus;
      box-shadow: $component-shadow-focus;
    }

    &:hover {
      + span {
        opacity: 1;
      }
    }

    + span {
      position: absolute;
      top: .75rem;
      right: .75rem;
      border-right: 0.075rem solid rgb(0, 0, 0);
      border-bottom: 0.075rem solid rgb(0, 0, 0);
      width: .5rem;
      height: .5rem;
      transform: rotate(45deg);
      opacity: 0.5;
    }
  }
}

</style>
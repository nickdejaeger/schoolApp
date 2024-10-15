<script setup lang="ts">
defineProps({
  uid: {
    type: Number,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  klassen: {
    type: Array,
    default: ''
  },
  leerjaren: {
    type: Array,
    default: ''
  },
  voltooid: {
    type: Boolean,
    default: false
  }
})
</script>

<template>

  <NuxtLink :to="`/lessen/${uid}`">
    <article :class="{ voltooid }">
      <header>
        <h2>{{ title }}</h2>
        <div>
          <span v-if="voltooid" class="flex items-center gap-1"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Uitgevoerd</span>
        </div>
      </header>
      
      <div v-if="klassen.length" class="flex gap-2">Klassen: <Tag v-for="klas in klassen">{{ klas }}</Tag></div>
      <div v-if="leerjaren.length" class="flex gap-2">Leerjaren: <Tag v-for="leerjaar in leerjaren">{{ leerjaar }}</Tag></div>
    </article>
  </NuxtLink>

</template>

<style scoped lang="scss">
article {
  display: flex;
  flex-direction: column;
  gap: .5rem;
  background-color: #EEE;
  border: 2px dashed orange;
  border-radius: .75rem;
  padding: 1.5rem 2rem;
  margin: 1.5rem 0;
  width: 100%;

  &.voltooid {
    border-color: green;
    border-style: solid;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
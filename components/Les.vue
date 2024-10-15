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

  <NuxtLink :to="`/lessen/${uid}`" class="les" :class="{ voltooid }">
    <header>
      <h2>{{ title }}</h2>
      <div>
        <span v-if="voltooid" class="flex items-center gap-1"><svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"><polyline points="20 6 9 17 4 12" /></svg>Uitgevoerd</span>
      </div>
    </header>
    <div class="flex flex-col gap-2">
      <div v-if="klassen.length" class="flex items-center gap-2">Klassen: <Tag v-for="klas in klassen">{{ klas }}</Tag></div>
      <div v-if="leerjaren.length" class="flex items-center gap-2">Leerjaren: <Tag v-for="leerjaar in leerjaren">{{ leerjaar }}</Tag></div>
    </div>
  </NuxtLink>

</template>

<style scoped lang="scss">
.les {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #ffa50069;
  border-radius: .75rem;
  padding: 1rem 1.25rem;
  width: 100%;

  &.voltooid {
    background-color: #00800052;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
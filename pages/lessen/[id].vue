<script setup lang="ts">
const route = useRoute()
const routeId = route.params.id

const lessen = ref([
  { 
    id: 1,
    name: 'Les A',
    vak: '',
    leerplanddoelen: '',
    klassen: ['1A', '1B', '2A'],
    leerjaren: ['1ste', '2de', '3de'],
    voltooid: false
  },
  { id: 2, name: 'Les B', vak: '', leerplanddoelen: '', klassen: ['2A', '2B'], leerjaren: ['2de', '3de'], voltooid: true },
  { id: 3, name: 'Les C', vak: '', leerplanddoelen: '', klassen: ['3A', '3B'], leerjaren: [], voltooid: false },
])


</script>

<template>
  <PageContent>
    <div v-for="les in lessen" :key="les.id">
      <div v-if="les.id == routeId">
        <NuxtLink to="/lessen" class="link">Terug naar overzicht</NuxtLink>
        <PageHeader>{{ les.name }}</PageHeader>
      </div>
    </div>
  </PageContent>
</template>
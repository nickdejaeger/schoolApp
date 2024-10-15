<script setup lang="ts">
const selectedProject = ref(0)
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
    <PageHeader>Lessen</PageHeader>
    <section class="flex flex-col gap-4 w-full">
      <Les v-for="les in lessen"
        :key="les.id"
        :uid="les.id"
        :title="les.name"
        :vak="les.vak"
        :leerplanddoelen="les.leerplanddoelen"
        :klassen="les.klassen"
        :leerjaren="les.leerjaren"
        :voltooid="les.voltooid"
      ></Les>
    </section>
  </PageContent>
</template>

<style scoped lang="scss">

</style>
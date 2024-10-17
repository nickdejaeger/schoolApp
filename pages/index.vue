<script setup>
const { data } = await useFetch('/api/students')
</script>

<template>
  <SideBar></SideBar>
  <PageContent>
    
    {{ data }}

  </PageContent>
</template>
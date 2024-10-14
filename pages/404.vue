<script setup lang="ts">
useHead({
  title: 'Test page',
  meta: [
    { name: 'description', content: '404 error page' }
  ]
})

definePageMeta({
  layout: false
})
</script>

<template>
  <NuxtLayout name="404">
    <template #header>Test page 404</template>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus odit magnam quas in nihil natus ullam itaque quo, repellendus aliquam esse officia animi atque facilis, impedit, nobis voluptates sequi saepe.
  </NuxtLayout>
</template>
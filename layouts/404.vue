<script setup lang="ts">
const title = ref('Error 404')
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <Style type="text/css" children="body { background-color: black; color: #FFF; }" ></Style>
  </Head>

  <AppHeader />

  <main class="container">
    <section>
      <h1><slot name="header">Default header content</slot></h1>
      <slot />
    </section>
  </main>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 12rem;
  h1 {
    font-size: 4rem;
    font-weight: 900;
  }
}
</style>
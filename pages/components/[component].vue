<script setup lang="ts">
const route = useRoute()
const component = route.params.component
const componentCap = component[0].toUpperCase() + component.slice(1)

useHead({
  title: componentCap + ' component',
  meta: [
    { name: 'description', content: 'Learn everything about ' + componentCap + ' component.' }
  ]
})

definePageMeta({
  layout: 'component'
})

const textareaContent = ref('')
const textareaContent2 = ref('')
</script>

<template>
  <PageHeader>{{ componentCap }}</PageHeader>

  <article v-if="component === 'badge'">
    <Badge>
      <template #name>Jeff Bezos</template>
      <template #job>CEO</template>
    </Badge>
  </article>

  <article v-if="component === 'button'">
    <ButtonGroup>
      <Button>Default</Button>
      <Button class="button--primary">
        <template #icon>
          <i class="fa-solid fa-magnifying-glass"></i>
        </template>
        Search
      </Button>
      <Button class="button--secondary">Secondary</Button>
      <Button class="button--transparent">Transparent</Button>
    </ButtonGroup>

    <ButtonGroup>
      <Button>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat, aperiam labore voluptatum eos soluta omnis totam doloremque? Ipsam, quasi ipsum. Asperiores cum iure, assumenda sint deleniti vitae magni tempore.</Button>
    </ButtonGroup>
  </article>

  <article v-if="component === 'input'">
    <Input />
    <Input label="Enter your name" placeholder="Name" value="Nick" />
    <Input type="email" label="Enter your email" placeholder="Email" />
    <Input type="password" label="Enter your password" placeholder="Password" />
    
    <Textarea
      v-model="textareaContent"
      placeholder="Enter your text here"
      :required="true"

      label="Description"
    />

    <Textarea v-model="textareaContent2" />
  </article>

</template>

<style scoped lang="scss">
article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  position: relative;
  background-color: rgba(0,0,0,.03);
  border-radius: 1rem;
  margin: 2rem 0;
  padding: 1rem;

  header {
    margin: 0 0 1rem;
    padding: 0 0 .5rem;
    border-bottom: 1px dashed #000;
  }
}
</style>
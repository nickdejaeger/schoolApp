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

const switchOptions = ref([
  {
    label: "Lorem",
    value: "Lorem",
    selected: true,
  },
  {
    label: "Ipsum",
    value: "Ipsum",
    selected: false,
  },
])

const switchOptions2 = ref([
  {
    label: "Red",
    value: "Lorem",
    selected: false,
  },
  {
    label: "Blue",
    value: "Ipsum",
    selected: true,
  },
  {
    label: "Green",
    value: "Ipsum",
    selected: false,
  },
])
</script>

<template>
  <PageHeader>{{ componentCap }}</PageHeader>

  <article v-if="component === 'button'">
    <FlexRowGroup>
      <Button>Default</Button>
      <Button type="primary">Lorem ipsum</Button>
      <Button>
        <template #icon>
          <i class="fa-solid fa-magnifying-glass"></i>
        </template>
        Search
      </Button>
      <Button type="secondary">Secondary</Button>
    </FlexRowGroup>
  </article>

  <article v-if="component === 'field'">

    <FlexColGroup>
      <Input :modelValue="'with pre value'" />
      <Input placeholder="with placeholder" />
      <Input type="password" :modelValue="'password'" />
      <Input type="textarea" :modelValue="'textarea'" />
      <Input type="textarea" placeholder="placeholder textarea" />
      <Input type="checkbox" :modelValue="'this is a checkbox'" />

      <Field label="this is a label">
        <Input :modelValue="'combo field + input'" />
      </Field>

    </FlexColGroup>

  </article>

  <article v-if="component === 'switch'">

    <FlexColGroup>
      <Switch :options="switchOptions"></Switch>
      <Switch :options="switchOptions2"></Switch>
    </FlexColGroup>

  </article>
</template>

<style scoped lang="scss">
article {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  position: relative;

  header {
    margin: 0 0 1rem;
    padding: 0 0 .5rem;
    border-bottom: 1px dashed #000;
  }
}
</style>
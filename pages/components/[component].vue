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

  <article v-if="component === 'collection'">
    <Collection>
      <CollectionItems>
        <CollectionRow class="bg-cloud">
          <CollectionCell>All</CollectionCell>
        </CollectionRow>
        <CollectionRow class="bg-cloud is-disabled">
          <CollectionCell>Hybrid</CollectionCell>
          <CollectionCell class="collection__cell--action"><i class="fa-solid fa-magnifying-glass"></i></CollectionCell>
        </CollectionRow>
        <CollectionRow class="bg-cloud">
          <CollectionCell>On-site</CollectionCell>
        </CollectionRow>
        <CollectionRow class="bg-cloud">
          <CollectionCell>Remote</CollectionCell>
        </CollectionRow>
      </CollectionItems>
    </Collection>
    <Collection class="bg-cloud">
      <CollectionItems>
        <CollectionRow>
          <CollectionCell class="collection__cell--action"><i class="fa-solid fa-plus"></i></CollectionCell>
          <CollectionCell>Create Smartlist</CollectionCell>
        </CollectionRow>
        <CollectionRow>
          <CollectionCell class="collection__cell--action"><i class="fa-solid fa-plus"></i></CollectionCell>
          <CollectionCell>Create as Smartlist</CollectionCell>
        </CollectionRow>
      </CollectionItems>
    </Collection>
    <Divider class="is-dotted is-dimmed" />
    <Collection class="bg-cloud">
      <CollectionItems>
        <CollectionRow>
          <CollectionCell class="collection__cell--action"><i class="fa-solid fa-check"></i></CollectionCell>
          <CollectionCell>Save changes</CollectionCell>
        </CollectionRow>
      </CollectionItems>
    </Collection>
    <Divider class="is-dotted is-dimmed" />
    <Collection class="bg-cloud">
      <CollectionItems>
        <CollectionRow>
          <CollectionCell class="collection__cell--action"><i class="fa-solid fa-display"></i></CollectionCell>
          <CollectionCell>Full screen</CollectionCell>
        </CollectionRow>
      </CollectionItems>
    </Collection>
  </article>

  <article v-if="component === 'divider'" class="gap-6">
    <Divider></Divider>
    <Divider class="is-dimmed is-dashed"></Divider>
    <Divider class="divider--center">Label</Divider>
    <Divider></Divider>
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

  <article v-if="component === 'select'">
    <Select></Select>
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
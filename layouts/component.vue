<template>
  <AppHeader />

  <main class="container">
    <SideBar>
      <nav>
        <NuxtLink :to="{ path: '/components/accordion'}">Accordion</NuxtLink>
        <NuxtLink :to="{ path: '/components/attachment'}">Attachment</NuxtLink>
        <NuxtLink :to="{ path: '/components/autocomplete'}">Autocomplete</NuxtLink>
        <NuxtLink :to="{ path: '/components/badge'}">Badge</NuxtLink>
        <NuxtLink :to="{ path: '/components/button'}">Button</NuxtLink>
        <NuxtLink :to="{ path: '/components/breadcrumbs'}">Breadcrumbs</NuxtLink>
        <NuxtLink :to="{ path: '/components/card'}">Card</NuxtLink>
        <NuxtLink :to="{ path: '/components/checkbox'}">Checkbox</NuxtLink>
        <NuxtLink :to="{ path: '/components/collection'}">Collection</NuxtLink>
        <NuxtLink :to="{ path: '/components/command'}">Command</NuxtLink>
        <NuxtLink :to="{ path: '/components/comment'}">Comment</NuxtLink>
        <NuxtLink :to="{ path: '/components/context'}">Context</NuxtLink>
        <NuxtLink :to="{ path: '/components/divider'}">Divider</NuxtLink>
        <NuxtLink :to="{ path: '/components/dropdown'}">Dropdown</NuxtLink>
        <NuxtLink :to="{ path: '/components/field'}">Field</NuxtLink>
        <NuxtLink :to="{ path: '/components/heading'}">Heading</NuxtLink>
        <NuxtLink :to="{ path: '/components/icon'}">Icon</NuxtLink>
        <NuxtLink :to="{ path: '/components/input'}">Input</NuxtLink>
        <NuxtLink :to="{ path: '/components/modal'}">Modal</NuxtLink>
        <NuxtLink :to="{ path: '/components/radio'}">Radio</NuxtLink>
        <NuxtLink :to="{ path: '/components/select'}">Select</NuxtLink>
        <NuxtLink :to="{ path: '/components/separator'}">Separator</NuxtLink>
        <NuxtLink :to="{ path: '/components/switch'}">Switch</NuxtLink>
        <NuxtLink :to="{ path: '/components/tabs'}">Tabs</NuxtLink>
        <NuxtLink :to="{ path: '/components/textarea'}">Textarea</NuxtLink>
        <NuxtLink :to="{ path: '/components/toast'}">Toast</NuxtLink>
        <NuxtLink :to="{ path: '/components/tooltip'}">Tooltip</NuxtLink>
        <NuxtLink :to="{ path: '/components/widget'}">Widget</NuxtLink>
        <h6>Advanced</h6>
        <NuxtLink :to="{ path: '/components/gallery'}">Gallery</NuxtLink>
        <NuxtLink :to="{ path: '/components/navbar'}">Navbar</NuxtLink>
        <NuxtLink :to="{ path: '/components/table'}">Table</NuxtLink>
      </nav>
    </SideBar>
    <PageContent>
      <slot />
    </PageContent>
  </main>

  <AppFooter />
</template>

<style scoped lang="scss">
main {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
}
nav {
  display: flex;
  flex-direction: column;
  gap: 0;

  h6 {
    padding: 0 0 .5rem;
    margin: 1.5rem 0 0 0;
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
  }

  a {
    position: relative;
    opacity: .65;
    font-size: 1.1rem;
    line-height: 1.2;
    padding: 0.25rem 0.5rem 0.25rem 1.5rem;
    border-radius: .25rem;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      border-right: 2px solid #EEE;
    }

    &:focus-visible {
      outline: 0;
      background-color: #EEE;
    }

    &:hover {
      opacity: 1;

      &::before {
        border-color: #000;
      }
    }

    &.router-link-active {
      opacity: 1;

      &::before {
        border-color: #000;
      }
    }
  }
}
</style>
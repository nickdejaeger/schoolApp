<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useFiltersStore } from '~/store/filters'

const inputVal = ref('')

const filtersStore = useFiltersStore()
const { addValueToFilterList } = filtersStore
const { filtersList } = storeToRefs(filtersStore)



import { useCartStore } from '~/store/cart'

const cccartStore = useCartStore()

const { addValueToCartList } = cccartStore
const { emptyTheCart } = cccartStore
const { cartList } = storeToRefs(cccartStore)


const courses = ref([
  {
    id: "itm1",
    price: "65.00",
    quantity: 0,
    title: "Animation",
  },
  {
    id: "itm2",
    price: "52.00",
    quantity: 0,
    title: "Design",
  },
  {
    id: "itm3",
    price: "76.00",
    quantity: 0,
    title: "Photography",
  },
  {
    id: "itm4",
    price: "84.00",
    quantity: 0,
    title: "Crypto",
  },
]);

</script>

<template>

  <SideBar />

  <PageContent>

    <PageHeader>Pinia Store</PageHeader>

    <div>
      <div class="flex items-center">
        <Input v-model="inputVal" placeholder="Add streaming service" label="Name" />
        <Button @click="addValueToFilterList(inputVal)" class="button--primary">Add service</Button>
      </div>
      <div>{{ filtersList }}</div>
    </div>



    <div class="flex flex-col items-start gap-2 mt-12">
      <div class="flex items-center justify-between w-full mb-2">Products in cart: {{ cartList }} <Button @click="emptyTheCart" class="button--secondary">Empty cart</Button></div>
      <div v-for="(item, index) in courses" :key="index" class="flex items-center gap-2">
        <span>{{ item.title }} - {{ item.price }}</span>
        <Button @click="addValueToCartList(1)" class="button--primary">Add to cart</Button> 
      </div>
    </div>




  </PageContent>

</template>
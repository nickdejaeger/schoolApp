
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cartStore', () => {
  const cartList = ref(0)

  function addValueToCartList(value: number) {
    cartList.value++
  }

  function emptyTheCart() {
    cartList.value = 0
  }
  
  return { addValueToCartList, emptyTheCart, cartList }
})
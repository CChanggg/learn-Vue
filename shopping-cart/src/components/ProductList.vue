<template>
  <ul>
    <!-- 共享数据 -->
    <li v-for="p in products">
      {{ p.title }} - {{ p.price | currency}}
      <br>
      <button @click="addToCart(p)">Add To Cart</button>
    </li>
  </ul>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  computed: mapGetters({
      products: 'allProducts'
    }),
    created () {
      // 一个程序只能有一个状态树
      this.$store.dispatch('getAllProducts')
    },
    //借方法
    methods:mapActions([
      'addToCart'
    ])
  }
</script>

<style>

</style>

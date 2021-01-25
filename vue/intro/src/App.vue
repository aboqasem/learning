<template>
  <div class="nav-bar">
    <h1 style="text-align: center; margin: 0">{{ name }}</h1>
  </div>
  <div class="cart">Cart({{ cart.length }})</div>
  <ul>
    <li v-for="({ name, description, imgs, stock }, i) in products" :key="name">
      <div class="product-display">
        <div class="product-container">
          <ul>
            <li v-for="img in imgs" :key="img">
              <div class="product-image">
                <img :src="img" :alt="description" />
              </div>
            </li>
          </ul>
          <div class="product-info">
            <h2>{{ name }}</h2>
            <p>{{ description }}</p>
            <div v-if="stock > 0">
              In Stock: {{ stock }}
              <p class="button" @click="addToCart(products[i])">Add to Cart</p>
            </div>
            <p v-else>Out of Stock</p>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Not So Shoppy",
      cart: [],
      products: [
        {
          name: "Socks",
          description: "Pair of socks to warm your feet.",
          imgs: [
            "./assets/images/socks_blue.jpg",
            "./assets/images/socks_green.jpg",
          ],
          stock: 10,
        },
        {
          name: "Shoes",
          description: "Pair of shoes to get you walky.",
          imgs: [
            "./assets/images/socks_blue.jpg",
            "./assets/images/socks_green.jpg",
          ],
          stock: 3,
        },
      ],
    };
  },
  methods: {
    addToCart(item) {
      this.cart.push(item);
      item.stock--;
    },
  },
};
</script>

<style>
</style>

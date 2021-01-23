<template>
  <div class="nav-bar">
    <h1 style="text-align: center; margin: 0">{{ name }}</h1>
  </div>
  <ul>
    <div class="product-display">
      <div class="product-container">
        <li v-for="{ name, description, imgs } in products" :key="name">
          <ul>
            <li v-for="img in imgs" :key="img">
              <div class="product-image">
                <img :src="img" :alt="img" />
              </div>
            </li>
          </ul>
          <div class="product-info">
            <h2>{{ name }}</h2>
            <p>{{ description }}</p>
          </div>
        </li>
      </div>
    </div>
  </ul>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "Not So Shoppy",
      products: [
        {
          name: "Socks",
          description: "Pair of socks to warm your feet.",
          imgs: [
            "./assets/images/socks_blue.jpg",
            "./assets/images/socks_green.jpg",
          ],
        },
      ],
    };
  },
};
</script>

<style>
</style>

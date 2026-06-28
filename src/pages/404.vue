<template>
  <main class="mainlines">
    <h1>404: Page not found</h1>
    <router-link to="/">Back to home</router-link>
  </main>
</template>

<script>
import { settings } from "@/stores/settings";

export default {
  name: "404",
  components: {},
  data() {
    return {
      settings: settings(),
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style scoped>
  main {
    width: 100%;
  }
</style>

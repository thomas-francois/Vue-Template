<template>
  <article>
    <header>
      <h1>404: Page not found</h1>
    </header>
      <router-link to="/">Back to home</router-link>
  </article>
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

<style scoped></style>

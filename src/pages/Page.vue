<template>
  <article>
    <header>
      <h1>Page</h1>
    </header>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
    est laborum.
  </article>
</template>

<script>
import { settings } from "@/stores/settings";

export default {
  name: "Page",
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

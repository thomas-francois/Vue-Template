<template>
  <Navbar />
  <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";

import { settings } from "@/stores/settings";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {
      settings: settings(),
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
#app {
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
}
</style>

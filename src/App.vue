<template>
  <Navbar />
  <main>
    <router-view />
  </main>
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
  mounted() {
    this.settings.setTheme(this.settings.theme);
  },
};
</script>

<style>
#app {
  height: 100%;
  width: 100vw;
  overflow-x: hidden;
}
</style>

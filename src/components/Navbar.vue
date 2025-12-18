<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li>|</li>
      <li><router-link to="/page">Page</router-link></li>
    </ul>
    <ul>
      <li>
        <a
          href="#"
          data-theme-switcher="dark"
          @click="settings.setTheme('dark')"
        >
          <Moon />
          Dark
        </a>
      </li>
      <li>
        <a
          href="#"
          data-theme-switcher="light"
          @click="settings.setTheme('light')"
        >
          <Sun />
          Light
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { settings } from "@/stores/settings";
import Moon from "@/assets/svg/moon.svg";
import Sun from "@/assets/svg/sun.svg";

export default {
  name: "Navbar",
  components: {
    Moon,
    Sun,
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

<style scoped>
nav {
  svg {
    height: 1.5rem;
  }
  padding: 0 var(--pico-block-spacing-horizontal);
}
</style>

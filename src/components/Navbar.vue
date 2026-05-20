<template>
  <nav>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/page">Page</router-link></li>
    </ul>
    <ul>
      <li>
        <button
          type="button"
          :aria-pressed="settings.theme === 'dark'"
          aria-label="Use dark theme"
          @click="settings.setTheme('dark')"
        >
          <Moon aria-hidden="true" /> Dark
        </button>
      </li>
      <li>
        <button
          type="button"
          :aria-pressed="settings.theme === 'light'"
          aria-label="Use light theme"
          @click="settings.setTheme('light')"
        >
          <Sun aria-hidden="true" /> Light
        </button>
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
  padding: 0 var(--pico-block-spacing-horizontal);

  svg {
    height: 1.5rem;
    vertical-align: middle;
  }

  button {
    padding: 0.25rem 0.5rem;
    background: none;
    border: none;
    color: inherit;
  }

  ul li + li::before {
    content: "|";
    margin-right: 1rem;
    opacity: .4;
  }
}
</style>

<template>
  <nav>
    <button
      type="button"
      aria-label="Open menu"
    >
      <span class="material-symbols-rounded">menu</span>
    </button>
    <ul role="list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/page">Page</router-link></li>
    </ul>
    <button
      type="button"
      aria-label="Toggle theme"
      @click="settings.toggleTheme()"
    >
      <span v-if="settings.theme == 'light'" class="material-symbols-rounded">bedtime</span>
      <span v-if="settings.theme == 'dark'" class="material-symbols-rounded">wb_sunny</span>
    </button>
  </nav>
</template>

<script>
import { settings } from "@/stores/settings";

export default {
  name: "Navbar",
  components: {
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

<style scoped lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: var(--space-xs) calc((100vw - 1000px) / 4 - 24px);

  @include large {
    width: 100%;
    max-width: 1000px;
    margin: var(--space-xs) auto;
  }

  @include medium {
    width: auto;
    max-width: auto;
    margin: var(--space-xs) calc(var(--space-xs-s) + var(--space-s));
  }

  ul {
    display: flex;
    gap: var(--space-s);
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
}
</style>

<template>
  <Navbar />
  <router-view />
  <svg aria-hidden="true" style="position: absolute; width: 0; height: 0;">
    <filter id="noise">
      <feTurbulence baseFrequency="0.5" numOctaves="1" seed="1" />
    </filter>
  </svg>
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
  methods: {
    updatePointerPosition(event) {
      document.documentElement.style.setProperty(
        "--pointer-x",
        `${event.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--pointer-y",
        `${event.clientY}px`
      );
    },

  },
  mounted() {
    this.settings.setTheme(this.settings.theme);
    window.addEventListener("mousemove", this.updatePointerPosition);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.updatePointerPosition);
  }
};
</script>

<style lang="scss">
body {
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: var(--space-l);
  min-height: 100vh;
}

html {
  background-color: var(--color-bg-raw);
}

html::before,
html::after {
  content: "";
  position: fixed;
  pointer-events: none;
  z-index: -1;
  inset: 0;
  filter: url("#noise") grayscale(100%);
  mix-blend-mode: hard-light;
  opacity: 0.35;
}
html::after {
  opacity: 1;
  mask-image: radial-gradient(
      circle 150px at var(--pointer-x) var(--pointer-y),
      #000 0%,
      #0000 70%
    );
}
</style>

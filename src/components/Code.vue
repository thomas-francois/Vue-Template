<template>
  <div class="code-block">
    <button v-if="copyable">
      <span v-if="copied"@click="copy" class="material-symbols-rounded">done</span>
      <span v-else @click="copy" class="material-symbols-rounded">content_copy</span>
    </button>
    <pre>
      <code v-if="!hide" ref="code"><slot></slot></code>
    </pre>
  </div>
</template>

<script>
import { settings } from "@/stores/settings";
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark.css'
import 'highlight.js/styles/github.css'

export default {
  name: "Code",
  props: {
    copyable: {
      type: Boolean,
      default: false,
    },
  },
  components: {},

  data() {
    return {
      settings: settings(),
      copied: false,
    };
  },
  methods: {
    copy() {
      this.copied = true;
      navigator.clipboard.writeText(this.$refs.code.textContent);
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
    updateHighlight() {
      this.$nextTick(() => {
          hljs.highlightElement(this.$refs.code);
          this.$refs.code.className = this.settings.theme === 'dark' ? 'hljs-dark' : 'hljs-light';
      });
      console.log("test")
    }
  },
  mounted() {
    this.updateHighlight();
  },
  watch: {
    'settings.theme'() {
      this.updateHighlight();
    }
  }
};
</script>

<style scoped>
div {
  position: relative;
  width: fit-content;
}

pre {
  width: fit-content;
  white-space: normal;
  background-color: var(--color-bg);
  padding: var(--space-s);
  margin: var(--space-s);
}
code {
  white-space: pre-line;
}
button {
  position: absolute;
  top: var(--space-3xs);
  right: var(--space-3xs);
  transform: translateX(-100%);
  border-radius: var(--radius-s);
}
</style>
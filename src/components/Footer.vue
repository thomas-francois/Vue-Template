<template>
  <footer>
    <template v-if="!text">
      <a>Credits</a>
      <a>2026&thinsp;©</a>
    </template>
    <p v-else>{{text}}</p>
  </footer>
</template>

<script>
import { settings } from "@/stores/settings";

export default {
  name: "Footer",
  components: {
  },
  props: {
    text: {
      type: String,
      default: null,
    },
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
footer {
  position: absolute;
  display: flex;
  align-items: center;
  bottom: 0;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  padding: var(--space-xs) 0;
  height: var(--space-l-xl);
}
a {
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
</style>

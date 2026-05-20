import { defineStore } from "pinia";

export const settings = defineStore("settings", {
  state: () => ({
    theme: localStorage.getItem("theme") || "dark",
  }),
  actions: {
    setTheme(theme) {
      this.theme = theme;
      localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    },
  },
});

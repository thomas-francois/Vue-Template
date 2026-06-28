import { defineStore } from "pinia";

export const settings = defineStore("settings", {
  state: () => ({
    theme: localStorage.getItem("theme") || "dark",
  }),
  actions: {
    setTheme(theme) {
      this.theme = theme;
      localStorage.setItem("theme", theme);
      document.documentElement.style.colorScheme = theme;
    },
    toggleTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      this.setTheme(this.theme);
    }
  },
});

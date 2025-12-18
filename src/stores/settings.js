import { defineStore } from "pinia";

export const settings = defineStore("settings", {
  state: () => ({
    theme: "dark",
  }),
  actions: {
    setTheme(newTheme) {
      if (newTheme === "light" || newTheme === "dark") {
        this.theme = newTheme;
        document.querySelector("html")?.setAttribute("data-theme", newTheme);
      }
    },
  },
});

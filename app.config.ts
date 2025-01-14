export default defineAppConfig({
  ui: {
    primary: "red",

    gray: "cool",

    card: {
      background: "dark:bg-second #0C0C0C",
      body: {
        background: "#0C0C0C",
        base: "#0C0C0C",
      },
    },
    input: {
      padding: {
        xl: "p-10",
      },
      rounded: "rounded-none",

      default: {
        variant: "outline",
      },
    },
    textarea: {
      rounded: "rounded-none",
    },
  },
});

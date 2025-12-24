// tailwind.config.js
// Tailwind theme for dark/grunge + professional variants.
export default {
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          display: ["ui-sans-serif", "system-ui", "sans-serif"],
          mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"]
        }
      }
    },
    plugins: []
  };
  
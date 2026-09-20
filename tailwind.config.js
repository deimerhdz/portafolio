/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "azul-noche": "#0B0F2B", // Primario[cite: 1]
        esmeralda: "#3ECF8E", // Acento[cite: 1]
        grafito: "#1C2033", // Secundario[cite: 1]
        "blanco-hueso": "#F5F6F8", // Neutro claro[cite: 1]
        "negro-azulado": "#05070F", // Texto sobre fondos claros[cite: 1]
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        techsolution: {
          primary: "#4169E1",    // Azul escuro para o tema principal
          secondary: "#3b82f6", // Azul para badges secundários (substitui o rosa)
          accent: "#10b981",    // Verde para acentos
          neutral: "#1f2937",   // Cinza escuro para neutro
          "base-100": "#ffffff", // Fundo branco
          info: "#3b82f6",      // Azul para informações
          success: "#22c55e",   // Verde para sucesso
          warning: "#f59e0b",   // Amarelo para avisos
          error: "#ef4444",     // Vermelho para erros
        },
      },
      "light", // Mantém o tema light como fallback
    ],
  },
}


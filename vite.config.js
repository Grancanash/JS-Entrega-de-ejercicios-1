// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
        ejercicio1: "js_ejercicio_1.html",
        ejercicio2: "js_ejercicio_2.html",
        ejercicio3: "js_ejercicio_3.html",
        ejercicio4: "js_ejercicio_4.html",
        ejercicio5: "js_ejercicio_5.html",
        ejercicio6: "js_ejercicio_6.html",
        ejercicio7: "js_ejercicio_7.html",
        ejercicio8: "js_ejercicio_8.html",
        ejercicio9: "js_ejercicio_9.html",
      }
    }
  },
  // Aquí puedes añadir tus configuraciones de Vite
  // Por ejemplo, para el problema de la detección de cambios:
  server: {
    watch: {
      usePolling: true // Habilita el "polling"
    }
  },
  // O por ejemplo, para usar rutas relativas en los enlaces generados en el HTML (Te evitas problemas de rutas al desplegar en un servidor)
  base: './',
});
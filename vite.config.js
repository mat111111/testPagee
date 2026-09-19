import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ IMPORTANTE PARA GITHUB PAGES ⚠️
// Cambiá "nombre-del-repo" por el nombre EXACTO de tu repositorio en GitHub.
// Ejemplo: si tu repo es https://github.com/usuario/mi-web, poné '/mi-web/'
export default defineConfig({
  base: '/TestPage/',
  plugins: [react()],
})

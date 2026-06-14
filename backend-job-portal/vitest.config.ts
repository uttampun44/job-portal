import { defineConfig } from 'vitest/config'
import path from 'path'

export default defineConfig({
  test: {
     globals: true,
    environment: "node",
  },
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@schema": path.resolve(__dirname, "./src/schema"),
      "@controllers": path.resolve(__dirname, "./src/controllers"),
      "@routes": path.resolve(__dirname, "./src/routes"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@services": path.resolve(__dirname, "./src/services"),
      "@types": path.resolve(__dirname, "./src/types"),
      
    },
  },
})
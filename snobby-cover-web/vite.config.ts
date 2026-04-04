import { defineConfig, type Plugin } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

/** Figma Make 外の通常 Vite ビルド用: figma:asset/foo.png → /snobbycover-pc/foo.png */
function figmaAssetPublicUrl(): Plugin {
  const prefix = '\0figma-asset:'
  return {
    name: 'figma-asset-public-url',
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        return prefix + id.slice('figma:asset/'.length)
      }
      return null
    },
    load(id) {
      if (id.startsWith(prefix)) {
        const file = id.slice(prefix.length)
        return `export default "/snobbycover-pc/${file}"`
      }
      return null
    },
  }
}

export default defineConfig({
  plugins: [
    figmaAssetPublicUrl(),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})

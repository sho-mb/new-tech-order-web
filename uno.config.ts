import { defineConfig } from 'unocss'
import { presetUno, presetWebFonts } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        montserrat: 'Montserrat:400,700'
      }
    }),
  ],
})
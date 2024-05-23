import { defineConfig } from 'unocss'
import { presetUno, presetWebFonts } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy({
      styled: false,
      themes: ['light'],
      base: false,
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        montserrat: 'Montserrat:400,700'
      }
    }),
  ],
})
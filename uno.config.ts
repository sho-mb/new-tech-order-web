import { presetUno, presetWebFonts, defineConfig, presetIcons } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export default defineConfig({
  presets: [
    presetUno(),
    presetDaisy({
      styled: false,
      themes: ['light'],
      base: false,
    }),
    presetIcons({
      // options
      prefix: 'i-',
      extraProperties: {
        display: 'inline-block',
      },
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        montserrat: 'Montserrat:400,700',
      },
    }),
  ],
  theme: {
    container: {
      center: true,
    },
  },
})

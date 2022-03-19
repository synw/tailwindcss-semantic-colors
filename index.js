const plugin = require('tailwindcss/plugin')

const semanticColors = plugin(
  function ({ addUtilities, theme, variants, e }) {
    const values = theme('semanticColors')
    addUtilities(
      [
        Object.entries(values).map(([key, value]) => {
          return {
            [`.${e(`${key}`)}`]: {
              backgroundColor: `${value.light.bg}`,
              color: `${value.light.txt}`,
            },
            [`.txt-${e(`${key}`)}`]: {
              color: `${value.light.bg}`,
            },
            [`.block-${e(`${key}`)}`]: {
              backgroundColor: `${value.light.bg}`,
            },
            [`.bord-${e(`${key}`)}`]: {
              borderColor: `${value.light.bg}`,
            },
            '.dark': {
              [`& .${e(`${key}`)}`]: {
                backgroundColor: `${value.dark.bg}`,
                color: `${value.dark.txt}`,
              },
              [`& .txt-${e(`${key}`)}`]: {
                color: `${value.dark.bg}`,
              },
              [`& .block-${e(`${key}`)}`]: {
                backgroundColor: `${value.dark.bg}`,
              },
              [`& .bord-${e(`${key}`)}`]: {
                borderColor: `${value.dark.bg}`,
              },
            },
          }
        }),
      ],
      variants('semanticColors')
    )
  },
  {
    variants: {
      semanticColors: ['hover', 'dark', 'responsive', 'active', 'focus', 'required', 'invalid', 'disabled', 'file', 'marker', 'selection'],
    },
  }
)

module.exports = semanticColors
import plugin from 'tailwindcss/plugin'

export default plugin(function ({ addUtilities, theme, e, variants }) {
    const semanticColors = theme('semanticColors', {})
    const utilities = {}

    // Generate utilities for each semantic color
    Object.entries(semanticColors).forEach(([colorName, colorConfig]) => {
        // Main utility (background + text)
        utilities[`.${e(colorName)}`] = {
            'background-color': colorConfig.light.bg,
            'color': colorConfig.light.txt,
            '@media (prefers-color-scheme: dark)': {
                'background-color': colorConfig.dark.bg,
                'color': colorConfig.dark.txt
            }
        }

        // Text only utility
        utilities[`.${e(`txt-${colorName}`)}`] = {
            'color': colorConfig.light.bg,
            '@media (prefers-color-scheme: dark)': {
                'color': colorConfig.dark.bg
            }
        }

        // Background only utility
        utilities[`.${e(`block-${colorName}`)}`] = {
            'background-color': colorConfig.light.bg,
            '@media (prefers-color-scheme: dark)': {
                'background-color': colorConfig.dark.bg
            }
        }

        // Border utility
        utilities[`.${e(`bord-${colorName}`)}`] = {
            'border-color': colorConfig.light.bg,
            '@media (prefers-color-scheme: dark)': {
                'border-color': colorConfig.dark.bg
            }
        }
    })

    addUtilities(utilities, {
        variants: ['responsive', 'hover', 'focus', 'active', 'disabled']
    })
})

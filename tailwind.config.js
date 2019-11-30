module.exports = {
  important: true,
  theme: {
    boxShadow: {
      default: '0 1px 5px -4px rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .1)',
      md: '0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .5)',
      xl: '0 0 20px -10px rgba(0, 0, 0, .1), 0 5px 10px -5px rgba(0, 0, 0, .5)',
      '2xl': '0 5px 50px -12px rgba(0, 0, 0, .5)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, .5)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(66,153,225,0.5)',
      focus: '0 0 0 3px rgba(66,153,225,0.5)',
      none: 'none',
    },
    inset: {
      '0': 0,
      20: '20px',
      auto: 'auto',
      '1/2': '50%',
    },
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      '200': '200px',
      '300': '300px',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['Centauri', 'sans-serif'],
      head: ['Nord', 'sans-serif'],
      body: ['Cabin', 'sans-serif'],
    },
    fontSize: {
      tiny: '.65rem',
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    borderWidth: {
      default: '1px',
      '0': '0',
      '1': '2px',
      '2': '4px',
      '3': '6px',
    },
    borderRadius: {
      none: '0',
      sm: '.125rem',
      default: '.25rem',
      lg: '.5rem',
      full: '9999px',
      circle: '50%',
    },
    colors: {
      tran: 'transparent',
      white: '#fff',
      brand: '#BB5D5D',
      gray: {
        0: '#f7f7f7',
        1: '#ECEDED',
        2: '#DADBDB',
        3: '#B5B8B8',
        4: '#909595',
        5: '#6C7171',
        6: '#474E4E',
        7: '#313838',
        8: '#272D2D',
        9: '#1D2222',
        10: '#141717',
        11: '#0A0C0C',
        trans1: 'rgba(0, 0, 0, 0.5607843137254902)',
      },
      blue: {
        0: '#EAF3F6',
        1: '#C2DDE4',
        2: '#9AC7D2',
        3: '#71B0C1',
        4: '#499AAF',
        5: '#21849E',
        6: '#1C6D82',
        7: '#155465',
        8: '#0F3C48',
        9: '#09242C',
        10: '#06181D',
        11: '#21849E',
        100: '#f9fcfe',
      },
      red: {
        0: '#F2E7E7',
        1: '#D8B9B9',
        2: '#BF8B8B',
        3: '#A55C5C',
        4: '#8C2E2E',
        5: '#730000',
        6: '#5F0000',
        7: '#4A0000',
        8: '#350000',
        9: '#200000',
        10: '#150000',
      },
    },
    fill: theme => theme('colors'),
    transitionProperty: {
      none: 'none',
      all: 'all',
      color: 'color',
      bg: 'background-color',
      border: 'border-color',
      colors: ['color', 'background-color', 'border-color'],
      opacity: 'opacity',
      transform: 'transform',
    },
    transitionDuration: {
      default: '250ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    transitionTimingFunction: {
      default: 'ease',
      linear: 'linear',
      ease: 'ease',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'ease-in-out': 'ease-in-out',
    },
    transitionDelay: {
      default: '0ms',
      '0': '0ms',
      '100': '100ms',
      '250': '250ms',
      '500': '500ms',
      '750': '750ms',
      '1000': '1000ms',
    },
    willChange: {
      auto: 'auto',
      scroll: 'scroll-position',
      contents: 'contents',
      opacity: 'opacity',
      transform: 'transform',
    },
  },
  variants: {
    opacity: [
      'responsive',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    appearance: [
      'responsive',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    backgroundColor: [
      'responsive',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    color: [
      'responsive',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    borderWidth: [
      'responsive',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    borderColor: [
      'responsive',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    fill: [
      'responsive',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
    stroke: [
      'responsive',
      'first',
      'last',
      'odd',
      'even',
      'hover',
      'focus',
      'active',
      'visited',
      'disabled',
    ],
  },
  plugins: [
    require('tailwindcss-transitions')(),
    function({ addBase, config }) {
      addBase({
        h1: { fontSize: config('theme.fontSize.2xl') },
        h2: { fontSize: config('theme.fontSize.xl') },
        h3: { fontSize: config('theme.fontSize.lg') },
      })
    },
    function({ addComponents }) {
      addComponents({
        '.max-content': {
          maxWidth: 1170,
          margin: 'auto',
        },
        '.max-content-sm': {
          maxWidth: 900,
          margin: 'auto',
        },
        '.max-content-lg': {
          maxWidth: 1340,
          margin: 'auto',
        },
      })
    },
    function({ addUtilities }) {
      addUtilities(
        {
          '.rotate-0': {
            transform: 'rotate(0deg)',
          },
          '.rotate-90': {
            transform: 'rotate(90deg)',
          },
          '.rotate-180': {
            transform: 'rotate(180deg)',
          },
          '.rotate-270': {
            transform: 'rotate(270deg)',
          },
        },
        ['responsive', 'hover']
      )
    },
    function({ addUtilities, e, theme }) {
      const utilities = {}
      const base = 'text-shadow'
      const types = theme('colors')

      Object.keys(types).map((key, i) => {
        let utilKey = false
        let utilVal = false
        if (typeof types[key] === 'string') {
          utilKey = `${base}-${key}`
          utilVal = `1px 1px 2px ${types[key]}`
        } else {
          Object.keys(types[key]).map((typekey, t) => {
            utilKey = `${base}-${key}-${typekey}`
            utilVal = `1px 1px 2px ${types[key][typekey]}`
          })
        }

        if (utilKey && utilVal) {
          utilities[utilKey] = {
            textShadow: utilVal,
          }
        }
      })

      addUtilities(utilities)
    },
  ],
}

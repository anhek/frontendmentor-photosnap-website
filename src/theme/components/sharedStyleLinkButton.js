export const sharedBaseStyle = {
  // Write here some shared `base style` between Link and Button components
  textTransform: 'uppercase',
  fontSize: '12px',
  fontWeight: '700',
  letterSpacing: '2px',
}

export const lightBtn = {
  lightBtn: {
    bg: 'primary.pureblack',
    color: 'primary.purewhite',
    fontSize: '12px',
    _hover: {
      bg: 'primary.lightgrey',
      color: 'primary.pureblack',
    },
    _disabled: {
      _hover: {},
    },
  },
}

export const darkBtn = {
  darkBtn: {
    bg: 'primary.purewhite',
    color: 'primary.pureblack',
    fontSize: '12px',
    _hover: {
      bg: 'primary.lightgrey',
      color: 'primary.pureblack',
    },
    _disabled: {
      _hover: {},
    },
  },
}

// Add new shared variants here and don't forget to import them inside > theme/components/`component`.js

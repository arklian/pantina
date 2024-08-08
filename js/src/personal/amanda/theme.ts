import {
  createTheme,
  CSSVariablesResolver,
  DEFAULT_THEME,
  mergeMantineTheme,
} from '@mantine/core'

/**
 * Custom mantine theme override
 *
 * {@link https://mantine.dev/theming/theme-object/ Theme Object Docs}
 * {@link https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-theme.ts Default Theme}
 * {@link https://github.com/mantinedev/mantine/blob/master/packages/%40mantine/core/src/core/MantineProvider/default-colors.ts Default Colors}
 */
export const themeOverride = createTheme({
  colors: {
    dark: [
      '#C9C9C9',
      '#b8b8b8',
      '#828282',
      '#696969',
      '#424242',
      '#3b3b3b',
      '#2e2e2e',
      '#242424', // Default Dark Mode Background
      '#1f1f1f',
      '#141414',
    ],
    blue: [
      '#e7f5ff',
      '#d0ebff',
      '#a5d8ff',
      '#74c0fc',
      '#4dabf7',
      '#339af0',
      '#228be6',
      '#1c7ed6',
      '#1971c2',
      '#1864ab',
    ],
  },

  primaryColor: 'blue',
  fontFamily: 'Optima',
  other: {
    lightBgColor: '#f0f4ff',
    darkBgColor: '#1c2336',
  },
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)

export const cssVariableResolver: CSSVariablesResolver = (computedTheme) => ({
  variables: {},
  light: {
    '--mantine-color-body': computedTheme.other.lightBgColor,
  },
  dark: {
    '--mantine-color-body': computedTheme.other.darkBgColor,
  },
})

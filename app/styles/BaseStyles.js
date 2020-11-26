/**
 * This File Contains styles that are used all accros the platform
 * Path: app/styles/BaseStyles.js
 */
import {StyleSheet, Dimensions } from 'react-native'

// Sceen Dimensions
export const dimensions = {
    fullHeight: Dimensions.get('window').height,
    fullWidth: Dimensions.get('window').width
}

// Colors
export const colors = {
    orange: '#fc7b03',
    gray: '#a8a8a8',
    white: '#fcfcfc',
    black: '#000000',
    blue: '#008fdb',
    beige: '#ffeed9',
}

// Padding
export const padding = {
     xxsm: 3,
     xsm: 5,
     sm: 10,
     md: 20,
     lg: 30,
     xl: 40
}

// Margin
export const margin = {
     xxsm: 3,
     xsm: 5,
     sm: 10,
     md: 20,
     lg: 30,
     xl: 40
}
// Fonts
export const fonts = {
  sm: 12,
  md: 18,
  lg: 28,
  primary: 'Cochin'
}
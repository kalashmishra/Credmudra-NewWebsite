"use client"
import localFont from 'next/font/local'
import {createTheme } from '@mui/material';
const Satoshi = localFont({ src: '../../../public/fonts/Satoshi-Medium.ttf' })
const theme = createTheme({
  typography: {
    fontFamily: Satoshi.style.fontFamily,
  },
});
export default theme
 

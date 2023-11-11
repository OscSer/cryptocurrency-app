'use client'

import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: { main: '#04a5d6' },
    secondary: { main: '#0682b4' },
  },
})

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  )
}

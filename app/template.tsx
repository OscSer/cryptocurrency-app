'use client'

import colors from '@/components/colors.module.css'
import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
  },
})

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <main>{children}</main>
    </ThemeProvider>
  )
}

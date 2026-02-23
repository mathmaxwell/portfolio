import { createContext, useContext, useState } from 'react'
import type { ReactNode } from 'react'
import { ThemeProvider as MuiThemeProvider, createTheme, alpha } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

type Mode = 'light' | 'dark'

interface ColorModeCtx {
  mode: Mode
  toggleTheme: () => void
}

const ColorModeContext = createContext<ColorModeCtx | null>(null)

function buildTheme(mode: Mode) {
  const primary = mode === 'light' ? '#6366f1' : '#818cf8'
  const secondary = mode === 'light' ? '#8b5cf6' : '#a78bfa'

  return createTheme({
    palette: {
      mode,
      primary: { main: primary },
      secondary: { main: secondary },
      background: {
        default: mode === 'light' ? '#f8f9fc' : '#0d0f1a',
        paper: mode === 'light' ? '#ffffff' : '#131627',
      },
    },
    typography: {
      fontFamily: '"Inter", system-ui, sans-serif',
      h1: { fontWeight: 800 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 700 },
    },
    shape: { borderRadius: 12 },
    components: {
      MuiButton: {
        styleOverrides: { root: { textTransform: 'none', fontWeight: 600 } },
      },
      MuiChip: {
        styleOverrides: { root: { fontWeight: 600 } },
      },
      MuiTab: {
        styleOverrides: { root: { textTransform: 'none', fontWeight: 600 } },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundImage: 'none',
            transition: 'transform 0.25s, box-shadow 0.25s',
            '&:hover': { transform: 'translateY(-6px)' },
          },
        },
      },
      MuiLinearProgress: {
        styleOverrides: {
          root: { borderRadius: 4, height: 6, backgroundColor: alpha(primary, 0.12) },
          bar: {
            borderRadius: 4,
            background: `linear-gradient(90deg, ${primary}, ${secondary})`,
          },
        },
      },
    },
  })
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<Mode>(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  const toggleTheme = () => {
    const next: Mode = mode === 'dark' ? 'light' : 'dark'
    setMode(next)
    localStorage.setItem('portfolio-theme', next)
  }

  return (
    <ColorModeContext.Provider value={{ mode, toggleTheme }}>
      <MuiThemeProvider theme={buildTheme(mode)}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  )
}

export function useColorMode() {
  const ctx = useContext(ColorModeContext)
  if (!ctx) throw new Error('useColorMode must be within ThemeProvider')
  return ctx
}

import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import { useTheme, alpha } from '@mui/material/styles'
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlined from '@mui/icons-material/LightModeOutlined'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useColorMode } from '../contexts/ThemeContext'
import { useLang } from '../contexts/LanguageContext'
import type { Language } from '../i18n/translations'

const NAV_KEYS = ['home', 'about', 'projects', 'skills', 'contact'] as const
const LANGS: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
  { code: 'uz', label: 'UZ' },
]

export default function Navbar() {
  const { mode, toggleTheme } = useColorMode()
  const { language, setLanguage, t } = useLang()
  const theme = useTheme()
  const scrolled = useScrollTrigger({ disableHysteresis: true, threshold: 20 })
  const [open, setOpen] = useState(false)

  const grad = `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`

  const scrollTo = (id: string) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const LangPills = () => (
    <Box sx={{ display: 'flex', background: alpha(theme.palette.primary.main, 0.08), borderRadius: 5, p: '3px', gap: '2px' }}>
      {LANGS.map(l => (
        <Button
          key={l.code}
          size="small"
          onClick={() => setLanguage(l.code)}
          sx={{
            minWidth: 36, px: 1.5, py: 0.4, borderRadius: 4,
            fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.05em',
            color: language === l.code ? '#fff' : 'text.secondary',
            background: language === l.code ? grad : 'transparent',
            '&:hover': { background: language === l.code ? grad : alpha(theme.palette.primary.main, 0.12) },
          }}
        >
          {l.label}
        </Button>
      ))}
    </Box>
  )

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 2 : 0}
        sx={{
          background: scrolled ? alpha(theme.palette.background.default, 0.85) : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${alpha(theme.palette.divider, 0.4)}` : 'none',
          transition: 'all 0.3s',
          color: 'text.primary',
        }}
      >
        <Toolbar sx={{ maxWidth: 1140, width: '100%', mx: 'auto', px: { xs: 2, sm: 3 } }}>
          <Typography
            variant="h6" fontWeight={800} sx={{ cursor: 'pointer', background: grad, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', mr: 4 }}
            onClick={() => scrollTo('home')}
          >
            &lt;Dev /&gt;
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, flex: 1 }}>
            {NAV_KEYS.map(key => (
              <Button key={key} onClick={() => scrollTo(key)} sx={{ color: 'text.secondary', '&:hover': { color: 'primary.main' } }}>
                {t.nav[key]}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 'auto' }}>
            <LangPills />
            <IconButton onClick={toggleTheme} sx={{ color: 'text.secondary' }}>
              {mode === 'dark' ? <LightModeOutlined /> : <DarkModeOutlined />}
            </IconButton>
            <IconButton sx={{ display: { md: 'none' }, color: 'text.secondary' }} onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 260, bgcolor: 'background.default', p: 1 } }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setOpen(false)}><CloseIcon /></IconButton>
        </Box>
        <Divider sx={{ mb: 1 }} />
        <List>
          {NAV_KEYS.map(key => (
            <ListItemButton key={key} onClick={() => scrollTo(key)} sx={{ borderRadius: 2 }}>
              <ListItemText primary={t.nav[key]} />
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ px: 2, pt: 2 }}>
          <LangPills />
        </Box>
      </Drawer>
    </>
  )
}

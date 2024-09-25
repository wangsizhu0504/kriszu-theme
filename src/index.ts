import process from 'node:process'
import fs from 'fs-extra'
import getTheme from './theme'
import { getXtermTheme } from './extra'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './themes/kriszu-light.json',
      getTheme({
        color: 'light',
        name: 'Kriszu Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/kriszu-dark.json',
      getTheme({
        color: 'dark',
        name: 'Kriszu Dark',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/kriszu-light-soft.json',
      getTheme({
        color: 'light',
        name: 'Kriszu Light Soft',
        soft: true,
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './themes/kriszu-dark-soft.json',
      getTheme({
        color: 'dark',
        name: 'Kriszu Dark Soft',
        soft: true,
      }),
      { spaces: 2 },
    ),
  ]))
  .catch(() => process.exit(1))

fs.mkdir('./extra', { recursive: true })
  .then(() => Promise.all([
    fs.writeJSON(
      './extra/xterm-vitesse-light.json',
      getXtermTheme({
        color: 'light',
        name: 'Vitesse Light',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-vitesse-dark.json',
      getXtermTheme({
        color: 'dark',
        name: 'Vitesse Dark',
      }),
      { spaces: 2 },
    ),
    fs.writeJSON(
      './extra/xterm-vitesse-black.json',
      getXtermTheme({
        color: 'dark',
        name: 'Vitesse Black',
        black: true,
      }),
      { spaces: 2 },
    ),
  ]))
  .catch(() => process.exit(1))

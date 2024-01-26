import process from 'node:process'
import fs from 'fs-extra'
import getTheme from './theme'

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

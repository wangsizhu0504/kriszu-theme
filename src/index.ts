import { promises as fs } from 'node:fs'
import getTheme from './theme'

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all([
    fs.writeFile(
      './themes/kriszu-light.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Kriszu Light',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/kriszu-dark.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Kriszu Dark',
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/kriszu-light-soft.json',
      `${JSON.stringify(getTheme({
        style: 'light',
        name: 'Kriszu Light Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
    fs.writeFile(
      './themes/kriszu-dark-soft.json',
      `${JSON.stringify(getTheme({
        style: 'dark',
        name: 'Kriszu Dark Soft',
        soft: true,
      }), null, 2)}\n`,
    ),
  ]))
  .catch(() => process.exit(1))

import { defineConfig } from 'tsdown'

export default defineConfig({
  exports: true,
  deps: {
    alwaysBundle: ['smol-toml', '@actions/core'],
  },
})

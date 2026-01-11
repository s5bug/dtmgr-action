import { defineConfig } from 'tsdown'

export default defineConfig({
  exports: true,
  noExternal: ['smol-toml', '@actions/core'],
})

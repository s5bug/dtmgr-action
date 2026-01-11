import core from '@actions/core'
import fs from 'fs/promises'
import TOML, {type TomlValue} from 'smol-toml'

fs.readFile(`${process.env.GITHUB_WORKSPACE}/dtmgr.toml`).then(result => {
  const toml = TOML.parse(result.toString())
  const depList: TomlValue = toml['dependencies']
  if(!Array.isArray(depList)) {
    core.setFailed("dependencies not a list")
    return
  }

  let output = ""
  depList.every(tv => {
    if(typeof tv === 'string') {
      output += tv
      output += " "
      return true
    } else {
      core.setFailed("non-string in dependencies list")
      return false
    }
  })

  core.setOutput("dtmgr_packages_list", output)
})

# dtmgr-action

Installs the packages in `dtmgr.toml` in a global TeX Live install.

**This means no usage of `dtmgr run`!**

## usage

```
- name: Set up TeX Live
  uses: s5bug/dtmgr-action@024de18a30aa474f88f9d8f4a527e56f645c10b7
```

## development

- Install dependencies:

```bash
pnpm install
```

- Run the unit tests:

```bash
pnpm run test
```

- Build the library:

```bash
pnpm run build
```

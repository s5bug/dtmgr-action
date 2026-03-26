# dtmgr-action

Installs the packages in `dtmgr.toml` in a global TeX Live install.

**This means no usage of `dtmgr run`!**

## usage

```
- name: Set up TeX Live
  uses: s5bug/dtmgr-action@5cc1d4582451d522d597f62ace02b486ba2a993d
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

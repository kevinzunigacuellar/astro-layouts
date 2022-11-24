# Contributor Manual

We welcome contributions of any size and skill level. As an open source project, we believe in giving back to our contributors and are happy to help with guidance on PRs, technical writing, and turning any feature idea into a reality.

> **Tip for new contributors:**
> Take a look at [https://github.com/firstcontributions/first-contributions](https://github.com/firstcontributions/first-contributions) for helpful information on contributing

## Quick setup

### Prerequisites

```shell
node: ">=16"
pnpm: "^7"
```

### Setting up your local repo

We use pnpm workspaces, so you should **always run `pnpm install` from the top-level project directory.** Running `pnpm install` in the top-level project root will install dependencies for every package in the repo.

```shell
git clone && cd ...
pnpm install
```

### Development

```shell
# starts vitest test watcher
pnpm run dev
```

### Other useful commands

```shell
# auto-format the entire project
pnpm run format
```

### Making a Pull Request

When making a pull request, be sure to add a changeset when something has changed in the package.

```shell
pnpm changeset
```

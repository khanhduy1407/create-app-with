# create-app-with

## Scaffolding Your First Project

> **Compatibility Note:**
> Requires [Node.js](https://nodejs.org/en/) version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

With NPM:

```bash
$ npm create app-with@latest
```

With Yarn:

```bash
$ yarn create app-with
```

With PNPM:

```bash
$ pnpm create app-with
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a React project, run:

```bash
# npm 6.x
npm create app-with@latest my-app --template react

# npm 7+, extra double-dash is needed:
npm create app-with@latest my-app -- --template react

# yarn
yarn create app-with my-app --template react

# pnpm
pnpm create app-with my-app --template react
```

Currently supported template presets include:

- `react`

You can use `.` for the project name to scaffold in the current directory.

## Community Templates

create-wite is a tool to quickly start a project from a basic template for popular frameworks. You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the templates.

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

If the project uses `main` as the default branch, suffix the project repo with `#main`

```bash
npx degit user/project#main my-project
```

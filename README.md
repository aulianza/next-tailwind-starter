<div align="center">
  <h1>aulianza-next-tailwind-starter</h1>
    <p>🔰 Next.js + TS + Tailwind CSS starter template packed with useful development features</p>
  <br />

  <div>
    <img width="1011" alt="image" src="https://github.com/aulianza/aulianza-next-tailwind-starter/assets/15605885/b8648391-e700-4103-81e8-72274d77834a">
</div>

</div>
<br />

<div align="center">

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/git?s=https://github.com/aulianza/aulianza-next-tailwind-starter) [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/aulianza/aulianza-next-tailwind-starter)

</div>

## Introduction

Presenting an exquisite Next.js framework adorned with the elegance of Typescript and the grace of Tailwind CSS, behold this bespoke template crafted with meticulous attention. Its purpose is to liberate one's mind from the burden of intricate configurations and tedious setups, enabling a seamless transition into the realm of focused development.

However, should you also discover the inherent value in this sublime creation, you are most welcome to partake in its utilization. Moreover, I wholeheartedly embrace any constructive criticism or suggestions you may have. Feel free to fork or clone this repository and contribute your own exquisite ideas through a Pull Request.

## Features

This repository is packed with:

- Next.js 13.4
- React 18
- TypeScript
- Tailwind CSS 3 — Configured with CSS Variables
- Jest — Configured for unit testing
- Absolute Import and Path Alias — Import components using `@/` prefix
- ESLint — Find and fix problems in your code, also will **auto sort** your imports
- Prettier — Format your code consistently
- Husky & Lint Staged — Run scripts on your staged files before they are committed
- Conventional Commit Lint — Make sure you & your teammates follow conventional commit
- Snippets — A collection of useful snippets
- Expansion Pack — Easily install common libraries, additional components, and configs
- Dark Mode & Light Mode - Switch theme just one click

## Getting Started

### 1. Clone this template using one of the three ways:

1. Use this repository as template
2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/aulianza/aulianza-next-tailwind-starter project-name
   ```

3. Using `degit`

   ```bash
   npx degit aulianza/aulianza-next-tailwind-starter YOUR_APP_NAME
   ```

4. Deploy to Vercel

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/aulianza/aulianza-next-tailwind-starter)

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

### 4. Change defaults

There are some things you need to change including title, urls, favicons, etc. Don't forget to change the package name in package.json

### 5. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

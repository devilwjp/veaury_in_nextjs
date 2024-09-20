This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## How to create and use Vue components using Veaury in Next.js  
> [!NOTE]
> 
> If you want to use the Vue component in `node_modules` directly, you can refer to the development part directly, and just install `veaury@^2.5` and `vue`.  

### Install dependencies  
You need to install the following dependencies.  
`veaury@^2.5`, `vue`,`vue-loader`,`@vue/babel-plugin-jsx`,`webpack`,`style-loader`,`css-loader`,`babel-loader`,`@babel/core`

### Configuration on build
You need to configure `next.config.mjs`  
```js
// If the type is "commonjs", use "veaury/webpack/VeauryVuePlugin.cjs"
import VeauryVuePlugin from "veaury/webpack/VeauryVuePlugin.mjs";

/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.plugins.unshift(new VeauryVuePlugin({
      isNext: true
    }))
    return config;
  }
};

export default nextConfig;
```
### Development  
The components output using `Veaury` are client components. In Next.js, add `use client` to the top of the file.  
```jsx
'use client'

// After being converted by Veaury, the component is a client component
import { applyVueInReact } from 'veaury'
import TestVue from './Test.vue'
const Test = applyVueInReact(TestVue)

export default Test
```
### JSX in Vue
If you need to use JSX in Vue, you can use it in `<script lang="jsx">` in the `.vue` file or in the `.jsx` file in the `vue_app` directory

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

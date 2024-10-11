# CARBON Copy Front-End

The front-end is written in Nuxt 3 and serves content from the API. 

It has one environment variable: NUXT_SURVEY_ACCESS_TOKEN. It is used to authenticate with the CARBON Copy API for POSTing a request to save the regenerative self-assessment survey response.

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more about setting up and running a Nuxt site.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

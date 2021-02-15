# Otaku Imoveis API

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/CEFETTA/otaku-imoveis

# Go into the backend
$ cd otaku-imoveis/backend

# Install dependencies
$ yarn install

# Run migrations and seeds
$ npx knex migrate:latest
$ npx knex seed:run

# Start the app
$ yarn dev
```

The seeds will add an admin user to create neighborhoods

```json
{
  "email": "admin@admin.com",
  "password": "admin"
}
```

## :memo: Docs

You can access the docs [here](https://quartel-imoveis.netlify.app/)

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Otaku%20Imoveis&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fthiagodff%2FDocs-Otaku-Imoveis%2Fmain%2Finsomnia.json)

# Otaku Imoveis API

## :information_source: How To Use

To clone and run this application, you'll need [Git](https://git-scm.com), [Node.js](https://nodejs.org/) and [yarn](https://yarnpkg.com/) installed on your computer. From your command line:

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

The seeds will add a admin user to create neighborhoods

```json
{
  "email": "admin@admin.com",
  "password": "admin"
}
```

## :memo: Docs

You can access the docs [here]()

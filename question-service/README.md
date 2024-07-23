# BetterPrep Question Service

## Local development setup

Prerequisites:

1. Node.js v18 and up. I'm using v20.15.0.
2. MongoDB

Follow these steps to get up and running:

1. Run `npm i` to install the dependencies.
2. Ensure an instance of MongoDB is running. Navigate to `src/app.module.ts` and modify the connection string with the correct configuration.
3. Run `npm run start:dev` to start the development server. The server will be listening on `http://localhost:3000`.

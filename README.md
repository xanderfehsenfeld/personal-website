# personal-dashboard

A personal website built with Node.js

## Setup

Before you can run or deploy the sample, you need to do the following:

1.  Install dependencies:

        npm install

1.  Install the [gcloud command-line tool](https://cloud.google.com/pubsub/docs/quickstart-cli) and run `gcloud init`. Choose an account and a project ID.

1.  Configure google sign in for your project. Go [here](https://developers.google.com/identity/sign-in/web/sign-in) and click 'configure project.' Copy the clientID and secret into a file `src/server/config.ts` with the following structure:

```
export const config = {
  OAUTH2_CLIENT_ID:
    '<your-client-ID-here>',
  OAUTH2_CLIENT_SECRET: '<your-secret-here>',
  OAUTH2_CALLBACK: '/auth/google/callback',
}
```

## Running locally

    npm start

## Deploying to App Engine

    npm run deploy

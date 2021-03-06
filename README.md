# Auth0 Express Profile Password Change Sample

This sample demonstrates authentication for an Express Node.js app and the ability to change the password for the logged in user. The sample utilizes the management api to change the password of the user logged into the web application. Your M2M Application needs the `update:users` scope

## Running This Sample Locally

1. Install the dependencies with npm:

```bash
npm install
```


2. Rename `.env.example` to `.env` and replace or check the following values. 

> ⚠️ Note: If you downloaded this sample app directly from Auth0 Manage Dashboard, or from Auth0 Docs _and_ you chose the Auth0 application you're creating this sample for, then you can check these are configured already: 

- `CLIENT_ID` - your Auth0 application client id
- `ISSUER_BASE_URL` - absolute URL to your Auth0 application domain (ie: `https://accountName.auth0.com`)
- `SECRET` - your Auth0 application client secret
- `MANAGEMENT_DOMAIN` - your Auth0 domain the management client connects against
- `MANAGEMENT_CLIENT_ID` - your Auth0 application client id with permissions against the Management API
- `MANAGEMENT_CLIENT_SECRET` - your Auth0 application client secret

```bash
mv .env.example .env
```

3. Run the sample app:

```bash
npm start
```

The sample app will be served at `localhost:3000`.

## Support + Feedback

Please use the [Issues queue](https://github.com/auth0-samples/auth0-express-webapp-sample/issues) in this repo for questions and feedback.

## Vulnerability Reporting

Please do not report security vulnerabilities on the public GitHub issue tracker. The [Responsible Disclosure Program](https://auth0.com/whitehat) details the procedure for disclosing security issues.

## What is Auth0?

Auth0 helps you to easily:

- implement authentication with multiple identity providers, including social (e.g., Google, Facebook, Microsoft, LinkedIn, GitHub, Twitter, etc), or enterprise (e.g., Windows Azure AD, Google Apps, Active Directory, ADFS, SAML, etc.)
- log in users with username/password databases, passwordless, or multi-factor authentication
- link multiple user accounts together
- generate signed JSON Web Tokens to authorize your API calls and flow the user identity securely
- access demographics and analytics detailing how, when, and where users are logging in
- enrich user profiles from other data sources using customizable JavaScript rules

[Why Auth0?](https://auth0.com/why-auth0)

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.

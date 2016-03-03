# Yarpa; Yet another react presenter app.

[React 0.14](https://facebook.github.io/react/blog/2015/10/07/react-v0.14.html) introduced the ability to use pure functions as components. The react team calls them **functional components** in their announcement. The rest of the world calls them **pure components**.

This application is based on
* [react-pure-component-starter](https://github.com/ericelliott/react-pure-component-starter) as boilerplate
* [react-router-redux-example](https://github.com/StevenIseki/react-router-redux-example) for redux routes and css modules

 features:
* Manage slides; add, edit, remove
* Pure component factories (mostly)
*
* Hot reloading
* Unit test with tape, an easy way to test pure components.

## Getting Started
**install & run:**

**Start the dev server and follow instructions:**
Make sure you have no process listening to port `:3000`

```sh
npm i
npm run start
```

**In another terminal window, start the dev console for lint/test feedback when you save files:**

```sh
npm run watch
```

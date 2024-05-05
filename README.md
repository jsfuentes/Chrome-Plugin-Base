# Chrome Plugin Base

Chrome Plugin with babel and great development tooling:

- `.babelrc` and parcel adds support for the async/await, react, and targets the last 4 major Chrome versions
- Instead using callback plugin functions, use `webextension-polyfill` which is cross-browser and promise based
- debug library set to only print in development
- printing of messages and local storage changes
- functions to get development axios and debugging
- popup with React and empty options page

## Setup

- `npm`
- `npm run watch` for the first time files
- On chrome://extensions, load unpacked dist folder

### Dev

- `npm run watch`
- Make sure to refresh chrome plugin
- Win big

### Prod

- `npm run build` then package for dist mode

# Sam Design System Site

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.10.

## Setup local development
Follow these steps to checkout `sam-ui-elements` in a separate location on your local environment
```
git clone https://github.helix.gsa.gov/GSA-IAE-APPS/sam-ui-elements
cd sam-ui-elements
npm link --only=production
```

To link and setup your cloned environment
```
git clone https://github.helix.gsa.gov/GSA-IAE-APPS/web-standards-site
cd web-standards-site
npm install
npm link @gsa-sam/sam-ui-elements
npm run start
```

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4201/`. The app will automatically reload if you change any of the source files.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. 
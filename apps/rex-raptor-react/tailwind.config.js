const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');
const config = require( "../tailwindstyles/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
    "../tailwindstyles/tailwind.config.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

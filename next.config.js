/** @type {import('next').NextConfig} */
const path = require('path');

module.exports = module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "scss/imports.scss";`,
  },
};

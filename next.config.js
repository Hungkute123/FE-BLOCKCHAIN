const withImages = require('next-images')

module.exports = withImages();
const withPlugins = require('next-compose-plugins');
const withTM = require("next-transpile-modules")(
  []
);

// disable log for built environment
if (process.env.ENV !== "local") {
  console.log = function () { }
}

module.exports = withPlugins([withTM], {
  env: {
    WEB_HOST: process.env.ENV === 'local' ? 'http://localhost:5000/api/' : '',
    URL_MY_API: process.env.URL_MY_API
  },
});
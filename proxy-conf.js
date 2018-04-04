const fs = require('fs');
const credentials = fs.readFileSync('secret.csv', 'utf8').toString();

const PROXY_CONFIG = {
  "/rest/v2/apparel-uk": {
    target: "https://hybris.e-point.pl",
    changeOrigin: true,
    secure: false,
    auth: credentials,
    logLevel: "debug"
  }
};

module.exports = PROXY_CONFIG;

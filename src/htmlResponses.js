const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/../hosted/client.html`);
const css = fs.readFileSync(`${__dirname}/../hosted/style.css`);
const bundle = fs.readFileSync(`${__dirname}/../hosted/bundle.js`);

//Nodemon handles live servers. Have to set up command in package.json. The last file in the command is what it launches.
//Webpack minifies code, along with 1000 other things.
//You can use require statements in client-side code with webpack

const serveFile = (response, file, contentType) => {
  response.writeHead(200, { 'Content-Type': contentType });
  response.write(file);
  response.end();
};

const getIndex = (request, response) => {
  serveFile(response, index, 'text/html');
};

const getCSS = (request, response) => {
  serveFile(response, css, 'text/css');
};

const getBundle = (request, response) => {
  serveFile(response, css, 'application/javascript');
}

module.exports = {
  getIndex,
  getCSS,
};

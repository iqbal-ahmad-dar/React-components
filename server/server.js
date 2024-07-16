const express = require('express');
const path = require('path');
const fs = require('fs');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const { StaticRouter } = require('react-router-dom/server');
const App = require('../src/App');
const app = express();
// Read the HTML template
const templatePath = path.resolve(__dirname, '../build/index.html');
let template = fs.readFileSync(templatePath, 'utf8');
// Function to inject CSS and JS links into the template
const injectAssets = (template) => {
  const cssFiles = fs.readdirSync(path.resolve(__dirname, '../build/static/css'))
    .filter(file => file.endsWith('.css'))
    .map(file => `<link href="/static/css/${file}" rel="stylesheet">`)
    .join('\n');
    console.log('cssFiles',cssFiles)
  const jsFiles = fs.readdirSync(path.resolve(__dirname, '../build/static/js'))
    .filter(file => file.endsWith('.js'))
    .map(file => `<script src="/static/js/${file}" defer></script>`)
    .join('\n');

  return template.replace('</head>', `${cssFiles}</head>`)
                 .replace('</body>', `${jsFiles}</body>`);
};

template = injectAssets(template);

app.use(express.static(path.resolve(__dirname, '../build')));

app.get('/*', (req, res) => {
  const context = {};

  const html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  const finalHtml = template.replace('<div id="root"></div>', `<div id="root">${html}</div>`);

  res.status(200).send(finalHtml);
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

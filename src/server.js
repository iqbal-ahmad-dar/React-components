import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App'; 
import fs from 'fs';
import path from 'path';
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));
app.get('/', (req, res) => {
 const indexFile = path.resolve('./public/index.html');
  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, something went wrong!');
    }
 const html = ReactDOMServer.renderToString(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
 const renderedHtml = data.replace('<div id="root"></div>', `<div id="root">${html}</div>`);
res.send(renderedHtml);
  });
});


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

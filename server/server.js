// server/server.js
import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../src/App';

import tailwindCss from '../styles/tailwind.css';

const PORT = 8080;
const app = express();
const router = express.Router();

const serverRenderedContent = (req, res, next) => {
  fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).send('got error');
    }

    const html = ReactDOMServer.renderToString(<App />);
    const styles = `<style>${tailwindCss}</style>`; 

    return res.send(
      data.replace(
        '<div id="root"></div>',
        `<div id="root">${html}</div>${styles}` 
      )
    );
  });
};

router.use('^/$', serverRenderedContent);

router.use(
  express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '20d' })
);
app.use(router);
app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});
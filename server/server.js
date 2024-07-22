import path from "path";
import fs from "fs";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import App from "../src/App";
const PORT = 8080;
const app = express();
const router = express.Router();
const serverRenderedContent = (req, res, next) => {
  const indexPath = path.resolve("./build/index.html");
  const cssPath = path.resolve("./build/static/css/main.css");
  const jsPath = path.resolve("./build/static/js/main.js");
  const appHtml = ReactDOMServer.renderToString(<App />);
  fs.readFile(indexPath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading index.html:", err);
      return res.status(500).send("Error reading index.html");
    }
    const styles = fs.existsSync(cssPath)
      ? fs.readFileSync(cssPath, "utf8")
      : "";
    const script = fs.existsSync(jsPath)
      ? `<script src="/static/js/main.js" defer></script>`
      : "";
    const response = data
      .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
      .replace("</head>", `<style>${styles}</style></head>`)
      .replace("</body>", `${script}</body>`);

    return res.send(response);
  });
};

router.use("^/$", serverRenderedContent);

router.use(
  express.static(path.resolve(__dirname, "..", "build"), { maxAge: "20d" })
);

app.use(router);

app.listen(PORT, () => {
  console.log(`SSR running on port ${PORT}`);
});

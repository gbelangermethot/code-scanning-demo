const express = require("express");
const escapeHtml = require("escape-html");
const app = express();

const site = await Bun.file("./index.html").text();

app.get("/", async (req, res) => {
  const safeName = escapeHtml(String(req.query.name ?? ""));
  let greet = site.replace("%%_USER_NAME%%", safeName);
  res.send(greet);
});

app.listen(8080, () => {
  console.log("The webpage is live on http://localhost:8080 :)");
});

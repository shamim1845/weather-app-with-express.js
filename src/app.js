const express = require("express");
const app = express();
const port = process.env.PORT || 7000;
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname, "../templates/assets");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

hbs.registerPartials(partialsPath);

//Template engine
app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(staticPath));

//routing
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("/*", (req, res) => {
  res.render("404", {
    errMsg: "Oops page not found",
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

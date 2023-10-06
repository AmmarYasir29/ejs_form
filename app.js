const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

app.set("views", "./views"); // specify the views directory
app.set("view engine", "ejs"); // register the template engine

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  if (false) res.render("index", {});
  res.redirect("/signin");
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", (req, res) => {
  console.log(req.body);
  res.redirect("/");
});

app.get("/signin", (req, res) => {
  res.render("signin");
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  res.redirect("/");
});

app.get("/edit/:id", (req, res) => {
  const { id } = req.params;
  let dataId;

  for (let i = 0; i < data.length; i++) {
    if (Number(id) === data[i].ID) {
      dataId = i;
    }
  }

  res.render("edit", { data: data[dataId] });
});
app.listen(port, () => console.log(`listening on port ${port}!`));

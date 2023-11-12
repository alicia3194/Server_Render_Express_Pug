const express = require("express");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const path = require("path");
const config = require("./config");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/film/:title", async (req, res) => {
  const title = req.params.title;
  const apiEndpoint = `http://www.omdbapi.com/?t=${title}&apikey=omdbApi`;

  try {
    const response = await fetch(apiEndpoint);
    const data = await response.json();

    if (data.Response === "True") {
      res.render("film", { movie: data });
    } else {
      res.render("home", { error: "Movie not found" });
    }
  } catch (error) {
    console.error(error);
    res.render("home", { error: "Error searching for the movie" });
  }
});

app.post("/film", (req, res) => {
  const title = req.body.title;
  res.redirect(`/film/${title}`);
});

app.listen(port, () => {
  console.log(`Node.js server listening on port ${port}`);
});

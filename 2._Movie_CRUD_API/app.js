const express = require("express");
const app = express();
app.use(express.json());

let movies = [];
const movie1 = { id: "1", title: "Die Hard", year: "1988" };
const movie2 = { id: "2", title: "Pulp fiction", year: "1994" };
const movie3 = { id: "3", title: "Heat", year: "1995" };
movies.push(movie1);
movies.push(movie2);
movies.push(movie3);

app.get("/movies", (req, res) => {
  res.send(JSON.stringify(movies));
});

app.get("/movies/:id", (req, res) => {
  const id = req.params.id;
  res.send(JSON.stringify(movies.filter((movie) => movie.id === id)));
});

app.post("/movies", (req, res) => {
  const movie = req.body;
  movies.push(movie);
  res.send("Movie has been added successfully");
});

app.put("/movies/:id", (req, res) => {
  const id = req.params.id;
  //const findMovie = movies.find(movie => movie.id == id);

  movies.forEach((movie) => {
    if (id == movie.id) {
      movie.title = req.body.title;
      movie.year = req.body.year;
      return movie;
    }
  });
  res.send("Movie has been deleted successfully");
});

app.delete("/movies/:id", (req, res) => {
  const id = req.params.id;
  movies = movies.filter((movie) => movie.id !== id);
  res.send("Movie has been deleted successfully");
});

app.listen(8080);

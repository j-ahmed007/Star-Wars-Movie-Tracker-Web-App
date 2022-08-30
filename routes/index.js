// General Requirements
var moviesJSON = require("../movies.json");

// Home Page Route
exports.home = function (req, res) {
  var movies = moviesJSON.movies;
  res.render("home", {
    title: "Star Wars Movie Tracker - Web App By Jawad",
    movies: movies,
  });
};

// 'Episode' Pages Route
exports.episodes = function (req, res) {
  var episode_number = req.params.episode_number;
  var movies = moviesJSON.movies;
  if (episode_number >= 1 && episode_number <= 6) {
    var movie = movies[episode_number - 1];
    var title = movie.title;
    var main_characters = movie.main_characters;
    res.render("episodes", {
      movies: movies,
      movie: movie,
      title: title,
      main_characters: main_characters,
    });
  } else {
    res.render("pageNotFound", {
      movies: movies,
      title: "Hello There! This Page Doesn't Appear To Exist",
    });
  }
};

// '404 Error' Page Route
exports.pageNotFound = function (req, res) {
  var movies = moviesJSON.movies;
  res.render("pageNotFound", {
    movies: movies,
    title: "Hello There! This Page Doesn't Appear To Exist",
  });
};
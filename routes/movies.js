const express = require("express");
const router = express.Router();
const { Movie, validateMovie } = require("../models/movies")
var _ = require('lodash');





//GET ALL MOVIES
router.get("/getallmovies", async (req, res) => {
  const movies = await Movie.find().limit(20)
  let newArr = _.map(movies, o => _.pick(o, ["_id", "plot", "runtime", "num_mflix_comments", "title"]))
  res.send(newArr)
})

//ADD A MOVIE
router.post("/addamovie", async (req, res) => {
  //const check = validateMovie.validate(req.body)
  //if (!check.error) {
  let data = req.body;
  try {

    const movie = new Movie({
      plot: data.plot,
      runtime: data.runtime,
      num_mflix_comments: data.num_mflix_comments,
      title: data.title,

      genres: data.genres,
      cast: data.cast,
      num_mflix_comments: data.num_mflix_comments,
      poster: data.poster,
      title: data.title,
      lastupdated: data.lasteupdate,
      languages: data.languages,
      released: data.released,
      directors: data.directors,
      rated: data.reted,
      awards: data.awards,
      year: data.year,
      imdb: data.imdb,
      countries: data.countries,
      type: data.type,
      tomatoes: data.tomatoes

    })
    const result = await movie.save()
    res.send(result)
  }
  catch (error) {
    res.status(400).send("Genre not found")
    console.log(error.message)
  }




  //}
  // //else {
  //   res.status(400).send(check.error)
  // }

})

//UPDATE A MOVIE

router.put("/updatemovie/:id", async (req, res) => {
  //const check = validateMovie.validate(req.body)
  //if (!check.error) {
  let data = req.body;
  const result = await Movie.findOneAndUpdate(req.params.id, {
    plot: data.plot,
    runtime: data.runtime,
    num_mflix_comments: data.num_mflix_comments,
    title: data.title,

    genres: data.genres,
    cast: data.cast,
    num_mflix_comments: data.num_mflix_comments,
    poster: data.poster,
    title: data.title,
    lastupdated: data.lasteupdate,
    languages: data.languages,
    released: data.released,
    directors: data.directors,
    rated: data.reted,
    awards: data.awards,
    year: data.year,
    imdb: data.imdb,
    countries: data.countries,
    type: data.type,
    tomatoes: data.tomatoes
  }, { new: true })
  if (!result) res.status(404).send("Data not found")
  res.send(result)
  //}
  //else {
  //res.status(400).send(check.error)
  //}

})

//DELETE A MOVIE
router.delete("/deletemovie/:id", async (req, res) => {
  const result = await Movie.findOneAndDelete(req.params.id)
  if (!result) res.status(404).send("Data not found")
  res.send(result)

})

//GET A MOVIE BY ID
router.get("/getbyid/:id", async (req, res) => {
  const result = await Movie.find({ _id: req.params.id })
  if (!result) res.status(404).send("Data not found")
  res.send(result)

})

module.exports = router
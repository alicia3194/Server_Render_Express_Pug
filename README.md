# Exercise - Server Render with Express + Pug

![Movie Poster](https://github.com/alicia3194/Server_Render_Express_Pug/blob/main/image/films.jpeg)
<img src="https://github.com/alicia3194/Server_Render_Express_Pug/blob/main/image/films.jpeg" alt="Movie Poster" width="300"/>


Create a movie application for server rendering with Node.js and Pug. Utilize the provided movie API.

## OMDB API Templates:

home.pug: Renders a search form for movie titles.
film.pug: Renders details of a movie, including title, author, description, and image.

## Routes:

[GET] http://localhost:3000: Main page of the application. Renders home.pug.
[GET] http://localhost:3000/film/:title: Displays data for a movie based on the title. Internally makes a request to the movie API to fetch the data. Should render film.pug.
[POST] http://localhost:3000/film/: Sends a POST request to this route when completing the movie search form in home.pug. Using res.redirect() can be helpful for handling redirection.
Instructions:

## Clone this repository.
Install dependencies with npm install.
Run the application with node app.js.

# Book Finder app

Search and find your favorite books!

[Live demo](https://lucid-hugle-4ef211.netlify.app/)

## Overview
<img width="929" alt="Screenshot 2021-06-12 at 18 48 17" src="https://user-images.githubusercontent.com/77361223/121784934-ced8e100-cbae-11eb-9712-810ba82600b9.png">

This project was built using HTML, SCSS, and JavaScript following a MVC approach. It uses the Fetch API (async/await) to query the Google Books API to pull search results.

## Features

* Search by book title or author
* Display search results in grid view (using CSS grid)
* Additional functionality allows users to add books to a wishlist (saved via localStorage in the browser)
* Users can also click the "i" button to display a modal popup that includes the book's description and the ability to be redirected to an external search to purchase the book.
* The Google Books API key used in production is obscured using [Netlify serverless functions](https://docs.netlify.com/functions/build-with-javascript/).

## Running this project locally:

1. Clone this repository to your local machine
2. Navigate into the cloned directory
3. Generate a [Google Books API key](https://console.cloud.google.com/apis/credentials)
4. Create a copy of the `.env.example` template and rename it to `.env`. In your local `.env` file, replace `YOUR_API_KEY` with your generated API key from the previous step.
3. Run `npm install` to install dependencies
4. Run `npm run dev` to run the build script

## Dependencies

* Nodejs
* npm (or yarn)
* Babel
* Webpack

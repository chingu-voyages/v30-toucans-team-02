# Book Finder app

Search and find your favorite books!

[Live demo](https://agitated-mccarthy-ce667f.netlify.app/)

## Overview

This project was built using HTML, CSS (Sass), and JavaScript following a MVC approach. It uses the Fetch API (async/await) to query the Google Books API to pull search results.

## Features

* Search by book title or author
* Display search results in grid view (using CSS grid)
* Additional functionality allows users to add books to a wishlist (saved via localStorage in the browser)
* Users can also click the "i" button to display a modal popup that includes the book's description and the ability to be redirected to an external search to purchase the book.

## Running this project locally:

1. Clone this repository to your local machine
2. Navigate into the cloned directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` to run the build script

## Dependencies

* Nodejs
* npm (or yarn)
* Babel
* Webpack
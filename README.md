# Movie Sagas


## Description

Duration: 2 day sprint

This app creates a personalized movie list from a database that displays the movie posters in a grid.  When a poster is clicked on it directs you to the details page.  The details page displays the genres of the movie, the poster, and the movie description.
At the bottom of the details page is a back button to take the user back to the movie list.  The movie list page also has a button that will allow the user to add a movie to the list by taking them to a form page.  The user can fill out the form by entering the movie title, the movie poster url, and a description for the movie as well as pick a category for the movie from a drop down menu.


## Prerequisites

- Node.js
- PostgreSQL
- Nodemon

## Installation

1. Create a database named saga_movies_weekend
2. The queries in the 'database.sql' file are set up to create all the necessary tables and populate the needed data to alow the application to run correctly.  The project is built on Postgres so you will need to make sure to have that installed.  I recommend using Postico to run those queries as that was used to create the queries.
3. Open up your editor of choice and run 'npm install' in your terminal
4. Run 'npm run server' in your terminal
5. Run 'npm run client' in your terminal
6. The 'npm run client' command will open up a browser for you!

## Usage

1. A user is able to open the app and see a list of movie posters with titles.  
2. The user can navigate to the 'add movie' page by clicking the 'add movie' button.
3. There they can fill in the form and add the movie.
4. The movie will then be added to the list.
5. The user can click on any movie to view its description and genres.

## Built With
React
Redux
Redux-Saga
Node.js
Express.js
PostgreSQL
Material-UI

## Acknowledgement
Thanks to Prime Digital Academy who equipped and helped me make this application a reality.

## Support 
If you have suggestions or isssues, please email me at simeonwillard19@gmail.com

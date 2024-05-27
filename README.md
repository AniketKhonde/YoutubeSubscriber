# Get Youtube Subscriber

This project is a simple backend assignment that implements a RESTful API for managing subscribers. It separates concerns by keeping the server initialization and database connection logic separate from the request handling logic.

## Setup

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Run `node src/createDatabase.js` to create the database on your local MongoDB instance.

## Usage

- Run `node index.js` to start the server.
- Access the following endpoints:
  - `GET http://localhost:3000/subscribers`: Response with an array of subscribers (an object).
  - `GET http://localhost:3000/subscribers/names`: Response with an array of subscribers (an object with only two fields: name and subscribedChannel).
  - `GET http://localhost:3000/subscribers/:id`: Response with a subscriber (an object) with the given id. If the id does not match, response with status code 400 and an error message ({ message: error.message }).

## Structure

- `app.js`: Handles requests and responses.
- `index.js`: Connects to the database and starts the server.
- `src/createDatabase.js`: Script to create the database on your local MongoDB instance.

This README provides a brief overview of the project, including setup instructions, usage guidelines, and a high-level overview of its structure. Adjust as needed to fit your project's specifics.

# Online Course - Course Module

## About the Project

This project is an Online Course platform.

For this task, I chose the **Course** entity because courses are one of the main entities in the Online Course project.

The backend is built using:

- Node.js
- Express.js
- MongoDB
- Mongoose

## Course Model

The Course model contains the following fields:

- title
- description
- category
- instructor
- duration
- price

Timestamps are also enabled to automatically create `createdAt` and `updatedAt`.

## API Routes

| Method | Route | Description |
|---|---|---|
| POST | /courses | Create a new course |
| GET | /courses | Get all courses |
| GET | /courses/:id | Get a course by ID |
| PATCH | /courses/:id | Update a course |
| DELETE | /courses/:id | Delete a course |

## Run the Project Locally

1. Install dependencies:

npm install

2. Create a `.env` file and add your MongoDB connection string:

MONGO_URI=your_mongodb_connection_string

3. Start the server:

node index.js

4. The server will run on:

http://localhost:3000

## API Testing

All Course API routes were tested using Postman.

The tested operations include:

- Create Course
- Get All Courses
- Get Course By ID
- Update Course
- Delete Course
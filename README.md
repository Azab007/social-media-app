# Simple Full-Stack Social Media Facebook Clone

Welcome to my Simple Full-Stack Social Media Facebook Clone! as a part of course in Lama Dev youtube channel. This README file provides an introduction to the project, instructions on how to set it up locally, and a brief overview of its features.

## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Folder Structure](#folder-structure)

## Introduction

Our Simple Full-Stack Social Media Platform is designed to provide users with a basic but functional social networking experience. Users can sign up, post updates, follow other users, like and comment on posts, and view a feed of posts from users they follow. It serves as a foundation for those looking to explore the world of full-stack web development.

## Features

- **User Authentication**: Users can sign up, log in, and log out securely.
- **Create and Post Updates**: Users can create and post text and photos updates.
- **Follow and Unfollow Users**: Users can follow and unfollow other users.
- **Like a Post**: Users can like posts.
- **News Feed**: Users can view a feed of posts from users they follow.
- **User Profiles**: Each user has a profile page displaying their posts and followers.
## Technologies Used

- **Frontend**:
  - HTML, CSS, JavaScript
  - React.js for building the user interface
  - Axios for making API requests
  - React Router for client-side routing
  - Material UI for building components

- **Backend**:
  - Node.js for the server
  - Express.js for creating RESTful APIs
  - MongoDB for storing user data, posts, and interactions
  - Mongoose for data modeling

## Getting Started

To set up the project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/Azab007/social-media-app.git
   ```

2. Install the necessary dependencies for both the frontend and backend by navigating to the respective directories (`client` and `server`) and running:

   ```bash
   npm install
   ```

3. Configure the environment variables as per the instructions in the [Configuration](#configuration) section.

4. Start the development server for both the frontend and backend:

   ```bash
   # Start the backend server (from the server directory)
   npm start

   # Start the frontend development server (from the client directory)
   npm start
   ```

5. Access the application in your web browser at `http://localhost:3000`.

## Configuration

Configure the following environment variables:

- `MONGODB_URI`: MongoDB connection URI.
- `REACT_APP_PUBLIC_FOLDER`: URL for public images.

## Usage

1. Register a new account or log in with an existing account.
2. Create and post updates.
3. Follow other users to see their posts in your news feed.
4. Like and comment on posts.
5. Explore user profiles to see their posts and followers.

## Folder Structure

- `client/`: Frontend codebase.
- `server/`: Backend codebase.

## preview
![alt text](https://user-images.githubusercontent.com/57720086/273307750-7b9bd000-29f2-44ca-becf-de4b593aa10c.png)

![alt text](https://user-images.githubusercontent.com/57720086/273307752-608dda09-20e7-40c6-89de-185dbdb8a7a6.png)

![alt text](https://user-images.githubusercontent.com/57720086/273307723-174ffd05-2aaa-4dd8-a5ba-83cec9be3fbb.png)

![alt text](https://user-images.githubusercontent.com/57720086/273307745-1d46949a-e237-4a50-bede-be45dfb28791.png)

![alt text](https://user-images.githubusercontent.com/57720086/273307735-ada229df-aa6a-4711-b486-fb3970b9caf3.png)


Feel free to use this simple social media platform as a foundation for learning and exploring full-stack web development. Happy coding!

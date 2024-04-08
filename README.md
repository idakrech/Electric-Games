# ElectricGames Platform

This application serves as a platform for showcasing games from various platforms like Xbox, Playstation, and Nintendo Switch. It includes a fullstack implementation using ReactJS for the frontend and .NET/C# Web Api for the backend.

## Overview

ElectricGames Platform allows users to view and interact with a database of games and characters associated with those games. The backend Web Api supports CRUD operations to manage game and character data, while the frontend provides an engaging user interface to interact with this data.

## Features

- **Game Information:**
  - Display game titles, platforms, release years, and images.
  - Retrieve all games or specific games by id or other properties.
  - Add, update, and delete games (including image upload).
  
- **Game Characters:**
  - View character names, associated games, and character images.
  - Retrieve characters by game or specific properties.
  - Manage characters through CRUD operations.

- **User Interface:**
  - Responsive design using HTML5, CSS3, and media queries for optimal viewing on different devices.
  - Utilize React component-based architecture for modularity and reusability.
  - Implement routing to navigate between different sections of the application.
  - Quiz to engage users.

## How to Use

To run the ElectricGames Platform locally:

1. Clone this repository to your local machine.
2. Navigate to the `ElectricGames` directory and run `npm install` to install dependencies.
3. Start the frontend server by running `npm start`.
4. Navigate to the `ElectricGamesApi` repository and open the solution in Visual Studio.
5. Start the backend server by running `dotnet watch run`.
6. Access the application in your web browser at `http://localhost:3000`.

## Additional Information

- The `wwwroot` directory in ElectricGamesApi contains an HTML page detailing how to use the Web Api, including available endpoints and usage instructions.

## Credits

This project was developed by Ida Krech as part of Webutvikling course at Høyskolen Kristiania. 

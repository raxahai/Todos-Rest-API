# Todos REST API

This repository contains a Node.js-based REST API application for managing a simple to-do list. The API allows clients to perform CRUD (Create, Read, Update, Delete) operations on to-do items.

## Features

- **Create To-Do Items**: Add new tasks with details such as title, description, and completion status.
- **Retrieve To-Do Items**: Fetch all tasks or a specific task by its identifier.
- **Update To-Do Items**: Modify existing tasks, including their title, description, and completion status.
- **Delete To-Do Items**: Remove tasks from the list.

## Project Structure

The application is organized into the following directories and files:

- `controllers/`: Contains functions that handle incoming HTTP requests and interact with the models to perform database operations.
- `models/`: Defines the data structures and interfaces with the database.
- `routes/`: Specifies the API endpoints and maps them to the corresponding controller functions.
- `connection.js`: Manages the database connection setup.
- `index.js`: The main entry point of the application, responsible for initializing the server and setting up middleware.
- `package.json`: Contains metadata about the project and its dependencies.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/raxahai/Todos-Rest-API.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd Todos-Rest-API
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

   This will install all the required packages as specified in the `package.json` file.

## Usage

1. **Start the Server**:

   ```bash
   npm start
   ```

   This will launch the server, and it will listen for incoming requests.

2. **Interact with the API**:
   Use tools like [Postman](https://www.postman.com/) or `curl` to send HTTP requests to the API endpoints. The base URL for the API will be `http://localhost:3000` unless otherwise configured.

   - **Create a To-Do Item**:

     ```http
     POST /todos
     ```

     Send a JSON payload with the task details.

   - **Retrieve All To-Do Items**:

     ```http
     GET /todos
     ```

   - **Retrieve a Specific To-Do Item**:

    ```http
    GET /todos/:id
    ```

   - **Update a To-Do Item**:

     ```http
     PUT /todos/:id
     ```

     Send a JSON payload with the updated task details.

   - **Delete a To-Do Item**:

     ```http
     DELETE /todos/:id
     ```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

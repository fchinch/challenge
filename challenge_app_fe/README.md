# Challenge App Frontend

Welcome to the Challenge App Frontend! This application is designed to consume a backend to show the list of available files and the lines that are included in each file.

# You have two search criteria:
1. fileName - **input text**
2. excludeIncompleteData(true , false) - **checkbox**


By default excludeIncompleteData = true
If a file line does not contain all values corresponding to the columns :
fileName
text
num
hex
is discarded, if a file does not have any row containing the values of all columns the file even if it is available will not be displayed.

If a user wants to see all files with incomplete data he should deselect the Exclude Incomplete Data(false) field.

## Table of Contents
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Running the App](#running-the-app)
- [Usage](#usage)
- [Redux](#Using-Redux-in-the-Application)

## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) 

### Installation

 Clone the repository:


Install dependencies:
```bash
npm install
```

Running the App:
```bash
npm start
```

Running tests:
```bash
npm test
```

Usage
Open your web browser and navigate to http://localhost:9012 

You can use docker:
```bash
docker build -t challenge-front-end .

#if you prefer you can change the port
docker run -p 9012:9012 -d challenge-front-end

docker run -p 9013:9013 -d challenge-front-end-2
```

Open your web browser and navigate to http://localhost:9012 or http://localhost:9013 depends on the file you choose:
1. Dockerfile
    - Port 9012
2. Dockerfile-2
    - Port 9013

_**IF YOU RUN THE APP FROM DOCKER COMPOSE FILE USE : http://localhost:9011**_

_**NOTE: IF YOU RUN THE CONTAINERS INDEPENDENTLY CHANGE THE "PORT"(src/actions/fileActions.js) FOR THE BACKEND AND USE: 2022**_

Stop container: 
```bash
sudo docker stop <replace_your_docker_container_id>
```

Use the search input to search for files based on the file name.
Click the "Search" button to fetch and display files matching the search criteria.
If there's an error while fetching files, an error message will be displayed on the screen.

## How Redux is Used

This application utilizes Redux for state management. Redux is a predictable state container for JavaScript applications, making it easier to manage the state of your application and maintain a consistent data flow.

### State Management with Redux

Redux follows a unidirectional data flow, where the application state is stored in a single centralized store. Components can access and update the state using actions and reducers.

#### Actions

Actions are plain JavaScript objects that describe the type of action being performed. In this application, actions are dispatched to trigger changes in the state.

#### Reducers

Reducers specify how the state changes in response to actions. They are pure functions that take the current state and an action as arguments and return a new state.

#### Store

The Redux store holds the application state and provides methods to dispatch actions and subscribe to changes. It is created using the `configureStore` function and is accessible across the application.

### Using-Redux-in-the-Application

To use Redux in this application:

1. Actions are defined in the `actions` folder. They include functions to dispatch actions like fetching files data.

2. Reducers are defined in the `reducers` folder. They handle changes to the state based on dispatched actions. In this application, the `filesReducer` manages the files data.

3. The Redux store is configured in the `store.js` file. It combines reducers using the `combineReducers` function and creates the store using the `configureStore` function.

4. Components interact with Redux using the `useDispatch` and `useSelector` hooks. `useDispatch` is used to dispatch actions, and `useSelector` is used to access the state from the store.

Example:

```javascript
import { useDispatch, useSelector } from 'react-redux';
import { fetchFiles } from './actions/fileActions';

// Dispatch an action
const dispatch = useDispatch();
dispatch(fetchFiles());

// Access the state
const files = useSelector((state) => state.filesRed);
```

#### Benefits-using-redux

- Centralized state management for predictable and maintainable data flow.
- Improved debugging and tracking of state changes.
- Facilitates sharing state between components without the need for complex prop drilling.
- For more information about Redux, check out the official Redux documentation.


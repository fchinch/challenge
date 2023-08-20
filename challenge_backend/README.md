# Files Data API Documentation

Welcome to the documentation for the Files Data API. This API provides information about files and their lines.

# You have two search criteria:
1. fileName
2. excludeIncompleteData(true , false)

- By default excludeIncompleteData = true

If a file line does not contain all values corresponding to the columns :
```
fileName
text
num
hex
```
is discarded, if a file does not have any row containing the values of all columns the file even if it is available will not be displayed.

If a user wants to see all files with incomplete data he should deselect the Exclude Incomplete Data(false).

## Project Structure

The project is organized into three main directories, each representing a specific layer of the application:

1. `src/application`: This directory contains the application layer, responsible for handling user interactions, input validation, and orchestration of domain services. In this case, the `src/application/file` directory holds the `FileService.js` file, which implements file-related application logic.

2. `src/domain`: The domain layer holds the core business logic and entities. In this example, you have subdirectories under `src/domain` that represent key domain concepts:
    - `src/domain/file`: Contains the `File.js` class, which represents a file entity.
    - `src/domain/files`: Contains the `Files.js` class, which aggregates multiple lines.
    - `src/domain/lines`: Contains the `Lines.js` class, which represents line objects.

3. `src/infrastructure`: The infrastructure layer provides implementations for external services, databases, and other technical concerns. The `server.js` file under `src/infrastructure` is responsible for setting up the server to expose your API.


## Domain-Driven Design (DDD) Approach

Each of the project's layers aligns with DDD principles:

### Application Layer (`src/application`)

The application layer serves as the interface between the user and the domain logic. It handles user requests, input validation, and orchestrates interactions with domain services. In this project, the `FileService.js` file in the `src/application/file` directory implements application logic related to files.

### Domain Layer (`src/domain`)

The domain layer embodies the core business logic and entities. Key components include:

- **Entities (`src/domain/file`):** The `File.js` class represents the concept of a file, encapsulating its attributes and behavior.
- **Aggregates (`src/domain/files`):** The `Files.js` class aggregates multiple lines and ensures consistency within a file.
- **Value Objects (`src/domain/lines`):** The `Lines.js` class represents the text, number, and hex properties of a line.


### Infrastructure Layer (`src/infrastructure`)

The infrastructure layer handles technical concerns and interfaces with external services. The `server.js` file sets up the server to expose your API to the outside world.


## Getting Started

First, install dependencies:
```bash
npm install
```

Run the app:
```bash
npm start
```

To run the tests in the app:
```bash
npm test
```


To run and fix the files with the standard format(https://standardjs.com/) :
```bash
npm run standard-format
```

You can use docker:
```bash
docker build -t challenge-back-end .

#if you prefer you can change the port
docker run -p 9022:9022 -d challenge-back-end
```


To use this API, you can make GET requests to the following endpoint:

**1.** GET http://localhost:9022/files/data

You can add a query param named **fileName** to filter the data:

http://localhost:9022/files/data?fileName=test3.csv

You can add a query param named **excludeIncompleteData(true or false)** to filter the data:

http://localhost:9022/files/data?fileName=test15.csv&excludeIncompleteData=false


## Response Format

The API response will be a JSON array containing objects representing files and their lines. Each object has the following structure:

- `file`: The name of the file.
- `lines`: An array of line objects representing text data, numbers, and hex values.

Each `lines` object has the following properties:

- `text`: The text data.
- `number`: A number associated with the line.
- `hex`: A hexadecimal value associated with the line.

## Example Request

You can use tools like cURL to make requests to the API. Here's an example request:

```bash
curl --request GET \
  --url http://localhost:9022/files/data
```

or
```bash
curl --request GET \
  --url 'http://localhost:9022/files/data?excludeIncompleteData=false' \
```

or 

```bash
curl --request GET \
  --url 'http://localhost:9022/files/data?fileName=test15.csv&excludeIncompleteData=false' \
```

##  Example Response:
Here's an example of a response you might receive:

``` 
[
  {
    "file": "test3.csv",
    "lines": [
      {
        "text": "Ylyft",
        "number": null
      },
      {
        "text": "CnqAclEuxPmMlezfRcK",
        "number": 9,
        "hex": "6c9e617b2a7e86d899ef149c0cd7bd53"
      },
      {
        "text": "VUolyNejS",
        "number": 41,
        "hex": "153bb321af3b075ba43ae9edf81cd0e4"
      },
      {
        "text": "iZe",
        "number": 98855487,
        "hex": "5fa9878e51dcddff650ab44a1738d102"
      }
    ]
  }
]

```

```**************************************************************************************************```

**2.** To retrieve the list of available files, you can make a GET request to the following endpoint:

GET http://localhost:9022/files/list


## Request

Example using cURL:

```bash
curl --request GET \
  --url http://localhost:9022/files/list
```

Response Format
The API response will be a JSON object with a single property:

**files**: An array containing the names of the available files.

##  Example Response:

```bash
{
  "files": [
    "test1.csv",
    "test2.csv",
    "test3.csv",
    "test18.csv",
    "test4.csv",
    "test5.csv",
    "test6.csv",
    "test9.csv",
    "test15.csv"
  ]
}

```

# NodeJS Skeleton for Airport AI

This repository includes a NodeJS / Express / MongoDB skeleton app.

## Setup

### Requirements
Make sure you have MongoDB installed and running on your computer as well as NodeJS/NPM installed.

### Steps
On the root of this app, run the following command to install dependencies:
```
npm install
```

On the root of this app, run the following command to run the application:
```
npm start
```

If everything is ok, you should see a 'Hello world!' message when you go to 'http://localhost:3000' on your browser.



## Lost and Found API Documentation
Welcome to the Lost and Found API documentation. This API allows you to manage and search for lost products at the airport.

## Authentication
To access protected routes, you need to authenticate by obtaining an authentication token. Send a POST request to /auth/login with valid credentials to receive the token. Include the token in the Authorization header with the value Bearer <token> for subsequent protected requests.

## Login
Endpoint: /auth/login
Method: POST
Request Body:
username (string): The username of the authenticated user.
password (string): The password of the authenticated user.
Response:
token (string): The authentication token to be included in the Authorization header for protected requests.


## Product Endpoints
The following endpoints allow you to manage and search for lost products.

### Create a Product
Endpoint: /products
Method: POST
Protected Route: Requires authentication token in the Authorization header.
Request Body:
name (string): The name of the product.
type (string): The type of the product.
brand (string): The brand of the product.
color (string): The color of the product.
lostTime (string): The timestamp indicating when the product was lost (format: "YYYY-MM-DDTHH:mm:ssZ").
Response:
message (string): A success message.
product (object): The created product object.


### Delete a Product
Endpoint: /products/:id
Method: DELETE
Protected Route: Requires authentication token in the Authorization header.
Request Parameter:
id (string): The ID of the product to delete.
Response:
message (string): A success message.
product (object): The deleted product object.


### Search for Products
Endpoint: /products/search
Method: GET
Public Route: No authentication required.
Query Parameters:
keywords (string): Keywords to search for within product names.
lostTime (string): The timestamp indicating the lost time to filter products (format: "YYYY-MM-DDTHH:mm:ssZ").
Response:
products (array): An array of products matching the search criteria.

## Error Handling
If an error occurs during API operations, an appropriate error response will be returned. The response will contain an error message and an appropriate status code.

Please ensure to handle errors and respond accordingly in your application.

This is just a sample documentation to get you started. You can expand and customize it further based on your API's specific features, error handling, request/response formats, and any additional endpoints or functionalities you might have.

Remember to include information about the request/response formats, authentication requirements, and any other important details relevant to API consumers.

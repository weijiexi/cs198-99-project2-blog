# Project 02 - Blog

## Introduction

In this challenge I will create a login page and request a token from the server that I'll use to send all other requests to the server. I will then be able to fetch the article data array, update data, and delete data.

## Project Setup
-   [ ]  Run npm install to install the dependencies.
-   [ ]  Run npm start to run the frontend and backend code automatically.
-   [ ]  Note the backend code will run automatically when the run npm start. There is no need to seperately run a server.js file and no means to test the server through postman or the browser. Feel free to ignore any messages related to MSW or mock service workers.

## Project Instructions
In this project, I will demonstrate my mastery of these skills by creating **a login page** and **basic CRUD application.** I will implement basic security using **token authentication** and build private routes within the application.

### API Documentation
* **[POST]** * to `http://localhost:5000/api/login`: returns a the current authenication information of the user. Pass in the following credentials as the `body` of the request: `{ username: 'Fullstack-decal', password: 'Berkeley' }` for a successful login.

* **[POST]** * to `http://localhost:5000/api/logout`: returns the expired authentication information of the user.

* **[GET]** to `http://localhost:5000/api/articles`: returns the all articles currently available. **This endpoint can only be accessed by an authenticated user.**

* **[GET]** to `http://localhost:5000/api/articles/:id`: returns a single article with the id. **This endpoint can only be accessed by an authenticated user.**

* **[POST]** to `http://localhost:5000/api/articles`: creates a article object. Returns all available articles. Pass the article as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

* **[PUT]** to `http://localhost:5000/api/articles/:id`: updates the article using the `id` passed as part of the URL. Returns all available articles. Send the updated article object as the `body` of the request. **This endpoint can only be accessed by an authenticated user.**

* **[DELETE]** to `http://localhost:5000/api/articles/:id`: removes the article with the `id` referenced. Returns all available articles. **This endpoint can only be accessed by an authenticated user.**

#### Article Data Structure
```
{
    id: 'aMqwd', //unique article id
    headline: "headline", //title of article
    createdOn: '2021-08-09T18:02:38-04:00 
', //timestamp of when article was added
    summary: "summary", //short summary statement of article
      body: ""  //paragraph of article text
}
```

## Project Requirements

**See reference materials at the bottom of the this document for API Reference Details.**

### Basic Routing
> *Build the needed utilities to restrict access to private routes.*
* [ ] Build a `Route` component that renders rendering `Login.js` to the path `/`.
* [ ] Build a `Route` component that renders rendering `Login.js` to the path `/login`.
* [ ] Build a `Route` component that renders rendering `View.js` to the path `/view`.
* [ ] Build a `Route` component that renders rendering `Logout.js` to the path `/logout`.

### Login Authentication
> *Build a login form to authenticate Ir users along with all the components and utilities needed to support authentication.*

* [ ] In `Login.js`, build all UI and state functionality needed to capture a username and password. On a successful login, redirect user to the `View.js` component.
* [ ] **Make sure that the input for your username and password includes the id="username" and id="password" attributes. Codegrade autotests will fail without them.**
* [ ] **Make sure that the submit button to your login form includes the id="submit" attribute.  Codegrade autotests will fail without them.**
* [ ] In `Login.js`, add a p tag that will display an error if one occurs. Add in all state functionality needed to support error display.
* [ ] **Make sure your error p tag has an id="error" attribute attached. Codegrade autotests will fail without them.**
* [ ] Construct an http request that retrieves an auth token from the server when the username `Lambda` and the password `School` is passed into the request. Complete successful login auth flow and redirect to `View.js.`
* [ ] Display an appropriate error message when login is not successful.

### Route Authentication
* [ ] Build a `PrivateRoute` component within the components folder.
* [ ] Use the `PrivateRoute` component to build a route rendering `View.js` to the path `/view`.
* [ ] Use the `PrivateRoute` component to build a route rendering `Logout.js` to the path `/logout`.

### Request Authentication
> *Complete the requests needed to execute all CRUD functions.*
* [ ] Build a `axiosWithAuth` module within the utils folder to create an instance of axios with the authentication header.

* [ ] In `View.js`, complete `handleDelete` so that a http request is made that deletes the article with the included id. After successfully deleting the article on the api, update local state to reflect these changes.

* [ ] In `View.js`, complete `handleDelete` so that a http request is made that deletes the article with the included id. After successfully deleting the article on the api, update local state to reflect these changes.

* [ ] `editId` is passed into the `EditForm` component. In `EditForm.js`, make a http request on mount to get the article with the id `editId`. Save the result in state.

* [ ] In `View.js`, complete `handleEdit` so that a http request is made that updates the passed in article. Set the editing state to false when the request is complete. After successfully deleting the article on the api, update local state to reflect these changes.


### Logout Authentication
> *Add in the http requests needed to logout of the application.*

* [ ] In `Logout.js`, execute a http request to logout on mount. When the request is complete, the user's security token should be removed and the browser should redirect to the login page.


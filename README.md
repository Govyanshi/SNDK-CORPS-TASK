<h1 align="center">
    <b>User Registration & Login systems in<br> Node.js using MongoDB </b> 
<br>
</h1>


## What is this for?
This is a Simple User Registration & Login systems app done with Node.js Framework using MongoDB as the data store. User can create projects after login into system and inside it user can also create tasks and update the status of tasks.

## Getting Started


## Running the tests

### •Registration Form:
Allows the user to register their account by filling their Email, Username, Password.

<img src="./docs/registration.PNG" height="250" width="390" style="border: 1px solid black;">

### •Login Form:
If the user has been registered on the app, can login by passing the credentials.

<img src="./docs/login.PNG" height="220" width="390" style="border: 1px solid black;">

### •User's Profile:
After the user logged in, a simple profile with the user's username and password <br>displayed with a session Logout button.

<img src="./docs/data.PNG" height="160" width="380" style="border: 1px solid black;">

### •Password Reset:
If the user forget his/her password, can reset by entering the registered Email id <br>and reset the password.

<img src="./docs/forgetpass.PNG" height="200" width="400" style="border: 1px solid black;">

### DataBase:
Here we use **[MongoDB Atlas(Cloud)](https://www.mongodb.com/cloud/atlas)** as the database. Here we have two collection created, named as:
- users.
- sessions.

A Collection(**Users**) is populated with the user's credentials.

<img src="./docs/userdb.PNG" height="300" width="720" style="border: 1px solid black;"><br><br>

A Collection(**session**) is created which stores the users Logged session.

<img src="./docs/sessiondb.PNG" height="300" width="720" style="border: 1px solid black;">
<br>
<br>
<br>

## Prerequisites
Tools that we need to run this app:

- ***[Node.js](https://nodejs.org/en/)***
- ***[Node Package Manager](https://www.npmjs.com/get-npm)***
- ***[MongoDB (On Premise)](https://www.mongodb.com/cloud/atlas)***

## Steps to run project

1. First clone the project or download it.
2. run npm install to install the required dependencies by project
3. connect to mongodb database locally : mongodb://localhost:27017/
4. create a database of name 'sndk'
5. run command 'npm start'


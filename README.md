## Description
_______________

This is a full stack React Application that mimicks the normal behaviour of an e-commerce website; users can browse through the application to pick their favorite
items, users can add items to a wishlist for later usage, users can check items out if they want to purchase etc.
Pictures of the application are located within the client folder/ the src folder / the Layouts folder.

## How To run the App
_____________________

1. Either download or fork the app on a working directory using command line ' git clone 'https:// link to the github repository'.
2. Install all dependencies by typing the command 'npm install ' in the command line
3. Start the client side by running the command ' npm start'. The client side is served by default on 'http://localhost:3000/'.
4. Start the server side by running the command ' npm run dev'. it locally runs on 'http://localhost:4000/'.
5. You can now use the app

## How to use the App
_______________________

1. There are Four categories of items to pick (MEN, WOMEN, TEEN, HOME).
2. The user can sign in or create an account by clicking on the SIGN IN link on the top right;
3. Once the user likes an item, it is added to a wishlist which can be accessed by clicking the nav-link Wishlist(top-right) 
4. The user can add items to shopping cart, and from there proceed to checkout
5. The user can also sign out of the app, have all the records in the backend for later use in case the user decides to sign back in the app

## Features
____________

1. The Frontend is built using the JS library ReactJS
2. Routing is defined using react-router-dom, state management is defined by Redux toolkit and react-redux
3. Styling is defined with Material UI
4. The Backend is built using NodeJs/ ExpressJS
5. MongoDB is used as the database which is easily accessible thanks to MongooseJS
6. Authentication is built with Json Web token

## Bugs
_________
1. Fix the behaviour of the like Button
2. Responsiveness of the navigation bar

## Dependencies
_______________
Client side
____________
- react-router-dom
- reduxjs/toolkit, react-redux
- mui/material, mui/style

Server side
____________
- Express
- body-parser, helmet, morgan, cookie-parser, compression
- mongoose, express-jwt, jwt

## Pictures
_____________
#Mobile
________

![](Screen%20Shot%20EC%5Fmobile.png)
![](Screen%20Shot%20EC%5Fmobile2.png)
![](Screen%20Shot%20EC%5Fmobile3.png)

## Tablet
__________
![](Screen%20Shot%20EC%5Ftablet.png)
![](Screen%20Shot%20EC%5Ftablet2.png)
![](Screen%20Shot%20EC%5Ftablet3.png)

## Laptop
__________
![](Screen%20Shot%20EC%5Flaptop1.png)
![](Screen%20Shot%20EC%5Flaptop2.png)
![](Screen%20Shot%20EC%5Flaptop3.png)

## Deployment
______________

Project deployed on firebase: https://e-commerce-app-3ba56.web.app


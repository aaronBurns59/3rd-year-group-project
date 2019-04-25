# Professional Practice in IT

Authors:
+ Aaron Burns (G00346688)
+ Matthew Durand (G00346987)


## Module Description
"This module is intended to bring together many of the best practices that the student has learned in theprevious semesters. It give the student an opportunity to design, develop and deploy a project, eitherindividually or in a group environment, delivering a piece of software in a timely and standards driven manner."


## How to Run the Project
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0

+ Development Server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

+ Code Scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

+ Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

+ Running Unit Tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

+ Running End-To-End Tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).


## Introduction
Our Project is an Angular based online clothes shop website. Our goal was to create a website with which users could browse a selection of items of clothing on sale from various sellers. Products include a Description, Price, Brand, Condition, Seller Name and Contact Info. The Project includes CRUD functionality, meaning users can Create, Update, Read and Delete the data stored on mLab.


## Technologies Used

+ Angular - A TypeScript based open-source web-application framework.

+ Node.js - An open-source, cross-platform JavaScript run-time environment that executes JavaScript code outside of a browser.

+ Express - A web application framework for Node.js designed for building we applications and APIs.

+ Mongo - A cross-platform document-oriented database program, classified as a NoSQL database program, MongoDB uses JSON-like documents.
 
+ mLab - A fully managed cloud database service that hosts MongoDB databases and runs on AWS Google and Azure cloud providers.


## Design Methodology

We decided that the Waterfall Methodology would best suit our approach to working on the project. Each stage of the project would follow eachother sequentially downwards. When one stage was completed they were essentially set in stone and would remain unchanged until all other stages were complete. 
The five stages involved in this Methodology and how we practiced them are:
1. Requirements - Deciding what is needed
2. Design - Decide how development on the project would proceed
3. Implementation - The bulk of project development is completed during this stage. This consisted of developing each feature of the program
4. Verification - Testing phase to ensure implemented code worked as planned in the Design phase
5. Maintenance - Going over implemented features to alter and update functionality 


## References

+ https://developer.mozilla.org/en-US/docs/Web/JavaScript
+ https://angular.io/docs
+ https://docs.mlab.com/
+ https://medium.com/@BaaniLeen/connecting-angular-5-app-to-mongodb-database-mean-stack-9b4b4232e219
+ https://cli.angular.io/
+ https://material.angular.io/guide/getting-started
+ https://github.com/angular/angular-cli
+ https://karma-runner.github.io
+ http://www.protractortest.org/
+ https://github.com/angular/angular-cli/blob/master/README.md

#How the App Works

## Server

The server we used for this app is a node server that asynchronously communicates with a server on mlab. The server in question is a mongoose server meaning it is document based. Express is used to communicate between our local node server and the server on mlab. In order to read data from the correct database on mlab we needed to create a user which we called admin, with this user we can access the documents inside our *store* database. After we have set up the *Node* and *Expresss* the server operational and it can communicate with the hosted server on mlab. 

After the Node is set up, we declared a schema using the mongoose inbuilt functionality to create an schema of our *model* that we created to match the data format we wanted for the site. This schema called "StockSchema" is used to order all the data that is handled by the node server. After the schema has been created we create "StockModel" with it passing in the model type and the schema that is to be used. This is so that all data read in from the app and sent to the server is consistent.

The Node server has all the functions needed for *Create, Read, Update, Delete* (CRUD) functionality. This is done in the node using http get, post, delete and put methods. The Http method permissions are declared in the node as well. Any function which alters the mlab db has the data it reads or writes printed to the console so that it can be checked to see if it is correct. Delete and Update functionality requires its own separate read function because it order to read and update data in an mlab db you also need the automatically generated *id* that is given to each entry. The delete and update functions can find data in the db using that id, updating has a special funciton called *findByIdAndUpdate()* specifcally design to be used in this manner.

## Service

The service is imported into every component of the app because it calls all of the functionality that is in the node server. The service acts as a provider for the whole app. It takes the functionality of each component and stores it in one easily accessible place. The service does all data binding.  It subscribes to data that is read in from the mlab server and assigns new data to arrays that are then written to the mlab server.

## Add-Page

This page uses angular forms to read in the users input and bind it to array in the service. Using forms you can set it to an type of (submit) this means that you don't need a (Click) function inside the button to accept the data the user has entered. The button is contained inside the form tags which accepts that when the button is clicked that is the (submit) event.
This component has only one method and that relates directly to the form. It calls the AddStockData function in the server which in turn calls the add function in the node server.

## Display-Page

This page displays the data in the mlab DB. It does this asynchronously meaning that it you delete a document in the mlab DB it will automatically be deleted from the web page on a refresh and the same will have vice versa, if you delete an entry on the webpage and refresh the mlab DB, that entry will be gone. This page is where the user can update and delete. Both need to go all the way up to the mlab server to get the id of each entry. This is all done in the usual manner, component calls service calls node which gets from mlab server.

## Update-Page

This page is almost identical to the write page in terms of structure but how it operates is very different. This page can be accesses through the display-page and needs to be passed an entry that is already present in that page. To read that entry and update it to the mlab DB, it needs that entries unique id. A new read method is needed for this because the standard read method does not read the id. With the id you can read all the json data attached to it which is what the updated function in the server does. It just needs to be passed a *Model* to read it into.

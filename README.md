Consumed time to finish this test was about: 9:00 hours

# Peachtree FE test for Backbase #

### what technologies that i used ? ###

* AngularJS v1.6.4 - as a frontend framework.
* Angular UI Router - to facilitate routing and for its features.
* HTML5/CSS3 - for sure they are used for views UI creating and styling.
* Twitter Bootstrap - as UI framework.
* SASS - as CSS preprocessor.
* Lite-server - Just to facilate running in the development environment.

### What is the pattern and the archeticture that i used ? ###

* I've applied the IIFE pattern in all my files to isolate contexts.
* I've created a custom component for each segment in code that might be reusable later.
* I've applied components of angular 1.6 instead of directives old style.

### Setup prerequists ###

* you have to install NodeJS to use its package manager npm.
* you have to install sass. ([way to install sass](http://sass-lang.com/install)).
* you should install compass to facilitate the compilation of sass to css ([Here you go](http://compass-style.org/install/)).

### How to run the application ###

* open CMD or Terminal in the root folder.
* write this command `npm install` to install dependencies.
* then write this command `compass compile` to compile sass files into css files.
* Finally write `npm start` to start application and it will popup automatically in the browser at `http://localhost:3000`
* Cool !! Have fun.

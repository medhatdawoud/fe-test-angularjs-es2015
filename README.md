# Peachtree System - Frontend Sample #

### what technologies that i used ? ###

* Babel for supporting the ES2015 modules.
* AngularJS v1.6.8 - as a frontend framework.
* Angular UI Router - to facilitate routing and for its features.
* HTML5/CSS3 - for sure they are used for views UI creating and styling.
* Twitter Bootstrap - as UI framework.
* SASS - as CSS preprocessor.
* Webpack - as a bundler for all the js files.
* Lite-server - Just to facilate running in the development environment.

### What is the pattern and the archeticture that i used ? ###

* I've applied the ES2015 modules pattern in all my files.
* I've created a custom component for each segment in code that might be reusable later, each component is a separated module.
* the main module include all the components as module in dependancies.

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

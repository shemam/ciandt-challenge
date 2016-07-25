# ciandt-challenge

Sample responsive app as response to a CI&amp;T hiring challenge.


## Installation

After cloning the github repository open the directory on the command line and run 'npm install' to install the dependencies:

```
npm install
```

Affter that run gulp to build the app and start the local web server

```
gulp
```

The browser should open automatically, but if it does not open go to "http://localhost:8000" to navigate the app.

## Mobile test

To be able to access the application in a mobile device you should set the host for the webserver to be your local ip adress.

You can do that by altering line 22 of the "gulpfile.js" file. (Note that the mobile device must be in the same lan as the machine where the server is running)

```js
/**
 * Host name
 *
 * You should set your ip here in order to be able to
 * access the app from another device in the lan
 * 
 * @type {String}
 */
var host = '192.168.1.103';
```

The api for the movies does not seem to allow access to images if the domain is from localhost or if you have a donator's credential. So, in order to see the movies and tv shows images leave the host variable set to "localhost" in "gulpfile.js"
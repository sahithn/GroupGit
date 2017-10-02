# The Node Beginner Book: Server Module

## 5. Finding a place for our server module

Ok, I promised we will get back to how to organize our application. We
have the code for a very basic HTTP server in the file *server.js*, and
I mentioned that it's common to have a main file called *index.js*
which is used to bootstrap and start our application by making use of
the other modules of the application (like the HTTP server module that
lives in *server.js*).

Let's talk about how to make server.js a real Node.js module that can
be used by our yet-to-be-written *index.js* main file.

As you may have noticed, we already used modules in our code, like this:

    var http = require("http");
    ...
    http.createServer(...);

Somewhere within Node.js lives a module called "http", and we can make
use of it in our own code by requiring it and assigning the result of
the require to a local variable.

This makes our local variable an object that carries all the public
methods the *http* module provides.

It's common practice to choose the name of the module for the name of
the local variable, but we are free to choose whatever we like:

    var foo = require("http");
    ...
    foo.createServer(...);

Fine, it's clear how to make use of internal Node.js modules. How do we
create our own modules, and how do we use them?

Let's find out by turning our *server.js* script into a real module.

Turns out, we don't have to change that much. Making some code a module
means we need to *export* those parts of its functionality that we want
to provide to scripts that require our module.

For now, the functionality our HTTP server needs to export is simple:
scripts requiring our server module simply need to start the server.

To make this possible, we will put our server code into a function named
*start*, and we will export this function:

    var http = require("http");
    function start() {
      function onRequest(request, response) {
        console.log("Request received.");
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
      }
      http.createServer(onRequest).listen(8888);
      console.log("Server has started.");
    }
    exports.start = start;

This way, we can now create our main file *index.js*, and start our HTTP
there, although the code for the server is still in our *server.js*
file.

We've created a file *index.js* with the following content:

    var server = require("./server");
    server.start();

As you can see, we can use our server module just like any internal
module: by requiring its file and assigning it to a variable, its
exported functions become available to us.

That's it. We can now start our app via our main script, and it still
does exactly the same:

    node index.js

We've updated that in package.json.

Great, we now can put the different parts of our application into
different files and wire them together by making them modules.

We still have only the very first part of our application in place: we
can receive HTTP requests. But we need to do something with them -
depending on which URL the browser requested from our server, we need to
react differently.

For a very simple application, you could do this directly within the
callback function *onRequest()*. But as I said, let's add a bit more
abstraction in order to make our example application a bit more
interesting.

Making different HTTP requests point at different parts of our code is
called "routing" - well, then, let's create a module called *router*.

<a href="https://glitch.com/edit/#!/remix/NodeBeginner6/eaeb4887-1fef-4ca8-b8c6-7ece0a403596" target="_blank">>> Go to the next part</a>.


# License
The Node Beginner Book (C) Manuel Kiessling
[Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License](https://creativecommons.org/licenses/by-nc-sa/3.0/). Some small text changes have been made to the original to make sense on Glitch.

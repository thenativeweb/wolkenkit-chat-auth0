# wolkenkit-chat-auth0

Hi Bruno 😊!

Finally, the application that we talked about is ready!

It's a simple chat that is built using wolkenkit, and that uses Auth0 for authenticating users.

## Getting started

To run the application you need to perform a few steps after having cloned the GitHub repository.

### Installing wolkenkit

First of all, you need to install wolkenkit, a CQRS and event-sourcing framework for Node.js and JavaScript. Please follow the installation instructions for [macOS](https://docs.wolkenkit.io/1.2.0/getting-started/installing-wolkenkit/installing-on-macos/), [Linux](https://docs.wolkenkit.io/1.2.0/getting-started/installing-wolkenkit/installing-on-linux/) or [Windows](https://docs.wolkenkit.io/1.2.0/getting-started/installing-wolkenkit/installing-on-windows/), depending on what type of system you have.

This only needs to be done once.

### Running the server

To run the server switch to the directory that you cloned the GitHub repository to, and run the following command:

```shell
$ wolkenkit start
```

*Please note that the first start will take a few minutes, as the wolkenkit CLI needs to download a bunch of Docker containers in the background. All subsequent starts will be way faster.*

### Running the client

To run the client switch to the directory that you cloned the GitHub repository to, and run the following commands:

```shell
$ cd client
$ npx http-server
```

Then, open your browser and point it to [localhost:8080](http://localhost:8080). This should take you to the application and immediately forward you to the Auth0 login / signup page.

Once you have signed up and logged in, you can chat (with yourself 😉). To simulate multiple users, open another session in an incognito window and login in using a second user.

## Stopping the application

To stop the application you need to proceed as follows:

- To stop the client, simply hit `<Ctrl>+<C>`.
- To stop the server, run `wolkenkit stop`.

That's it! Have a lot of fun 😊!

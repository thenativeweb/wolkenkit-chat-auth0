# wolkenkit-chat-auth0

wolkenkit-chat-auth0 is a chat using [wolkenkit](https://www.wolkenkit.io/) and [Auth0](https://auth0.com/).

## What is wolkenkit?

> wolkenkit is a CQRS and event-sourcing framework for JavaScript and Node.js. wolkenkit uses an event-driven model based on DDD to setup an API for your business in no time. This way, wolkenkit bridges the language gap between your domain and technology.
>
> [wolkenkit.io](https://www.wolkenkit.io/)

For more details on wolkenkit see the [wolkenkit documentation](https://docs.wolkenkit.io).

## Quick start

To run a wolkenkit application, you first need to install wolkenkit. For this, see the installation guide for [macOS](https://docs.wolkenkit.io/latest/getting-started/installing-wolkenkit/installing-on-macos/), [Linux](https://docs.wolkenkit.io/latest/getting-started/installing-wolkenkit/installing-on-linux/), [Windows](https://docs.wolkenkit.io/latest/getting-started/installing-wolkenkit/installing-on-windows/), or [Docker Machine](https://docs.wolkenkit.io/latest/getting-started/installing-wolkenkit/installing-using-docker-machine/).

This only needs to be done once.

### Running the server

First you need to start the backend. Change to the directory where you have installed the application to, and run the following command:

```shell
$ wolkenkit start
```

*Please note that the first start will take a few minutes, as the wolkenkit CLI needs to download a bunch of Docker containers in the background. All subsequent starts will be way faster.*

### Running the client

Once you get the message that the wolkenkit application is running, run the client using the following command:

```shell
$ npx http-server ./client
```

Then, open your browser and point it to http://localhost:8080/. This takes you to the application, and then immediately forwards you to the Auth0 login and signup page.

Once you have signed up and logged in, you can use the chat. To simulate multiple users, open another session in an incognito window and login in using a second user.

### Stopping the application

To stop the application you need to proceed as follows:

- To stop the client, simply hit `<Ctrl>+<C>`.
- To stop the server, run `wolkenkit stop`.

## License

Copyright (c) 2018 the native web.

This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License along with this program. If not, see [GNU Licenses](http://www.gnu.org/licenses/).

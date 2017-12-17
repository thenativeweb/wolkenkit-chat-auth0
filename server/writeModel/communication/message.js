'use strict';

const initialState = {
  author: '',
  text: '',
  likes: 0,
  isAuthorized: {
    commands: {
      send: { forAuthenticated: true },
      like: { forAuthenticated: true }
    },
    events: {
      sent: { forAuthenticated: true },
      liked: { forAuthenticated: true }
    }
  }
};

const commands = {
  send (message, command, mark) {
    if (!command.data.text) {
      return mark.asRejected('Text is missing.');
    }

    message.events.publish('sent', {
      author: command.user.token.nickname,
      text: command.data.text
    });

    mark.asDone();
  },

  like (message, command, mark) {
    message.events.publish('liked', {
      likes: message.state.likes + 1
    });

    mark.asDone();
  }
};

const events = {
  sent (message, event) {
    message.setState({
      author: event.data.author,
      text: event.data.text
    });
  },

  liked (message, event) {
    message.setState({
      likes: event.data.likes
    });
  }
};

module.exports = { initialState, commands, events };

const tmi = require('tmi.js');

// Define configuration options
const opts = {
  identity: {
    username: '[your_bot_twitch_username]',
    password: 'oath:[your_bot_twitch_oauth_token]'
  },
  channels: [
    '[your_twitch_channel]'
  ]
};

// Create a client with our options
const client = new tmi.client(opts);

// Register event handlers
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch
client.connect();

// Called every time a message is received
function onMessageHandler(target, context, msg, self) {
  // Ignore messages from the bot
  if (self) return;

  // Remove whitespace from chat message
  const command = msg.trim();

  // Handle different commands
  if (command === '!hello') {
    client.say(target, 'Hello, Twitch chat!');
  }
  // Add more commands here...

  // Log the message to the console
  console.log(`[${target} (${context['message-type']})] ${context.username}: ${msg}`);
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler(addr, port) {
  console.log(`Connected to ${addr}:${port}`);
}

# Twitch Chat Bot Template
A template for a Twitch chat bot using tmi.js

If you’ve never used Node.js, you’ll have to install it first. Head to https://nodejs.org/en/download and download the install for your operating system. Run it and let it do its thing. 

Open this project in your favourite code editor (I like VS Code) and navigate to the project folder in a terminal. Run `npm install` to install the packages for this project.

### Getting the Credentials for the Bot’s Twitch Account

Go to [dev.twitch.tv](http://dev.twitch.tv) and sign in either with your account or make a new account for your bot to use. Go to Applications, and click the Register Your Application button. Fill out the information and then you’ll see your app listed. Click “Manage” to see the secret information that we’ll need in a moment. 

Now install the Twitch CLI, it makes getting the oauth token much easier.

### MacOS or Linux

To install the CLI on macOS or Linux, use [Homebrew](https://brew.sh/). Using Homebrew has the added benefit of managing versioning for you.

To install the CLI using Homebrew, run the following command from a terminal window:
```bash
brew install twitchdev/twitch/twitch-cli
```

To upgrade the CLI, use:
```bash
brew upgrade twitchdev/twitch/twitch-cli
```

### Windows

To install the CLI on Windows, use [Scoop](https://scoop.sh/). Using Scoop has the added benefit of managing versioning for you.

To install the CLI using Scoop, run the following commands from a terminal window:

```bash
scoop bucket add twitch https://github.com/twitchdev/scoop-bucket.git
scoop install twitch-cli
```

To upgrade the CLI, use:
```bash
scoop update twitch-cli
```

### Using the Twitch CLI

Run the following command in your terminal to configure the Twitch CLI. It will ask for your Client ID and Secret from the webpage where you registered your bot account. 

```bash
twitch configure
```

Now you can request an oauth token for reading and writing to chat:

```bash
twitch token -u -s 'chat:read chat:edit'
```

Copy the oauth token into the password field of your credentials in your `bot.js` file.

### Running the Bot

To run the bot, save the `bot.js` file and execute the following command in your terminal:

```bash
node bot.js
```

Your chat bot is now live and ready to interact with your Twitch chat!

// Install for Ruby
// https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/?utm_source=stackoverflow&utm_campaign=51126403
// Switch Shells
// https://www.moncefbelyamani.com/which-shell-am-i-using-how-can-i-switch/
//https://brew.sh
// https://medium.com/geekculture/my-ultimate-apple-silicon-developer-setup-b5e4f347e5d7

// /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"


// // Run these two commands in your terminal to add Homebrew to your PATH:
//     (echo; echo 'eval "$(/usr/local/bin/brew shellenv)"') >> /Users/davidhyland/.zprofile
//     eval "$(/usr/local/bin/brew shellenv)"
// Run brew help to get started
// Further documentation:
//    https://docs.brew.sh

// brew install chruby ruby-install

// install multiple versions of Ruby
// https://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/?utm_source=stackoverflow&utm_campaign=51126403#how-to-install-different-versions-of-ruby-and-switch-between-them


// Express server on port 3000 
// http://localhost:3000

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// https://www.npmjs.com/package/express
// https://expressjs.com/en/starter/installing.html

// npm init
// npm install express --save

// https://www.npmjs.com/package/express-generator
// npm install express-generator -g
// express myapp
// cd myapp
// npm install
// npm start

// https://www.npmjs.com/package/express-mongo-sanitize
// https://www.npmjs.com/package/express-rate-limit
// https://www.npmjs.com/package/express-sslify
// https://www.npmjs.com/package/express-x-ray
// https://www.npmjs.com/package/express-validator
// https://www.npmjs.com/package/express-winston
// https://www.npmjs.com/package/express-xml-bodyparser
// https://www.npmjs.com/package/express-xslt
// https://www.npmjs.com/package/express-session
// https://www.npmjs.com/package/express-redis-cache
// https://www.npmjs.com/package/express-redis-client
// https://www.npmjs.com/package/express-paginate
// https://www.npmjs.com/package/express-mysql-session
// https://www.npmjs.com/package/express-mongo-session
// https://www.npmjs.com/package/express-jwt
// https://www.npmjs.com/package/express-hbs
// https://www.npmjs.com/package/express-handlebars
// https://www.npmjs.com/package/express-flash
// https://www.npmjs.com/package/express-fileupload
// https://www.npmjs.com/package/express-debug
// https://www.npmjs.com/package/express-async-errors
// https://www.npmjs.com/package/express-accepts
// https://www.npmjs.com/package/express
// https://www.npmjs.com/package/express-async-handler
// https://www.npmjs.com/package/express-async-errors
// https://www.npm


// return the current time  in milliseconds




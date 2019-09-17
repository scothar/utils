# Simple Server 
This is a simple server that logs HTTP POST bodies to the console. You can use it, for instance, as the webhook server for a Twilio callback, in order to see the requests.

## Requirements
You must install express

```
npm install express --save
```

## Operation
By default, the server will listen on port 7002. To change this, you can set the 'PORT' environment variable, like this:
```
# export PORT=5000
```

Or, edit app.js and set change the following line:
```
var port = 7002;
```

Then, you can start the server:
```
# node app.js
```

## Making it public
If you want to use simpleServer as a webhook server for Twilio, you'll need to expose the service to the internet. One way of doing that is by using ngrok (see ngrok.com for details). You can start ngrok by:
```
# ngrok http 7002
```


# Simple Server 
This is a simple server that logs the requests to the console. You can use it, for instance, as the webhook server for a Twilio callback, in order to see the requests.

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


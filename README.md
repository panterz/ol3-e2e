Install dependencies:

```
npm install
npm -g install http-server
```

Serve the application:
```
http-server
```

And then update webdriver and start it
```
node_modules/.bin/webdriver-manager update
node_modules/.bin/webdriver-manager start
```

On a different terminal start run the tests
```
node_modules/.bin/protractor conf.js
```

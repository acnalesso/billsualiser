Billsualizer
------------


Allows people to see their bill ;)

## How can I see my bill?
  By going to the <strong>[billsualiser](http://billsualiser.herokuapp.com)</strong> and clicking on a section of interest.

## How to build the app
```bash
  ENV=env-here npm run build
```

## How to run the app

```bash
  npm install

  ENV=env-here npm run build
  node server
```

## How to run the functional tests
  NOTE: Tests run against firefox make sure you have firefox in your $path
  Assuming the app is running. Follow steps above.

```bash
  cd test && bundle install && ruby start_mock_server.rb && cd -
  ./node_modules/.bin/webdriver-manager start &
  ENV=env-here npm run fn
```

## How to run the unit tests
```bash
  npm test
```

## Available environments (config/env/*.js)
  * test
  * production

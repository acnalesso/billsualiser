Billsualizer
------------


Allows people to see their bill ;)


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
  Assuming the app is running. Follow steps above.
``bash
  cd test && bundle install && ruby start_mock_server.rb && cd -
  ENV=env-here npm run fn
``

## How to run the unit tests
``bash
  npm test
``

## Available environments (config/env/*.js)
  * test
  * production

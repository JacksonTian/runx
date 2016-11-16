# runx
Task runner

## Usage

Your task.js:

```js
'use strict';

const run = require('runx');

run(function* () {
  // TODO: your task
});
```

Run it

```sh
DEBUG=runx node task.js
```

## License
The MIT license

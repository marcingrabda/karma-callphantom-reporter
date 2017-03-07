# karma-callphantom-reporter

> Reporter that communicates with PhantomJS druing tests execution.

## Installation

The easiest way is to keep `karma-callphantom-reporter` as a devDependency in your `package.json`.
```json
{
  "devDependencies": {
    "karma": "~1.5.0",
    "karma-callphantom-reporter": "~0.1.0"
  }
}
```

You can simple do it by:
```bash
npm install karma-callphantom-reporter --save-dev
```

## Configuration
```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    reporters: ['callphantom']
  });
};
```

You can pass list of reporters as a CLI argument too:
```bash
karma start --reporters callphantom
```
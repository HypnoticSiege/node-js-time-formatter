# Node JS Time Formatter
 A Time Formatter to format seconds into readable text.

## Install

```
$ npm install node-js-time-formatter
```

## Usage

```js
const format = require('node-js-time-formatter')

let table = {
    "HypnoticSiege": {
        "discordID": "479456028967305247",
        "playTime": 60
    }
}

format(table["HypnoticSiege"].playTime)
```  
Returns:
```
0 Days, 0 Hours, 1 Minutes, and 0 Seconds
```

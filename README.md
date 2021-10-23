# Node JS Time Formatter
 A Time Formatter to format seconds into readable text.

## Install

```
$ npm install node-js-time-formatter
```

## Usage

```js
const format = require('node-js-date-formatter')

let table = {
    "steam:test": {
        "playTime": 60,
        "JoinTime": 0,
        "LeaveTime": 0
    }
}

format(body[`steam:test`].playTime)
```  
Returns:
```
0 Days, 0 Hours, 1 Minutes, and 0 Seconds
```

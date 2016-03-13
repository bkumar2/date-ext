# datetime-ext (JavaScript Datetime Extension)

datetime-ext is a Node.js module that has utility functions to parse date, datetime, time etc.

## Installation

```
npm install datetime-ext --save
```

## Usage

```javascript
var datetimeExt = require('datetime-ext');
```

## API Documentation
* [`parse()`](#parse)


<a id="parse" name="parse"/>
### parse()
Parses a datetime string into a date object.

```javascript
// Sun Jul 12 2009 12:34:56
var date = datetimeExt.parse("2009-07-12 12:34:56", "yyyy-MM-dd hh:mm:ss");
```

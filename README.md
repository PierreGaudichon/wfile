Wrapper for `fs.writeFile`
==========================

```coffee
wfile = require "rfile"

data = a: 0, b: 1
wfile "path/to/file.json", JSON.stringify(data)
  .then JSON.parse
  .then console.log
```

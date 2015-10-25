Wrapper for `fs.writeFile`
==========================

  wfile = require "rfile"
  
  data = a: 0, b: 1
  wfile "path/to/file.json", JSON.stringify(data)
    .then JSON.parse
    .then console.log

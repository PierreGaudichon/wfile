fs = require "fs"
{dirname} = require "path"

Promise = require "promise"
mkdirp = require "mkdirp"



module.exports = wfile = (path, data) -> new Promise (resolve, reject) ->

	fs.writeFile path, data, (err) ->
		if err and err.code is "ENOENT"
			mkdirp dirname(path), (err) ->
				if err then reject err
				resolve wfile path, data
		else if err
			reject err
		else
			resolve data

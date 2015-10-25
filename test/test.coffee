

wfile = require ".."


wfile "test/text", "Some text."

wfile "test/nested/deep/text", "Some text."
	.then console.log
	.catch -> console.log "error"

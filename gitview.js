
var exec = require('child_process').exec
var args = process.argv.slice(2)

exec('git config --get remote.origin.url', function(err, stdout, stderr){

	if (stdout.length < 1) return;

	var domains = require('./gitview-find-replace.json')
	var find = domains.find
	var replace = domains.replace

	var repo = stdout.replace(find, replace).replace(/\.git[\r\n]*/, '')
	var path = args[0]
	var branch = args[1] || 'develop'

	var url
	if (args.length < 1) {

		url = repo
	}

	else {

		url = `${repo}/blob/${branch}${path.replace(/\/Users\/[^\/]+\/projects\/[^\/]+/, '')}`
	}

	exec('open ' + url)
})

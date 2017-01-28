#!/usr/bin/env node
/*
in bash profile, add
	alias='node ~/path/gitview.js'
*/

var exec = require('child_process').exec
var args = process.argv.slice(2)

exec('git config --get remote.origin.url', function(err, stdout, stderr){

	if (stdout.length < 1) return;

	var replacement = require('./gitview-find-replace.json').replacement

	var repo = replacement + stdout.replace(/[\r\n]/, '').replace('.git', '').split(':')[1]
	var path = args[0]
	var branch = args[1] || 'develop'

	var url
	if (args.length < 1) {

		url = repo
	}

	else {

		url = repo+'/blob/'+branch+path.replace(/\/Users\/[^\/]+\/projects\/[^\/]+/, '')
	}

	exec('open '+url)
})

#!/usr/bin/env node
'use strict';
const meow = require('meow');
const makeDir = require('make-dir');

const cli = meow(`
	Usage
	  $ make-dir <dir> …

	Options
	  --mode  Directory permissions

	Examples
	  $ make-dir unicorn/awesome foo/bar
	  $ make-dir rainbow --mode=0666
`, {
	string: [
		'mode'
	]
});

const input = cli.input;

if (input.length === 0) {
	console.error('Specify at least one path');
	process.exit(1);
}

const opts = {};

if (cli.flags.mode) {
	opts.mode = parseInt(cli.flags.mode, 8);
}

for (const dir of input) {
	makeDir.sync(dir, opts);
}

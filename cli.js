#!/usr/bin/env node
import process from 'node:process';
import meow from 'meow';
import {makeDirectorySync} from 'make-dir';

const cli = meow(`
	Usage
	  $ make-dir <directory> …

	Options
	  --mode  Directory permissions

	Examples
	  $ make-dir unicorn/awesome foo/bar
	  $ make-dir rainbow --mode=0666
`, {
	importMeta: import.meta,
	flags: {
		mode: {
			type: 'string',
		},
	},
});

const {input: directories} = cli;

if (directories.length === 0) {
	console.error('Specify at least one path');
	process.exit(1);
}

const options = {};

if (cli.flags.mode) {
	options.mode = Number.parseInt(cli.flags.mode, 8);
}

for (const directory of directories) {
	makeDirectorySync(directory, options);
}

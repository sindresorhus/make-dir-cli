import fs from 'node:fs';
import path from 'node:path';
import test from 'ava';
import {execa} from 'execa';
import {temporaryDirectory} from 'tempy';

test('main', async t => {
	const paths = [
		path.join(temporaryDirectory(), 'foo/unicorn'),
		path.join(temporaryDirectory(), 'bar/rainbow'),
	];
	await execa('./cli.js', paths);
	t.true(fs.existsSync(paths[0]));
	t.true(fs.existsSync(paths[1]));
});

import fs from 'fs';
import path from 'path';
import test from 'ava';
import execa from 'execa';
import tempy from 'tempy';

test('main', async t => {
	const paths = [
		path.join(tempy.directory(), 'foo/unicorn'),
		path.join(tempy.directory(), 'bar/rainbow')
	];
	await execa.stdout('./cli.js', paths);
	t.true(fs.existsSync(paths[0]));
	t.true(fs.existsSync(paths[1]));
});

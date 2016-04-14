import path from 'path';
import os from 'os';
import test from 'ava';

os.userInfo = null;

const m = require('./');

test(t => {
	const pwd = m();

	console.log(pwd);

	if (process.platform === 'win32') {
		t.is(pwd.uid, -1);
		t.is(pwd.gid, -1);
		t.is(pwd.shell, null);
	} else {
		t.is(typeof pwd.uid, 'number');
		t.is(typeof pwd.gid, 'number');
		t.true(pwd.shell.indexOf(path.sep) !== -1);
	}

	t.is(typeof pwd.username, 'string');
	t.true(pwd.homedir.indexOf(path.sep) !== -1);
});

'use strict';
var os = require('os');
var username = require('username');
var osHomedir = require('os-homedir');
var passwdUser = require('passwd-user');

module.exports = os.userInfo || function () {
	if (process.platform === 'win32') {
		return {
			uid: -1,
			gid: -1,
			username: username.sync(),
			homedir: osHomedir(),
			shell: null
		};
	}

	var res = passwdUser.sync(process.getuid());

	return {
		uid: res.uid,
		gid: res.gid,
		username: res.username,
		homedir: res.homedir,
		shell: res.shell
	};
};

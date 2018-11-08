# Deprecated

This package is no longer relevant as Node.js 4 is unmaintained.

---

# user-info [![Build Status](https://travis-ci.org/sindresorhus/user-info.svg?branch=master)](https://travis-ci.org/sindresorhus/user-info)

> Node.js [`os.userInfo()`](https://nodejs.org/api/os.html#os_os_userinfo_options) [ponyfill](https://ponyfill.com)


## Install

```
$ npm install --save user-info
```


## Usage

```js
const userInfo = require('user-info');

console.log(userInfo());
/*
{
	uid: 501,
	gid: 20,
	username: 'sindresorhus',
	homedir: '/Users/sindresorhus',
	shell: '/bin/zsh'
}
*/
```


## API

See the [`os.userInfo()` docs](https://nodejs.org/api/os.html#os_os_userinfo_options).

The `encoding` option is not supported.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

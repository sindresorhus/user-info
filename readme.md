# user-info [![Build Status](https://travis-ci.org/sindresorhus/user-info.svg?branch=master)](https://travis-ci.org/sindresorhus/user-info)

> Node.js `os.userInfo()` ponyfill

> Ponyfill: A polyfill that doesn't overwrite the native method

See the Node.js [pull request](https://github.com/nodejs/node/pull/6104) for more info.


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

~~See the [`os.userInfo()` docs]().~~ *(Not yet)*

The `encoding` option is not supported.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

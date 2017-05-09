# make-dir-cli [![Build Status](https://travis-ci.org/sindresorhus/make-dir-cli.svg?branch=master)](https://travis-ci.org/sindresorhus/make-dir-cli)

> Make directories and their parents if needed - Like `mkdir -p`, but cross-platform


## Install

```
$ npm install --global make-dir-cli
```


## Usage

```
$ make-dir --help

  Usage
    $ make-dir <dir> …

  Options
    --mode  Directory permissions

  Examples
    $ make-dir unicorn/awesome foo/bar
    $ make-dir rainbow --mode=0666
```

```
$ pwd
/Users/sindresorhus/fun

$ tree
.

$ make-dir unicorn/rainbow/cake

$ tree
.
└── unicorn
    └── rainbow
        └── cake
```


## Tip

Create a shell alias for less typing:

```
alias md=make-dir
```


## Related

- [make-dir](https://github.com/sindresorhus/make-dir) - API for this module
- [del-cli](https://github.com/sindresorhus/del-cli) - Delete files and directories


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)

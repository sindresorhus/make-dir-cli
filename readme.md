# make-dir-cli

> Make directories and their parents if needed - Like `mkdir -p`, but cross-platform

## Install

```sh
npm install --global make-dir-cli
```

## Usage

```
$ make-dir --help

  Usage
    $ make-dir <directory> …

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

```sh
alias md=make-dir
```

## Related

- [make-dir](https://github.com/sindresorhus/make-dir) - API for this package
- [del-cli](https://github.com/sindresorhus/del-cli) - Delete files and directories

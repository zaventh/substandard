# JavaScript Substandard Style
[![npm][npm-image]][npm-url]
[![downloads][downloads-image]][downloads-url]

### The Great Tabulator

All the goodness of [Flet/semistandard] but with tabs. Because habits. And eyes.

## Install

```bash
npm install substandard
```

## Rules

Importantly:

- **tab indents**
- semicolons
- Check [feross/standard] for the rest of the rules.

## Badge

Use this in one of your projects? Include one of these badges in your readme to
let people know that your code is using the standard style.

[![js-substandard-style](https://cdn.rawgit.com/zaventh/substandard/af9fe51c/badge.svg)](https://github.com/zaventh/substandard)

```markdown
[![js-substandard-style](https://cdn.rawgit.com/zaventh/substandard/master/badge.svg)](https://github.com/zaventh/substandard)
```

[![js-substandard-style](https://img.shields.io/badge/code%20style-substandard-brightgreen.svg?style=flat-square)](https://github.com/zaventh/substandard)

```markdown
[![js-substandard-style](https://img.shields.io/badge/code%20style-substandard-brightgreen.svg?style=flat-square)](https://github.com/zaventh/substandard)
```

## Usage

The easiest way to use JavaScript Sub-Standard Style to check your code is to install it
globally as a Node command line program. To do so, simply run the following command in
your terminal (flag `-g` installs `substandard` globally on your system, omit it if you want
to install in the current working directory):

```bash
npm install substandard -g
```

After you've done that you should be able to use the `substandard` program. The simplest use
case would be checking the style of all JavaScript files in the current working directory:

```
$ substandard
Error: Use JavaScript Sub-Standard Style
  lib/torrent.js:950:11: Expected '===' and instead saw '=='.
```

### What you might do if you're clever

1. Add it to `package.json`

  ```json
  {
    "name": "my-cool-package",
    "devDependencies": {
      "substandard": "*"
    },
    "scripts": {
      "test": "substandard && node my-normal-tests-littered-with-semicolons.js"
    }
  }
  ```

2. Check style automatically when you run `npm test`

  ```
  $ npm test
  Error: Code style check failed:
    lib/torrent.js:950:11: Expected '===' and instead saw '=='.
  ```

3. Never give style feedback on a pull request again! (unless it's about semicolons)

### Custom Parser
To use a custom parser, install it from npm (example: `npm install
babel-eslint`) and add this to your package.json:

```json
{
  "substandard": {
    "parser": "babel-eslint"
  }
}
```

### [Vim](http://www.vim.org/)

Install **[Syntastic][vim-1]** and add these lines to `.vimrc`:

```vim
let g:syntastic_javascript_checkers=['standard']
let g:syntastic_javascript_standard_exec = 'substandard'
```

For automatic formatting on save, add these two lines to `.vimrc`:

```vim
autocmd bufwritepost *.js silent !substandard % --fix
set autoread
```

[vim-1]: https://github.com/scrooloose/syntastic

### Ignoring files

Just like in `standard`, The paths `node_modules/**`, `*.min.js`, `bundle.js`, `coverage/**`, hidden files/folders
(beginning with `.`), and all patterns in a project's root `.gitignore` file are
automatically excluded when looking for `.js` files to check.

Sometimes you need to ignore additional folders or specific minfied files. To do that, add
a `substandard.ignore` property to `package.json`:

```json
"substandard": {
  "ignore": [
    "**/out/",
    "/lib/select2/",
    "/lib/ckeditor/",
    "tmp.js"
  ]
}
```

### Make it look `snazzy`
If you want prettier output, just install the [`snazzy`](https://github.com/feross/snazzy) package and pipe `substandard` to it:

```bash
$ substandard --verbose | snazzy
```

See [feross/standard] for more information.

[npm-image]: https://img.shields.io/npm/v/substandard.svg?style=flat-square
[npm-url]: https://npmjs.org/package/substandard
[downloads-image]: https://img.shields.io/npm/dm/substandard.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/substandard
[feross/standard]: https://github.com/feross/standard
[Flet/semistandard]: https://github.com/Flet/semistandard

# check-pages-cli

> Checks various aspects of a web page for correctness.

[![npm version][npm-image]][npm-url]
[![GitHub tag][github-tag-image]][github-tag-url]
[![License][license-image]][license-url]

## Overview

`check-pages-cli` provides a simple command-line interface for the [check-pages package](https://github.com/DavidAnson/check-pages).

## Installation

```shell
npm install --global check-pages-cli
```

## Options

```shell
Usage: check-pages-cli <page URLs> [options]

Checks:
  --checkLinks        Validates each link on a page  [boolean]
  --checkCaching      Validates Cache-Control/ETag  [boolean]
  --checkCompression  Validates Content-Encoding  [boolean]
  --checkXhtml        Validates page structure  [boolean]

checkLinks options:
  --linksToIgnore     List of URLs to ignore  [array]
  --noEmptyFragments  Fails for empty fragments  [boolean]
  --noLocalLinks      Fails for local links  [boolean]
  --noRedirects       Fails for HTTP redirects  [boolean]
  --onlySameDomain    Ignores links to other domains  [boolean]
  --queryHashes       Verifies query string file hashes  [boolean]

Options:
  --summary          Summarizes issues after running  [boolean]
  --maxResponseTime  Response timeout (milliseconds)  [number]
  --userAgent        Custom User-Agent header  [string]
  --version          Show version number  [boolean]
  --help             Show help  [boolean]

Checks various aspects of a web page for correctness.
https://github.com/DavidAnson/check-pages-cli
```

Refer to the [check-pages documentation](https://github.com/DavidAnson/check-pages#readme) for more information.

## See Also

- [check-pages](https://github.com/DavidAnson/check-pages) which shows how to use `check-pages` with [Gulp](http://gulpjs.com/).
- [grunt-check-pages](https://github.com/DavidAnson/grunt-check-pages) which provides a `check-pages` wrapper for [Grunt](http://gruntjs.com/).

## Release History

- 0.9.0 - Initial release.

[npm-image]: https://img.shields.io/npm/v/check-pages-cli.svg
[npm-url]: https://www.npmjs.com/package/check-pages-cli
[github-tag-image]: https://img.shields.io/github/tag/DavidAnson/check-pages-cli.svg
[github-tag-url]: https://github.com/DavidAnson/check-pages-cli
[license-image]: https://img.shields.io/npm/l/check-pages-cli.svg
[license-url]: http://opensource.org/licenses/MIT

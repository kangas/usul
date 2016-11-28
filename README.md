## Usul

[![Build Status](https://travis-ci.org/kangas/usul.svg?branch=master)](https://travis-ci.org/kangas/usul)

**Usul** is a human and programmatic interface for public data about corporations.

> Stilgar nodded, tugging at his beard. “I see strength in you… like the strength beneath a pillar.” Again he paused, then: “You shall be known among us as Usul, the base of the pillar. This is your secret name, your troop name. We of Sietch Tabr may use it, but none other may so presume… Usul.”
>
> *Frank Herbert, "Dune"*

### Features

- Node API for accessing [SEC EDGAR][] data via FTP
- ES6 Promise-based API
- Progress tracking of downloads
- Local caching of documents via [LevelDB][]
- Command line human interface

The intent is to let you pretend that all of the EDGAR data is available to you locally, at all times. Usul then provides the best possible approximation of that goal.

### Install

`npm install -g usul`

### Ways to help

- **[Create a new issue](https://github.com/kangas/usul/issues/new)** to report bugs
- **[Fix an issue](https://github.com/kangas/usul/issues?state=open)**. Usul is an [OPEN Open Source Project](CONTRIBUTING.md)!

### Usage

TBD

### License

Apache 2.0. Copyright (c) Matt Kangas.

[SEC EDGAR]: https://www.sec.gov/edgar/searchedgar/webusers.htm
[LevelDB]: https://www.npmjs.com/package/levelup

# random-geohash

> Generate a random geohash. [More details on what a geohash is](http://en.wikipedia.org/wiki/Geohash).


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-geohash/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-geohash/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-geohash)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-geohash/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-geohash)


## Install

```
$ npm install --save random-geohash 
```

## Usage

```js
var randomGeoHash = require('random-geohash');

// API
// - randomGeoHash();
// - randomGeoHash(length);

randomGeoHash();
// => "h9xhn7y"
```
By default, includes `7` characters of accuracy. Can override with the `length` option.


```js
randomGeoHash(5)
// => "dr0kr"
```

## Related

- [random-geojson](https://github.com/mock-end/random-geojson) - Generate a random geojson.
- [random-altitude](https://github.com/mock-end/random-altitude) - Generate a random altitude, in meters.
- [random-depth](https://github.com/mock-end/random-depth) - Generate a random depth, in meters. Depths are always negative.
- [random-coordinates](https://github.com/mock-end/random-coordinates) - Generate a random coordinates, which are latitude and longitude, comma separated.
- [random-latitude](https://github.com/mock-end/random-latitude) - Generate a random latitude.
- [random-longitude](https://github.com/mock-end/random-longitude) - Generate a random longitude.
- [random-country](https://github.com/mock-end/random-country) - Return a random country. 
- [random-lang](https://github.com/mock-end/random-lang) - Return a random language name.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-geohash/issues/new).

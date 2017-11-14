# @jdists/jphps

jphps as jdists processor

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coverage-image]][coverage-url]

* @see [jdists](https://github.com/zswang/jdists)

* @see [jphps](https://github.com/zswang/jphps)

## Example

```html
<!--jdists encoding="jphps"-->
if (!empty($a)) {
  <p>#{$a}</p>
}
<!--/jdists-->

<!--jphps-->
if (!empty($a)) {
  <p>#{$a}</p>
}
<!--/jphps-->
```

## License

MIT © [zswang](http://weibo.com/zswang)

[npm-url]: https://badge.fury.io/js/%40jdists%2Fjphps
[npm-image]: https://badge.fury.io/js/%40jdists%2Fjphps.svg
[travis-url]: https://travis-ci.org/jdists/jphps
[travis-image]: https://travis-ci.org/jdists/jphps.svg?branch=master
[coverage-url]: https://coveralls.io/github/jdists/jphps?branch=master
[coverage-image]: https://coveralls.io/repos/jdists/jphps/badge.svg?branch=master&service=github
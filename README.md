# nameBeautifier
Beautifier for person names for Angular.js

[![Build Status](https://img.shields.io/travis/Syonet/name-beautifier.svg?style=flat-square)](https://travis-ci.org/Syonet/name-beautifier)
[![Code Climate](https://img.shields.io/codeclimate/github/Syonet/name-beautifier.svg?style=flat-square)](https://codeclimate.com/github/Syonet/name-beautifier)

```html
{{ user.name | beautifyName }}
<!--
input: JOAO DA SILVA
output: Joao da Silva
-->
```

## Installation
Use Bower to grab the package:

```shell
bower install syonet.nameBeautifier
```

Then, inject the module into your app:

```javascript
angular.module( "app", [ "syonet.namebeautifier" ]);
```

## Usage
nameBeautifier can be used in two forms in an Angular app: filter and service.

### As a filter
Simply use the `beautifyName` filter:

```html
{{ user.name | beautifyName }}
<!--
input: JOAO DA SILVA
output: Joao da Silva
-->
```

### As a service
Inject the `$nameBeautifier` service into your controller/service:

```javascript
.controller( "MyController", function ( $nameBeautifier, user ) {
    $nameBeautifier.beautify( user.name );
})
```

## License
MIT

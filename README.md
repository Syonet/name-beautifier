# nameBeautifier
Beautifier for person names for Angular.js

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
angular.module( "app", [ "syonet.nameBeautifier" ]);
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
# Vue.js component method plugin

Allows you to add custom methods to your components

## Usage

```
import VueMethodLoader from 'vue-method-loader'

function myMethod () {
	console.log('myMethod')
}

Vue.use(VueMethodLoader, { $myMethod: myMethod })
```

This Method will now be available inside of your components e.g.

```
methods: {
	handleEvent: function (event) {
	  event.preventDefault()
	  this.myMethod()
	}
}
```

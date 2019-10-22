## stackfire-link

a module for [stackfire](https://github.com/drschwabe/stackfire) to make HTML links fire commands

### usage

```js
const stack = require('stackfire')
//pass stack through this mod:
require('stackfire-link')(stack)

stack.on('my-link', () => console.log('hello world'))
```

and in your HTML...

```html
<a href="my-link">My Link</a>
```

now when this link is clicked it will fire the stack command `"my-link"` and any listeners queued in your stack


#### optional basename
```js
require('stackfire-link')(stack, 'my-app')
```
the stack command will now only be invoked on links with a basename of `my-app` for example to ensure the link in example above triggers you would do: `<a href="my-app/my-link">My Link</a>`

---
MIT

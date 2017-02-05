# StorageManager

Easy way HTML 5 localStorage Parsing

**Why**: While I was working with ionic framework I needed to managing HTML5 localStorage. This JavaScript file is very basic but useful for me.

# Usage

**Initalize StorageManager**

```js
var sm = new StorageManager();
```

**Search in Items**

*Return value can be multiple. If value is multiple, use array indices*

```js
localStorage.users = JSON.stringify([
	{
  	name: 'Ali',
    number: 12
  },
  {
  	name: 'Ali',
    number: 15
  },
  {
  	name: 'Veli',
    number: 13
  }
])

var findWhere = {
	name: 'Ali'
}

var multiple = sm.Parse('users', findWhere)

console.log(multiple[0].number)

var singular = sm.Parse('users', findWhere)

console.log(singular.number)

```

**Create localStorage**

```js
var myItems = JSON.stringify([
  {
    'username': 'Ali',
    'lastname': 'GÖREN',
    'age': 23
  },
  {
  	'username': 'Ahmet',
    'lastname': 'AYDIN',
    'age': 28
  }
])

sm.CreateStorage('otherUsers', myItems)

```

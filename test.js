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

var sm = new StorageManager();

console.log(sm.Parse('users', findWhere)[0].number) // if return value > 1

// or

console.log(sm.Parse('users', findWhere).number)


// Create localStorage Items

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

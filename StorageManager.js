class StorageManager
{
	Parse(storageKey, findExpression)
	{
		var getKey = Object.keys(findExpression)

		var json_parsing = JSON.parse(localStorage.getItem(storageKey))
		
		var isMultiple = json_parsing.filter(n => n[getKey] === findExpression[getKey]).length
		
		var returnValue = json_parsing.find(n => n[getKey] === findExpression[getKey])
		
		if(isMultiple > 1) {
			returnValue = json_parsing.filter(n => n[getKey] === findExpression[getKey])
		}
		
		return returnValue
	}

	CreateStorage(storageKey, storageItems)
	{
		localStorage.setItem(storageKey, storageItems)
	}
}

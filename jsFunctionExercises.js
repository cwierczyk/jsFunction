// 1. Please write a function that shows the usage of closures
const incrementCounter = (() =>{
    let counter = 0;

    return () => counter++
})();

// 2. Please write a function that returns a sum of array items
// example input [9, 1, 22, 0, 2]
// example output 34

const sumItems = (items) => items.reduce((a, b) => a + b, 0)

// 3. Please write a recursive function that flattens a list of items
// example input [[2, [4, [44,5,6]]], [4,5,6], [[2,4], 4], 5]]
// example output [2, 4, 44, 5, 6, 4, 5, 6, 2, 4, 4, 5]

const flatternItems = (items) => {
    for (const item of items) {
        if (Array.isArray(item)) {
            return flatternItems(items.flat())
        }
    }

    return items
}

// 4. Please write a function that finds all common elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['b', 4, 76]

const findCommon = (itemsA, itemsB) => itemsA.filter((itemA) => itemsB.includes(itemA))    

// 5. Please write a function that finds all different elements of two arrays(only primitive types as array elements, order doesn't matter)
// example inputs ['b', 3, 4, 76, 'c'], ['a', 'b', 4, 76, 21, 'e']
// example output ['a', 3, 21, 'c', 'e']

const findDifferent = (itemsA, itemsB) => {
    const getUnique = (a, b) => a.filter((itemA) => !b.includes(itemA))

    return getUnique(itemsA, itemsB).concat(getUnique(itemsB, itemsA))
}

// 6. Please write a function that takes two arrays of items and returns an array of tuples made from two input arrays at the same indexes. Excessive items should be dropped.
// example input [1,2,3], [4,5,6,7]
// example output [[1,4], [2,5], [3,6]]

const tupleItems = (itemsA, itemsB) => {
    let newItem = []

    itemsA.forEach((item, i) => {
        if (itemsB[i]) {
            newItem.push(new Array(item, itemsB[i]))
        }
    })

    return newItem
}


// 7. Please write a function which takes a path(path is an array of keys) and object, then returns value at this path. If value at path doesn't exists, return undefined.
// example inputs ['a', 'b', 'c', 'd'], { a: { b: { c: { d: '23' } } } }
// example output '23'

const getNestedItem = (itemsArray, itemsObject) => {
    const path = itemsArray[0]

    if (itemsObject[path] && typeof itemsObject[path] === 'object') {
        return getNestedItem(itemsArray.filter((item, i) => i > 0), itemsObject[path])
    }

    return itemsObject[path]
    
}

// 8. Please write compare function which compares 2 objects for equality.
// example input { a: 'b', c: 'd' }, { c: 'd', a: 'b' }  /// output true
// example input { a: 'c', c: 'a' }, { c: 'd', a: 'b', q: 's' }  /// output false

const chceckEquality = (itemsA, itemsB) => {
    const keys1 = Object.keys(itemsA)
    const keys2 = Object.keys(itemsB)

    if (keys1.length !== keys2.length) {
        return false
    }

    for (const key of keys1) {
        if (itemsA[key] !== itemsB[key]) {
            return false
        }
    }

    return true
}

// 9. Please write a function which takes a list of keys and an object, then returns this object, just without keys from the list
// example input ['color', 'size'], { color: 'Blue', id: '22', size: 'xl' }
// example output { id: '22' }

const filterItems = (itemsA, itemsB) => {
    const filteredItems = Object.keys(itemsB).filter(key => !itemsA.includes(key)).reduce((item, key) => {
        item[key] = itemsB[key]
        return item
    }, {})  

    return filteredItems 
}

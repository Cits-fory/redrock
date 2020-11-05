let arr = [
    [1, 2], 3, [4, [5, [6]], 7]
]

function even(arr) {
    let newArr = (arr + ``).split(`,`)
    let my = []
    newArr.forEach(function(data, _index, arr) {
        my.push(+data)
    })
    console.log(my)
}
even(arr) // [1,2,3,4,5,6,7]
    /////////////////////////////////////////////////////////////////////////////////////
let arr2 = [{ id: 10, name: 'kc' }, { id: 8, name: 'hy' }, { id: 15, name: 'pipi' }, { id: 2, name: 'mama' }]

function compare(a, b) {
    return a.id - b.id;
}
arr2.sort(compare)
console.log(arr2)
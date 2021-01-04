function makeClosures(arr, fn) {
    let result = new Array();
    for (let i = 0; i < arr.length; i++) {
        result[i] = function(b) {
            return function() {
                return fn(b)
            }
        }(arr[i])
    }
    return result;
}
let array = [1, 2, 3]
let foo = (x) => {
    console.log(x)
}
let fun = makeClosures(array, foo)
fun[1]() //2
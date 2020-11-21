const person = {
    name: 'Boson',
    age: 20,
    address: {
        city: 'Chongqing',
        area: 'Nanan'
    }
}
let { name, age, address: { city, area } } = person

console.log(name, age, city, area)
    // 通过解构赋值的方式获取对象中所有属性
    /////////////////////////////////////////////////////////////////////////////////////
    //实现一个函数计算斐波那契数列 0,1,1,2,3,5,8  An  =   An-1  +  An-2
function zz(N) {
    var arr = new Array(N)
    arr[0] = 0
    arr[1] = 1
    if (N <= 1) {
        return N
    } else {
        for (var i = 2; i <= N; i++) {
            var a = arr[N]
            let b = arr[i - 1]
            let c = arr[i - 2]
            arr[i] = c + b
        }
    }
    console.log(arr)
    console.log(arr[N])
}
///////////////////////////////////////////////////////////////////////////////////////////////////////
function add() {
    let sum = 0
    K = arguments.length
    for (var i = 0; i < K; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}
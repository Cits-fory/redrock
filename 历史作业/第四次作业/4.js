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
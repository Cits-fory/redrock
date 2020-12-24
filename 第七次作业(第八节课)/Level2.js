Function.prototype.call2 = function call2(obj1) {
    let obj2 = []
    for (let i = 0; i <= arguments.length - 1; i++) {
        obj2[i - 1] = (arguments[i])
    }
    obj1.fn = this;
    obj1.fn(...obj2);
}

function sayInfo(age) {
    console.log("name:" + this.name)
    console.log("age:" + age)
}
var user = {
    name: "zzx"
}
sayInfo.call2(user, 100)
function sum(a,b) {
        return a+b;
}

function mul(a, b) {
        return a*b;
}

// .뒤의 값은 빠질 때의 이름이라고 생각하기, 즉 require해주는 곳에서 쓰는 이름(exports.key = value)<= 이런 느낌
// exports.sum = sum 
// exports.mul = mul

module.exports = {
    sum: sum,
    mul: mul
}
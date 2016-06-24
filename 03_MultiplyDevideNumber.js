function multiplyOrDivide(arr) {
    let nums = arr.map(Number)
    let a = nums[0]
    let b = nums[1]

    let res = 0;
    if(b >= a) {
        res = multiply(a, b)
    } else {
        res = divide(a, b)
    }

    return res

    function multiply(a, b) {
        return a * b
    }

    function divide(a, b) {
        return a / b
    }
}
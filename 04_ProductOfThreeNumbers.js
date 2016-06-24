function productOfThree(arr) {
    let negativeNums = arr
        .map(Number)
        .filter(n => n < 0);

    if (negativeNums.length % 2 == 1) {
        return 'Negative'
    }

    return 'Positive'
}

console.log(productOfThree([2,3,-1]))
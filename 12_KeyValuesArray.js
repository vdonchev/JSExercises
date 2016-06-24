function keyValue(arr) {
    let res = {}

    for (let i = 0; i < arr.length - 1; i++) {
        let tokens = arr[i].split(' ')
        res[tokens[0]] == undefined ? res[tokens[0]] = [tokens[1]] : res[tokens[0]].push(tokens[1])
    }

    let needle = arr[arr.length - 1];
    if (res[needle] == undefined) {
        console.log('None')
    } else {
        for (let item of res[needle]) {
            console.log(item)
        }
    }
}
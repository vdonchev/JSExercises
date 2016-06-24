function keyValue(arr) {
    let res = {}

    for (let i = 0; i < arr.length - 1; i++) {
        let tokens = arr[i].split(' ')
        res[tokens[0]] = tokens[1]
    }

    let needle = arr[arr.length - 1];
    console.log(res[needle] || 'None')
}

keyValue(['key value', 'key eulav', 'test tset', 'key'])
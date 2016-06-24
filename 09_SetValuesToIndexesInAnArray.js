function setArray(arr) {
    let res = []

    let arrCount = Number(arr[0]);
    arr.shift();

    for (let item of arr) {
        let tokens = item.split(/\s\-\s/)
        res[tokens[0]] = tokens[1]
    }

    for (let i = 0; i < arrCount; i++) {
        console.log(res[i] || 0)
    }
}
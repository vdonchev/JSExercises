function printLines(arr) {
    for (let line of arr) {
        if (line == 'Stop') {
            break;
        } else {
            console.log(line)
        }
    }
}

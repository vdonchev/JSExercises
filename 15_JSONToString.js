function jsonToString(arr) {
    let obj = {}
    arr
        .map(i => i.split(/ -> /))
        .forEach(e => obj[e[0]] = e[1]);

    obj['grade'] = Number(obj['grade']) // what the hack!?
    obj['age'] = Number(obj['age']) // what the hack!?

    console.log(JSON.stringify(obj))
}

jsonToString([
    'name -> Angel',
    'surname -> Georgiev',
    'age -> 20',
    'grade -> 6.00',
    'date -> 23/05/1995',
    'town -> Sofia'
])
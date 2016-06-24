function addRemoveElements(arr) {
    var res = [];

    for (let command of arr) {
        let tokens = command.split(' ');
        if (tokens[0] == 'add') {
            add(tokens[1])
        } else {
            remove(tokens[1])
        }
    }

    for (let i of res) {
        console.log(i)
    }

    function add(a) {
        res.push(a)
    }

    function remove(b) {
        res.splice(b, 1)
    }
}
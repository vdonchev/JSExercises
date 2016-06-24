function storingObjects(arr) {
    let res = [];
    for (let line of arr) {
        let tokens = line.split(/\s\-\>\s/);
        res.push({'name': tokens[0], 'age': tokens[1], 'grade': tokens[2]});
    }

    for (student of res) {
        console.log('Name: ' + student.name);
        console.log('Age: ' + student.age);
        console.log('Grade: ' + student.grade);
    }
}

storingObjects([
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90']);
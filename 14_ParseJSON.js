function parseJson(arr) {
    arr
        .map(JSON.parse)
        .forEach(Print)

    function Print(student) {
            console.log('Name: ' + student.name);
            console.log('Age: ' + student.age);
            console.log('Date: ' + student.date);
    }
}
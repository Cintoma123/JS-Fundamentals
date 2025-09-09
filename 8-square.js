const school = 'Holberton School';
function printSquare(size){
    for (let i = 0; i < size; i++) {
        let row = '';
    for (let j = 0; j < size; j++) {
        row = '#';
        }
        console.log(row);
    }
    if (isNaN(size)) {
    console.log('MissingSize');
    }
}

printSquare(2)
printSquare(6)
printSquare(school)
printSquare(-3)

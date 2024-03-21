const numbers = arrayFromRange(-1, 11);
numbers.push(4);
numbers.push(7);
numbers.push(4);
console.log(numbers);

console.log(includes(numbers, 1));

console.log(except(numbers, [1,2,3,4,5]))

console.log(numbers);
console.log(move(numbers, 0, 12))
console.log(countOccurrences(numbers, 4))
console.log(getMax(numbers))
console.log(getMax([]))

function arrayFromRange(min, max){
    const output = [];
    while (min <= max) {
        output.push(min++);
    }
    return output;
}

function includes(array, serachElement) {
    return array.some(element => element === serachElement);
}

function except(array, excluded){
    const output = [];
    array.forEach(element => {
        if (!excluded.includes(element)){
            output.push(element);
        }
    });
    return output;
}

function move(array, index, offset){
    const targetIndex = index + offset;

    if (index >= array.length || index <0){
        console.error('Invalid index');
        return;
    }

    if (targetIndex >= array.length || targetIndex < 0 ) {
        console.error('Invalid offset');
        return;        
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    
    output.splice(targetIndex, 0, element);
    return output;
}

function countOccurrences(array, serachElement){
    return array.reduce((accumulator, current) => {
        const occurence = (current === serachElement) ? 1 : 0;
        console.log(accumulator, current, serachElement);
        return accumulator + occurence
    }, 0);
}

function getMax(array){
    if (array.length === 0) return undefined;
    return array.reduce((accumulator, current) => current > accumulator ? current : accumulator);
}
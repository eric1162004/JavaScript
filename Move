//this code move an element in an array by a offset value

const numbers = [1, 2, 3, 4];

function move(array, index, offset) {
    //check for a valid offset value
    let limit = index + offset
    if (limit > array.length || limit < 0)
        return "Invalid offset";

    else {
        let temp = array[index];
        array[index] = array[index + offset];
        array[index + offset] = temp;
        return array;
    }
}

console.log(move(numbers, 1, 2));
//result [1,4,3,2]

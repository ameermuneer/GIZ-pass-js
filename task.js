let numbers = [
    5,
    8,
    0,
    1,
    9,
    11,
    15,
    16
];

console.log("Original numbers list: ", numbers);

// flag to be true when there one iteration withou any swapping
let is_sorting_finished = false;
while (!is_sorting_finished) {
    is_sorting_finished = true;
    for (let j = 0; j < numbers.length - 1; j++) {
        if (numbers[j] > numbers[j + 1]) {
            // swapping
            let temp = numbers[j];
            numbers[j] = numbers[j + 1]
            numbers[j + 1] = temp;
            // when swapping , then another iteration is needed 
            is_sorting_finished = false;
        }
    }
}

console.log("Numbers list After sorting: ", numbers);

// flag to be true when there one iteration without any swapping
is_sorting_finished = false;
while (!is_sorting_finished) {
    is_sorting_finished = true;
    for (let j = 0; j < numbers.length - 1; j++) {
        if (numbers[j] < numbers[j + 1]) {
            // swapping
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
            // when swapping , then another iteration is needed 
            is_sorting_finished = false;
        }
    }
}

console.log("Numbers list After Desc sorting: ", numbers);


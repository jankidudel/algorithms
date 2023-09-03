
enum SortOrder {
    Asc,
    Desc
}

function bubbleSort(input: number[], order: SortOrder): number[] {
    const inputLength = input.length;
    let swapped = false;
    do {
       swapped = false;
       for (let i = 1; i < inputLength; i++) {
            let swapNeeded = order === SortOrder.Asc ? (input[i-1] > input[i]) :  (input[i-1] < input[i])
            if (swapNeeded) {    
                let tmpVal = input[i-1];
                input[i-1] = input[i];
                input[i] = tmpVal; 
                swapped = true;
            }
       }
    } while (swapped);
    return input;
}

const inputArr = [3, 8, 9, 6, 10, 7, 1, 5, 4, 2];

console.log('sorting ASC result =  ', bubbleSort(inputArr, SortOrder.Asc));
console.log('sorting DESC result =  ', bubbleSort(inputArr, SortOrder.Desc));

export {};

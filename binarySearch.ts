function binarySearch(arr: number[], searchElement: number) {
    let leftBoundary = 0;
    let rightBoundary = arr.length - 1;
    while (leftBoundary <= rightBoundary) {
        const middleIndex = Math.floor((leftBoundary + rightBoundary) / 2);
        if (arr[middleIndex] < searchElement) {
            leftBoundary = middleIndex + 1;
        } else if (arr[middleIndex] > searchElement) {
            rightBoundary = middleIndex - 1;
        } else {
            return middleIndex;
        }
    }
    return false;
}

const inputData = [2, 5, 8, 12, 16, 23, 38, 56, 72, 91, 93];
const res = binarySearch(inputData, 38);

console.log('result = ', res);

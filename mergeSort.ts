function mergeSort(aArr: number[]) {

    const arrSize = aArr.length;
    const bArr = aArr.slice();
    topDownSplitMerge(aArr, 0, arrSize, bArr);

    return aArr;

    function topDownSplitMerge(bArr: number[], iBegin: number, iEnd: number, aArr: number[]) {
        if (iEnd - iBegin <= 1) {
            return;
        }
        let iMiddle = Math.floor((iEnd + iBegin) / 2);
        topDownSplitMerge(aArr, iBegin, iMiddle, bArr);
        topDownSplitMerge(aArr, iMiddle, iEnd, bArr);
        topDownMerge(bArr, iBegin, iMiddle, iEnd, aArr);
    }

    function topDownMerge(bArr: number[], iBegin: number, iMiddle: number, iEnd: number, aArr: number[]) {
        let i = iBegin;
        let j = iMiddle;
        for (let k = iBegin; k < iEnd; k++) {
            if (i < iMiddle && (j >= iEnd || aArr[i] <= aArr[j])) {
                bArr[k] = aArr[i];
                i++;
            } else {
                bArr[k] = aArr[j];
                j++;
            }
        }
    }
}

const res = mergeSort([3, 1, 50, 14, 33, 99, 2, 117, 44, 15]);
console.log('res = ', res);

export { };
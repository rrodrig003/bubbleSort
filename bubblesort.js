function bubbleSort(arr) {
    if (arr.length === 0) return [];

    let swapped = false;

    for (let i = 0; i < arr.length - 1; i++) {
        if (compare(arr[i], arr[i+1])) {
            [arr[i], arr[i+1]] = swap(arr[i], arr[i+1]);
            swapped = true;
        }
    }

    if (swapped) bubbleSort(arr);

    return arr;
}

function swap(a, b) {
    return [b, a];
}

function compare(idx1, idx2) {
    return idx1 > idx2;
}
function quickSort(arr){
    if (arr.length<=1) return [...arr]
    let [l, r] = [0,arr.length-1]
    let pivot = Math.floor((l+r)/2)
    let left = []
    let right = []
    for (let i = 0; i < arr.length ; i++){
        if (arr[i] < arr[pivot]) left.push(arr[i])
        if (arr[i] > arr[pivot]) right.push(arr[i])
        if (arr[i] == arr[pivot] && i!==pivot) left.push(arr[i])
    }
    return [...quickSort(left),arr[pivot],...quickSort(right)]

}

// 示例用法
const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // 输出 [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let mid= Math.floor(arr.length/2)
    let leftArr= arr.slice(0,mid)
    let rightArr= arr.slice(mid)
    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr){
    // console.log(leftArr, rightArr)
    let temp=[]
    while(leftArr[0] && rightArr[0]) {
       if(leftArr[0]<rightArr[0]){
            temp.push(leftArr[0])
            leftArr.shift()
        }else{
            temp.push(rightArr[0])
            rightArr.shift()
        }
    }
   // console.log(temp)
    return [...temp, ...leftArr, ...rightArr]

}

let arr= [4,54,2,5,6,23,8,1]
console.log(mergeSort(arr))


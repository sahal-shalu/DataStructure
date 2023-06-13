function selectionSort(arr){
    for(let i=0;i<arr.length;i++){
        let pos=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[pos]){
                pos=j
            }
        }
        let temp=arr[i]
        arr[i]=arr[pos]
        arr[pos]=temp

    }
    return arr
}

console.log(selectionSort([533,2,5,2,1,0,57]));
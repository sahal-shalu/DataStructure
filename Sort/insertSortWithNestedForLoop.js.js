function insertSortWithForLoop(arr){
    for(let i=1;i<arr.length;i++){
        let position=i
        for(j=i-1;j>=0;j--){
            if(arr[position]<arr[j]){
             [ arr[position],arr[j]]=[arr[j],arr[position]]
               position=j
            }
        }
    }
    return arr
}

console.log(insertSortWithForLoop([45,2,4456,2,9,1]))
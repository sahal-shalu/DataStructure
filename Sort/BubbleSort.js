function bubbleSort(arr){
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
               var temp=arr[j]
               arr[j]=arr[j+1]
               arr[j+1]=temp
            }
        }
    }
    return arr
}


console.log(bubbleSort([353,22,556,21,1]))
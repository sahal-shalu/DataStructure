
function search(arr,target){
    for(i=0;i<arr.length;i++){
        if(arr[i] === target){
            return i
        }
    }
    return -1
}

console.log(search([56,34,12,765,23,12],12))


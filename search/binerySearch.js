
function search(arr,target){
    let start = 0
    let end =  arr.length-1
    while(start<=end){
        let mid = Math.floor((start+end)/2)
        if(target === arr[mid]){
            return mid 
        }
        if(target < arr[mid]){
            end = mid-1
        }else{
            start = mid+1
        }
    }
    return -1
}
console.log(search([1,2,3,4,5,9],1))

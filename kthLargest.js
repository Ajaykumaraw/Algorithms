const arr = [7, 10, 4, 3, 20, 15];

function kthLargest(arr,k){
   arr.sort((a,b)=> a-b)

   return arr[k-1]
}

console.log(kthLargest(arr,3))
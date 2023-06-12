function BinarySearch(arr,x){
    let l= 0;
    let r= arr.length-1;
    let mid;
    while(r>=l){
        mid = l + Math.floor((r-l)/2);
        //if mid is equal to target then return mid 
        if(arr[mid]==x) return mid;
        /*  if value at mid is grater then target 
         then shift right to mid -1  else left to mid+1  */
        if(arr[mid]>x) r = mid -1;
        else
            l = mid+1
    }
    return -1
}

let arr = [2,4,6,8,12,18,22,49,50];
const resutlt = BinarySearch(arr,2);
console.log(resutlt);
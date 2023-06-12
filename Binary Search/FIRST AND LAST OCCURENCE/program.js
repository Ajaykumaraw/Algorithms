/* Given a sorted integer array, find the  index of a given
   number's first or last occurance. if the element is not 
   present in the array, report that as well.
   
   provide Input : nums:[2,5,5,5,6,6,8,9,9,9]
   target : 5
*/

/*
    seudo code for this problem.
    given : mid, low, high,target,firstOccr[mid-1],lastOccur[mid+1];
    mid = (low + high)/2;
    while(low < high)
    if(mid == target) return mid;
    else check 
        if(mid < target) low = mid + 1;
        if(mid > target) high = mid -1;


    once target found, find occurance
    isoccur = true;
    while(isoccur)
        if(mid == mid -1) isoccure = true;
            mid = mid -1 ;
*/

function FirstandLast(arr,x){
    let l=0;
    let r = arr.length-1;
    let mid;
    while(r>=l){
        mid = l + Math.floor((r-l)/2);
        if(arr[mid] == x) return mid;
        if(arr[mid]>x) 
            r = mid -1;
        else
            l = mid+1;
    }
    return -1
}
function findFandL(arr,mid){
        let FOC;
        if(arr[mid] == arr[mid -1]){
            FOC = mid -1;
        }
}

const arr = [2,4,5,6,6,6,8,10];
const result = FirstandLast(arr,10);
console.log(result);
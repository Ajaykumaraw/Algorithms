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

function findTarget(nums,target,length){
    let low = 0;
    let high = length-1;
    let mid = (low+high)/2;
    while(low<high){
        if(nums[mid] === target) return mid;
    }
}

let nums = [2,5,5,5,6,6,8,9,9,9];
let target = 6;
let length = nums.length;
const index = findTarget(nums,target,length);

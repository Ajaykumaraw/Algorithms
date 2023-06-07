let iterativeFunction = function(sorted_arr,target){
    let start = 0, end = sorted_arr.length-1;

    /* iterate the loop until start not reach to 
        the end or to equeal of end.     */
    while(start<=end){
        // find the middle of the list.
        let mid =  Math.floor((start+end/2));

        // return true if mid element mathes with the target //
        if(sorted_arr[mid] === target) return true;
        //otherwise look in the left and right half
        else if(sorted_arr[mid] < target) start = mid+1;
        else end = mid -1;
    }
return false;

};

let sorted_arr = [2,6,8,10,12,14];
let target = 9;
if(iterativeFunction(sorted_arr,target,0,sorted_arr.length-1))
console.log('Target found');
else console.log('Target not found');
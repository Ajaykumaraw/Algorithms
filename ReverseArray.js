const arr = [2,3,4,5,6,1];

console.log('array before reverse '+ arr);

function reverseArray(arr,start,end){
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    console.log(arr);
}

let start  = 0;
const n = arr.length;
let end = n-1;

reverseArray(arr,start,end);

console.log('array after reverse '+ arr);


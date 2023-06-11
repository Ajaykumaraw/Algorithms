function BinarySearch(arr,x){
    let l= 0;
    let r= arr.length-1;
    let mid;
    while(r>=l){
        mid = l + Math.floor((r-l)/2);
        if(arr[mid]==x) return mid;
        if(arr[mid]>x) r = mid -1;
        else
            l = mid+1
    }
    return -1
}

let arr = [2,4,6,8,12,18,22,49,50];
const resutlt = BinarySearch(arr,24);
console.log(resutlt);
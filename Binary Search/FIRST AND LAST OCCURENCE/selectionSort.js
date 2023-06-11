
function selectionSort(arr){
    for(let i=0;i<arr.length-1;i++){
        console.log('in i loop',arr[i]);
        for(let j=1;j<arr.length;j++){
           console.log("in j loop ",arr[j]);
        }
    }
    console.log(arr);
}
const arr = [2,4,1,5,3,6,7];
selectionSort(arr);
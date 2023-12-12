
function arraySort(arr){
  for(let j=0;j<arr.length-1;j++){
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]<arr[i+1]){
           console.log(arr[i]);
        }else{
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        }
        console.log(arr[i]);
   }
  }
}
const arry1 = [2,8,3,5,6,1,-3];

arraySort(arry1)
console.log(arry1)

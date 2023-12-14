function numberOfOccurance(arr1,x){
    let count = 0;
    for (let i = 0; i < arr1.length; i++) {
        if(arr1[i]==x){
            count++;
        }
    }
    return count;
}


arr = [1, 2, 2, 2, 2, 3, 4, 7 ,8 ,8 ];
let x = 8;

console.log(numberOfOccurance(arr,x));
function pairWithGivenSum(arr,sum){
    count = 0;
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1 ; j < arr.length; j++) {
            if(arr[i]+arr[j]==sum){
                count++;
               
            }
        }        
    }
    console.log(count)
}

const a = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];
const k = 11;
pairWithGivenSum(a,k)
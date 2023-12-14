function duplicateArray(arr){
    const map = new Map();
    const dupVal = new Array;
    for (let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])){
            dupVal.push(arr[i]);
            //console.log('has already'+arr[i]);
        }else{
            map.set(arr[i]);
        }
        
    }
    return dupVal;
}

const ar = [1, 2, 3, 4 ,3];
duplicateArray(ar)

console.log(duplicateArray(ar))
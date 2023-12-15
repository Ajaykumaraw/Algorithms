function firstNonRepeating(arr){
    const map = new Map();
    const count = 1;
    for (let i = 0; i < arr.length; i++) {
        if(map.has(arr[i])){
            map.set(arr[i],map.get(arr[i]) +1 );
        }else{
            map.set(arr[i],count)
        }
    }
    console.log(map)
}

const arr = [ -1, 2, -1, 3, 0]
firstNonRepeating(arr);


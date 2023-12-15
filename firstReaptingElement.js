function firstReaptingElement(arr){
    const map = new Map();
  
    for(let i=0;i<arr.length-1;i++){
        if(map.has(arr[i])){
            console.log(arr[i]);
            return;
        }else{
            map.set(arr[i]);
        }
    }
    return map;
}

const arr = [0, 5, 3, 4, 3, 5, 6];
firstReaptingElement(arr)
function rotateArray(a){
    let temp = a[a.length-1];
    for(let i=a.length-1;i>0;i--){
        a[i]= a[i-1]
    }
    a[0] = temp;
}

const a = [2, 3, 4, 5, 1];
rotateArray(a)
console.log(a);

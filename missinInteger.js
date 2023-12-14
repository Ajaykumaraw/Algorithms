function missingInteger(a){
    a.sort((a,b)=> a-b)
    console.log(' --'+a);

    for (let i= 0; i< a.length-1; i++) {
        if(a[i] == i+1){
            console.log(' ');
        }else{
            console.log(' missing integer  '+(i+1));
            return;
        }
    }
}

const a = [1, 3, 7, 5, 6, 2 ];
missingInteger(a)

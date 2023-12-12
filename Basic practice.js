function isPowerOfTwo(n){
    if(n==0){
        return false;
    }
    while(n!=1){
        if(n%2!=0)
        return 0;
        n = n/2;
    }
    return 1;

}

console.log(isPowerOfTwo(64));







// const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr2.flat(Infinity));



// const Array1 = [1,2,4,5,6,8];
// const predicateFunction = (currentValue) => currentValue > 40;


// console.log(Array1.every(predicateFunction));





// function isPalindrome(str) { 

//     return str === str.split('').reverse().join(''); 
  
// }
// const str = 'matar';
// isPalindrome(str);
// console.log(isPalindrome()); 


// Array.concat
// const Array1 = ['a','b','c'];
// // const Array2 = ['e','f','g'];
// // const Array3 = Array1.concat(...Array2,'a new string');
// // console.log(Array3);
// console.log(Array1);

/*Array.at()
const fruit = [];
fruit.push(2,3,4,5,5);
console.log(fruit.at(-3));
*/

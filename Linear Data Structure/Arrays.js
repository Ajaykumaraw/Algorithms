/* In this file we will focus on linear data structure 
   arrays and it basic operations like.
   {Insertion, deletion, searching, traversal}
*/
//Basic array declaration.
const array = [];

/* Inserting elements in array
    array.push(element) push the element at the end of the array
    and return new length of the array.
*/
array.push(1);
array.push(2);
array.push(3);
array.push(4);
array.push(5);
array.push(6);

/* Deletion of elements from array
    Array.pop() method is used to delete the array element.
    pop() method will always delete the element from last end 
    of the array.
    pop() method returns new length of the array after element
    removal.
*/
array.pop()
array.pop()

array.push(5);
/* To search element in array we have few method which can be 
    used in different scenerios.
*/
array.includes(5) // It returns true if element is in array else false.
array.indexOf(7) // Array.indexOf it return the index of element if it is present in array
                 // else it returns -1;

/* Traversal
    we have few method for array traversal
    like forearch, map, for of loop
*/
array.forEach((item)=>{
   // console.log(item);
})

array.map((item)=>{
   // console.log(item);
})

for (const iterator of array) {
   // console.log(iterator);
}


//console.log(array);



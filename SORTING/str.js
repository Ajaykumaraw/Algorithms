
function dataFinder(data) {
    // Write your code here
    return function find(minRange,maxRang,value){
       let newArr =  data.slice(minRange,maxRang+1);
       console.log(newArr);
       let inRange = false;
       if(maxRang>data.length || minRange> data.length) return "invalid range";  
       return newArr.includes(value);
       //return inRange;
    }
    find(minRange,maxRang,value);
}

const data = [10, 1, 0, 13, 4, 15]
const result = dataFinder(data)(1, 10, 13)
console.log(result);
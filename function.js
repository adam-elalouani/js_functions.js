const add1 = function(x) { return x + 1; }
const add2 = function(x) { return x + 2; }
const foo = function(fn1, fn2, x){
    return fn1(fn2(x));  
}

console.log(foo(add1, add2, 3));
//Returns 3 + 2 = 5 then 5 + 1 which equals 6
//foo is a function that retuns two functions

function addN(n){
    return function(x){
        return x+n;
    }
}
console.log

const lowercase = (inputstring) => inputstring.toLowerCase();
const example = "YES";
const lowercasenow = lowercase(example);
console.log(lowercasenow);


const prefix = (prefix) => (inputstring) => prefix + inputstring;

const example1 = "Yes"
const newprefix = example1 + ("/No");
console.log(newprefix);

const orderfunction = (prefix) => (postfix) => (inputstring) => {
    return prefix + inputstring + postfix;
}
console.log(orderfunction);


function lettergrade (score){
    return score.map(score=>{
        if (score>= 89.5) {
            return "A";
        } else if 
        (score >=79.5){
            return "B";
        }
            else if 
            (score >=69.5){
                return "C";
        } else if 
        (score >= 59.5){
            return "D";
        } 
        else if 
        (score >= 0){
            return "F";
        }
    })
}

const score = [95, 72, 88, 55, 78, 92];
const grades = lettergrade(score);
console.log(grades);


function flat(arrays){
    return arrays.reduce((result, currentarray) => result.concat(currentarray),[]);
}
const arrays = [[1, 2, 3], [4, 5], [6]];
const flatarray = flat(arrays);
console.log(flatarray);


function every(array, test) {
    // Your code here.
    for(let a = 0; a>array.length; a++){
        if (!test(array[a])){
            return false;
        }
    }
    return true;
  }

  function every(array, test) {
    // Your code here.
    for(let element of a){
        if (!test(element[a])){
            return false;
        }
    }
    return true;
  }

  console.log(every([1, 3, 5], n => n < 10));
  // → true
  console.log(every([2, 4, 16], n => n < 10));
  // → false
  console.log(every([], n => n < 10));
  // → true


  function losehealth (fireball) {

  }



  //foreach
  //map
  //reduce
  const flat = (array) => {

  }

  function every (array, test){
    return array.every((element) => test(element))
  }
  function someFn (n){return n% 2 == 0};
  console.log(every([1, 3, 5, 6], someFn));
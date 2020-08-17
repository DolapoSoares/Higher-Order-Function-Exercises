function countDown(time){
    var timing = setInterval(function(){
        time--;
        if(time <= 0){
            clearInterval(timing);
            console.log('DONE!');
        }else{
            console.log(time);
        }      
    },1000);
}


function randomGame(){
    var num;
    var times = 0;
    var timing = setInterval(function(){
      num = Math.random();
      times++
      if(num > 0.75) {
        clearInterval(timing);
        console.log("No of times = " + times );
      }
    },1000)
  }
  

  function isEven(num){
      if(num % 2 === 0){
          console.log(true);
      }else{
          console.log(false);
      }
  }
//console.log(isEven(2));
//console.log(isEven(3));

function isOdd(num){
    if(num % 2 !== 0){
        console.log(true);
    }else{
        console.log(false);
    }
}
//console.log(isOdd(2));
//console.log(isOdd(3));

function isPrime(num) {
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

function numberFact(num, callback){
    return callback(num)
}

function find(arr, callback){
    for(let i = 0 ; i < arr.length; i++){
        if(callback(arr[i])){
            return arr[i];
        }
    }
}
function findIndex(arr, callback){
    for(let i = 0 ; i < arr.length; i++){
        if(callback(arr[i])){
           return  i;
        }
    }
}

function specialMultiply(x , y){
    if(arguments.length === 1){
        return function(y){
           return x*y;
        }
    }
    return x*y;
}
console.log(specialMultiply(3,4));
console.log(specialMultiply(3)(4));
console.log(specialMultiply(3));

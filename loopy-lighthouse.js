/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */


var laugh = function(num){
  let result = "ha" * num +"!"
  return result;
}
var laugh = function(num){
  let result =  ""
  for(let i = 0; i < num;i++){
    if(i === num){
      result += "ha!"
    }else{
      result += "ha";
    }
  }
  return result;
}


console.log(laugh(10));

var laugh = function(num){
  return "ha" * num +"!";
  
}


//the option that worked finally was
var laugh = function(num){
  let result =  ""
  for(let i = 1; i <= num;i++){
    if(i === num){
        result += "ha!"
    }else{
        result += "ha";
    }
  }
  return result;
}
//the course solution

/* Declare an empty string
var sound = "" ; 

// An anonymous function expression stored in the variable `laugh`
var laugh = function(num) {

    //Iterate
    for (var x = 0 ; x < num ; x++) {
        sound = sound + "ha" ;  
    }
    sound = sound +"!"; 
    return sound; 
}

*/

console.log(laugh(3));
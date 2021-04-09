var numArray = []

for (var i = 1; i<= 100 ; i++){
    
  if((i%3 ===0) && (i%5 === 0)){

    numArray.push("fizzbuzz")
  }else if(i%5 === 0){

   numArray.push("buzz")
  }else if(i%3 === 0){

    numArray.push("fizz")
  
  }else{
    numArray.push(i)
  }
}

console.log(numArray)




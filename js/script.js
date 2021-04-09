var numArray = []



for (var i = 1; i<= 100 ; i++){
  numArray.push(i)  
  
if(i%3 === 0){
  
  numArray.push("fizz")
  
}else if(i%5 === 0){
  numArray.push("buzz")
 
}else if((i%3 === 0) && (i%5 === 0)){
  numArray.push("fizzbuzz")
 }
}
console.log(numArray)


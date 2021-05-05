// Create some sort of Variable and Start at 1
// shouldn't  pass 100
//Divisible by 3 = Fizz
// Divisble by 5 = Buzz
//Divisible by 3 & 5 = FizzBuzz

for(let i = 1; i <= 100; i += 1){
    let answer = ``
    if( i % 3 === 0){ answer += `Fizz`}
    if( i % 5 === 0) { answer += ` Buzz`}
    //if( i% 3 === 0 && i % 5 === 0) { answer = `` + `FizzBuzz`}
    if(answer == ``){ answer = i}
    console.log(i, answer)



}
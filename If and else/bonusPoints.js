function solve(input){

    let num1 = Number(input[0]);
    let bonus = 0;

    if (num1 <=100){
        bonus = 5;
    } else if (num1 <= 1000){
        bonus =  0.2 * num1;
    } else {
        bonus =  0.1 * num1;
        
    } 
       

       
    if (num1 % 2 === 0)   {
        bonus = bonus +1;
    } else if(num1 % 10 === 5) {
        bonus = bonus +2;
    }
    console.log (bonus);
    console.log(num1 + bonus);
}
solve(["2703"])
/*...............Tip Calcualtor............*/

/*
Dasun and his friends went on a picnic. To get foode they went to three different 
resturants for each meal. The bills are Rs.1230, Rs.982, Rs.1640.

To tip the waiter a fair amount, Dasun created a simple tip
calculator (as function) he likes to tip 20% of the bill when the bill is less than Rs.1000, 
15% when te bill is between Rs.1000 and 1500, and 10% if the bill is more than Rs.1500.

In the end, Dasun woulld like to have 2 arrays:
1. Containing all 3 tips
2. Containing all three final paid amount(bill + tip)
*/


var tips = new Array();
var amount = new Array();

function tipCalculator(bill){
   
    var tip;

    if(bill < 1000){
        tip = bill * (20/100) ;
    }
    else if(bill >= 1000 && bill < 1500){
        tip = bill * (15/100) ;
    }
    else {
        tip = bill * (10/100) ;
    }

    tips.push(tip);
    amount.push(bill + tip);

    return tip;
}

console.log("Bill 1 Tip : Rs." + tipCalculator(1230));
console.log("Bill 2 Tip : Rs." + tipCalculator(982));
console.log("Bill 3 Tip : Rs." + tipCalculator(1640));

console.log(tips);
console.log(amount);

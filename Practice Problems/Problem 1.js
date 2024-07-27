let Total_Amount_in_hand = 350;
// Day 1
let cost_of_apple = 50;
let Qty_of_apple = 2;
let total_cost_of_apple = cost_of_apple*Qty_of_apple; //Multiplication 
let cost_of_milk = 20;
let Qty_of_milk = 3;
let total_cost_of_milk = cost_of_milk*Qty_of_milk; //Multiplication
let Amt_spent_on_day_1 = total_cost_of_apple + total_cost_of_milk; // addition

// Day 2
let cost_of_bread = 35;
let Qty_of_bread = 2;
let total_cost_of_bread = cost_of_bread*Qty_of_bread; //Multiplication 
let cost_of_egg = 9;
let Qty_of_egg = 12;
let total_cost_of_egg = cost_of_egg*Qty_of_egg; //Multiplication
let Amt_spent_on_day_2 = total_cost_of_bread + total_cost_of_egg; // addition

Total_Amount_Spent = Amt_spent_on_day_1 + Amt_spent_on_day_2; // addition
Average_Amount_Spent = Total_Amount_Spent/2; // Division 

Amount_Remaining = Total_Amount_in_hand - Total_Amount_Spent; //Subtraction 

console.log(`Total Amount in Hand: ${Total_Amount_in_hand}`)
console.log(`Total Amount Spent in Day 1: ${Amt_spent_on_day_1}`)
console.log(`Total Amount Spent in Day 2: ${Amt_spent_on_day_2}`)
console.log(`Amount Spent in Total: ${Total_Amount_Spent}`)
console.log(`Amount Remaining: ${Amount_Remaining}`)
console.log(`Average Spendings: ${Average_Amount_Spent}`)
// Calculator in TypeScript by user input
var prompt = require("prompt-sync")();
let n1 = parseInt(prompt("Enter your First number: "));
let n2 = parseInt(prompt("Enter your Second number: "));
let operator = prompt("Enter your operator (+, -, *, /): ");

if (operator === "+")
{
    console.log("Sum: ", n1 + n2);
}
else if (operator === "-")
{
    console.log("Sub: ", n1 - n2);
}
else if (operator === "*")
{
    console.log("Mul: ", n1 * n2);
}
else if (operator === "/")
{
    if (n2 !== 0)
        {
        console.log("Div: ", n1 / n2);
    }
    else
    {
        console.log("Error: Division by zero is not allowed.");
    }
}
else
{
    console.log("Invalid Operator");
}
export{};
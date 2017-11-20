var output;
var p = "For x your options are either: add, subtract, multiply, or divide with any 2 numbers for y and z.";
function calculator (x, y ,z) {
  if (x == "add") {
    output = y + z;

  } else if (x == "subtract") {
    output = y - z;

  } else if (x == "multiply") {
    output = y * z;

  } else if (x == "divide")  {
    output = y / z;

  } else {
    output = "Only input add, subtract, multiply, and divide with any number for y and z. Dummy."
  }
}
calculator ("multipy", 24, 6);

console.log(output);









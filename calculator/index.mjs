import add from "./add.mjs";
import divide from "./divide.mjs";
import multiply from "./multiply.mjs";
import subtract from "./subtract.mjs";
import { stdin as input, stdout as output } from "node:process";
import Readlline from "readline/promises";

const rl = Readlline.createInterface({
  input,
  output,
});

async function prompt() {
  console.log("🧮 Welcome to the ESM Calculator!");

  const a = parseFloat(await rl.question("Enter a value ?"));
  const b = +(await rl.question("Enter a second value ?"));
  const op = await rl.question("Enter an operand ?");

  let result;

  try {
    switch (op) {
      case "+":
        result = add(a, b);
        break;
      case "-":
        result = subtract(a, b);
        break;
      case "*":
        result = multiply(a, b);
        break;
      case "/":
        result = divide(a, b);
        break;
      default:
        result = "Not a proper operand !";
        rl.close();
        break;
    }
    console.log(`✅ Result: ${a} ${op} ${b} = ${result}`);
  } catch (error) {
    console.error(error);
  }
  rl.close();
}
prompt();
// console.log("Test",
//   add(1, 2),
//   ":",
//   divide(2, 2),
//   ":",
//   multiply(4, 4),
//   ":",
//   subtract(2, 7)
// );

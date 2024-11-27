console.log("start");
setTimeout(() => console.log("5 second delay!") ,5000);
console.log('end');

console.log("Start");
setTimeout(() => console.log("2 second delay "), 2000);
console.log("End");
// Output: Start -> End -> Async Task (after 2 seconds)

function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
}
  const name = "Divyanshu";
  const greeting = makeGreeting(name);
  console.log(greeting);
  // "Hello, my name is Miriam!"
  
let count = 0;
const intervalId = setInterval(() => {
  count*
  console.log(`Count: ${count}`);
  if (count === 5) clearInterval(intervalId); // Stops after 5 counts
}, 1000);
// Output: Count: 1, Count: 2, Count: 3, Count: 4, Count: 5 (one per second)

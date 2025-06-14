// 🌼 SEED CATALOG ORDER FORM ASSIGNMENT
// ======================================
// Your task is to build a simple seed order form using HTML and JavaScript.
// This time, you will NOT update the page — you will log the data to the console.

//DAY ONE
// 🧾 FORM REQUIREMENTS (HTML):
// - Add a heading that says "Seed Catalog Order Form"
// - Wrap your form fields in a <form> element
// - Add at least 3 input fields with name attributes:
//   1. Customer Name (text input)
//   2. Seed Type (text input or dropdown)
//   3. Quantity (number input)
// - Add a submit button
// - BONUS style it any way you want!

//DAY TWO
// 🖥️ WHAT TO DO IN JAVASCRIPT:
// - Use querySelector to select the form
let form = document.querySelector("form");
form.addEventListener("submit", onFormSubmit);
console.log("form:", form);

function onFormSubmit() {
  event.preventDefault();
  const data = new FormData(event.target);
  const dataObject = Object.fromEntries(data.entries());
  console.log(dataObject);

  form.reset();

  let name = dataObject.name;
  console.log("name:", name);
  let quantity = dataObject.quantity;
  console.log("quantity:", quantity);

  let seedType = dataObject.seedType;
  console.log("seedType:", seedType);

  let thankYou = `Thank you ${name} for your order of ${quantity} ${seedType}!`;
  console.log("first message to user:", thankYou);
}
// - Add an event listener for the "submit" event
// - Inside the event listener:
//   1. Prevent the page from reloading (use event.preventDefault())
//   2. Create a new FormData object using your form
//   3. Use formData.get("fieldName") to get the values from the form
//   4. Console.log each value to check your work

// ✅ Example output in the console:
// "Name: Jamie"
// "Seed Type: Sunflower"
// "Quantity: 5"

// ✅ EXTRA CHALLENGE (Optional):
// - Console.log the values using a single template literal
// - Add a fourth input (e.g. delivery method or favorite flower)

// free code camp
// Destructuring assignment is special syntax introduced in ES6, 
// for neatly assigning values taken directly from an object.

// Consider the following ES5 code:
// const user = { name: 'John Doe', age: 34 };
// const name = user.name; // name = 'John Doe'
// const age = user.age; // age = 34

// Here's an equivalent assignment statement using the ES6 destructuring syntax:
// const { name, age } = user;
// // name = 'John Doe', age = 34

// Here, the name and age variables will be created and assigned the values of their respective values from the user object. You can see how much cleaner this is.
// You can extract as many or few values from the object as you want.

// Replace the two assignments with an equivalent destructuring assignment.
// It should still assign the variables today and tomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
// Only change code below this line

// original:
// const today = HIGH_TEMPERATURES.today;
// const tomorrow = HIGH_TEMPERATURES.tomorrow;

// minha resposta:
const {today, tomorrow} = HIGH_TEMPERATURES
console.log(today);
console.log(tomorrow);

// Destructuring allows you to assign a new variable name when extracting values.
// You can do this by putting the new name after a colon when assigning the value.
// Using the same object from the last example:
// const user = { name: 'John Doe', age: 34 };

// Here's how you can give new variable names in the assignment:
// const { name: userName, age: userAge } = user;
// // userName = 'John Doe', userAge = 34
// You may read it as "get the value of user.name and assign it to a new variable named userName" and so on.

// Replace the two assignments with an equivalent destructuring assignment.
// It should still assign the variables highToday and highTomorrow the values of today and tomorrow from the HIGH_TEMPERATURES object.

// CODIGO ORIGINAL:
// const highToday = HIGH_TEMPERATURES.today;
// const highTomorrow = HIGH_TEMPERATURES.tomorrow;
// MINHA RESPOSTA:
const {today:highToday, tomorrow:highTomorrow} = HIGH_TEMPERATURES;
console.log(highToday);
console.log(highTomorrow);

// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};
// CODIGO ORIGINAL:   
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;

// MINHA RESPOSTA:
const {today: {low:lowToday, high:high_Today}} = LOCAL_FORECAST;
console.log(lowToday);
console.log(high_Today);

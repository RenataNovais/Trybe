/* You can mutate the object [5, 6, 7] itself and the variable s will still point to the altered array [5, 6, 45]. 
Like all arrays, the array elements in s are mutable, but because const was used, you cannot use the variable identifier s to point to a different array using the assignment operator.
An array is declared as const s = [5, 7, 2]. Change the array to [2, 5, 7] using various element assignment.*/

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  // Only change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();

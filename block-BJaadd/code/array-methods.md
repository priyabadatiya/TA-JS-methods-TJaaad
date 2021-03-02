Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
Parameter: which we will join the array.
Return: a string with all the array will be  joined.
Example:
let colors = ["Red", "black", "pink"];
colors.join(); // "Red,black,pink"

let colors2 = ["Red", "black", "pink"];
vcolors2.join("-"); // "Red-black-pink"

let colors3 = ["Red", "black", "pink"];
val1.join(" "); // "Red black pink"
No, it does not mutate the original array.

3. `flat`
Parameter: the layer untill which we wants to flatten the nested array.
Return: new array with nested array concanated into it.
Example:
let array = [1, 2, [3, 4, [5, 6]]];
array.flat(3); // [1, 2, 3, 4, 5, 6]
flat is used for to create a flat structure of array.
No,it does not mutates the original array.

4. `push`
Parameter: the value to be added at the end of the array.
Return: the length of the array ,that we will get after pushing the value at the end.
Example:
let array = [1, 2, 3, 4, 5];
array.push(8); // 6
push accepts the value which is to be added to the array and returns the length of the new array
Yes, it mutates the original array.

5. `indexOf`
Parameter: the element which we can select.
Return: the index of that element if that elements exists in that array, -1 if it does not.
Example:
let array = [1, 2, 3, 4, 6, 7, 8, 9];
array.indexOf(8); // 6
No,it does not mutates the original array.

6. `lastIndexOf`
Parameter: accepts the element whose last Index we are looking for.
Return: the index of the item where it last appeared.
Example:
let fruits = ["Orange", "pomegranate", "Guava", "strawberry", "Orange"];
fruits.lastIndexOf("Orange"); //4
No,it does not mutates the original array.

7. `includes`
Parameter: value , which we want to check if it is in the array
Return: (boolean data type), true if the is present in the array, false if not.
Example:
let flowers = ["lotus", "lily", "hibiscus"];
val.includes("lily"); // true
includes accepts a value which we are looking for returns true if it exists in the array and false if it doesnot.
No, It doesnot mutates the original array.

8. `reverse`
Return: the reversed array.
Example:
let arr = [7, 2, 3, 2];
arr.reverse(); // [2, 3, 2, 7];
No,it does not mutates the original array.

9. `every`
Parameter: a callback function which accepts three parameters .
Return: it returns true/false.
Example:
let array = [1, 2, 3, 4, 5, 6, 7, 8];
array.every((val) => val < 10); // true
No, It doesnot mutate the original array.

10. `shift`
Return: the first element that has been removed from the array
Example:
let array = [1, 2, 3, 4, 6];
array.shift(); // 1
Yes, It mutates the original array.

11. `splice`
Parameter: three values, first the index from which we wants to change the array.
Return: the modified array, after deleting or adding the items
Example:
let array = [1, 2, 3, 4, 5];
array.splice(0, 1); // [1];
let array = [1, 2, 3, 4, 5];
array.splice(0, 4, 9);
//[1, 2, 3, 4]
It mutates the original array.

12. `find`
Parameter: a callback function which accepts three parameter.
Return: it returns an individual element.
Example:
let array = [9, 89, 78, 456, 337];
array.find((value) => value > 90); // 456 
No, It does not mutates the original array.

13. `unshift`
Parameter: the element to be added at the beginning of the array.
Return: an array with the newly added value at the beginning of it.
Example:
let array = [2, 3, 4, 5];
array.unshift(1); // [1, 2, 3, 4, 5]
yes, it mutates the original array.

14. `findIndex`
Parameter: a callback function which accepts three parameter.
Return: it returns the index of an element.
Example:
let array = [33, 44, 56, 76, 88, 65];
array.findIndexOf((val) => val > 50); //2
It doesnot mutates the original array.

15. `filter`
Parameter: accepts a callback function, which accepts three parameter.
Return: returns samesize or smallersize array.
Example:
let numbers = [1, 2, 3, 4, 5];
numbers.filter((val) => val > 2); // [3, 4, 5]
It does not mutates the original array.

16. `flat`
let numbers = [1,2,[3,4,[5,6,[7,8]]]];
numbers.flat(4); // (8) [1,2,3,4,5,6,7,8];
flat is used for to create a flat structure of array.
No, It does not mutates the original array.

17. `forEach`
Parameter: accepts a callback function, which accepts three parameter.
Return: undefined
Example:
let numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach((number) => console.log(number * 2));
// 2
// 4;
// 6;
// 8;
// 10;
// 12;
// 14;
forEach returns value for each element.

18. `map`
Parameter: accepts a callback function and accepts three parameter.
Return: it returns same size array.
Example:
let numbers = [1, 2, 3, 4, 5];
numbers.map((val) => val * 8);//  (5) [8, 16, 24, 32, 40]
It does not mutates the original array.

19. `pop`
Return: the last element of the array
Example:
let city = ["Mumbai", "Delhi", "bhubanswar", "dharamshala"];
fruits.pop(); // "dharamshala"
It mutates the original array.

20. `reduce`
Parameter: accepts a callback to which we can pass four values (accumulator,Current Value,Index, Array)
Return: a value after reducing it.
Example:
let numbers = [1, 2, 3, 4, 5, 6];
numbers.reduce((a, b) => a + b); // 21
reduce is used for reducing a collection of value into a different shape of value.
No, It does not mutate the original array

21. `slice`
Return:A new array containing the extracted elements.
Example:
let fruits = ["Mango", "Orange", "Apple", "Grapes", "Strawberry"];
fruits.slice(0, 3);
// ["Mango", "Orange", "Apple"]
No, It does not mutate the original array

22. `some`
Parameter: a callback function which accepts three parameters (currentElement,index array ).
Return: it returns true or false.
Example:
let array = [1, 2, 3, 4, 5];
array.some((val) => val < 4); // true
It doesnot mutate the original array.

Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
- makes the string uppercase
let name = "priyanka";
name.toUpperCase();//  "PRIYANKA"
let blanket ="The angry bird"
blanket.toUpperCase() // "THE ANGRY BIRD"

3. `toLowerCase`
- makes the string lowercase
let name = "PRIYANKA";
name.toLowerCase();//  "priyanka"
let blanket ="THE ANGRY BIRD"
blanket.toLowerCase() // "The angry bird"

4. `trim`
- The value of the string by removing the spaces from both the ends.
let name = " priyanka  ";
name.trim(); // "priyanka"

5. `trimEnd`
- The value of the string by removing the spaces from only ends.
let name = "  priyanka  ";
name.trim(); // "  priyanka"

6. `trimStart`
The value of the string by removing the spaces from only from starting.
let name = "  priyanka  ";
name.trim(); // "priyanka  "

7. `concat`
- string and string that will be concated.
let username = "Altcampus";
let tagline = "All you need to become a software developer";
username.concat(" ", tagline); // "Altcampus All you need to become a software developer"

9. `includes`
- a string we are looking for in different string.
let username = "All you need to become a software developer";
let tagline = "software"
username.includes(tagline); //true

10. `indexOf`
- accepts string data type value.
let tagline = "All you need to become a software developer";
tagline.indexOf(`become`); // 16

11. `lastIndexOf`
- accepts last index.
let tagline = "All you need to become a software developer";
tagline.lastIndexOf(`d`); // 34

12. `padEnd`
- accepts length of the string which it will return after padding has been applied.
let num = "12700";
num.padEnd(9, "5"); // "127005555"

13. `padStart`
- accepts length of the string which it will return after padding has been applied.
let num = "12700";
num.padStart(9, "5"); // "555512700"

14. `repeat`
- The repeat() method constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
let username = "AltCampus"
username.repeat(7); // "AltCampusAltCampusAltCampusAltCampusAltCampusAltCampusAltCampus"

15. `replace`
-  a string that is to be replaced by a new string.
let username = "AltCampus";
username.replace("Campus", "school") //"Altschool"

16. `slice`
- The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end.
 let tagline = "All you need to become a software developer";
 tagline.slice(12); // " to become a software developer"

17. `split`
- The split() method is used to split a string into an array of substrings, and returns the new array. 
let tagline = "All you need to become a software developer";
tagline.split('e') // ["All you n", "", "d to b", "com", " a softwar", " d", "v", "lop", "r"]
18. `substring`
- The substring() method returns the part of the string between the start and end indexes, or to the end of the string.
let tagline = "All you need to become a software developer";
tagline.substring(21,8); // "need to becom"

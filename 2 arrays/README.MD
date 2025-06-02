# Array

## DS Arrays
 - What is DS Array
 - Creating Custom Array
 - Custom Push Method
 - Custom Get Method
 - Custom Pop Method
 - Custom Shift Method
 - Custom DeleteByIndex Method
 - Reverse String

### Chalenge

**1 Reverse String**

``Hello -> olleh``

- 1. Coonvert string to array
- 2. Reverse the array
- 3. Convert array back to string.

**2 Palíndromos**

``Palavra	ovo	 => ovo	=> ovo``

- 1. Convert string to array.
- 2. Reverse the array
- 3. Convert array back to string
- 4. Coompare strings

**3 Int Reversal**

``5678 => 8765``

1. Convert number to string
2. Convert string to array
3. Reverse the string
4. Convert array back to string
5. Convet string to number
6. Return the number

**4 Setence Capitalization**

``hello world -> Hello World``

1. Make te string lowecase
2. Convert string to array
3. Capitalize Each Word
4. Convert aray to string

**5 FizzBuzz**

1. Prnt number from 1 to n
2. If number is diiiividible by 3, print "Fizz"
3. If number is divisible by 5, print "Buzz"
4. If number is divisible by  3 and 5, prit "FizzBuzz"
5. Else, print the number

**6 MaxProft**

Imagine you're buying and selling stacks throughoult the year. You job is to find the biggest profit you could make by buyng low and selling hing ``only once`` 

Here's what you're given:

    A list oof stock prices for  earch day -> [7,1,5,6,4]

Heres's what you need to find:

    The difference betwen the chapest price you could have bought the stack and the most expensive price you could have sold it later on.

**7 Array chunk**

    write a finction thet take an array and chunck size as input The function shold return a new array where the original array is split into chunks of specified size

chunk([1,2,3,4,5,6,7,8], 3)  -> [[1,2,3], [4,5,6], [7,8]]

chunckArray([1,2,3,4,5] 2) -> //Otput: [[1,2], [3,4]]

1. Create an empty array to hold the chunks
2. Set  a starting index to keep track oof where we are in the original arrray
3. Loop throght the original array as long as the index hasn't reached the and
4. Extracted chunk of the desired size from the original array
5. Add the extracted chunk to the `chuncked` array
6. Move the index for by the chunk size to get the next chunk
7. Return the array of chunks

**8 Two Sum**

    Imagine you have a list of numbers and a target number. Your job is to find tow numbers in   that list add up to the target number. your also need to tell wich position (or indexs) those
    two numbers are at in the list.

    Exemplo
    if the list is [2,7,11,15] and the target is 9, the answer would be [0,1] becase 2 (at index 0)  plus 7 (at index 1) equals 9.
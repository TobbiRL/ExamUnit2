import test from "./test.mjs";

/* 
In the file arrays.json there is an example of a an array that contains integers 
and possibly other arrays. If you need more test data you can get as many as you 
want from this source The task is to write a function that returns a flattened 
version of any such array structure.

NB! You might be tempted to use string manipulation, that is considered not 
solving the task. This is a jagged array of integers, not a string.

Example:

[
  435,
  2028,
  [
    [
      3047, 4910, 8146,
      7999, 1433, 7211,
      1197, 6002
    ],
    2821,
    3508
  ]
]
//--> 
[435, 2028, 3047, 4910, 8146, 7999, 1433, 7211, 1197, 6002, 2821, 3508]
*/

const arrayToFlatten = [
    6410,
    2831,
    5049,
    7554,
    [
      8707,
      6940,
      9517,
      7565,
      7522,
      9242,
      7972,
      7064,
      3441,
      [
        9960,
        4966,
        9368,
        1634,
        5150,
        3709,
        6660,
        [
          7155, 8056, 7834,
          2639, 6601, 8063,
          2390, 2544, 7022
        ]
      ],
      2385,
      573,
      656,
      733,
      1620,
      3626,
        [
        6274,
        1935,
            [ 6481, 928, 8291, 3196, 3431, 6058 ],
        8010,
        5052,
        892,
        3490,
        2369,
        951,
        1606,
        6763,
        7260,
        6122
        ]
    ],
    5655,
    4223
];

const testArray = [1, 2, [3, [4], 5], 6, 7];

function flattenArray(array, flattenedArray = []) {
let i = 0;

    while (array[i] !== undefined) {
      let element = array[i];

      if (element && element.length !== undefined) {
          flattenArray(element, flattenedArray);
      } else {
        flattenedArray[flattenedArray.length] = element;
      }
    i++;
    }
return flattenedArray;
}

const tests = test("Array tests");

tests.isEqual(flattenArray(testArray), [1,2,3,4,5,6,7], "Array is flattened as expected");
tests.isEqual(flattenArray(arrayToFlatten), [6410, 2831, 5049, 7554, 8707, 6940, 9517, 7565, 7522, 9242, 7972, 7064, 3441, 9960, 4966, 9368, 1634, 5150, 3709, 6660, 7155, 8056, 7834, 2639, 6601, 8063, 2390, 2544, 7022, 2385, 573, 656, 733, 1620, 3626, 6274, 1935, 6481, 928, 8291, 3196, 3431, 6058, 8010, 5052, 892, 3490, 2369, 951, 1606, 6763, 7260, 6122, 5655, 4223], "Array is flattened as expected")

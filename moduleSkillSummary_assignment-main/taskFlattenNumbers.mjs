import test from "./test.mjs";

/*Create the following functions:

A function that returns the square of a number
A function that returns a length in mm assuming it has been given a length in inches.
A function that returns the root of a number
A function that returns the cube of a number
A function that returns the area of a circle given the radius.
A function that returns a greeting, given a name.
*/
const tests = test("Testing function");

function square(n) {
    return n**2
}

tests.isEqual(square(2), 4, "2 squared is 4") 
tests.isEqual(square(3), 9, "3 squared is 9") 
tests.isEqual(square(-3), 9, "-3 squared is 9") 

function inchToMM(inchesGiven) {
    return inchesGiven * 25.4
}

tests.isEqual(inchToMM(1), 25.4, "1 inch is 25.4mm")
tests.isEqual(inchToMM(2), 50.8, "2 inch is 50.8mm")
tests.isEqual(inchToMM(-1), -25.4, "-1 inch is -25.4mm")
tests.isEqual(inchToMM(1.5), 38.1, "1.5 inch is 38.1mm")

function root(n) {
    return n**0.5;
}

tests.isEqual(root(49), 7, "root of 49 is 7")
tests.isEqual(root(81), 9, "root of 81 is 9")
tests.isEqual(root(40), 6.324, "root of 40 is 6.324")

function cube(n) {
    return n**3
}

tests.isEqual(cube(2), 8, "2 cubed is 8")
tests.isEqual(cube(-2), -8, "-2 cubed is -8")
tests.isEqual(cube(1.7), 4.913, "1.7 cubed is 4.913")



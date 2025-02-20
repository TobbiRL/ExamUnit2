import test from "./test.mjs";

/*Create the following functions:

A function that returns the square of a number
A function that returns a length in mm assuming it has been given a length in inches.
A function that returns the root of a number
A function that returns the cube of a number
A function that returns the area of a circle given the radius.
A function that returns a greeting, given a name.
*/
const tests = test("Testing functions");

function square(n) {
    if (n * 1 !== n) {
        return undefined
    } else
    return n**2
}
console.log("Square tests")
tests.isEqual(square(2), 4, "2 squared is 4") 
tests.isEqual(square(3), 9, "3 squared is 9") 
tests.isEqual(square(-3), 9, "-3 squared is 9") 
tests.isEqual(square("test"), undefined, "Not a number") 

function inchToMM(inchesGiven) {
    if (inchesGiven * 1 !== inchesGiven) {
        return undefined
    } else
    return inchesGiven * 25.4
}
console.log("Inch to mm tests")
tests.isEqual(inchToMM(1), 25.4, "1 inch is 25.4mm")
tests.isEqual(inchToMM(2), 50.8, "2 inch is 50.8mm")
tests.isEqual(inchToMM(-1), -25.4, "-1 inch is -25.4mm")
tests.isEqual(inchToMM(1.5), 38.1, "1.5 inch is 38.1mm")
tests.isEqual(inchToMM("test"), undefined, "Not a number")

function root(n) {
    if (n * 1 !== n) {
        return undefined
    } else
    return n**0.5;
}

console.log("Root tests")
tests.isEqual(root(49), 7, "root of 49 is 7")
tests.isEqual(root(81), 9, "root of 81 is 9")
tests.isEqual(root(40), 6.324, "root of 40 is 6.324")
tests.isEqual(root("test"), undefined, "Not a number")

function cube(n) {
    if (n * 1 !== n) {
        return undefined
    } else
    return n**3
}

console.log("Cube tests")

tests.isEqual(cube(2), 8, "2 cubed is 8")
tests.isEqual(cube(-2), -8, "-2 cubed is -8")
tests.isEqual(cube(1.7), 4.913, "1.7 cubed is 4.913")
tests.isEqual(cube("test"), undefined, "Not a number")

function areaOfCircle(r) {
    if (r <= 0 || r * 1 !== r) {
        return null
    } else
    return r**2*3.14

}

console.log("Area circle tests")
tests.isEqual(areaOfCircle(1), 3.14, "area of a circle with radius 1 is 3.14")
tests.isEqual(areaOfCircle(2), 12.56, "area of a circle with radius 2 is 12.56")
tests.isEqual(areaOfCircle(321), 323548.74, "area of a circle with radius 321 is 323548.74")
tests.isEqual(areaOfCircle(-1), null, "area of a circle with radius -1 is null")
tests.isEqual(areaOfCircle("test"), null, "Not a number")

console.log("Greeting name tests")
function greetName(name) {
    if (name + "" !== name) {
        return undefined
    } else
    return "Nice to meet you " + name + "!"
}

tests.isEqual(greetName("Tobbi"), "Nice to meet you Tobbi!", "Greets correctly")
tests.isEqual(greetName(1), undefined, "Not a name")
tests.isEqual(greetName(""), "Nice to meet you !", "Greets correctly")
tests.isEqual(greetName(), undefined, "Not a name")
tests.isEqual(greetName("æ"), "Nice to meet you æ!", "Greets correctly")

function mathProcessAndGreeting(base, input) {
    if (base = square) {
        square(input)
    }
    else if (base = inchToMM) {
        inchToMM(input)
    }
    else if (base = root) {
        root(input)
    }
    else if (base = cube) {
        cube(input)
    }
    else if (base = areaOfCircle) {
        areaOfCircle(input)
    }
    else if (base = greetName) {
        greetName(input)
    }
}

tests.isEqual(mathProcessAndGreeting(square, 4), 16, "4 squared is 16")

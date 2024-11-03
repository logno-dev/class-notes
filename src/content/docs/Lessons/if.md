---
title: If Statements
sidebar:
  order: 5
---

Loops run code continuously when a specified condition is true. But what if we want to just check a condition once when the code reaches a certain point and tell the program what to do accordingly. This is where "if" statements come in handy.

## If

The syntax for an if statement is quite simple and similar to a while loop.

```javascript
if (condition) {
  // code to run if condition is true
}
```

We may want to run some code only if that condition is false, in that case, we use `else`. Or, if we want to continue on to check another condition after we have established that the first condition is false, we use an `else if`.

```javascript
if (firstCondition) {
  // code to run if the first condition is true
} else if (secondCondition) {
  // code to run only if the first condition
  // is false and the second condition is true
} else {
  // code to run if both the first and second
  // conditions are false
}
```

The condition can be in the form of any expression that will resolve to a boolean value (true or false). This is a great time to talk about a concept called truthiness.

## Truthy and Falsy

It is easy to see that a boolean value is true or false, as it is clearly stated `true` or `false`. But how about the number `2`? Is that true? In plain English, asking the question "Is the number two true?" sounds silly. But in program, the answer is clearly yes. That is because any number besides zero is true. Actually most things in JavaScript are considered true and there is a short list of things that are not true.

This is a list of all falsy values:

- `null`
- `undefined`
- `false`
- `NaN`
- `0`
- `-0`
- `0n`
- `""`
- `document.all`

This allows us to check a condition without explicitly comparing it another value.

```javascript
let foo = "bar";

// this
if (foo == "bar") {
  // run some code
}

// is functionally equivalent to this
if (foo) {
  // run some code
}
```

## AND and OR

There will be many cases where we need to determine if multiple items are true within the same condition statement. Sometimes we want to run some code if 2 conditions are both true, or if either 1 of 2 conditions are true. This is were we need AND and OR operators. AND is represented in JavaScript as `&&` and OR is represented with `||`. They can be used like so:

```javascript
let foo = true;
let bar = false;

if (foo && bar) {
  // this code won't run since one item in the condition is false
}

if (foo || bar) {
  // this code will run because at least one condition is true
}
```

## Fizz Buzz

Now we have everything we need to solve the classic coding challenge known as "Fizz Buzz". The challenge is as follows:

For each integer from 1 to 100

- print "FizzBuzz" if the integer is divisible by 3 and 5
- print "Fizz" if the integer is divisible by 3
- and print "Buzz" if the integer is divisible by 5
- if the integer is divisible by neither, print the integer

Solution:

```javascript
for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  } else if (i % 3 == 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
```

Alternatively, we could be expected to create a function that takes the integer as an input and provides the output as specified above. That would look like this:

```javascript
function fizzBuzz(int) {
  if (int % 3 == 0 && int % 5 == 0) {
    return "FizzBuzz";
  } else if (int % 3 == 0) {
    return "Fizz";
  } else if (int % 5 == 0) {
    return "Buzz";
  } else {
    return int;
  }
}

// then we can call it in a loop like so
for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
```

Now, with if statements, we have the ability to make some very functional and useful programs.

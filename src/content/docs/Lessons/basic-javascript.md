---
title: "Basic JavaScript"
description: "The very basics of programming represented in JavaScript syntax"
sidebar:
  order: 2
---

If you haven't heard it 1,000 times yet, you certainly will if you stick to this; syntax will be different but programming concepts are the same in all languages.

I'm choosing JavaScript to show you these concepts for several reasons. One being that it is popular. Popular in that it is used commonly, not necessarily that the masses hold it in high regard. Beyond that, the syntax is "C-like", meaning that it follows a basic style derived from the C programming language, which is common among many languages. Finally, it runs easily in a web browser, so we don't have to fiddle with a compiler or interpreter (more on those later) to run some basic code.

## Basics

It is always hard to say where the beginning is when approaching a topic as broad as programming. So somewhat arbitrarily, I will start with variables and constants.

### Variables

If you really break it down, programming is just a process of modifying data. Data can come in many forms. One of the most basic forms is in that of a variable or a constant. A variable or constant is essentially just a name that we add a value to. Like so:

```javascript
const MY_CONST = "some string";

let myVariable = "a string that might change";

var myOldVarialbe = "this string is likely out of date";
```

Firstly, I'd like to distinguish a constant from a variable.

#### Constants

A constant is a value that cannot (or should not) be changed during the life of the program. In technical terms, a constant is immutable. Constants are useful to declare values that will be used several times throughout a program, but there is no need for the program to manipulate the value of it. If you were writing a game and you wanted to set a universal value for gravity, you would like declare `GRAVITY` as a constant.

#### Variables

A variable, as the name suggests, can have a value that can be changed, or a value that is mutable. This means that the value can not only be manipulated and changed, but the value can also be re-assigned (more on assignment later).

I wish I could say that in JavaScript, constants were declared with `const` and variables were declared with `var`. Unfortunately, it's not that simple. JavaScript didn't used to have constants. Every value was declared as a `var`. This became a problem as it was easy to introduce bugs where a value that should have been a constant is changed inadvertently through some stray logic. Fortunately, the powers that be gifted us the `const` declaration. But `var` still had some undesirable behavior, so they introduced `let` to declare mutable variables. `var` is still supported and will still work, but it is recommended to always use `const` and `let` in modern code bases.

Now here is the kicker. `const` is not really immutable. Unfortunately, JavaScript to this day still does not have a truly immutable constant declaration. While it is true that you cannot re-assign `const`, you can still manipulate the value.

```javascript
const MY_CONST = "This cannot be reassigned";

MY_CONST = "New assignment"; // This will result in an error

const teacher = {
  name: "Logan",
  url: "https://logno.dev",
};

teacher.url = "https://class.logno.dev"; // This will work
```

In the above example, the second `const` is not re-assigned, only a value within the object was changed. The only real restriction a `const` has is that it is assigned a specific memory address when it is declared and that cannot be changed throughout the life of the program. This does in fact prevent the introduction of some bugs, but more importantly it comes with some minor performance benefits.

If all that is a bit confusing, just know that when declaring constants and variables in JavaScript, you should **always** reach for `const` first. If `const` gives you a problem, move to `let`. But you should _never_ use `var`.

##### Naming Variables

Variables can be named nearly anything you want as long as they follow a small set of rules:

- Names can contain letters, digits, underscores, and dollar signs.
- Names must begin with a letter.
- Names can also begin with `$` and `_` (but these are generally used for specific purposes)
- Names are case sensitive (y and Y are different variables).
- Reserved words (JavaScript keywords such as `let`, `new`, `function`, `class`, and so on) cannot be used as names.

### Declaration and Assignment

Thus far, I have taken for granted a few concepts. Declaration and assignment of variables has few points that deserve a bit of explanation.

**Declaration** of a variable is achieved syntactically by beginning a line with `const` or `let` followed by a word of your choice.

```javascript
let myVariable; // simple declaration of a variable
```

**Assignment** involves applying value a declared variable or constant. A majority of the time, declaration and assignment will occur at the same time, on the same line. But there are cases when they happen separately.

```javascript
let myVariable; // declaration without assignment

myVariable = "my value"; // assignment after declaration

const anotherVariable = "different value"; // declaration and assignment
```

Notice that the first declaration without assignment uses `let`. This is only possible with `let`, a variable declaration using `const` must be assigned in the same statement.

This concept is sometimes referred to as left handed and right handed statements. The left handed portion is what is being assigned, and the right handed portion is the value assigned to the left handed variable. These can be referred to as l-value and r-value.

Assignment is always done with a single equal sign (`=`). In math, a single equal sign is used for comparison. For example `x = y` is stating that `x` and `y` are the same number. In programming, when we want to compare two values, we use something else.

### Comparison Operators

A core aspect of programming is something called **comparison operators**. Throughout the life of a program, variables change values and we often need to check what those values are. Depending on the need, there are different ways to check the value.

```javascript
// Lets take two variables with two different values
const x = 4;
const y = 7;

// see the following comparison operators
x == y; // Equality operator. Returns false
x != y; // Inequality operator. Returns true
x < y; // Less than operator. Returns true
x > y; // Greater than operator. Returns false
x <= y; // Less than or equal to operator. Returns true
x >= y; // Greater than or equal to operator. Returns false
```

This is not a comprehensive list of comparison operators, but these are the most common. A large portion of programming is telling the computer how to behave as a result of comparison operators such as this.

### Data Types

Data types is a large topic so this will only be a basic introduction. Data types tell us what kind of information a value is. Some languages are very particular about how data types are handled, these languages are called "strictly typed" languages. JavaScript is not a strictly typed language. That means that when we declare a variable, we don't need to say what kind of value you are going to put in it. Further, if we assign it one type of value, later on we can change it to a value of a different type and JavaScript will not have any issues with that. This has the benefit of not throwing errors at us while we are coding, but it also gives us high chance that we may mess something up in our logic because of mismatched types. Enough about JavaScript though, let's look at some data types.

#### Primitive Types

Primitive types are the core types that other types are built upon. These include:

- **Strings** - Simply put, a string is text wrapped in single quotes `'`, double quotes `"`, or backticks `` ` ``.
- **Numbers** - Numbers can come in many forms and other languages the form must be specified. JavaScript, for better or worse, treats all numbers the same. Numbers are represented directly in the code without quotes. Some examples of acceptable numbers are `32`, `58.2983`, or `-87`.
- **Boolean** - Either true or false. JavaScript syntax represents these values using the key words `true` and `false` in all lowercase, no quotes or backticks. Boolean values are a core part of programming in general.
- **undefined** and **null** - These types represent a lack of value. I am grouping them here because they behave similarly, but they do in fact have different functions which we will discuss at another time.

There are two additional primitive types in JavaScript making up a total of 7 primitives. For the sake of simplicity, I will omit the other two here.

#### Other Types

Beyond the primitive types, more complex types are usually more specific to the language. There are certainly common threads between languages, but lets stick to JavaScript for now.

##### Arrays

An array is a list of values of any type. While JavaScript allows arrays to contain values of mixed types, arrays are typically all of one type.

```javascript
const myNumArr = [23, 982, 42, 78, 40]; // an array of numbers

const myFruits = ["Apple", "Orange", "Banana", "Tomato"]; // an array of strings

// arrays can contain other arrays as the values,
// resulting in something called a nested array.
const myNestedArr = [
  [23, 42, 943],
  [98, 489, 29],
  [87, 9, 562],
];
```

When we use a variable, we call its value simply by referring to its name. If we want to pass around the data of an array in its entirety, we do the same, simply call its name. However, if we only want to refer to a single value, we must refer to the values position in the array known as its **index**. This is done by calling the name of the array followed by an opening square bracket `[` the number of the index then a closing square bracket `]`.

```javascript
myNumArr[2];
```

You may intuitively assume that the call above will return the second item in the list. However, when we count things in software, we usually follow what is called a **zero index**. This means that we start counting with the number `0`. So the call above would refer to the third item in the list. To call the first item in the list, we must call `myNumArr[0]`.

##### Objects

Objects are very important in JavaScript. Broadly put, and object is a value that contains key-value pairs of various data types. This means that within an object we have keys (similar to a variable) and an associated value that can be of any type. An object is assigned to a variable with a single equal sign just as any other value, and is contained within two curly brackets `{}`.

```javascript
const myCar = {
  make: "Honda",
  model: "Civic",
  year: "2014",
  color: "silver",
};
```

The key-value pairs are separated by commas, similar to an array. The key is generally an identifier following the same rules as naming variables. A value is assigned to a key using a colon `:` instead of an equal sign.

When a function is assigned to the value of a key, this is called a method.

Referencing a value or method of an object can be done with either dot notation or bracket notation.

```javascript
const myCar = {
  make: "Honda",
  model: "Civic",
  year: "2014",
  color: "silver",
  honk: function () {
    console.log("BEEEP!!!");
  },
};

myCar.make; // dot notation

myCar["make"]; // bracket notation

myCar.honk(); // dot notation

myCar["honk"](); // bracket notation
```

Dot notation is far more common and generally recommended. Bracket notation is usually used only when it is absolutely necessary.

### Functions

Thus far, everything I have discussed is mostly useless on its own. We need a way get things done. We want to be able to type up some code and use it over and over again without having to re-type it every time. This is what functions do for us. I will go much deeper into functions in a later section, here I will simply cover some of the syntax.

There are multiple types of functions and multiple ways to declare functions. The following is the most typical way to create a function:

```javascript
function myFunc() {
  // do stuff
}

// then we may call the function
myFunc();
```

This is would be a function without parameters. So this function will do the same thing every time it is called assuming everything it depends on is also unchanged. If we would like a function to be a bit more dynamic, or be able to do different things given different conditions, we will need to give it parameters.

```javascript
function sum(x, y) {
  return x + y;
}

sum(4, 3); // returns 7
```

Parameters are the names of the variables that decide upon when we create the function. The names are then usable within the scope of the function (more on scope in a later lesson). When we call the function, the values that we pass to the function associated with the parameters are called arguments.

The return is the value the comes out of the function. Or you could say that the return is the value that replaces the function call after it has completed. Using the `sum` function from above:

```javascript
const total = sum(4, 3); // total is now assigned the value 7
```

### Comments

The last thing I'll cover here are comments. Comments are text within the code that does not get processed. It is there strictly to be viewed by humans. JavaScript comments, which is common among many languages, includes a single line comment, or a multi-line comment.

```javascript
// single line comment

/*
Multi line
comment
*/

let comment; // comments can also follow code within a line

function multilineComment() {
  console.log(/* multi-line comments may be embedded within code*/ "hello");
}
```

It is common practice to use comments to remove code from being processed without deleting it usually for testing purposes. We use the phrase "comment out" to refer to code that is bypassed by comment syntax.

```javascript
console.log("This code will run");

// console.log("This code will not run")
```

## Conclusion

This section is quite heavy and includes a lot of terms and concepts. If you did not absorb everything, don't fret, it will come to you in time. Future lessons will be more concise and cover more specific topics.

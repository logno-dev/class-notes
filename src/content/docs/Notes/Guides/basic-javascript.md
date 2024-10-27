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

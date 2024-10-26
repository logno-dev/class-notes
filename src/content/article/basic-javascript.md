---
title: "Basic JavaScript"
description: "The very basics of programming represented in JavaScript syntax"
pubDate: "Oct 25 2024"
published: true
---

If you haven't heard it 1,000 times yet, you certainly will if you stick to this; syntax will be different but programming concepts are the same in all languages.

I'm choosing JavaScript to show you these concepts for several reasons. One being that it is popular. Popular in that it is used commonly, not necessarily that the masses hold it in high regard. Beyond that, the syntax is "C-like", meaning that it follows a basic style derived from the C programming language, which is common among many languages. Finally, it runs easily in a web browser, so we don't have to fiddle with a compiler or interpreter (more on those later) to run some basic code.

### Basics

It is always hard to say where the beginning is when approaching a topic as broad as programming. So somewhat arbitrarily, I will start with variables and constants.

#### Variables

If you really break it down, programming is just a process of modifying data. Data can come in many forms. One of the most basic forms is in that of a variable or a constant. A variable or constant is essentially just a name that we add a value to. Like so:

```javascript
const MY_CONST = "some string";

let myVariable = "a string that might change";

var myOldVarialbe = "this string is likely out of date";
```

Firstly, I'd like to distinguish a constant from a variable.

##### Constants

A constant is a value that cannot (or should not) be changed during the life of the program. In technical terms, a constant is immutable. Constants are useful to declare values that will be used several times throughout a program, but there is no need for the program to manipulate the value of it. If you were writing a game and you wanted to set a universal value for gravity, you would like declare `GRAVITY` as a constant.

##### Variables

A variable, as the name suggests, can have a value that can be changed, or a value that is mutable. This means that the value can not only be manipulated and changed, but the value can also be re-assigned (more on assignment later).

I wish I could say that in JavaScript, constants were declared with `const` and variables were declared with `var`. Unfortunately, it's not that simple. JavaScript didn't used to have constants. Every value was declared as a `var`. This became a problem as it was easy to introduce bugs where a value that should have been a constant is changed inadvertently through some stray logic. Fortunately, the powers that be gifted us the `const` declaration.

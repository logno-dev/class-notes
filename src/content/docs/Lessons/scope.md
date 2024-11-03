---
title: Scope
description: A short lesson on scope
sidebar:
  order: 4
---

When we declare and use variables in coding, it is important to understand where we can access variables and how we can avoid causing variable terms to clash. Scope is how we can re-use terms without worrying about conflicts allowing us to stick to semantic naming schemes.

## Global

When we write regular code statements in a JavaScript file, we consider that writing within the global scope. Variables declared here are accessible in any line of code located below where the variable is declared.

```javascript
const foo = "bar";

// foo is accessible here

const buzz = {
  // foo is accessible here as well
  fizz: foo,
};

function barGen() {
  // foo is accessible here
  return foo;
}
```

This may seem like a given, but it will get a bit more complicated. If we start filling our global scope with identifiers, we may have run into some trouble as the code base gets larger. We may want to name something but the most intuitive name is not available.

## Block Statements

So lets look at something called a block statement.

```javascript
// You won't see this often, but this is
// acceptable code
{
  const foo = "bar";
  // everything between the curly brackets
  // is part of this block statement
}
```

Block statements create their own scope which is nested inside the global scope.

```javascript
const foo = "bar";

{
  const fizz = "buzz";

  console.log(foo); // prints bar
  console.log(fizz); // prints buzz
}

console.log(foo); // prints bar
console.log(fizz); // prints undefined
```

Notice that `foo` is accessible from inside the block statement as well as `fizz`, but outside the block statement (even though it comes after the declaration) `fizz` is not accessible.

This is scope. However, these block statements are mostly useless since anything declared within them can't be easily extracted. So scope extends to functions and loops as well, since they are are essentially just block statements with a few extra features.

```javascript
function barGen() {
  const foo = "bar";
  return foo;
}

console.log(foo); // returns undefined
console.log(barGen()); // returns bar
```

This concept of scope drives much of the logic you will create in your programming journey.

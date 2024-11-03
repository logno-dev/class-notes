---
title: Operators
sidebar:
  order: 6
---

If you have been following this lessons in the order listed, we have already covered many operators. But here I'd like to cover operators a bit more in depth.

## Expressions

As mentioned in a previous lesson, **an expression is a unit of code that resolves to a value**. To expand on this, and expression may have side effects such as assigning a value to a variable, or an expression may simply evaluate.

Regardless of the outcome, an expression will always have an operator and at least one operand.

## Operators and Operands

Consider the following:

```javascript
let x = 4;

x <= 5;

x = 4 + 5;
```

In the above, `x`, `4` and `5` are operands. The `=` and the `<=` are operators. The first expression is using the assignment operator (`=`) to assign the value of four to the variable `x`. The second expression is using a comparison operator (`<=`) which mean less than or equal to and this expression will resolve to `true` because 4 is in fact less than or equal to 5. The last expression is using both an assignment operator (`=`) and an arithmetic operator (`+`). The arithmetic operator will resolve the right hand side of the assignment operator to a value, that being 4 plus 5, or 9. The assignment operator then assigns the value 9 to the variable `x`.

All of the above operators are considered binary operators, which means that there is an operand on the left side, and operator in the middle, and a second operand on the right side. Even the last expression contains only binary operators, where the second operand relative to the assignment operator is itself a binary operation.

Expressions only one operand and one operator are known as unary operators. Examples include `x++` or `!x`.

I will not comprehensively cover the operators of JavaScript, but the following is a table of the common operators, the type of operator they are, and a description.

| Operator | Type       | Description                                                                  | Example                                       |
| -------- | ---------- | ---------------------------------------------------------------------------- | --------------------------------------------- |
| `=`      | Assignment | The assignment operator assigns a value to a variable                        | `x = 5`                                       |
| `==`     | Comparison | The equality operator compares two values while performing coercion.         | `foo == "bar"`<br> `x == 5` <br> `42 == "42"` |
| `!=`     | Comparison | Not equal, the inverse of the equality operator                              | `x != 4`                                      |
| `===`    | Comparison | Strict equality does not coerce the types of the values                      | `foo === "bar"`<br>`4 === 4`                  |
| `!==`    | Comparison | Strict inequality, the inverse of strict equality                            | `4 !== "4"`                                   |
| `<`      | Comparison | Less than                                                                    | `4 < x`                                       |
| `>`      | comparison | Greater than                                                                 | `6 > x`                                       |
| `<=`     | Comparison | Less than or equal to                                                        | `4 <= x`                                      |
| `>=`     | comparison | Greater than or equal to                                                     | `6 >= x`                                      |
| `+`      | Arithmetic | Acts as arithmetic addition for numbers as well as concatination for strings | `4 + 5` <br> `"hello" + " world"`             |
| `-`      | Arithmetic | Subtraction                                                                  | `5 - 4`                                       |
| `*`      | Arithmetic | Multiplication                                                               | `5 * 4`                                       |
| `/`      | Arithmetic | Division                                                                     | `5 / 4`                                       |
| `%`      | Arithmetic | Modulo returns the remander of a division                                    | `4 % 2`                                       |
| `**`     | Arithmetic | Exponent                                                                     | `x ** 2`                                      |
| `++`     | Arithmetic | Increment by 1                                                               | `x++` `++x`                                   |
| `--`     | Arithmetic | Decrement by 1                                                               | `x--` `--x`                                   |
| `&&`     | Logical    | AND operator returns true if both operands evaluate to true                  | `x == 5 && y < x`                             |
| `\|\|`   | Logical    | OR operator returns true if either or both operands evaluate to true         | `x == 5 \|\| x == 3`                          |

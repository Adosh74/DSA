# Big O Notation Section

## What is Big O?

-   Big O is a system for classifying code and comparing the efficiency of
    algorithms
-   Big O doesn't care about precision, only about general trends (linear?
    quadratic? constant?)

## Why should I care?

-   It's important to have a precise vocabulary to talk about how our code
    performs
-   Useful for discussing trade-offs between different approaches

## What better mean?

-   Faster?
-   Less memory-intensive?
-   More readable?

## Simplifying Big O Expression

-   Constants don't matter
-   Smaller terms don't matter

    1. O(n + 10) => O(n)
    2. O(1000n + 50) => O(n)
    3. O(n^2 + 5n + 8) => O(n^2)

## Big O Shorthands

-   Arithmetic operations are constant
-   Variable assignment is constant
-   Accessing elements in an array (by index) or object (by key) is constant
-   In a loop, the complexity is the length of the loop times the complexity of
    whatever happens inside of the loop

## A Couple More Examples

```js
function logAtLeast5(n) {
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}
```

-   Time Complexity: O(n)

```js
function logAtMost5(n) {
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}
```

-   Time Complexity: O(1)

## Space Complexity

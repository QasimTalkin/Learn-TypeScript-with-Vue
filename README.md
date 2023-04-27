---
marp: true
theme: gaia
style: |
  section.lead h1 {
  text-align: center;
  }
  section.middle li{
  text-align: center;
  }
  ul {
    margin: 0.2rem;
  }
  pre {
  font-size: 0.95rem;
  border-radius: 0.5rem;
  margin:5px;
  }
  blockquote {
    color: #aee660;
    background: #1c3a4f;
    border-left: 10px solid #aee660;
    padding: 0.5em;
    font-size: 0.75rem;
    margin: 5px;
  }

---
<!-- headingDivider: 2 -->
<!--
theme: gaia
class: lead
-->


# TypeScript

## What is TypeScript? and Why use it

- TypeScript is a superset of JavaScript
  - It adds types to JavaScript!
  - It adds classes to JavaScript!
  - It adds interfaces to JavaScript!
  - It adds modules to JavaScript!
  - It adds generics to JavaScript!
  - It adds enums to JavaScript!
  - It adds decorators to JavaScript!

## Issue with types in JavaScript

Types in JavaScript are what we call "duck typed". This means that if it looks like a duck, and quacks like a duck, then it is a duck. This is a very loose way of typing, and can lead to some very hard to find bugs.

example:

```js
function add(a, b) {
  return a + b;
}

add(1, 2); // 3

add("1", "2"); // "12"

add(1, "2"); // "12"
```

## Resoling the issue with JavaScript types

- in the above example, we can see that the function `add` is not very strict with the types of the arguments it takes in. This can lead to some very hard to find bugs.

- TypeScript can help us solve this issue by adding types to our JavaScript code.


```ts
function add(a: number, b:number){
  return a + b;
}

sum(1, 2); // 3
sum("1", "2"); // error
sum(1, "2"); // error
```

## Issue with classes in JavaScript

- JavaScript do not have classes on their own, we use `new` keyword to create objects from a constructor function.
- this is different from classes in other languages like Java, C#, etc.
- this can cause several issues, like the following:
  - we can not use `instanceof` to check if an object is an instance of a class
  - `this` keyword can be used in a wrong context
  - `super` keyword does not work as expected
  - finally we can not use `extends` to extend a class

## Issue with classes in JavaScript (continued)

- The class keyword in TypeScript is just syntactic sugar over the constructor function.
- TypeScript classes are not hoisted, so we can not use them before they are defined.
- How it solves the issues with classes in JavaScript:
  - we can use `instanceof` to check if an object is an instance of a class
  - `this` keyword is used in the correct context
  - `super` keyword works as expected
  - we can use `extends` to extend a class

## Resolving the issue with JavaScript classes

```TypeScript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

const person = new Person("John", 30);
person.greet(); // Hello, my name is John and I am 30 years old.
// instance of
console.log(person instanceof Person); // true
```

## <!-- fit --> Resolving the issue with JavaScript classes (continued) SUPER & EXTENDS

```TypeScript
// SUPER
class Employee extends Person {
  salary: number;

  constructor(name: string, age: number, salary: number) {
    super(name, age);
    this.salary = salary;
  }

  greet() {
    super.greet();
    console.log(`My salary is ${this.salary}`);
  }
}
```

## Issue with interfaces in JavaScript

- Interface in programming is a **contract** that defines the structure of an object.
- JavaScript does not have interfaces, so we can not enforce the structure of an object.
- example of issue with not having interfaces in javascript

> Take a javascript program that takes in an object and prints out the name of the person.
now if we pass in an object that does not have a name property, we will get an error.
we have to ensure that the object we pass in has a name property.

## Resolving the issue with JavaScript interfaces

- TypeScript interfaces can now to used to ensure that a contract is followed, that is the structure of an object is always the as defined in the interface and expected by the program.

```TypeScript
interface Person {
  name: string;
  age: number;
}

function greet(person: Person) {
  console.log(`Hello, my name is ${person.name} and I am ${person.age} years old.`);
}

```

## Issue with modules in JavaScript

- modules in programming are used to organize code into separate files.
- modules allow us to import and export code from one file to another.
- in python say `import math` or `from math import sqrt`
- in java say `import java.util.ArrayList` or `import java.util.*`
- but with JavaScript we do not have modules, so we can not import and export code from one file to another. we do have `require` and `module.exports` but they are not standard and are not supported by all browsers.

## Resolving the issue with JavaScript modules

- TypeScript modules are just syntactic sugar over the `require` and `module.exports` in JavaScript.
- TypeScript modules are not hoisted, so we can not use them before they are defined.

```TypeScript
// file person.ts
/* this file has a class Person
* with name and age properties
* and a greet method
*/

// file main.ts
import { Person } from "./person";
const person = new Person("John", 30);
person.greet(); // Hello, my name is John and I am 30 years old.
```

## Issue with generics in JavaScript

- Generics are used to create reusable components. They allow us to write code that can work with any data type.
- take for example generics in Java

```Java
public class Box<T> {
  private T t;

  public void set(T t) { this.t = t; }
  public T get() { return t; }
}
```
> In the above example we can see that the class `Box` can be used with any data type, we can create a `Box` of `String` or `Box` of `Integer` or `Box` of `Person` or any other data type.

> set and get methods can be used with any data type.

> this is not possible in JavaScript, as JavaScript does not have generics.

## Resolving the issue with JavaScript generics

- TypeScript generics are just syntactic sugar over the `any` type in JavaScript.

```ts
// file box.ts
class Box<T> {
  private t: T;

  public set(t: T) { this.t = t; }
  public get(): T { return this.t; }
}

// file main.ts
const box2 = new Box<ColorsArray>();
box2.set(["red", "green", "blue"]);
box2.get().forEach(color => console.log(color)); // red green blue
```

## Issue with enums in JavaScript

- Enums are used to define a set of named constants. in python we use `enum` module.
- Enums are different from objects in that they are immutable, that is we can not add new properties to an enum.
- example of enums in python
```python

from enum import Enum

class Color(Enum):
  RED = 1
  GREEN = 2
  BLUE = 3

print(Color.RED) # Color.RED
```

## Resolving Enum issue in JavaScript

- TypeScript enums are just syntactic sugar over the objects in JavaScript.

```ts
enum Color {
  RED = 1,
  GREEN = 2,
  BLUE = 3
}

console.log(Color.RED); // 1
console.log(Color[4]);
Color[4] = "YELLOW";
console.log(Color[4]); // undefined, because enums are immutable
```


## TypeScript Compiler

- TypeScript compiler is used to compile TypeScript code to JavaScript code.
- Behind the scenes, each line in .ts file is read and compiled to JavaScript code.
- The compiled JavaScript code is then executed by the browser.

```TypeScript
// file main.ts
function greet(name: string) {
  console.log(`Hello, ${name}`);
}

// compiled to JavaScript code

function greet(name) {
  console.log(`Hello, ${name}`);
}
```
# Sample TypeScript and Vue.js project

- RateMyCourses.com
- A websites where anyone can post a review for an online course and rate it.
- The website has a list of courses, each course has a title, description, rating and a list of reviews.
- The website has a form to add a new course.

## Creating a new project

- Install vue cli `npm install -g @vue/cli`,
  - `-g` flag is used to install the package globally.
  - `@vue/cli` is the name of the package.
- Create a new project `vue create rate-my-courses` and follow the instructions.

## Project Structure

- `src` folder contains all the source code.
- `public` folder contains the static files.
- `shims-vue.d.ts` file is used to tell TypeScript that .vue files contain TypeScript code.
- `main.ts` file is the entry point of the application.

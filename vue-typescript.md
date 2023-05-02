## TypeScript Syntax in Vue

## Using TypeScript in Vue

- `lang="ts"` attribute in `<script>` tag is used to tell Vue that the code inside the `<script>` tag is TypeScript code.
- component data property is defined as a function that returns an object.
  - items defined in the data property are assigned that type.

```js
<script lang="ts">

export default defineComponent({
  name: "App",
  data() {
    return {
      name: 'Qasim',
      age: 30,
      items: [] as string[],
    };
  },
});

```

- here ts will infer the type of name as string and age as number and items as an array of strings.

## Declaring methods

- methods are declared as functions inside the methods object.
- for the arguments of the function we can define the type of the argument.
- `function setName(name: string)` here we are defining the type of the argument name as string.

## expecting multiple types

- if we want to expect multiple types for an argument we can use the `|` union operator.

- `function setName(age: string | number)` here we are defining the type of the argument name as string or number.

- inside the data object we use type assertion to tell ts that the items array is an array of strings.

```TypeScript
data() {
  return {
    items: [] as string[],
    studentId: 0 as number | string,
  };
},
```

## return inferring

- ts automatically infer the return type of a function.
- if we want to explicitly define the return type of a function we can do so by using the `: returnType` syntax.

```TypeScript
function setName(name: string): string {
  this.name = name;
  return name;
}
```

## Type inference for ref and reactive

- `const studentId = ref(0);` here ts will infer the type of studentId as number.
- `const studentId = ref<number | string>(0);` here we are explicitly defining the type of studentId as number or string.

## Declaring optional properties

- `name ?: string` here we are defining the name property as optional.

```TypeScript
class Person {
  name?: string;
  age?: number;
  constructor(name?: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}
```

## passing and accepting props

- props are passed to a component as an object. `<HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>`
- props are accepted in a component as an object. `props: ['msg']`
- with ts we can define the type of the props that we are expecting.

```TypeScript
props: {
  msg: String,
}
```

## defining the type of props and acceptin array

- we can define the type of props that we are expecting.
- we can also define the default value of a prop.
- we can also define the required props.

```TypeScript
<HomePage msg="Welcome to Your Vue.js + TypeScript App" :courses="['Vue', 'React', 'Angular']" />

props: {
  msg: {
    type: String,
    default: 'Hello World',
    required: true,
  },
  courses: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
}
```

## function props

- `type CourseItems = 'id' | 'name' | 'description' | 'price';` here we are defining a type that can only have the values of id, name, description, price.
- `function sortCoursesBy(prop: CourseItems) {}` here we are defining a function that accepts a parameter of type CourseItems.

```TypeScript

<HomePage msg="Welcome to Your Vue.js + TypeScript App" :courses="['Vue', 'React', 'Angular']" :sortCoursesBy="sortCoursesBy" />

props: {
  msg: {
    type: String,
    default: 'Hello World',
    required: true,
  },
  courses: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
  sortCoursesBy: {
    type: Function as PropType<(prop: CourseItems) => void>,
    required: true,
  },
},
```

## computed properties

- we can define the type of a computed property by using the `: returnType` syntax.

```TypeScript
computed: {
  sortedCourses(): string[] {
    return this.courses.sort();
  },
},
```

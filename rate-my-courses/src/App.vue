<template>
   <h2>RateTheCourses</h2>
    <div class="itemSort">
     <button class="btn btn-primary" @click="handleClick('Course')">Order by Course</button>
     <button class="btn btn-primary" @click="handleClick('Rating')">Order by Rating</button>
     <button class="btn btn-primary" @click="handleClick('Professor')">Order by Professor</button>
    </div>
    <p>Ordered By {{ order }}</p>
    <CourseList :courses="courses" :order="order" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import CourseList from './components/CourseList.vue';
import Course from './types/course';
import OrderTerm from './types/orderTerm';

export default defineComponent({
  name: 'App',
  components: {
    CourseList,
  },
  setup() {
   const courses = ref<Course[]>([
    {name : 'comp 1805', description: 'discrete Structures I', review: 'This course is a good introduction to discrete mathematics.', rating: 4, professor: 'Dr. Abul Qasim'},
    {name : 'COMP 2401', description: 'Introduction to Systems Programming', review: 'This course is a good introduction to C programming.', rating: 3, professor: 'Dr. Christine Laurendeau'},
    {name : 'CST 8212', description: 'Web Programming', review: 'This course is a good introduction to web programming.', rating: 4, professor: 'Dr. Abul Qasim'},
    {name : 'CST 8285', description: 'Web Programming Tools and Frameworks', review: 'This course is a good introduction to web programming tools and frameworks.', rating: 4, professor: 'Dr. Abul Qasim'},
    {name : 'CST 8213', description: 'Mobile Application Development', review: 'This course is a good introduction to mobile application development.', rating: 4, professor: 'Dr. Abul Qasim'},
   ]);
   const order = ref<OrderTerm>('Course');

   const handleClick = (args: OrderTerm) => {
    order.value = args;
   }

   return { courses, handleClick, order };
  },
  methods: {
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

  .itemSort {
    display: flex;
    justify-content: space-evenly;
    width: 90%;
    margin: 1rem auto;
  }

  .itemSort button {
    cursor: pointer;
    text-decoration: none;
    border: 1px solid #ccc;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    background-color: #fff;
    color: #000;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
  }
  .itemSort button:hover {
    background-color: #000;
    color: #fff;
  }

  .itemSort button:active {
    transform: scale(0.95);
    box-shadow: 5px 5px 5px rgba(0,0,0,0.2);
  }
</style>

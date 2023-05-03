<template>
<transition-group name="list" tag="div">
  <div class="card" v-for="course in orderCourses" :key="course.name">
    <div class="card-body">
      <h5 class="card-title">{{ course.name }}</h5>
      <h6 class="card-subtitle mb-2 text-muted">{{ course.description }}</h6>
      <p class="card-text">{{ course.review }}</p>
      <div class="card-sub">
        <div>
          Rating:
          <span v-for="i in course.rating" :key="i">★</span>
          <span v-for="i in 5 - course.rating" :key="i">☆</span>
        </div>
        <div>Professor: {{ course.professor }}</div>
      </div>
    </div>
  </div>
</transition-group>

<form class="addCourses">
  <div class="form-group">
    <label for="courseName">Course Name</label>
    <input type="text" class="form-control" id="courseName" placeholder="Enter Course Name" v-model="coursesEra.name"/>
  </div>
  <div class="form-group">
    <label for="courseDescription">Course Description</label>
    <input type="text" class="form-control" id="courseDescription" placeholder="Enter Course Description" v-model="coursesEra.description" />
  </div>
  <div class="form-group">
    <label for="courseReview">Course Review</label>
    <input type="text" class="form-control" id="courseReview" placeholder="Enter Course Review" v-model="coursesEra.review" />
  </div>
  <div class="form-group">
    <label for="courseRating">Course Rating</label>
    <input type="number" class="form-control" id="courseRating" placeholder="Enter Course Rating"  min="0" max="5" v-model="coursesEra.rating" />
  </div>
  <div class="form-group">
    <label for="courseProfessor">Course Professor</label>
    <input type="text" class="form-control" id="courseProfessor" placeholder="Enter Course Professor" v-model="coursesEra.professor" />
  </div>
  <button type="button" class="btn btn-primary" @click="addCourses">Submit</button>
</form>
</template>

<script lang="ts">
import Course from "@/types/course";
import OrderTerm from "@/types/orderTerm";
import { computed, defineComponent, PropType, ref} from "vue";

export default defineComponent({
  props: {
    courses: {
      type: Array as PropType<Course[]>,
      required: true,
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true,
    },
  },
  setup(props) {
    const orderCourses = computed(() => {
      return [...props.courses].sort((a,b) => {
        if (props.order === "Course") {
          return a.name.localeCompare(b.name);
        } else if (props.order === "Rating") {
          return a.rating - b.rating;
        } else if (props.order === "Professor") {
          return a.professor.localeCompare(b.professor);
        } else {
          return 0;
        }
      });
    });
    const coursesEra = ref<Course>({
      name: "",
      description: "",
      review: "",
      rating: 0,
      professor: "",});
    const addCourses = () => {

      // eslint-disable-next-line vue/no-mutating-props
      props.courses.push(coursesEra.value);
      coursesEra.value = {
        name: "",
        description: "",
        review: "",
        rating: 0,
        professor: "",
      };
    };
    return {
      orderCourses,
      addCourses,
      coursesEra

    };
  },
});
</script>

<style scoped>
.list-move {
  transition: all 1s ease;
}
.list-enter-active {
  transition: all 1s ease;
}
.list-enter-from {
  opacity: 0;
  transform: translateX(90px);
}

.card, form{
  width: 90%;
  margin: 1rem auto;
  text-align: start;
  border: 1px solid #ccc;
  padding: 5px 10px 5px 10px;
}

.card-title {
    margin: 0;
    text-transform: uppercase;
  }
  .card-subtitle  {
    margin: 0;
    text-transform: capitalize;
  }
  .card-text {
  }
  .card-sub {
    margin: 0;
    padding: 0;
    font-size: x-small;
    display: flex;
    justify-content: space-between;
  }

 .form-group {
    margin: 0.5rem 0;
  }

  .form-group label {
    margin: 0;
  }

  .form-group input {
    width: 90%;
    height: 2rem;
    text-align: center;
  }

 form {
  text-align: center;
 }

 input::placeholder {
  color: #ccc;
  opacity: 1;
  text-align: center;
 }
</style>

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
</template>

<script lang="ts">
import Course from "@/types/course";
import OrderTerm from "@/types/orderTerm";
import { computed, defineComponent, PropType } from "vue";

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

    return { orderCourses };
  },
});
</script>

<style scoped>
.list-move {
  transition: all 1s ease;
}

.card {
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
</style>

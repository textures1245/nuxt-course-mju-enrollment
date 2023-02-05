<script lang="ts">
import { Course, useCourseStore } from "~/store/coruseState";
import Swal from "sweetalert2";
export default {
  methods: {
    resetStates(): void {
      Swal.fire({
        title: "Do you really want to remove all state?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          useCourseStore().deleteState("all");
          Swal.fire("All States had been removed!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Action got denied", "", "info");
        }
      });
    },
  },
};
</script>
<script setup lang="ts">
const courseState = useCourseStore();
let courses = ref(<Course[]>courseState.getCourses);

//! watch states
watch(
  useCourseStore(),
  () => {
    courses.value = courseState.courses;
    console.log(courses);
  },
  { deep: true }
);

computed

//- methods
</script>
<template>
  <v-container>
    <div>
      <v-layout style="height: 50px">
        <v-system-bar window>
          <v-icon icon="mdi-book-check" class="me-2"></v-icon>

          <span>{{ courses.length }} courses enrolled</span>

          <v-spacer></v-spacer>
          <DialogWindow></DialogWindow>

          <div class="">
            <v-btn
              @click="resetStates"
              icon="mdi-cog"
              class="text-black"
              variant="plain"
            >
              <v-tooltip
                activator="parent"
                class="text-center !text-xs"
                location="top"
                >REMOVE ALL</v-tooltip
              >
              <v-icon icon="mdi-close" class="text-red-600 ms-2"></v-icon>
            </v-btn>
          </div>
        </v-system-bar>
      </v-layout>
      <CourseTableList
        v-if="courses.length > 0"
        :course-states="courses"
      ></CourseTableList>
    </div>
  </v-container>
</template>

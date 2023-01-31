<script setup lang="ts">
import { useCourseStore } from "~/store/coruseState";

const courseState = useCourseStore();
let courses = courseState.getCourses;
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
            <v-btn icon="mdi-cog" class="text-black" variant="plain">
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
      <CourseTableList :course-states="courses"></CourseTableList>
    </div>
  </v-container>
</template>

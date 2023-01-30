<script lang="ts">
// @ts-nocheck
import { Course } from "~~/store/coruseState";
export default {
  props: {
    courseStates: <Course[]>[],
  },
};
</script>

<template>
  <v-table class="text-sm lg:text-base" fixed-header height="300px">
    <thead>
      <tr>
        <th class="text-left">Course</th>
        <th class="text-left">Code</th>
        <th class="text-left">Credit</th>
        <th class="text-left">Group</th>
        <th class="text-center">Instructor</th>
        <th class="text-left pl-6">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in <Course[]>courseStates" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.code }}</td>
        <td>{{ item.credit }}</td>
        <td>{{ item.group }}</td>
        <td>
          <div
            class="flex items-center lg:flex-row flex-col justify-center mt-2"
          >
            <v-avatar class="mr-2" color="white">
              <v-img :src="item.instructor.imgSrc" width="20"></v-img>
            </v-avatar>
            <p class="text-xs break-words text-center">
              {{ item.instructor.name }}
            </p>
          </div>
        </td>
        <td>
          <button class="btn btn-error btn-xs text-start">remove</button>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
import { Course, useCourseStore } from "~~/store/coruseState";
import { useDisplay } from "vuetify";
import Swal from "sweetalert2";
export default {
  props: {
    courseStates: Object,
  },
  data() {
    return {
      display: ref(useDisplay())
    }
  },
  computed: {
    autoHight() {
      if (this.display.mdAndDown) {
        return '';
      } else {
        return '600px'
      }
    }
  },
  methods: {
    removeState(index: number) {
      Swal.fire({
        title: "Do you really want to remove this state?",
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `No`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          useCourseStore().deleteState("single", index);
          Swal.fire("State had been removed", "", "success");
        } else if (result.isDenied) {
          Swal.fire("Action got denied", "", "info");
        }
      });
    },
  },
};
</script>

<template>
  <v-table class="text-xs lg:text-sm" fixed-header :height="autoHight">
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
      <tr v-for="item, index in <Course[]>courseStates" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.code }}</td>
        <td>{{ item.credit }}</td>
        <td>{{ item.type }}</td>
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
          <button
            @click="removeState(index)"
            class="btn btn-error btn-xs text-start"
          >
            remove
          </button>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

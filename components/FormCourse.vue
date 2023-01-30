<script lang="ts">
import { watch } from "#imports";
import { groupKeys } from "~/store/coruseState";
import { Course } from "~~/store/coruseState";
import CourseMockup from "~/assets/mock/cs_group_course.json" assert { type: "json" };
import { Instructor, useInstructorStore } from "~~/store/instructorState";
export default {
  data: () => ({
    step: 1,
    coursesJSON: CourseMockup,
    instructors: useInstructorStore().getState,
    courseSelected: <Course>{},
    instructorNameSelected: "",
    groupCourseSelected: {
      c_name_eng: "",
      group: "",
      c_arr: [],
    },
  }),
  watch: {
    "courseSelected.name"(newVal: string) {
      this.onSelectedCourse(newVal);
    },
    "groupCourseSelected.group"(groupVal: string) {
      this.accessedKeys(<keyof Object>groupVal);
    },
  },
  computed: {
    currentTitle() {
      switch (this.step) {
        case 1:
          return "Choose Instructor";
        case 2:
          return "Choose Course";
        default:
          return "Account created";
      }
    },
  },
  methods: {
    findInstructorSrc(iName: string) {
      let instructor = this.instructors.find((i) => i.name === iName);
      this.courseSelected.instructor = <Instructor>instructor;
      return instructor ? instructor.imgSrc : "";
    },
    accessedKeys(key: keyof Object) {
      this.groupCourseSelected.c_arr = this.coursesJSON[key] as any;
    },
    onSelectedCourse(cName: string) {
      const cSelected = (this.groupCourseSelected.c_arr as any[]).find(
        (i) => i.name_th === cName
      );
      if (cSelected) {
        this.groupCourseSelected.c_name_eng = cSelected.name_eng;
        this.courseSelected.code = cSelected.code;
        this.courseSelected.credit = cSelected.credit;
        this.courseSelected.desc = cSelected.desc;
      }
      return cSelected ? cSelected.name_th : "";
    },
  },
};
</script>
<template>
  <v-card class="mx-auto" max-width="600">
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar class="ml-2" color="primary" size="24" v-text="step"></v-avatar>
    </v-card-title>
    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <div
            class="flex justify-center w-full items-center h-full gap-6 grow"
          >
            <v-avatar v-if="instructorNameSelected !== ''">
              <v-img
                width="32"
                sizes="32"
                :src="findInstructorSrc(instructorNameSelected)"
              >
              </v-img>
            </v-avatar>
            <FormKit
              outer-class="w-full"
              inner-class=" w-96"
              type="select"
              label="Instructor"
              v-model="instructorNameSelected"
              :options="instructors.map((i) => i.name)"
              :validation="[['required']]"
              placeholder="Please selected an instructor course"
            />
          </div>
          <span class="text-caption text-grey-darken-1">
            Instructor of Computer Science, Maejo University
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item class="w-full flex justify-center" :value="2">
        <v-card-text class="flex flex-col items-center">
          <div class="flex gap-3">
            <FormKit
              type="select"
              label="Course Group"
              v-model="groupCourseSelected.group"
              :options="{
                fn: 'asdsasd',
              }"
              :validation="[['required']]"
              placeholder="Please selected a course."
            />
            <FormKit
              type="text"
              label="Course Group"
              v-model="courseSelected.group"
              :validation="[['required']]"
              placeholder="On"
            />
          </div>
          <FormKit
            v-if="groupCourseSelected.group"
            type="select"
            label="Course"
            v-model="courseSelected.name"
            :options="groupCourseSelected.c_arr.map((c) => c['name_th'])"
            :validation="[['required']]"
            placeholder="Please selected a course."
          />
          <i
            v-if="courseSelected.name"
            class="badge badge-info text-white text-sm text-caption"
            >" {{ groupCourseSelected.c_name_eng }} "</i
          >
          <div
            v-if="courseSelected.name"
            class="flex w-96 items-center justify-evenly h-full gap-6 my-6"
          >
            <div class="indicator">
              <span class="indicator-item badge indicator-top indicator-center"
                >Code</span
              >
              <button class="btn btn-primary">{{ courseSelected.code }}</button>
            </div>
            <div class="indicator">
              <span class="indicator-item badge indicator-top indicator-center"
                >Credit</span
              >
              <button class="btn btn-secondary">
                {{ courseSelected.credit }}
              </button>
            </div>
          </div>
          <span
            class="flex-cols flex text-caption text-grey-darken-1 text-center mx-auto w-2/4"
          >
            {{ courseSelected.desc }}
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="text-h6 font-weight-light mb-2">Welcome to Vuetify</h3>
          <span class="text-caption text-grey">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn v-if="step > 1" variant="text" @click="step--"> Back </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="step < 3" color="primary" variant="flat" @click="step++">
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

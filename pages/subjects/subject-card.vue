<script lang="ts">
import { useInstructorStore } from "~~/store/instructorState";
import { useCourseStore, Course } from "~~/store/coruseState";
import { Ref } from "vue";

export default {
  data: () => ({
    loadingProps: true,
  }),
};
</script>
<script setup lang="ts">
const courseState = useCourseStore();
const courses: Ref<Course[]> = ref(courseState.courses);

watch(courseState, () => {
  courses.value = courseState.getCourses;
});
console.log(courses.value);
</script>
<template>
  <LoadingProps
    v-if="loadingProps"
    @loaded-async="(loaded) => (loadingProps = loaded)"
  ></LoadingProps>
  <div v-else class="h-full w-full">
    <v-row
      v-if="courses.length > 0"
      justify="center"
      class="gap-8"
      align-content="space-between"
      dense
      no-gutters
    >
      <div class="bg-indigo-600 h-[40vh] absolute w-full -z-10"></div>

      <v-card class="mt-3" v-for="(c, index) in courses" width="500">
        <v-col>
          <v-img
            height="200"
            src="https://img.freepik.com/free-vector/vector-flat-illustration-empty-classroom-school-university-college-institute_1441-444.jpg?w=996&t=st=1674977955~exp=1674978555~hmac=cf92dc80f2f45494bfa3546e62abf4d905705f25ff33aa6ab2a67e61bb2f3eba"
            cover
          >
            <v-toolbar
              class="text-opacity-100"
              color="rgba(0, 0, 0, 0)"
              theme="light"
            >
              <template v-slot:prepend>
                <InstructorDetailFab
                  :name="c.instructor.name"
                  :img-src="c.instructor.imgSrc"
                  :tel="c.instructor.tel"
                >
                </InstructorDetailFab>
              </template>

              <v-toolbar-title class="badge badge-lg bg-primary !text-base">
                {{ c.name }}
              </v-toolbar-title>

              <template v-slot:append>
                <v-btn
                  class="text-secondary-focus"
                  icon="mdi-dots-vertical"
                ></v-btn>
              </template>
            </v-toolbar>
          </v-img>

          <v-card-text>
            <NuxtLink :to="`/subject_id/${index}`">
              <div
                class="btn btn-xs md:btn-sm btn-accent font-weight-bold ms-1 mb-2"
              >
                Course Detail
              </div>
            </NuxtLink>

            <v-timeline density="compact" align="start">
              <v-timeline-item
                :dot-color="'deep-purple-lighten-1'"
                size="x-small"
              >
                <div class="mb-4">
                  <div class="flex gap-2">
                    <strong>{{ c.name }}</strong>
                  </div>
                  <p class="text-caption">{{ c.name_eng }}</p>
                  <div class="badge badge-primary badge-sm">
                    ????????????????????????: {{ c.code }}
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item :dot-color="'green'" size="x-small">
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>Credit</strong>
                    <span class="badge badge-sm ml-1">@ {{ c.credit }}</span>
                  </div>
                  <div class="badge bg-green-600 border-green-600 badge-sm">
                    ????????????: {{ c.type }}
                  </div>
                </div>
              </v-timeline-item>
              <v-timeline-item :dot-color="'pink'" size="x-small">
                <div class="mb-4">
                  <div class="font-weight-normal">
                    <strong>Description</strong>
                  </div>
                  <div class="">
                    {{ c.desc }}
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-col>
      </v-card>
    </v-row>
    <StateNotFound v-else></StateNotFound>
  </div>
</template>

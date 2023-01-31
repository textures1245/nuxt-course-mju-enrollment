<script lang="ts">
import {
  Course,
  groupKeys,
  courseValidation,
  useCourseStore,
} from "~~/store/coruseState";
import CourseMockup from "~/assets/mock/cs_group_course.json";
import { Instructor, useInstructorStore } from "~~/store/instructorState";
import { ZodError } from "zod";
import Swal from "sweetalert2";
export default {
  data: () => ({
    stepCarouselSlide: 0,
    enrollmentSetup: {
      beforeSubmit: {
        headline: "Ready to Submit?",
        help: "",
      },
      afterSubmit: {
        headline: "Your course had been enrolled!",
        onLoaded: false,
        finished: false,
        help: "",
      },
      errorSubmit: {
        headline: "Submitted invalidation",
        help: "Please try to fill the form and try again.",
        errors: {
          msg: `Something wrong while tried to parsed validation Course Schema, 
          please try again.`,
          zError: <ZodError>{},
        },
      },
    },
    keyOpts: groupKeys,
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
          return "Submitted Form";
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
        this.courseSelected.code = cSelected.code;
        this.courseSelected.name_eng = cSelected.name_eng;
        this.courseSelected.credit = cSelected.credit;
        this.courseSelected.desc = cSelected.desc;
        console.log(this.courseSelected);
      }
    },
    //- form
    onSubmitInvalid() {
      this.stepCarouselSlide = 2;
    },

    async onSubmitHandler(node: any) {
      try {
        this.enrollmentSetup.afterSubmit.onLoaded = true;
        courseValidation.parse(this.courseSelected);
        const onLoaded = new Promise((r) => setTimeout(r, 2000));
        onLoaded.then(() => {
          //- I don't why <Course>{name, type} values are gone, and i'm such a lazy to find it
          //- so i just overridden it lol.
          let courseOverridden = <Course>{
            ...this.courseSelected,
            name: node["name"],
            type: node["type"],
          };
          useCourseStore().pushState(courseOverridden);
          console.log(useCourseStore().getCourses);
          this.$formkit.reset("enrollment-form");
          this.courseSelected = <Course>{};
          this.enrollmentSetup.afterSubmit.onLoaded = false;
          this.enrollmentSetup.afterSubmit.finished = true;
          this.stepCarouselSlide = 1;
        });
      } catch (err: any) {
        this.enrollmentSetup.errorSubmit.errors.zError = <ZodError>err;
        console.log(this.enrollmentSetup.errorSubmit.errors);
        this.enrollmentSetup.afterSubmit.onLoaded = false;
        this.stepCarouselSlide = 2;
      }
    },
  },
};
</script>
<template>
  <!--- animation icon script  -->
  <Script
    async
    src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
  ></Script>

  <v-card class="mx-auto" max-width="600">
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar class="ml-2" color="primary" size="24" v-text="step"></v-avatar>
    </v-card-title>
    <v-window v-model="step">
      <FormKit
        type="form"
        @submit="onSubmitHandler"
        @submit-invalid="onSubmitInvalid()"
        id="enrollment-form"
        submit-label="Register"
        messages-class="text-center"
        :actions="false"
        #default="{ value }"
      >
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
                  <template v-slot:placeholder>
                    <v-row
                      class="fill-height ma-0"
                      align="center"
                      justify="center"
                    >
                      <v-progress-circular
                        class=""
                        indeterminate
                        color="grey lighten-5"
                      ></v-progress-circular>
                    </v-row>
                  </template>
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

        <v-window-item :value="2">
          <v-card-text class="flex flex-col items-center">
            <FormKit
              type="select"
              label="Course Group"
              v-model="groupCourseSelected.group"
              :options="keyOpts"
              :validation="[['required']]"
              placeholder="Please selected a course."
            />
            <div v-if="groupCourseSelected.group" class="flex flex-col">
              <FormKit
                type="select"
                label="Course"
                name="name"
                v-model="courseSelected.name"
                :options="groupCourseSelected.c_arr.map((c) => c['name_th'])"
                :validation="[['required']]"
                placeholder="Please selected a course."
              />
              <FormKit
                type="select"
                name="type"
                :options="[
                  'ภาคทฤษฎี (Theory Lesson)',
                  'ภาคปฏิบัติ (Practical Lesson)',
                ]"
                label="Course Type"
                v-model="courseSelected.type"
                :validation="[['required']]"
                placeholder="On"
              />
            </div>
            <div v-if="courseSelected.name" class="flex items-center flex-col">
              <i class="badge badge-info text-white text-sm text-caption"
                >" {{ courseSelected.name_eng }} "</i
              >
              <div
                class="flex w-96 items-center justify-evenly h-full gap-6 my-6"
              >
                <div class="indicator">
                  <span
                    class="indicator-item badge indicator-top indicator-center"
                    >Code</span
                  >
                  <button class="btn btn-primary">
                    {{ courseSelected.code }}
                  </button>
                </div>
                <div class="indicator">
                  <span
                    class="indicator-item badge indicator-top indicator-center"
                    >Credit</span
                  >
                  <button class="btn btn-secondary">
                    {{ courseSelected.credit }}
                  </button>
                </div>
              </div>
            </div>
            <span
              class="flex-cols text-caption text-grey-darken-1 text-center mx-auto w-2/4"
            >
              {{ courseSelected.desc }}
            </span>
          </v-card-text>
        </v-window-item>

        <v-window-item :value="3">
          <div class="pa-4 text-center flex flex-col gap-2">
            <v-carousel
              :model-value="stepCarouselSlide"
              :hide-delimiters="true"
              :continuous="false"
              :show-arrows="false"
              hide-delimiter-background
              delimiter-icon="mdi-square"
              height="300"
            >
              <v-carousel-item
                v-for="(slide, i, index) in enrollmentSetup"
                :key="i"
              >
                <v-sheet :rounded="false" height="100%" tile>
                  <div
                    class="d-flex flex-col fill-height justify-center align-center"
                  >
                    <lottie-player
                      v-if="index === 0"
                      src="https://assets6.lottiefiles.com/packages/lf20_ggxx4yii.json"
                      background="transparent"
                      speed="1"
                      style="width: 300px; height: 300px"
                      loop
                      autoplay
                    ></lottie-player>
                    <lottie-player
                      v-if="index === 1"
                      src="https://assets3.lottiefiles.com/packages/lf20_voBLTvIbhG.json"
                      background="transparent"
                      speed="1"
                      style="width: 300px; height: 250px"
                      autoplay
                    ></lottie-player>
                    <lottie-player
                      v-if="index === 2"
                      src="https://assets9.lottiefiles.com/packages/lf20_BkscO3.json"
                      background="transparent"
                      speed="1"
                      style="width: 250px; height: 300px"
                      autoplay
                    ></lottie-player>
                    <h3 class="text-h6 font-weight-light mb-2 duration-300">
                      {{ slide.headline }}
                    </h3>
                    <span class="text-caption text-grey">
                      {{ slide.help }}
                    </span>
                  </div>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
            <div class="flex justify-center gap-4 items-center">
              <v-icon
                v-if="enrollmentSetup.afterSubmit.onLoaded"
                class="animate-spin"
                icon="mdi-loading"
              ></v-icon>
              <FormKit
                @submit.prevent
                outer-class="text-center h-full grid place-center pt-4 "
                :disabled="enrollmentSetup.afterSubmit.finished"
                :ignore="true"
                input-class="mb-3"
                :help="
                  enrollmentSetup.afterSubmit.finished
                    ? 'You can now close the window by clicking outer window area.'
                    : ''
                "
                prefix-icon="submit"
                type="submit"
              >
                Enroll Course
              </FormKit>
            </div>

            <div
              v-if="enrollmentSetup.errorSubmit.errors.zError.message"
              class="text-caption text-error"
            >
              <p>{{ enrollmentSetup.errorSubmit.errors.msg }}</p>
              <p>{{ enrollmentSetup.errorSubmit.errors.zError.message }}</p>
            </div>
          </div>
        </v-window-item>
      </FormKit>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        v-if="step > 1 && stepCarouselSlide !== 1"
        variant="text"
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-if="step < 3" color="primary" variant="flat" @click="step++">
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { useCourseStore, Course } from "@/store/coruseState";
export default {
  data() {
    return {
      Detail: {
        course: [
          "mdi-rename",
          "mdi-identifier",
          "mdi-information-variant",
          "mdi-file-powerpoint-box",
          "mdi-file-powerpoint-box",
        ],
      },
      course: <Course>{},
      tab: {
        tabModel: null,
        tabSection: ["Course", "Instructor"],
      },
    };
  },
  mounted() {
    const courseIndex = +this.$route.params.id;
    let loadCourse = <Course | null>(
      useCourseStore().getCourseByIndex(courseIndex)
    );
    if (loadCourse !== null) {
      this.course = loadCourse;
    }
  },
};
</script>

<template>
  <v-card class="h-[700px] md:h-[500px]">
    <v-toolbar color="blue">
      <v-app-bar-nav-icon
        icon="mdi-book-information-variant"
        color="white"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        {{ course.name }}
        <div class="flex gap-2 text-xs items-center text-caption">
          <v-icon icon="mdi-file-powerpoint-box"></v-icon>
          <p class="">{{ course.credit }}</p>
          <p class="text-caption">หน่วยกิต (Credit)</p>
        </div>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <template v-slot:extension>
        <v-tabs v-model="tab.tabModel" align-tabs="title">
          <v-tab v-for="item in tab.tabSection" :key="item" :value="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>

      <template v-slot:append>
        <v-btn @click="$router.go(-1)" color="white">
          <v-icon icon="mdi-chevron-left"></v-icon>
        </v-btn>
      </template>
    </v-toolbar>

    <v-window v-model="tab.tabModel">
      <v-window-item v-for="item in tab.tabSection" :key="item" :value="item">
        <v-card class="h-[590px] md:h-[390px]" flat>
          <div
            class="container h-full flex items-center mx-auto border-0 !max-h-full"
          >
            <div
              v-if="item === 'Course'"
              class="w-full my-auto h-3/4 mt-10 items-center grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              <div class="flex gap-2">
                <v-icon icon="mdi-rename"></v-icon>
                <div class="">
                  <p class="">{{ course.name }}</p>
                  <p class="text-caption">{{ course.name_eng }}</p>
                </div>
              </div>
              <div class="flex gap-2">
                <v-icon icon="mdi-information-variant"></v-icon>
                <div class="">
                  <p class="">{{ course.desc }}</p>
                  <p class="text-caption">คำอธิบาย (Description)</p>
                </div>
              </div>
              <div class="flex gap-2">
                <v-icon icon="mdi-identifier"></v-icon>
                <div class="">
                  <p class="">{{ course.code }}</p>
                  <p class="text-caption">รหัสวิชา (Course ID)</p>
                </div>
              </div>
              <div class="flex gap-2">
                <v-icon icon="mdi-format-list-group"></v-icon>
                <div class="">
                  <p class="">{{ course.type }}</p>
                  <p class="text-caption">หมวด (Course Type)</p>
                </div>
              </div>
            </div>

            <!--- insturtor -->
            <div
              v-else
              class="grid grid-cols-1 gap-6 place-items-center md:grid-cols-2 mx-auto"
            >
              <div class="">
                <v-avatar size="240" color="blue-darken-1">
                  <v-img
                    :lazy-src="course.instructor.imgSrc"
                    width="240"
                    :src="course.instructor.imgSrc"
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
                      </v-row> </template
                  ></v-img>
                </v-avatar>
              </div>
              <div class="flex flex-col gap-2">
                <div class="flex gap-4">
                  <v-icon icon="mdi-card-account-details-outline"></v-icon>
                  <div class="">
                    <p class="">{{ course.instructor.name }}</p>
                    <p class="text-caption">อาจาร์ย หมวดวิทยาการคอมพิวเตอร์</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <v-icon icon="mdi-information-variant"></v-icon>
                  <div class="">
                    <p class="">{{ course.instructor.position }}</p>
                    <p class="text-caption">ตำแหน่ง (Rank)</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <v-icon icon="mdi-account-school-outline"></v-icon>
                  <div class="">
                    <p class="">{{ course.instructor.edu }}</p>
                    <p class="text-caption">วุฒิการศึกษา (Education)</p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <v-icon icon="mdi-phone-outline"></v-icon>
                  <div class="">
                    <p class="">{{ course.instructor.tel }}</p>
                    <p class="text-caption">
                      เบอร์โทรติดต่อ (Telephone Number)
                    </p>
                  </div>
                </div>
                <div class="flex gap-4">
                  <v-icon icon="mdi-email-fast-outline"></v-icon>
                  <div class="">
                    <p class="">{{ course.instructor.email }}</p>
                    <p class="text-caption">
                      อีเมล์โทรติดต่อ (Email Contraction)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </v-card>
      </v-window-item>
    </v-window>
  </v-card>
</template>

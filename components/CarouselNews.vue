<script lang="ts">
import { Campus } from "~~/pages/index.vue";
import { useDisplay } from "vuetify";

export default {
  props: {
    campuses: Object,
  },
  data() {
    return {
      display: ref(useDisplay()),
    };
  },
  computed: {
    autoAspectRatio() {
      if (this.display.smAndDown) {
        return 40 / 10;
      } else {
        return 1;
      }
    },
    autoHeight() {
      if (this.display.smAndDown) {
        return 500;
      } else {
        return 400;
      }
    },
  },
};
</script>

<template>
  <v-carousel
    :cycle="true"
    :height="autoHeight"
    hide-delimiters
    show-arrows="hover"
    hide-delimiter-background
  >
    <v-carousel-item v-for="(c, index) in (campuses as Campus[])">
      <div class="card md:card-side bg-base-100 shadow-xl">
        <figure>
          <v-img
            sizes="64"
            width="360"
            :aspect-ratio="autoAspectRatio"
            src="https://play-lh.googleusercontent.com/4_RoR8akdk3RZ5yDdQWfJcZh4VmevGRRopcJfDBV2lRz4TQwU825MvhCVJ0i84Hjgw"
          >
          </v-img>
        </figure>
        <div class="card-body thai-p">
          <div name="program" class="">
            <h2 class="card-title">{{ c.program_name_th }}</h2>
            <span class="text-caption">{{ c.program_name_en }}</span>
          </div>
          <div class="flex flex-col justify-end h-full">
            <div name="faculty" class="">
              <h2 class="text-base font-semibold">
                {{ c.faculty_name_th }}
              </h2>
              <span class="text-caption">{{ c.faculty_name_en }}</span>
            </div>
            <div name="campus" class="">
              <p class="font-semibold">{{ c.campus_name_th }}</p>
              <span class="text-caption">{{ c.campus_name_en }}</span>
            </div>
            <div name="group" class="">
              <p class="font-semibold">{{ c.group_field_th }}</p>
              <span class="text-caption">Group</span>
            </div>

            <div class="card-actions justify-end">
              <div class="flex flex-col gap-1 items-center">
                <v-btn color="green-darken-3" append-icon="mdi-account-plus">
                  {{ c.number_acceptance_mko2 }}
                </v-btn>
                <p class="text-sm">รับสมัคร</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </v-carousel-item>
  </v-carousel>
</template>

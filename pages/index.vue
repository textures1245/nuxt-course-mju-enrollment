<script lang="ts">
// @ts-nocheck
import { useDisplay } from "vuetify";

export type Campus = {
  campus_id: string;
  campus_name_th: string;
  campus_name_en: string;
  faculty_id: string;
  faculty_name_th: string;
  faculty_name_en: string;
  field_name_th: string;
  field_name_en: string;
  number_acceptance_mko2: string;
  program_name_th: string;
  program_name_en: string;
  group_field_th: string;
};

export default {
  data() {
    return {
      freezed: true,
      cards: [
        {
          title: "ข่าวสารหลักสูตรมหาวิทยาลัยแม่โจ้",
          subtitle: `หลักสูตรของมหาวิทยาลัยแม่โจ้ออกแบบมาเพื่อพัฒนาและยกระดับทักษะของนักศึกษาให้มีความคิดสร้างสรรค์และพัฒนาความสามารถ หลักสูตรนี้เหมาะสำหรับนักศึกษาที่มีความสนใจ
          ในการพัฒนาตนเองและมีความต้องการที่จะมีความสามารถสูงและมีประสิทธิภาพในการทำงานในขณะ
          เดียวกันก็มีส่วนช่วยในการพัฒนาอุตสาหกรรม`,
          path: {
            link: "/course-news/",
            name: "ข่าวสาร",
          },
          imgSrc: "https://admissions.mju.ac.th/www/img/y4.jpg",
        },
        {
          title: "ข่าวสารในมหาวิทยาลัยแม่โจ้",
          subtitle: `"การค้นพบนวัตกรรมโซลูชั่น: ศูนย์วิจัยแห่งใหม่ของมหาวิทยาลัยแม่โจ้ด้านเกษตรกรรมยั่งยืนและพลังงานทดแทน"
"เสริมพลังคนรุ่นต่อไป: การลงทะเบียนเรียนหลักสูตรเทคโนโลยีและวิศวกรรมศาสตร์ของมหาวิทยาลัยแม่โจ้ที่เพิ่มมากขึ้น"
"ผู้นำการพัฒนาอย่างยั่งยืน: ข่าวสารล่าสุดจากมหาวิทยาลัยแม่โจ้"
"พัฒนาเพื่ออนาคต: ความมุ่งมั่นอย่างต่อเนื่องของมหาวิทยาลัยแม่โจ้เพื่อการเกษตรและเทคโนโลยี"`,
          path: {
            link: "/activity-news/",
            name: "ข่าวสาร",
          },
          imgSrc: "https://i.ytimg.com/vi/B6YfBmzHiaI/maxresdefault.jpg",
        },
      ],
      loadingProps: true,
      //- codename-t api
      display: ref(useDisplay()),
    };
  },
  mounted() {},
  computed: {
    autoHeight() {
      if (this.display.smAndDown) {
        return 500;
      } else {
        return 350;
      }
    },
  },
  methods: {},
};
</script>
<template>
  <div
    v-if="!loadingProps"
    class="bg-emerald-600 h-[45vh] absolute w-full -z-10"
  ></div>
  <LoadingProps
    v-if="loadingProps"
    @loaded-async="(loaded) => (loadingProps = loaded)"
  ></LoadingProps>
  <v-container v-else>
    <div class="flex flex-col gap-16">
      <div
        class="hero-text text-4xl flex justify-center items-center gap-6 text-white"
      >
        <img
          width="64"
          src="https://upload.wikimedia.org/wikipedia/th/thumb/b/b7/MJU_LOGO.svg/1200px-MJU_LOGO.svg.png"
        />
        <div class="">
          <p class="underline underline-offset-4">MAEJO UNIVERSITY</p>
          <p>COURSE PLAN NEW</p>
        </div>
      </div>

      <div class="w-full grid grid-cols-1 z-10">
        <v-carousel
          cycle
          :height="autoHeight"
          hide-delimiters
          hide-delimiter-background
          show-arrows="hover"
        >
          <v-carousel-item v-for="(card, i) in cards">
            <NewsCard
              :path="card.path"
              color-text="!text-black md:text-white"
              :button-text="'คลิกที่นี้'"
              :img-src="card.imgSrc"
              :title="card.title"
              :sub-title="card.subtitle"
            ></NewsCard>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
  </v-container>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
.hero-text {
  font-family: "Monoton", cursive;
}
</style>

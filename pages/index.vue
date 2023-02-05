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
      cards: {
        first: {
          title: "ยินดีต้อนรัอนรับสู่มหาวิทยาลัยแม่โจ้",
          subtitle: `หลักสูตรของมหาวิทยาลัยแม่โจ้ออกแบบมาเพื่อพัฒนาและยกระดับทักษะของนักศึกษาให้มีความคิดสร้างสรรค์และพัฒนาความสามารถ หลักสูตรนี้เหมาะสำหรับนักศึกษาที่มีความสนใจ
          ในการพัฒนาตนเองและมีความต้องการที่จะมีความสามารถสูงและมีประสิทธิภาพในการทำงานในขณะ
          เดียวกันก็มีส่วนช่วยในการพัฒนาอุตสาหกรรม`,
        },
      },
      loadingProps: true,
      //- codename-t api
      display: ref(useDisplay()),
      campusAPI: "/campusApi",
      campus: {
        0: {
          onLoaded: true,
          facultyName: "",
          body: <Campus>{},
        },
        1: {
          onLoaded: true,
          facultyName: "",
          body: <Campus>{},
        },
        2: {
          onLoaded: true,
          facultyName: "",
          body: <Campus>{},
        },
      },
    };
  },
  mounted() {
    for (let i = 0; i < 3; i++) {
      let res = this.fetchApi(
        `faculty_id=${Math.floor(Math.random() * 10) + 3}`
      );
      res
        .then((campus) => {
          let key = i as any as keyof Object;
          if (campus) {
            this.campus[key].body = campus;
            this.campus[key]["facultyName"] = {
              ...campus[0][0],
            }.faculty_name_th;
            console.log(this.campus);
          }
          this.campus[key]["onLoaded"] = false;
        })
        .catch((err) => console.log(err));
    }
    this.loadingProps = false;
  },
  methods: {
    async fetchApi(query: string) {
      const headers = useRequestHeaders([
        "Access-Control-Allow-Origin",
        "http://localhost:3000",
      ]);
      const res = await $fetch(`${this.campusAPI}?${query}`, {
        mode: "no-cors",
        method: "get",
      });
      if (res) {
        try {
          return [{ ...res }] as Campus[];
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("Value not found");
      }
      console.log(res);
    },
  },
};
</script>
<template>
  <div class="bg-emerald-600 h-[40vh] absolute w-full -z-10"></div>

  <v-container>
    <div v-if="loadingProps" class="w-full">
      <div class="grid h-[25vh]">
        <v-img
          class="place-self-center animate-ping"
          width="82"
          src="https://upload.wikimedia.org/wikipedia/th/thumb/b/b7/MJU_LOGO.svg/1200px-MJU_LOGO.svg.png"
        ></v-img>
      </div>
    </div>
    <div v-else class="flex flex-col gap-16">
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
        <NewsCard
          img-src="https://stu2.mju.ac.th/picture/information/374e7d3c9ff146f6a91c398b91229eb7.jpg"
          height="10rem"
          :title="cards.first.title"
          :sub-title="cards.first.subtitle"
        ></NewsCard>
      </div>
    </div>
    <!-- <div v-if="freezed">
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
          <NewsCard
            img-src="https://stu2.mju.ac.th/picture/information/374e7d3c9ff146f6a91c398b91229eb7.jpg"
            height="10rem"
            :title="cards.first.title"
            :sub-title="cards.first.subtitle"
          ></NewsCard>
        </div>

        <section v-for="(n, i) in 3">
          <div v-if="campus[i].body[0][0] != undefined" class="">
            <div class="flex justify-center my-2">
              <button class="btn glass text-black text-2xl y-10 thai-p">
                {{ campus[i]["facultyName"] }}
              </button>
            </div>
            <CarouselNews :campuses="campus[i]['body'][0]"></CarouselNews>
          </div>
        </section>
      </div>
    </div> -->
  </v-container>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Monoton&display=swap");
.hero-text {
  font-family: "Monoton", cursive;
}
</style>

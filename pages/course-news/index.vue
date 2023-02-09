<script lang="ts">
import { type } from "os";
import { useDisplay } from "vuetify";
import campusJSON from "@/assets/mock/mju_courses.json";

export type Campus = {
  _id: string;
  university_type_id: string;
  university_type_name_th: UniversityTypeNameTh;
  university_id: string;
  university_name_th: UniversityNameTh;
  university_name_en: UniversityNameEn;
  campus_id: string;
  campus_name_th: CampusNameTh;
  campus_name_en: CampusNameEn;
  faculty_id: string;
  faculty_name_th: string;
  faculty_name_en: string;
  group_field_id: string;
  group_field_th: string;
  field_id: string;
  field_name_th: string;
  field_name_en: string;
  program_running_number: string;
  program_name_th: string;
  program_name_en: string;
  program_type_id: ProgramTypeID;
  program_type_name_th: ProgramTypeNameTh;
  program_id: string;
  number_acceptance_mko2: number;
  program_partners_id: string;
  program_partners_inter_name: string;
  country_partners_name: string;
  major_acceptance_number: number;
  created_at: string;
  updated_at: string;
};

export enum CampusNameEn {
  ChiangMaiCampus = "ChiangMai Campus",
  ChumphonCampus = "Chumphon Campus",
  PhraeCampus = "Phrae Campus",
}

export enum CampusNameTh {
  วิทยาเขตชุมพร = "วิทยาเขตชุมพร",
  วิทยาเขตเชียงใหม่ = "วิทยาเขตเชียงใหม่",
  วิทยาเขตแพร่ = "วิทยาเขตแพร่",
}

export enum ProgramTypeID {
  A = "A",
}

export enum ProgramTypeNameTh {
  ภาษาไทยปกติ = "ภาษาไทย ปกติ",
}

export enum UniversityNameEn {
  MaejoUniversity = "Maejo University",
}

export enum UniversityNameTh {
  มหาวิทยาลัยแม่โจ้ = "มหาวิทยาลัยแม่โจ้",
}

export enum UniversityTypeNameTh {
  ทปอ = "ทปอ.",
}

export default {
  data() {
    return {
      freezed: true,
      loadingProps: true,
      //- codename-t api
      display: ref(useDisplay()),
      allCampus: <Campus[]>campusJSON,
      campus: <Campus[][]>[],
    };
  },
  mounted() {
    for (let i = 0; i <= 4; i++) {
      let randNum = Math.floor(Math.random() * 11) + 3;
      let faculty = this.allCampus.filter((c, i) => +c.faculty_id === randNum);
      this.campus.push(faculty);
    }
  },
  computed: {
    autoHeight() {
      if (this.display.smAndDown) {
        return 500;
      } else {
        return 350;
      }
    },
  },
  methods: {
    async fetchApi(query: string) {
      const headers = useRequestHeaders([
        "Access-Control-Allow-Origin",
        "http://localhost:3000",
      ]);
      const res = await $fetch(`https://api.codename-t.com/campus?${query}`);
      console.log(res);

      if (res) {
        try {
          return [{ ...res }] as Campus[];
        } catch (err) {
          console.log(err);
        }
      } else {
        console.log("Value not found");
      }
    },
  },
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
  <div class="" v-else>
    <v-container>
      <div class="flex flex-col gap-16">
        <section v-for="(c, i) in campus">
          <div v-if="c.length > 0" class="">
            <div class="flex justify-center my-2">
              <button class="btn glass text-black text-2xl y-10 thai-p">
                {{
                  c[0].faculty_name_th !== "" ? c[0].faculty_name_th : "none"
                }}
              </button>
            </div>
            <CarouselNews :campuses="c"></CarouselNews>
          </div>
        </section>
      </div>
    </v-container>
  </div>
</template>

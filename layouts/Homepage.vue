<script lang="ts">
import { title } from "process";

export default {
  data() {
    return {
      textSection: {
        about: {
          title: "เกี่ยวกับ มหาวิทยาลัยแม่โจ้",
          subtitle: [
            "มหาวิทยาลัยแม่โจ้ก่อตั้งขึ้นในปี พ.ศ. 2522 เป็นมหาวิทยาลัยของรัฐที่ตั้งอยู่ในจังหวัดเชียงใหม่ ประเทศไทย",
            "เปิดสอนหลักสูตรระดับปริญญาตรีและบัณฑิตศึกษาในหลากหลายสาขาวิชา เช่น เกษตรศาสตร์และทรัพยากรธรรมชาติ วิศวกรรมศาสตร์ ธุรกิจและเศรษฐศาสตร์ สังคมศาสตร์และมนุษยศาสตร์ และอื่นๆ",
            "มหาวิทยาลัยแม่โจ้เป็นที่รู้จักในด้านการวิจัย นวัตกรรม และการประกอบการ มหาวิทยาลัยแม่โจ้ทุ่มเทให้กับการพัฒนาโซลูชันที่ตอบสนองความต้องการของสังคม",
            "ด้วยความมุ่งมั่นในด้านการศึกษาที่มีคุณภาพและสภาพแวดล้อมการเรียนรู้ที่ไม่หยุดนิ่ง มหาวิทยาลัยแม่โจ้จึงเป็นทางเลือกที่สมบูรณ์แบบสำหรับนักศึกษาที่ต้องการก้าวไปสู่เป้าหมายทางวิชาการและวิชาชีพ",
          ],
        },
        academy: {
          title: "หลักสูตรวิชาการ",
          subtitle: [
            "มีหลักสูตรระดับปริญญาตรีและบัณฑิตให้เลือกมากมาย เช่น เกษตรกรรม วิศวกรรมศาสตร์ ธุรกิจ สังคมศาสตร์ มนุษยศาสตร์ และอื่นๆ",
            "หลักสูตรระดับบัณฑิตศึกษารวมถึงระดับปริญญาโทและปริญญาเอกเพื่อเป้าหมายทางวิชาการและวิชาชีพเพิ่มเติม",
            "หลักสูตรนานาชาติมอบประสบการณ์การศึกษาระดับโลกพร้อมโอกาสในการศึกษาต่อต่างประเทศ",
          ],
        },
        research: {
          title: "การวิจัยและนวัตกรรม",
          subtitle: [
            "ความมุ่งมั่นอย่างมากต่อการวิจัยที่ทันสมัยและการทำงานร่วมกันแบบสหวิทยาการเพื่อแก้ปัญหาในโลกแห่งความเป็นจริง",
            "ศูนย์รวมศูนย์วิจัยและสถาบันสำหรับนักศึกษาในการทำงานในโครงการและสร้างผลกระทบ",
          ],
        },
        campus: {
          title: "ชีวิตในรั้วมหาวิทยาลัย",
          subtitle: [
            "เป็นมากกว่าสถานที่สำหรับการศึกษา มหาวิทยาลัยแม่โจ้มอบชุมชนที่สนับสนุนและครอบคลุมด้วยองค์กรนักศึกษา กิจกรรมสันทนาการ และกิจกรรมทางสังคม",
            "ตั้งอยู่ในเมืองเชียงใหม่ที่สวยงามด้วยมรดกทางวัฒนธรรมที่หลากหลาย",
          ],
        },
        chooses: {
          title: "ทำไมถึงเลือกมหาวิทยาลัยแม่โจ้",
          subtitle: [
            "การศึกษาระดับโลกที่มุ่งเน้นความเป็นเลิศทางวิชาการและการวิจัยที่ทันสมัย",
            "ชุมชนแบบไดนามิกและมีส่วนร่วมกับองค์กรนักศึกษา กิจกรรมสันทนาการ และบริการด้านอาชีพ",
            "มุมมองระดับโลกกับหลักสูตรนานาชาติและความร่วมมือกับมหาวิทยาลัยชั้นนำ",
            "ความสำเร็จในอาชีพด้วยบริการด้านอาชีพและความสัมพันธ์ที่แน่นแฟ้นกับธุรกิจในและต่างประเทศ",
          ],
        },
      },
    };
  },
  methods: {
    imgUrl(condition: "main-bg") {
      switch (condition) {
        case "main-bg":
          return new URL("@/assets/img/main_bg.jpg", import.meta.url).href;
        default:
          return new URL("@/assets/img/main_bg.jpg", import.meta.url).href;
      }
    },
  },
};
</script>
<template>
  <div class="thai-p">
    <a href="#">
      <v-fab-transition class="z-10">
        <v-btn
          class="m-6 p-2 animate-bounce"
          :location="'bottom end'"
          key="mdi-arrow"
          color="green"
          :variant="'elevated'"
          position="fixed"
          large
          dark
        >
          <v-icon icon="mdi-arrow-up"></v-icon>
        </v-btn>
      </v-fab-transition>
    </a>
    <v-parallax class="opacity-95" scale="0.5" :src="imgUrl('main-bg')">
      <div class="text-white grid grid-cols-2 w-9/12 fill-height mx-auto">
        <v-img
          class="place-self-center"
          width="120"
          src="https://upload.wikimedia.org/wikipedia/en/b/b6/MaejoUniversityLogo.png"
        ></v-img>
        <div class="place-self-center">
          <h1 class="font-bold text-3xl lg:text-5xl">
            มหาวิทยาลัยแม่โจ้ยินดีต้อนรับ
          </h1>
          <p class="text-caption badge bg-emerald-600 flex">
            Welcome to Maejo University
          </p>
          <slot name="button"> </slot>
        </div>
      </div>
    </v-parallax>
    <div class="bg-emerald-700">
      <v-container>
        <div class="w-full h-full my-28 flex flex-col gap-40 z-10">
          <NewsCard
            color-text="text-white"
            img-src="https://esan108.com/main/wp-content/uploads/2020/04/20171127232642-1-scaled.jpg"
            :title="textSection.about.title"
            :sub-title-arr="textSection.about.subtitle"
          ></NewsCard>
          <NewsCard
            color-text="text-white"
            img-src="https://ap.mju.ac.th/WebNew/img/student.jpg"
            :title="textSection.academy.title"
            :sub-title-arr="textSection.academy.subtitle"
          ></NewsCard>
          <NewsCard
            color-text="text-white"
            img-src="https://green.mju.ac.th/wp-content/uploads/2022/09/ecceb026bf3641e6975ca0cefede7236.jpeg"
            :title="textSection.research.title"
            :sub-title-arr="textSection.research.subtitle"
          ></NewsCard>
          <NewsCard
            color-text="text-white"
            img-src="https://i.ytimg.com/vi/DZ8ob4W9TK0/maxresdefault.jpg"
            :title="textSection.campus.title"
            :sub-title-arr="textSection.campus.subtitle"
          ></NewsCard>
          <NewsCard
            color-text="text-white"
            img-src="https://iqs.mju.ac.th/picture/information/0d1861604cdb4dc69ed67995554bc0b9.jpg"
            :title="textSection.chooses.title"
            :sub-title-arr="textSection.chooses.subtitle"
          ></NewsCard>

          <div
            class="text-white flex flex-col w-8/12 mx-auto gap-4 items-center justify-center"
          >
            <v-img
              width="48"
              src="https://upload.wikimedia.org/wikipedia/en/b/b6/MaejoUniversityLogo.png"
            ></v-img>
            <h1 class="text-2xl lg:text-3xl">ลงสมัครตอนนี้</h1>
            <i class="text-base lg:text-xl text-slate-200 text-center">
              "
              เลือกมหาวิทยาลัยแม่โจ้เพื่อการศึกษาระดับแนวหน้าและชุมชนที่สนับสนุน
              ติดต่อเราวันนี้เพื่อเรียนรู้เพิ่มเติมและนัดหมายทัวร์มหาวิทยาลัย "
            </i>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>
<style scoped>
.bg-parallax {
  opacity: 80;
  background-image: url("https://scontent.fcnx2-1.fna.fbcdn.net/v/t39.30808-6/233527606_127844306228376_5341372452305467725_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeENFSz8ye5kJj0PP8QNV2WI_-HRRBx_kqD_4dFEHH-SoKm1hh2__5YDDDZAgMpvAnBLOWEqAy7yxSbsNlcmp2E2&_nc_ohc=sK_hXvCJClsAX846EcG&_nc_ht=scontent.fcnx2-1.fna&oh=00_AfAZCiqCIB_rDKqddfZPlLWEIbDfKRzf8KLwOKm3n91lCA&oe=63E3A850");
}
</style>

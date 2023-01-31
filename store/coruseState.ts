import { defineStore } from "pinia";
import { Instructor, useInstructorStore } from "./instructorState";
import z, { string } from "zod";

export const courseValidation = z.object({
  instructor: z.object({
    instructorId: z.number(),
    imgSrc: z.string(),
    name: z.string(),
    position: z.string(),
    edu: z.string(),
    tel: z.string(),
    email: z.string(),
  }),
  name: z.string(),
  name_eng: z.string(),
  code: z.string(),
  desc: z.string(),
  credit: z.string(),
  type: z.string(),
});

export const groupKeys = {
  fcs: "กลุ่มวิชาความรู้พื้นฐานทางวิทยาการคอมพิวเตอร์",
  sa: "กลุ่มวิชาแนวคิดการวิเคราะห์และออกแบบ",
  ad: "กลุ่มวิชาการพัฒนาระบบแอปพลิเคชัน",
  ns: "กลุ่มวิชาระบบเครือข่าย",
  ds: "กลุ่มวิชาวิทยาการข้อมูล",
  it: "กลุ่มวิชาอินเตอร์เน็ตในทุกสิ่ง",
  ai: "กลุ่มวิชาปัญญาประดิษฐ์",
  csb: "กลุ่มวิชาการประยุกต์งานด้านธุรกิจ",
  sc: "กลุ่มวิชาหัวข้อพิเศษ",
};

export type Course = {
  instructor: Instructor;
  name: string;
  name_eng: string;
  code: string;
  desc: string;
  credit: string;
  type: string;
};

export interface CourseInterface {
  instructor: Instructor;
  name: string;
  name_eng: string;
  code: string;
  desc: string;
  credit: string;
  type: string;
}

export class CourseClass {
  public constructor(
    public instructor: Instructor,
    public name: string,
    public name_eng: string,
    public code: string,
    public desc: string,
    public credit: string,
    public type: string
  ) {}
}

export const useCourseStore = defineStore("courseState", {
  state: () => {
    return {
      courses: <Course[]>[],
    };
  },
  actions: {
    pushState(c_state: Course) {
      this.$state.courses.push(c_state);
    },
  },
  getters: {
    getCourses: (state) => state.courses,
  },
});

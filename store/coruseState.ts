import { defineStore } from "pinia";
import { Instructor, useInstructorStore } from "./instructorState";
import z, { string } from "zod";

const courseState = z.object({
  instructorId: z.number(),
  name: z.string().length(50),
  code: z.string(),
  desc: z.string().length(100),
  credit: z.string().length(3),
  group: z.string(),
});

export const groupKeys = {
  "fn": "asdsa"
};

export type Course = {
  instructorId: number;
  instructor: Instructor;
  name: string;
  code: string;
  desc: string;
  credit: string;
  group: string;
};

export interface CourseInterface {
  instructorId: number;
  instructor: Instructor;
  name: string;
  code: string;
  desc: string;
  credit: string;
  group: string;
}

export class CourseClass {
  public constructor(
    public instructorId: number,
    public instructor: Instructor,
    public name: string,
    public code: string,
    public desc: string,
    public credit: string,
    public group: string
  ) {}
}

export const useCourseStore = defineStore("courseState", {
  state: () => {
    return {
      course: <Course[]>[
        new CourseClass(
          0,
          <Instructor>useInstructorStore().instructors[0],
          "การวิเคราะห์และออกแบบเชิงวัตถุ",
          "คพ343",
          "adwadsadawdasdawdasdsadawdsa",
          "3.0",
          "ปฏิบัติ"
        ),
      ],
    };
  },
  actions: {},
  getters: {
    getCourse: (state) => state.course,
  },
});

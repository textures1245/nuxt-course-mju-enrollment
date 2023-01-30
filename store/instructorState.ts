import { defineStore } from "pinia";
import instructorJson from "@/assets/mock/instructors.json" assert { type: "json" };
import z from "zod";

const instructorValidate = z.object({
  instructorId: z.number(),
  imgSrc: z.string(),
  name: z.string(),
  position: z.string(),
  edu: z.string(),
  tel: z.string(),
  email: z.string(),
});

export type Instructor = z.infer<typeof instructorValidate>;

export const useInstructorStore = defineStore("instructor", {
  state: () => {
    return {
      //   instructors: () =>
      //     new Array(instructorJson).map((obj) => {
      //       var key = Object.keys(obj).sort()[1],
      //         rtn = {};
      //       return (rtn?[key] = obj?[key]), rtn;
      //     }),
      instructors: instructorJson[0],
    };
  },
  getters: {
    getState: (state) => state.instructors,
  },
  actions: {},
});

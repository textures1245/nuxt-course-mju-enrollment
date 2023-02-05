<script lang="ts">
import { string } from "zod";

export default {
  props: {
    colorText: String,
    imgSrc: String,
    axis: String,
    width: String,
    height: String,
    title: String,
    subTitle: String,
    subTitleArr: Array,
  },
};
</script>
<template>
  <div
    :class="`w-[${width}] !h-[${height}] `"
    class="card md:card-side shadow-xl glass "
  >
    <figure class="object-cover w-full md:w-6/12">
      <v-img :lazy-src="imgSrc" cover :src="imgSrc" alt="Movie"></v-img>
    </figure>
    <div :class="colorText" class="card-body md:w-6/12 thai-p">
      <h2 class="card-title">{{ title }}</h2>
      <p v-if="subTitle" class="text-base indent-10 break-words">
        {{ subTitle }}
      </p>
      <ul class="list-disc list-inside" v-if="subTitleArr">
        <li v-for="t in (subTitleArr as string[])">{{ t }}</li>
      </ul>
      <div class="card-actions h-full !items-end justify-end">
        <button class="btn bg-emerald-800">เรียนรู้เพิ่มเติม</button>
      </div>
    </div>
  </div>
</template>

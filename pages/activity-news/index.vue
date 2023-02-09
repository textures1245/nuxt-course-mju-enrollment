<script lang="ts">
import { type } from "os";
import newJSON from "~~/assets/mock/news.json";
export type New = {
  newsId: number;
  News_Detail: string;
  News_Date: string;
  News_Time: string;
  News_Picture: string;
  News_Title: string;
  News_File: string;
  News_links: string;
  News_Type: string;
};

export default {
  data() {
    return {
      loadingProps: true,
      news: <New[]>newJSON,
    };
  },
};
</script>
<template>
  <div
    v-if="!loadingProps"
    class="bg-green-600 h-[40vh] absolute w-full -z-10"
  ></div>
  <LoadingProps
    v-if="loadingProps"
    @loaded-async="(loaded) => (loadingProps = loaded)"
  ></LoadingProps>
  <v-container v-else>
    <div class="grid grid-col-1 xl:grid-cols-2 gap-16">
      <NewsCard
        :sub-title="n.News_Detail"
        :title="n.News_Title"
        :img-src="n.News_Picture"
        v-for="n in news"
      ></NewsCard>
    </div>
  </v-container>
</template>

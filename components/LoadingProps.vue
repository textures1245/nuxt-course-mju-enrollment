<script lang="ts">
export default {
  props: {
    delay: Number,
  },
  mounted() {
    this.fakeLoader().then((res) => {
      this.$emit("loadedAsync", res);
    });
  },
  methods: {
    async fakeLoader() {
      const res = new Promise((r) => setTimeout(r, this.delay || 1000)).then(
        () => {
          return false;
        }
      );
      return res;
    },
  },
};
</script>

<template>
  <div class="w-full fixed">
    <div class="grid h-[70vh]">
      <v-img
        class="place-self-center animate-ping"
        width="82"
        src="https://upload.wikimedia.org/wikipedia/th/thumb/b/b7/MJU_LOGO.svg/1200px-MJU_LOGO.svg.png"
      ></v-img>
    </div>
  </div>
</template>

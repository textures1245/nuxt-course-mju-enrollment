<script lang="ts">
export default {
  components: { Header, Homepage },
  data() {
    return {
      getDrawer: ref(false),
      startHomepage: true,
    };
  },
  watch: {
    getDrawer(newVal) {
      console.log(this.getDrawer);
    },
  },
  emits: ["openDrawer"],
};
</script>

<script lang="ts" setup>
import Drawer from "./layouts/Drawer.vue";
import Header from "./layouts/Header.vue";
import Homepage from "./layouts/Homepage.vue";

const theme = ref("light");
</script>
<template>
  <div :data-theme="theme">
    <v-app :theme="theme">
      <v-main v-if="startHomepage">
        <Homepage>
          <template v-slot:button>
            <button
              @click="startHomepage = false"
              class="btn bg-emerald-700 btn-sm md:btn-md mt-2"
            >
              เข้าสู่เว็บไซต์
            </button>
          </template>
        </Homepage>
      </v-main>
      <v-main v-else>
        <Header
          @open-drawer="
            () => {
              getDrawer = !getDrawer;
            }
          "
        >
          <template #toggleTheme>
            <v-btn
              :prepend-icon="
                theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'
              "
              @click="
                () => (theme === 'light' ? (theme = 'dark') : (theme = 'light'))
              "
              >{{ theme }}</v-btn
            >
          </template>
        </Header>
        <Drawer :drawer="getDrawer">
          <template #content-card>
            <div class="py-10 h-full overflow-y-auto thai-p">
              <router-view></router-view>
            </div>
          </template>
        </Drawer>
      </v-main>
    </v-app>
  </div>
</template>
<script scope></script>

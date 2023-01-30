<script lang="ts">
export default {
  components: { Header },
};
</script>

<script lang="ts" setup>
import Drawer from "./layouts/Drawer.vue";
import Header from "./layouts/Header.vue";

const theme = ref("light");
</script>
<template>
  <div :data-theme="theme">
    <v-app :theme="theme">
      <v-main>
        <Header>
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
        <Drawer>
          <template #content-card>
            <div class="py-10 h-full overflow-y-auto">
              <router-view></router-view>
            </div>
          </template>
        </Drawer>
      </v-main>
    </v-app>
  </div>
</template>
<script scope></script>

<script lang="ts">
export default {
  props: {
    theme: String,
  },
};
</script>
<script lang="ts" setup></script>
<template>
  <v-app-bar :border="true" app>
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="$emit('openDrawer')"
        src="https://upload.wikimedia.org/wikipedia/th/thumb/b/b7/MJU_LOGO.svg/1200px-MJU_LOGO.svg.png"
      >
        <v-img
          width="32"
          src="https://upload.wikimedia.org/wikipedia/th/thumb/b/b7/MJU_LOGO.svg/1200px-MJU_LOGO.svg.png"
        ></v-img>
      </v-app-bar-nav-icon>
    </template>
    <v-app-bar-title>
      <p class="">Maejo University</p>
      <p class="text-caption">Course Management</p>
    </v-app-bar-title>
    <div class="text-xs text-base-content breadcrumbs mr-3">
      <ul>
        <li v-for="name in $route.path.split('/')">
          <a>{{ name }}</a>
        </li>
      </ul>
    </div>
    <slot name="toggleTheme"></slot>
  </v-app-bar>
</template>

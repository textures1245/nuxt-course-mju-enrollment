<script lang="ts">
export default {
  props: {
    theme: String,
  },
};
</script>
<script lang="ts" setup></script>
<template>
  
  <v-app-bar :border="true" class="" title="CourseManager" app>
    
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        class="text-primary"
        icon="mdi-book-education"
      ></v-app-bar-nav-icon>
    </template>
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

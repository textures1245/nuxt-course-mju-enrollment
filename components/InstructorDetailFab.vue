<script lang="ts">
export default {
  props: {
    name: String,
    imgSrc: String,
    tel: String,
  },
};
</script>

<template>
  <div class="text-center">
    <v-menu transition="fab-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          class="text-secondary-focus"
          icon="mdi-human-male-board"
        ></v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title>
            <div class="flex items-center gap-2">
              <v-avatar>
                <v-img  width="64" :src="imgSrc"> </v-img>
              </v-avatar>
              <div class="text-semibold">
                <span class=" text-sm">{{ name }}</span>
                <p class="text-sm">Tel: {{ tel }}</p>
              </div>
            </div>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

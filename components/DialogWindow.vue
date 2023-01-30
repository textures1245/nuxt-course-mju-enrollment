<template>
  <v-col cols="auto">
    <v-dialog transition="dialog-bottom-transition">
      <template v-slot:activator="{ props }">
        <v-btn
          v-bind="props"
          icon="mdi-cog"
          class="text-secondary-focus"
          variant="plain"
        >
          <v-tooltip activator="parent" class="uppercase" location="top"
            >ENROLLMENT</v-tooltip
          >
          <v-icon icon="mdi-book-plus" class=""></v-icon>
        </v-btn>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card>
          <v-toolbar color="primary" title="Course Enrollment">
            <v-btn
              variant="text"
              class="text-black z-10"
              @click="isActive.value = false"
            >
              <v-icon icon="mdi-close" class="text-2xl"></v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text class="my-10">
            <FormCourse></FormCourse>
          </v-card-text>
        </v-card>
      </template>
    </v-dialog>
  </v-col>
</template>

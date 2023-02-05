<template>
  <!--- animation icon script  -->
  <Script
    async
    src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"
  ></Script>
  <div
    class="h-full -mt-10 justify-center items-center mx-auto w-full flex flex-col gap-4"
  >
    <lottie-player
      src="https://assets6.lottiefiles.com/packages/lf20_md6cjjSl1R.json"
      background="transparent"
      speed="1"
      style="width: 300px; height: 300px"
      loop
      autoplay
    ></lottie-player>
    <hr class="w-2/4"/>
    <h1 class="uppercase tracking-wider text-xl text-error">State not found</h1>
    <p class="text-caption ">Try to push some state and see the result!</p>
  </div>
</template>

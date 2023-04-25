<script setup lang="ts">
  const imageName = 'img-1'

  let image = {}
  try {
    image = await import(`~/assets/img/${imageName}.gif`)
  } catch (e) {
    console.log(e)
  }
</script>

<template>
  <PageHeading text="WELCOME TO MY PORTFOLIO"></PageHeading>
  <img :src="image.default" />
</template>

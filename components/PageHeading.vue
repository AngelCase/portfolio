<script setup>
  const props = defineProps({
    text: String
  })
  const { scramble, current } = useTypeScramble(props.text)
  scramble()
</script>

<template>
  <div>
    <h1 :class="$style.text">{{ current }}</h1>
  </div>
</template>

<style lang="scss" module>
  .text {
    padding-left: 24px;
  }
</style>

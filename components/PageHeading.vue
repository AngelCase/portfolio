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
    padding-top: 24px;
    padding-bottom: 24px;
    padding-left: 24px;
    font-family: 'Bruno Ace', cursive;
  }
</style>

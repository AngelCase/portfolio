<script setup>
  const props = defineProps({
    text: String
  })
  const { scramble, current } = useTypeScramble(props.text)
  scramble()
</script>

<template>
  <div>
    <h1>{{ current }}</h1>
  </div>
</template>

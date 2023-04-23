<script setup>
  const props = defineProps({
    text: String
  })

  console.log(props)
  const { scramble, current: text } = useHackScramble(props.text)
  scramble()
</script>

<template>
  <div>
    <li>{{ text }}</li>
  </div>
</template>

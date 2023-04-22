<script setup>
  const text = 'This is my portfolio. The content does not yet exist.'
  const { scramble, current } = useHackScramble(text)
  scramble()
</script>

<template>
  <div>
    <p>{{ current }}</p>
  </div>
</template>

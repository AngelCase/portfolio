<script setup>
  const contacts = [{ main: '📧 tarogawaname(a)gmail.com' }]
</script>

<template>
  <div>
    <PageHeading text="CONTACT"></PageHeading>
    <TextList :class="$style.list" :contents="contacts"></TextList>
  </div>
</template>

<style lang="scss" module>
  .list {
    padding-left: 40px;
  }
</style>

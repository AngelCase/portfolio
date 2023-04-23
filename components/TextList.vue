<script setup>
  const props = defineProps({
    contents: Array
  })
</script>

<template>
  <ul :class="$style.list" v-for="content in props.contents">
    <TextListItem
      :main="content.main"
      :sub-items="content.subItems"
    ></TextListItem>
  </ul>
</template>

<style lang="scss" module>
  .list {
    margin-bottom: 8px;
    margin-left: 40px;
    padding-left: 0px;
    padding-right: 64px;
    list-style: none;
  }
</style>

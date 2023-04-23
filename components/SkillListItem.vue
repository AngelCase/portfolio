<script setup>
  const props = defineProps({
    main: String,
    subItems: Array
  })

  console.log(props)
  const { scramble, current: mainText } = useHackScramble(props.main)
  scramble()
</script>

<template>
  <div>
    <li :class="$style.mainItem">
      {{ mainText }}
    </li>
    <ul :class="$style.subList" v-for="subItem in props.subItems">
      <SkillSubListItem
        :class="$style.subList__item"
        :text="subItem"
      ></SkillSubListItem>
    </ul>
  </div>
</template>

<style lang="scss" module>
  .mainItem {
    border-left: solid 3px $blue;
    padding-left: 8px;
  }

  .subList {
    border-left: solid 2px $sub-blue;
    margin-top: 8px;
    margin-bottom: 8px;
    margin-left: 40px;
    padding-left: 0px;
    padding-right: 64px;
    list-style: none;

    &__item {
      padding-left: 8px;
    }
  }
</style>

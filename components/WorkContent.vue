<script setup>
  const props = defineProps({
    title: String,
    url: String,
    image: String,
    imageAlt: String,
    imageBorder: Boolean
  })

  const { scramble, current: title } = useHackScramble(props.title)
  scramble()
</script>

<template>
  <div :class="$style.content" @mouseover="scramble()">
    <h2 :class="$style.content__title">
      {{ title }}
    </h2>
    <img
      :class="props.imageBorder ? $style.imageBorder : ''"
      :src="props.image"
      :alt="props.imageAlt"
      width="320"
      height="240"
      loading="lazy"
    />
    <slot></slot>
    <a :class="$style.content__link" :href="url"></a>
  </div>
</template>

<style lang="scss" module>
  .imageBorder {
    border: solid 1px #ddd;
  }

  .content {
    position: relative;
    margin-bottom: 32px;
    padding: 10px;
    border: 2px solid $light-blue;
    border-left: 4px solid $light-blue;
    &:hover {
      border: 2px solid $sub-blue;
      border-left: solid 4px $blue;
    }

    &__title {
      color: #333;
    }

    &__link {
      position: absolute;
      display: block;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
</style>

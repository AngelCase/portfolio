<script setup>
  const props = defineProps({
    title: String,
    url: String
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
      src="~/assets/img/monochro.gif"
      alt="MONOCHROゲーム画面"
      width="320"
      height="240"
      loading="lazy"
    />
    <slot :class="$style.content__description"></slot>
    <a :class="$style.content__link" :href="url"></a>
  </div>
</template>

<style lang="scss" module>
  .content {
    position: relative;
    border-radius: 10px;
    margin-bottom: 32px;
    padding: 10px;
    box-shadow: 0 0 8px #eee;
    &:hover {
      box-shadow: 0 0 16px #ddd;
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

<script setup lang="ts">
  import { filename } from 'pathe/utils'

  const glob = import.meta.glob('~/assets/img/*.gif', { eager: true })
  const images = Object.fromEntries(
    Object.entries(glob).map(([key, value]) => [filename(key), value.default])
  )

  type Content = {
    title: string
    url: string
    image: string
    imageAlt: string
    imageBorder: boolean
    descriptions: string[]
  }

  const contents: Content[] = [
    {
      title: 'MONOCHRO',
      url: 'https://store.steampowered.com/app/1397530/Monochro/',
      image: 'monochro',
      imageAlt: 'MONOCHROゲーム画面',
      imageBorder: false,
      descriptions: [
        '高速なアクションが特徴の',
        '横スクロールアクションゲーム。',
        '2020/C++/DXlib'
      ]
    },
    {
      title: 'Portfolio',
      url: 'https://github.com/AngelCase/portfolio',
      image: 'portfolio',
      imageAlt: 'ポートフォリオ',
      imageBorder: true,
      descriptions: [
        'このポートフォリオ。',
        '2023/TypeScript/Nuxt3/',
        'GitHub Actions/GitHub Pages'
      ]
    }
  ]
</script>

<template>
  <div>
    <PageHeading text="WORKS"></PageHeading>

    <div :class="$style.contents" v-for="content in contents">
      <WorkContent
        :title="content.title"
        :url="content.url"
        :image="images[content.image]"
        :image-alt="content.imageAlt"
        :image-border="content.imageBorder"
      >
        <p :class="$style.description">
          <span v-for="desc in content.descriptions"> {{ desc }} <br /> </span>
        </p>
      </WorkContent>
    </div>
  </div>
</template>

<style lang="scss" module>
  .description {
    color: #777;
    font-size: medium;
  }

  .contents {
    width: 400px;
    margin-top: 32px;
    padding-left: 40px;
  }
</style>

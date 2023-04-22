<template>
  <div>
    <PageHeading text="WORKS"></PageHeading>

    <div :class="$style.contents">
      <WorkContent
        title="MONOCHRO"
        url="https://store.steampowered.com/app/1397530/Monochro/"
      >
        <p :class="$style.description">
          高速なアクションが特徴の<br />
          横スクロールアクションゲーム。<br />
          2020/C++/DXlib
        </p>
      </WorkContent>
    </div>
  </div>
</template>

<style lang="scss" module>
  .description {
    color: #777;
  }

  .contents {
    width: 400px;
    margin-top: 32px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

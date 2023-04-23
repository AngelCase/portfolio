<template>
  <div>
    <PageHeading text="CONTACT"></PageHeading>
    <ul :class="$style.list">
      <li :class="$style.list__item">📧 tarogawaname(a)gmail.com</li>
    </ul>
  </div>
</template>

<style lang="scss" module>
  .list {
    margin-left: auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    padding-left: 40px;

    &__item {
      border-left: solid 2px #ccc;
      background: #fcfcfc;
      margin-bottom: 8px;
      padding-left: 8px;
      list-style-type: none !important;
    }
  }
</style>

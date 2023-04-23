<template>
  <div>
    <header>
      <nav :class="$style.nav">
        <ul :class="$style.list">
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/"> top </nuxt-link>
          </li>
          <div :class="$style.separator"></div>
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/skills"
              >skills</nuxt-link
            >
          </li>
          <div :class="$style.separator"></div>
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/works">
              works
            </nuxt-link>
          </li>
          <div :class="$style.separator"></div>
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/contact">
              contact
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <slot />
    </header>
  </div>
</template>

<style lang="scss" module>
  .nav {
    margin-top: 24px;
    margin-left: 24px;
  }

  .separator {
    border-left: solid 2px #aaa;
    height: 16px;
  }

  .list {
    margin: 0px;
    padding: 0px;
    display: flex;
    align-items: center;

    &__item {
      font-size: large;
      list-style: none;
      text-decoration: none;

      a {
        padding: 10px;
        width: 100%;
        height: 100%;
        text-decoration: none;
      }

      a:hover {
        background-color: #efefef;
      }

      &__link,
      &__link:visited {
        color: #222;
      }
    }
  }
</style>

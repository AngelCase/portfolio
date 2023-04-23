<template>
  <div>
    <header>
      <nav :class="$style.nav">
        <ul :class="$style.list">
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/"> TOP </nuxt-link>
          </li>
          <div :class="$style.separator"></div>
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/skills"
              >SKILLS</nuxt-link
            >
          </li>
          <div :class="$style.separator"></div>
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/works">
              WORKS
            </nuxt-link>
          </li>
          <div :class="$style.separator"></div>
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/contact">
              CONTACT
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
    margin-left: 4px;
  }

  .separator {
    border-left: solid 2px $blue;
    height: 24px;
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
        background-color: $light-blue;
      }

      &__link,
      &__link:visited {
        color: #222;
      }
    }
  }
</style>

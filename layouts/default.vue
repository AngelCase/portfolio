<template>
  <div>
    <header>
      <nav>
        <ul>
          <li>
            <nuxt-link to="/">top</nuxt-link>
          </li>
          <li>
            <nuxt-link to="skills">skills</nuxt-link>
          </li>
          <li>
            <nuxt-link to="works">works</nuxt-link>
          </li>
          <li>
            <nuxt-link to="contact">contact</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <slot />
  </div>
</template>
<!-- <template>
  <div>
    <header>
      <nav :class="$style.nav">
        <ul :class="$style.list">
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/"> top </nuxt-link>
          </li>
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/gallery"
              >gallery</nuxt-link
            >
          </li>
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="prompt">
              prompt
            </nuxt-link>
          </li>
        </ul>
      </nav>
      <slot />
    </header>
  </div>
</template> -->

<!-- <style lang="scss" module>
  .nav {
    background-color: #333;
  }

  .list {
    margin: 0px;
    padding: 0px;
    display: flex;

    &__item {
      padding: 10px;
      font-size: large;
      list-style: none;
      color: #eee;
      text-decoration: none;

      a {
        text-decoration: none;
      }

      &__link,
      &__link:visited {
        color: #eee;
      }
    }

    &__item:hover {
      background-color: #111;
    }
  }
</style> -->

<script setup>
  const text = 'hello'
  const { scramble, current } = useScramble(text)
</script>

<template>
  <div>
    <header>
      <nav :class="$style.nav">
        <ul :class="$style.list">
          <li @mouseover="scramble()" :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/">
              {{ current }}
            </nuxt-link>
          </li>
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/skills"
              >skills</nuxt-link
            >
          </li>
          <li :class="$style.list__item">
            <nuxt-link :class="$style.list__item__link" to="/works">
              works
            </nuxt-link>
          </li>
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
    background-color: #eee;
  }

  .list {
    margin: 0px;
    padding: 0px;
    display: flex;

    &__item {
      padding: 10px;
      font-size: large;
      list-style: none;
      text-decoration: none;

      a {
        text-decoration: none;
      }

      &__link,
      &__link:visited {
        color: #111;
      }
    }

    &__item:hover {
      background-color: #dadada;
    }
  }
</style>

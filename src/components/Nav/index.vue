<template>
  <nav class="nav-sticky" :class="{ show: y > 80 }">
    <div class="container">
      <div class="logo">
        Queue
      </div>
      <div class="navigation">
        <ul class="top-nav">
          <li>
            <router-link to="/" :class="{ active: y < 900 }">HOME{{ y }}</router-link>
          </li>
          <li>
            <router-link to="/services/#section1" :class="{ active: y >= 900 && y < 1744 }">SERVICES</router-link>
          </li>
          <li>
            <router-link to="/resume/#section2" :class="{ active: y >= 1744 && y < 3530 }">RESUME</router-link>
          </li>
          <li>
            <router-link to="/projects/#section3" :class="{ active: y >= 3530 && y < 5154 }">PROJECTS</router-link>
          </li>
          <li>
            <router-link to="/blog/#section4" :class="{ active: y >= 5154 && y < 5818 }">BLOG</router-link>
          </li>
          <li>
            <router-link to="/contact/#section5" :class="{ active: y >= 5818 }">CONTACT</router-link>
          </li>
        </ul>
        <ul class="icon-links">
          <li>
            <a href="#">FaceBook</a>
          </li>
          <li>
            <a href="#">Github</a>
          </li>
          <li>
            <a href="#">Gitee</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang='ts'>
  import { useScroll } from '@vueuse/core';
  const { y } = useScroll(window)

</script>

<style lang="scss" scoped>
  nav {
    padding: 20px 0;
    box-sizing: border-box;
    z-index: 999;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .logo {
        width: 100px;
        height: 40px;
        line-height: 40px;
        font-size: 20px;
        text-align: center;
      }

      .navigation {
        display: flex;

        .top-nav {
          display: flex;
          align-items: center;
          list-style: none;

          li {

            a {
              text-decoration: none;
              font-size: 14px;
              font-weight: 400;
              padding: 10px 15px;
              border-radius: 5px;
              transition: all 0.3s;

              &:hover {
                color: $primaryColor;
              }

              &.active {
                color: $primaryColor;
              }
            }
          }
        }

        .icon-links {
          display: flex;
          align-items: center;
          list-style: none;

          li {
            a {
              text-decoration: none;
              font-size: 14px;
              padding: 10px 15px;
              border-radius: 5px;
              transition: all 0.3s;
            }
          }
        }
      }

    }

  }

  nav.nav-sticky {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;
    background: transparent;
    padding: 20px 0;
    box-sizing: border-box;
  }

  nav.show {
    box-shadow: 0 10px 33px rgba(0, 0, 0, 0.1);
    background-color: white;
    transition: all 0.5s ease;
  }
</style>
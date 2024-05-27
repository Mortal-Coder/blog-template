<template>
  <nav class="nav-sticky" :class="{ show: y > 80 }">
    <div class="container">
      <div class="logo">
        Mclz
      </div>
      <div class="navigation">
        <ul class="top-nav">
          <li>
            <router-link to="/" :class="{ active: y < 900 }">HOME</router-link>
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
            <a href="#"><i class="icon-color">
                <svg t="1716793988524" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="2598" width="16" height="16">
                  <path
                    d="M740.693333 539.306667l0-187.733333-157.013333 0L583.68 238.933333c0 0 0-51.2 58.026667-51.2 58.026667 0 153.6 0 153.6 0L795.306667 0 549.546667 0C378.88 0 365.226667 201.386667 365.226667 201.386667l0 146.773333-136.533333 0 0 187.733333 136.533333 0L365.226667 1024l215.04 0L580.266667 539.306667 740.693333 539.306667z"
                    p-id="2599">
                  </path>
                </svg>
              </i></a>
          </li>
          <li>
            <a href="#"><i class="icon-color">
                <svg t="1716794568617" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="6588" width="18" height="18">
                  <path
                    d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    p-id="6589"></path>
                </svg>
              </i></a>
          </li>
          <li>
            <a href="#"><i class="icon-color">
                <svg t="1716794226762" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="4523" width="16" height="16">
                  <path
                    d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"
                    p-id="4524"></path>
                </svg>
              </i></a>
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
              padding: 10px;
              transition: all 0.3s;

              .icon-color {
                fill: $primaryColor;
              }
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
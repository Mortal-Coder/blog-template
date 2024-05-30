<template>
  <nav class="nav-sticky" :class="{ show: y > 80 }">
    <div class="container">
      <div class="logo">
        Mclz
      </div>
      <div class="navigation">
        <ul class="top-nav">
          <li>
            <router-link to="/" :class="{ active: y < 706 }">HOME</router-link>
          </li>
          <li>
            <router-link to="/services/#section1" :class="{ active: y >= 706 && y < 1586 }">SERVICES</router-link>
          </li>
          <li>
            <router-link to="/resume/#section2" :class="{ active: y >= 1586 && y < 3377 }">RESUME</router-link>
          </li>
          <li>
            <router-link to="/projects/#section3" :class="{ active: y >= 3377 && y < 5043 }">PROJECTS</router-link>
          </li>
          <li>
            <router-link to="/blog/#section4" :class="{ active: y >= 5043 && y < 5741 }">BLOG</router-link>
          </li>
          <li>
            <router-link to="/contact/#section5" :class="{ active: y >= 5741 }">CONTACT</router-link>
          </li>
        </ul>
        <ul class="icon-links">
          <li>
            <a href="#"><i class="icon-color">
                <svg t="1716952119108" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="28663" width="18" height="18">
                  <path
                    d="M926.47619 355.644952V780.190476a73.142857 73.142857 0 0 1-73.142857 73.142857H170.666667a73.142857 73.142857 0 0 1-73.142857-73.142857V355.644952l304.103619 257.828572a170.666667 170.666667 0 0 0 220.745142 0L926.47619 355.644952zM853.333333 170.666667a74.044952 74.044952 0 0 1 26.087619 4.778666 72.704 72.704 0 0 1 30.622477 22.186667 73.508571 73.508571 0 0 1 10.678857 17.67619c3.169524 7.509333 5.12 15.652571 5.607619 24.210286L926.47619 243.809524v24.380952L559.469714 581.241905a73.142857 73.142857 0 0 1-91.306666 2.901333l-3.632762-2.925714L97.52381 268.190476v-24.380952a72.899048 72.899048 0 0 1 40.155428-65.292191A72.97219 72.97219 0 0 1 170.666667 170.666667h682.666666z"
                    p-id="28664"></path>
                </svg>
              </i></a>
          </li>
          <li>
            <a href="https://github.com/Mortal-Coder" target="_blank"><i class="icon-color">
                <svg t="1716794568617" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="6588" width="18" height="18">
                  <path
                    d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                    p-id="6589"></path>
                </svg>
              </i></a>
          </li>
          <li>
            <a href="https://gitee.com/mclz2645" target="_blank"><i class="icon-color">
                <svg t="1716957200266" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="34061" width="18" height="18">
                  <path
                    d="M850.016 438.016H471.008q-14.016 0-23.488 9.504t-9.504 23.488v82.016q0 14.016 9.504 23.488t23.488 9.504h230.016q14.016 0 23.488 9.504t9.504 23.488v16.992q0 19.008-7.488 37.504t-20.992 32-32 20.992-37.504 7.488h-314.016q-12.992 0-23.008-9.504t-10.016-23.488v-312.992q0-19.008 8-37.504t21.504-32 32-20.992 37.504-7.488h462.016q12.992 0 23.008-10.016t10.016-23.008V173.984q0-12.992-10.016-23.008t-23.008-10.016H388q-67.008 0-123.488 33.504T174.496 264.48t-33.504 123.488v462.016q0 12.992 10.016 23.008t23.008 10.016h486.016q44.992 0 85.504-16.992t72-48.512 48.512-72 16.992-85.504v-188.992q0-14.016-10.016-23.488t-23.008-9.504z"
                    p-id="34062"></path>
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
        font-size: 24px;
        text-align: center;
        font-weight: 600;
        letter-spacing: 2px;
      }

      .navigation {
        display: flex;

        .top-nav {
          display: flex;
          align-items: center;
          list-style: none;
          margin-right: 1rem;

          li {

            a {
              text-decoration: none;
              font-size: 14px;
              font-weight: 700;
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
            height: 18px;
            line-height: 18px;

            a {
              text-decoration: none;
              font-size: 14px;
              padding: 10px 6px;
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
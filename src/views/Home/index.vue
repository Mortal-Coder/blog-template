<template>
  <Nav></Nav>
  <section class="hero-area">
    <div class="container">
      <div class="introduce">
        <div class="popover">
          <span class="pop">Now</span>
          <span class="over">Looking for a Job!</span>
        </div>
        <h1>Here I'am Mclz</h1>
        <p>Obviously I'm a Web Designer. Web Developer with over 3 years of experience. Experienced with all stages of
          the development
        </p>
        <el-button type="primary" size="large">Hire Me</el-button>
        <el-button size="large" class="sec-btn">Contact Me</el-button>
      </div>
      <div class="my-picture">
        <img src="@\assets\home.png" alt="">
      </div>
    </div>
  </section>
  <section class="bg-gray">
    <div class="container">
      <div class="card">
        <div class="contact">
          <h6>Personal Details</h6>
          <div class="bor-bottom"></div>
          <p>Email:<a href="javascript:;">queue@gmail.com</a></p>
          <p>Languages:<a href="javascript:;">Chinese & English</a></p>
          <p>Nationality:<a href="javascript:;">China</a></p>
        </div>
        <div class="brief">
          <h4>I Am <span class="typewriter">Web Designer</span></h4>
          <P class="text-light-muted">Obviously I'm a Web Designer. Web Developer with over 3 years of experience.
            Experienced with all stages of
            the development cycle for dynamic web projects. The as opposed to using 'Content here,content here', making
            it look like readable English.
          </P>
        </div>
      </div>
    </div>
  </section>
  <Services></Services>
  <Resume></Resume>
  <Projects></Projects>
  <Blog></Blog>
  <Contact></Contact>
  <footer class="footer">
    <div class="container">
      <div>
        <h4>Queue</h4>
        <p>Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.
        </p>
      </div>
      <ul class="icon-list">
        <li class="icon-item">
          <a href="">M</a>
        </li>
        <li class="icon-item">
          <a href="">C</a>
        </li>
        <li class="icon-item">
          <a href="">L</a>
        </li>
        <li class="icon-item">
          <a href="">Z</a>
        </li>
      </ul>
    </div>
  </footer>
  <div class="right">© 2024Queue. Design By <a href="">MCLZ</a></div>
  <el-backtop :bottom="30" :right="30">
    <div class="back-top"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </div>
  </el-backtop>
  <div class="bg">
    <div class="container">
      <div class="card"></div>
    </div>
  </div>
</template>

<script setup lang='ts'>
  import Services from '@/views/Services/index.vue'
  import Resume from '@/views/Resume/index.vue'
  import Projects from '@/views/Projects/index.vue'
  import Blog from '@/views/Blog/index.vue'
  import Contact from '@/views/Contact/index.vue'

  window.onload = function () {
    const element = document.querySelector('.typewriter');
    const text = element!.textContent;

    // 清空文字内容，使得动画效果生效
    element!.textContent = '';

    // 逐字符添加文字内容，触发动画
    for (let i = 0; i < text!.length; i++) {
      setTimeout(() => {
        element!.textContent += text![i];
      }, 150 * i); // 调整字符出现间隔时间，以控制打字速度
    }
  };

</script>

<style lang="scss" scoped>
  .hero-area {
    background-image: url(@/assets/home-shape.png);
    background-position: center center;
    background-size: cover;
    padding: 170px 0 0 0;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      .introduce {
        width: 60%;
        padding-top: 80px;

        .popover {
          border-radius: 30px;
          display: inline-block;
          background-color: white !important;
          box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;
          padding: 12px 15px;
          font-size: 14px;
          margin-bottom: 1rem;

          span.pop {
            background-color: #007bff !important;
            color: white;
            padding: .35em .65em;
            border-radius: 12px;
            font-size: 0.75em;
            margin-right: .3em;
          }
        }

        h1 {
          margin: 0;
          font-size: 56px;
          color: #161c2d;
          font-weight: 400;
          margin-bottom: 1rem;
        }

        p {
          color: #8492a6;
          font-size: 14px;
          margin: 0 auto;
          margin-bottom: 2rem;
        }

        .el-button {
          border-radius: 10px;
          padding: 8px 40px;
          transition: all .5s ease;

          &:hover {
            background-color: #0056b3;
            color: white;
            transform: translateY(-2px);
          }
        }

        .sec-btn {
          border: 1px solid $primaryColor;
          color: $primaryColor;
          background-color: transparent;

          &:hover {
            background-color: $primaryColor;
            color: white;
          }
        }
      }

      .my-picture {
        width: 40%;

        img {
          background-color: transparent;
          max-width: 100%;
          height: auto;
        }
      }

    }
  }

  .bg-gray {
    background-color: #f8f9fa;
    height: 110px;

    position: relative;

    .container {
      position: relative;

      .card {
        background-color: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;
        display: flex;
        position: absolute;
        bottom: -110px;

        .contact {
          background-color: #f8f9fa;
          padding: 16px;
          border-radius: 8px;
          width: 25%;

          h6 {
            font-size: 18px;
            line-height: 1.5;
            margin-top: 0;
            margin-bottom: 0.5rem;
            font-weight: 400;
            display: block;
          }

          .bor-bottom {
            padding: 0;
            border-bottom: .5px dashed #d4dae1;
            margin: 0.5rem 0;
          }

          p {
            margin: 0.5rem 0;

            a {
              color: #707070;
            }
          }
        }

        .brief {
          width: 500px;
          padding: 16px;
          border-radius: 8px;
          width: 75%;

          .typewriter {
            overflow: hidden;
            /* 文字溢出部分隐藏 */
            border-right: .15em solid $primaryColor;
            /* 光标样式 */
            white-space: nowrap;
            /* 文字不换行 */
            margin: 0 auto;
            /* 文字居中 */
            letter-spacing: .15em;
            /* 字符间距 */
            animation:
              typing 3.5s steps(40, end) infinite,
              blink-caret .75s step-end infinite;
            /* 光标闪烁 */
          }

          @keyframes typing {
            from {
              width: 0
            }

            to {
              width: 100%
            }
          }

          @keyframes blink-caret {

            from,
            to {
              border-color: transparent
            }

            50% {
              border-color: $primaryColor
            }
          }

          .text-light-muted {
            color: #8492a6 !important;
            margin-top: 1rem;
            font-size: 1.1rem;
          }
        }
      }
    }
  }

  .footer {
    padding: 60px 0;
    background-color: #f8f9fa;
    text-align: center;

    .container {
      h4 {
        font-size: 2rem;
        font-weight: 400;
        line-height: 1.5;
        margin: 1rem 0;
      }

      p {
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        margin: 1rem 0;
        color: #8492a6;
        max-width: 600px;
        margin: 0 auto;
      }

      .icon-list {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 2rem;

        li {
          margin: 0 2px;
        }

        a {
          color: #161c2d;
          border: 1px solid #161c2d;
          display: inline-block;
          height: 32px;
          text-align: center;
          font-size: 15px;
          width: 32px;
          line-height: 32px;
          border-radius: 50%;

          &:hover {
            color: white;
            background-color: $primaryColor;
            border: 1px solid $primaryColor;
          }
        }
      }


    }
  }

  .right {
    background-color: #161c2d;
    padding: 25px 0;
    color: #adb5bd;
    text-align: center;

    a {
      color: $primaryColor;
    }
  }

  .el-backtop {
    border-radius: 0;
    box-shadow: none;
    background-color: transparent;

    .back-top {
      height: 40px;
      width: 40px;
      line-height: 40px;
      background-color: rgba(0, 123, 255, 0.3) !important;
      border: 1px solid rgba(0, 123, 255, 0.3) !important;
      border-radius: 8px;
      text-align: center;
      color: #161c2d;

      &:hover {
        background-color: rgba(0, 123, 255, 1) !important;
        border: 1px solid rgba(0, 123, 255, 0.6) !important;
        color: white;
        transition: all .5s ease;
      }
    }
  }

</style>
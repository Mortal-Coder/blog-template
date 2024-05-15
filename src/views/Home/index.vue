<template>
  <Nav></Nav>
  <section class="abc"></section>
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
  .abc {
    height: 400px;
    background-color: white;
  }

  .bg-gray {
    background-color: #f8f9fa;

    .container {

      .card {
        background-color: white;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;
        display: flex;
        position: relative;
        top: -110px;

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

  body {
    height: 1000px;
  }
</style>
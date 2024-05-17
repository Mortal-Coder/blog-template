<template>
  <section class="blog" id="section4">
    <div class="container">
      <h2>Latest News & Blog</h2>
      <p>Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.
      </p>
      <div class="card-list">
        <div class="card">
          <img src="@/assets/blog/1.jpg" alt="">
          <h4><a href="">Design your apps in your own way</a></h4>
          <p>This is required when, for example, the final text is not yet available.</p>
          <div class="datemore">
            <span class="date"><i class="date-icon"></i>Dec 19</span>
            <a href="" class="more">Read More <i class="arrow"></i></a>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/blog/2.jpg" alt="">
          <h4><a href="">How apps is changing the it world</a></h4>
          <p>This is required when, for example, the final text is not yet available.</p>
          <div class="datemore">
            <span class="date"><i class="date-icon"></i>Feb 24</span>
            <a href="" class="more">Read More <i class="arrow"></i></a>
          </div>
        </div>
        <div class="card">
          <img src="@/assets/blog/3.jpg" alt="">
          <h4><a href="">Smartest applications for business</a></h4>
          <p>This is required when, for example, the final text is not yet available.</p>
          <div class="datemore">
            <span class="date"><i class="date-icon"></i>June 25</span>
            <a href="" class="more">Read More <i class="arrow"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
  .blog {
    padding: 80px 0;
    background-color: #f8f9fa;
    text-align: center;

    .container {

      h2 {
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

      .card-list {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 20px;
        margin: 0 auto;
        max-width: 1200px;
        margin-top: 3rem;

        .card {
          border: 1px solid #e9ecef;
          border-radius: 8px;
          box-shadow: 0 0 .625rem -0.1875rem rgba(0, 0, 0, 0.13) !important;

          img {
            width: 100%;
            border-radius: 8px 8px 0 0;
          }

          h4 {
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 1.5;
            margin: 1rem 0;

            a:hover {
              color: $primaryColor;
              cursor: pointer;
            }
          }

          p {
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            margin: 1rem 0;
            color: #8492a6;
            max-width: 600px;
            margin: 0 auto;
            text-align: left;
            padding: 0 20px;
          }

          .datemore {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 1rem 0;
            padding: 0 20px;

            .date {
              font-size: 1rem;
              font-weight: 400;
              line-height: 1.5;
              margin: 1rem 0;
              color: #8492a6;

              .date-icon::before {
                content: "\F8A6";
              }

              &:hover {
                color: $primaryColor;
                cursor: pointer;
              }
            }

            .more {
              font-size: 1rem;
              font-weight: 400;
              line-height: 1.5;
              margin: 1rem 0;
              color: #707070;
              text-decoration: none;
              cursor: pointer;

              .arrow::before {
                content: "\F142";
              }

              &:hover {
                color: $primaryColor;
              }
            }
          }
        }
      }
    }
  }
</style>
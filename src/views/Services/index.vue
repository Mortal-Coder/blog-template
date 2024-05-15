<template>
  <section class="services" id="section1">
    <div class="container">
      <div class="services-title">
        <h2>Awesome Service</h2>
        <p>Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.
        </p>
      </div>
      <div class="services-card">
        <div class="card">
          <span><i>icon</i></span>
          <h4>Web Development</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More <i class="arrow"></i></a>
        </div>
        <div class="card">
          <span><i>icon</i></span>
          <h4>Web Development</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More</a>
        </div>
        <div class="card">
          <span><i>icon</i></span>
          <h4>Web Development</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More</a>
        </div>
        <div class="card">
          <span><i>icon</i></span>
          <h4>Web Development</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More</a>
        </div>
        <div class="card">
          <span><i>icon</i></span>
          <h4>Web Development</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More</a>
        </div>
        <div class="card">
          <span><i>icon</i></span>
          <h4>Web Development</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
  .services {
    background-color: #f8f9fa;
    padding-bottom: 5rem;

    .services-title {
      text-align: center;

      h2 {
        margin: 0;
        font-size: 30px;
        color: #161c2d;
        font-weight: 400;
        margin-bottom: 1.5rem;
      }

      p {
        color: #8492a6;
        font-size: 14px;
        max-width: 600px;
        margin: 0 auto;
      }
    }

    .services-card {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-top: 3rem;

      .card {
        background-color: white;
        padding: 30px 45px;
        width: 32%;
        margin-bottom: 1.6rem;
        border-radius: 10px;
        box-shadow: -0.0625rem 0 .625rem 0 rgba(0, 0, 0, 0.07), 0.3125rem 1.25rem 2.5rem 0 rgba(0, 0, 0, 0.04) !important;

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: $primaryColor;
          color: white;
          font-size: 20px;
          margin-bottom: 1.5rem;
        }

        h4 {
          margin: 0;
          font-size: 18px;
          color: #161c2d;
          font-weight: 400;
          margin-bottom: 1.5rem;
        }

        p {
          color: #8492a6;
          font-size: 14px;
          max-width: 600px;
          margin: 0 auto;
        }

        a {
          display: inline-block;
          color: $primaryColor;
          text-decoration: none;
          font-size: 14px;
          margin-top: 1.5rem;
          transition: all 0.3s ease;

          &:hover {
            color: #0056b3;
          }

          .arrow::before {
            content: "\F142";
          }
        }
      }
    }
  }

</style>
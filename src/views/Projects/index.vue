<template>
  <section class="projects" id="section3">
    <div class="container">
      <h2>My Work & Portfolio</h2>
      <p>Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.
      </p>
      <div class="card-list">
        <div class="card">
          <img src="@/assets/1.jpg" alt="">
          <div class="card-mask"></div>
        </div>
        <div class="card">
          <img src="@/assets/5.jpg" alt="">
          <div class="card-mask"></div>
        </div>
        <div class="card">
          <img src="@/assets/3.jpg" alt="">
          <div class="card-mask"></div>
        </div>
        <div class="card">
          <img src="@/assets/3.jpg" alt="">
          <div class="card-mask"></div>
        </div>
        <div class="card">
          <img src="@/assets/1.jpg" alt="">
          <div class="card-mask"></div>
        </div>
        <div class="card">
          <img src="@/assets/5.jpg" alt="">
          <div class="card-mask"></div>
        </div>
      </div>
      <el-button type="primary" class="btn-sm">See More<span class="arrow"></span></el-button>
    </div>
  </section>

</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
  .projects {
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
        display: flex;
        flex-wrap: wrap;
        margin-top: 4rem;

        .card {
          width: 31%;
          margin: 10px;
          position: relative;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: -0.0625rem 0 .625rem 0 rgba(0, 0, 0, 0.07), 0.3125rem 1.25rem 2.5rem 0 rgba(0, 0, 0, 0.04) !important;
        }
      }

      .btn-sm {
        margin-top: 2rem;
        padding: 20px 32px;
        border-radius: 8px;
        font-size: 16px;
        transition: all 0.3s linear;

        .arrow::before {
          margin-left: 10px;
          content: "\F142";
        }

        &:hover {
          background-color: #0056b3;
          color: white;
          transform: translateY(-2px);
        }
      }
    }
  }
</style>
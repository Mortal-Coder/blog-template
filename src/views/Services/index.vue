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
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          </span>
          <h4>Web Development</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More <i class="arrow"></i></a>
        </div>
        <div class="card">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
              <line x1="16" y1="8" x2="2" y2="22"></line>
              <line x1="17.5" y1="15" x2="9" y2="15"></line>
            </svg>
          </span>
          <h4>Design & Planning</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More <i class="arrow"></i></a>
        </div>
        <div class="card">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </span>
          <h4>Adobe Photoshop</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More <i class="arrow"></i></a>
        </div>
        <div class="card">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
          </span>
          <h4>Digital marketing</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More <i class="arrow"></i></a>
        </div>
        <div class="card">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="7"></circle>
              <polyline points="12 9 12 12 13.5 13.5"></polyline>
              <path
                d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83">
              </path>
            </svg>
          </span>
          <h4>24 / 7</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More <i class="arrow"></i></a>
        </div>
        <div class="card">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
          </span>
          <h4>Graphic Designer</h4>
          <p>With lots of unique blocks,you can easily build a page without coding.</p>
          <a href="#">Read More <i class="arrow"></i></a>
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
    padding: 5rem 0;

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
        font-size: 15px;
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
          font-weight: 600;
          margin-bottom: 1.5rem;
        }

        p {
          color: #8492a6;
          font-size: 15px;
          max-width: 600px;
          margin: 0 auto;
        }

        a {
          display: inline-block;
          color: $primaryColor;
          text-decoration: none;
          font-size: 15px;
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
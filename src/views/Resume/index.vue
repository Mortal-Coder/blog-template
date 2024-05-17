<template>
  <section class="resume" id="section2">
    <div class="container">
      <div class="work-exprience">
        <div class="participation">
          <h4>Work Participation</h4>
          <p>Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web
            projects.
          </p>
          <a href="javascript:;">See More <i class="arrow"></i></a>
        </div>
        <div class="exprience">
          <div class="exps">
            <div class="card">
              <div class="card-body">
                <div class="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon-svg">
                    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
                    <line x1="16" y1="8" x2="2" y2="22"></line>
                    <line x1="17.5" y1="15" x2="9" y2="15"></line>
                  </svg>
                </div>
                <h5 class="card-title">UX Designer</h5>
                <small>Vivo - Senior Designer</small>
                <span>2020 - 2024</span>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon-svg">
                    <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
                  </svg>
                </div>
                <h5 class="card-title">UX Designer</h5>
                <small>Vivo - Senior Designer</small>
                <span>2018 - 2020</span>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="card-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="icon-svg">
                    <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                    <path
                      d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                    </path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h5 class="card-title">UI & Web Developer</h5>
                <small>Vivo - Senior Designer</small>
                <span>2016 - 2018</span>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                  card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="skills">
    <div class="container">
      <div class="card-list">
        <div class="card">
          <h2><span>97</span>%</h2>
          <h5>Happy Client</h5>
        </div>
        <div class="card">
          <h2><span>15</span>M</h2>
          <h5>Download</h5>
        </div>
        <div class="card">
          <h2><span>3261</span>+</h2>
          <h5>Happy Users</h5>
        </div>
        <div class="card">
          <h2><span>36</span>+</h2>
          <h5>Years of expe.</h5>
        </div>
      </div>
    </div>
  </section>
  <section class="expertise">
    <div class="container">
      <div class="img">
        <img src="" alt="">
      </div>
      <div class="skill-icons">
        <div class="description">
          <h4>Work Experitse</h4>
          <p>Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web
            projects.</p>
        </div>
        <div class="icon-list">
          <div class="icon-item">
            <img src="@/assets/bootstrap.svg" alt="">
            <span class="progress">70<i>%</i></span>
          </div>
          <div class="icon-item">
            <img src="@/assets/nodejs-icon.svg" alt="">
            <span class="progress">55<i>%</i></span>
          </div>
          <div class="icon-item">
            <img src="@/assets/react.svg" alt="">
            <span class="progress">68<i>%</i></span>
          </div>
          <div class="icon-item">
            <img src="@/assets/post_gray_sql.svg" alt="">
            <span class="progress">75<i>%</i></span>
          </div>
        </div>
        <div class="icon-list">
          <div class="icon-item">
            <img src="@/assets/amazons3.svg" alt="">
            <span class="progress">80<i>%</i></span>
          </div>
          <div class="icon-item">
            <img src="@/assets/android.svg" alt="">
            <span class="progress">85<i>%</i></span>
          </div>
          <div class="icon-item">
            <img src="@/assets/Angular.svg" alt="">
            <span class="progress">70<i>%</i></span>
          </div>
          <div class="icon-item">
            <img src="@/assets/mongodb.svg" alt="">
            <span class="progress">65<i>%</i></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>

  .resume {
    background-color: white;
    padding-top: 3rem;
    padding-bottom: 3rem;

    .work-exprience {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .participation {
        width: 32%;

        h4 {
          font-size: 2rem;
          font-weight: 400
        }

        p {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          margin: 1rem 0;
          color: #8492a6;
        }

        a {
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          margin: 1rem 0;
          color: white;
          text-decoration: none;
          background-color: $primaryColor;
          padding: 12px 30px;
          display: inline-block;
          border-radius: 10px;
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

      .exprience {
        width: 64%;

        .exps {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;

          .card {
            width: 80%;
            margin: 3rem 0;

            .card-body {
              width: 100%;
              padding: 10px 20px 0px 150px;
              border: 1px dashed #ddd;
              border-radius: 100px 0 0;
              position: relative;

              .card-icon {
                background: #f0f0fe;
                text-align: center;
                height: 80px;
                width: 80px;
                line-height: 80px;
                border: 7px solid #fff;
                border-radius: 50%;
                position: absolute;
                bottom: -35px;
                left: 20px;
                -webkit-box-shadow: 0 0 0 1px #f0f0fe;
                box-shadow: 0 0 0 1px #f0f0fe;

                .icon-svg {
                  width: 26px;
                  height: 26px;
                  color: $primaryColor;
                }
              }

              h5 {
                font-size: 1.6rem;
                font-weight: 400;
                margin-bottom: 1rem;
                margin-top: 0.5rem;
              }

              small {
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                margin: 1rem 0;
                color: #161c2d;
              }

              span {
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                margin: 1rem 0;
                color: $primaryColor;
                background-color: #ebf5ff;
                padding: 4px 12px;
                border-radius: 6px;
                position: absolute;
                top: 3%;
                right: 10%;
              }

              p {
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                margin: 1rem 0;
                color: #8492a6;
              }
            }

            &:nth-child(2) {
              margin-left: auto;

              .card-body {
                padding: 10px 150px 0 20px;
                border-radius: 0 0 100px 0;
                position: relative;

                .card-icon {
                  position: absolute;
                  top: -35px;
                  left: 83%;
                }

                span {
                  right: 30%;
                }
              }
            }
          }
        }
      }
    }
  }

  .skills {
    background-image: url(@/assets/bg-pattern.png);
    padding: 100px 0;

    .card-list {
      display: flex;
      justify-content: space-around;

      .card {
        width: 23%;
        background-color: white;
        box-shadow: 0 0 3px rgba(60, 72, 88, 0.15) !important;
        padding: 3rem 1.5rem;
        border-radius: 10px;
        text-align: center;

        h2 {
          font-size: 2.4rem;
          font-weight: 400;
          line-height: 1.5;
          margin: 1rem 0;
        }

        h5 {
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 1.5;
          margin: 1rem 0;
          color: #161c2d;
        }
      }
    }
  }

  .expertise {
    background-color: white;
    padding: 80px 0;

    .container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .skill-icons {
        width: 50%;
        text-align: center;
        display: flex;
        flex-wrap: wrap;

        .description {
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
          }
        }

        .icon-list {
          width: 100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          margin-top: 3rem;

          .icon-item {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: white;
            box-shadow: -0.0625rem 0 .625rem 0 rgba(0, 0, 0, 0.07), 0.3125rem 1.25rem 2.5rem 0 rgba(0, 0, 0, 0.04) !important;
            margin: 0 1rem;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;

            img {
              width: 35px;
              height: 35px;
              background-color: transparent !important;
            }

            .progress {
              background-color: rgba(0, 123, 254, 0.08);
              color: $primaryColor;
              border-radius: 4px;
              padding: 1px 5px;
              font-size: 12px;
              font-weight: 600;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              top: 0;
              right: -4px;
            }
          }
        }

      }
    }
  }
</style>
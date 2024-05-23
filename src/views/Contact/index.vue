<template>
  <section class="contact" id="section5">
    <div class="container">
      <h2>Contact Me</h2>
      <p>Obviously I'm a Web Designer. Experienced with all stages of the development cycle for dynamic web projects.
      </p>
      <div class="card-list">
        <div class="card">
          <div class="card-header">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-item">
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                </path>
              </svg>
            </span>
            <h3>Phone</h3>
            <p>Promising development turmoil inclusive education transformative community</p>
            <a href="mailto:  " target="_blank">
              +189 8176 2421
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-item">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </span>
            <h3>Email</h3>
            <p>Promising development turmoil inclusive education transformative community</p>
            <a href="mailto:  " target="_blank">
              contact@example.com
            </a>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon-item">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <h3>Location</h3>
            <p>C/54 Northwest Freeway,Suite 558,
              Houston,USA 485</p>
            <a href="http://www.baidu.com" target="_blank">
              View on Google map
            </a>
          </div>
        </div>
      </div>
      <el-form :model="form" label-width="auto" class="form">
        <el-row :gutter="24">
          <el-col :span="12">
            <el-form-item prop="firstName">
              <el-input v-model="form.firstName" placeholder="First Name:" size="large"></el-input>
            </el-form-item>
            <el-form-item prop="email">
              <el-input v-model="form.email" placeholder="Your email:" size="large"></el-input>
            </el-form-item>
            <el-form-item prop="subject">
              <el-input v-model="form.subject" placeholder="Your subject:" size="large"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item prop="message">
              <el-input type="textarea" :rows="8" resize="none" v-model="form.message" placeholder="Your Message:">
              </el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-form-item>
          <div class="button-container">
            <el-button type="primary" class="btn-send">Send Message</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </section>
</template>

<script setup lang='ts'>
  import { ref } from 'vue';

  const form = ref({
    firstName: '',
    email: '',
    subject: '',
    message: ''
  })
</script>

<style lang="scss" scoped>
  .contact {
    padding: 80px 0;
    background-color: white;
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
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        margin: 0 auto;
        max-width: 1140px;
        padding: 0 10px;
        margin-top: 2rem;

        .card {
          padding: 20px;

          h3 {
            font-size: 1.2rem;
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

          a {
            font-size: 1.1rem;
            font-weight: 400;
            margin: 1rem 0;
            color: $primaryColor;
            margin: 0 auto;
            text-decoration: none;
            transition: all 0.3s ease-in-out;
            display: block;
            margin-top: 1.2rem;

            &:hover {
              color: #0056b3;
            }
          }
        }
      }

      .form {
        margin: auto;
        margin-top: 3rem;

        .el-input {
          margin-bottom: 14px;
        }

        .button-container {
          width: 100%;
          display: flex;
          justify-content: flex-end;
        }

        .btn-send {
          background-color: $primaryColor;
          color: white;
          font-size: 1rem;
          font-weight: 400;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
          padding: 0 34px;
          border-radius: 8px;
          height: 40px;

          &:hover {
            background-color: #0056b3;
            color: white;
            transform: translateY(-2px);
          }
        }
      }
    }
  }
</style>
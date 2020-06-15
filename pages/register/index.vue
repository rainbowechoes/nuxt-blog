<template>
  <div class="register">
    <div class="left-register position-register">
      <h3>Echo Blog</h3>
      <p>Echo Blog是一个基于Vue.js和Nuxt.js开发出的具有响应式布局以及丰富样式的个人博客</p>
    </div>
    <div class="right-register position-register">
      <!-- 注册表单 -->
      <div class="registerForm" v-show="showA === false & showB === false">
        <a-form :form="registerForm" @submit="handleRegisterSubmit">
          <a-form-item v-bind="formItemLayout">
            <span slot="label">
              用户名&nbsp;
              <a-tooltip title="只能包含字母或数据">
                <a-icon type="question-circle-o" />
              </a-tooltip>
            </span>
            <a-input
              v-decorator="[
                'username',
                {
                  rules: [{ required: true, message: '请输入用户名', whitespace: true }],
                },
              ]"
            />
          </a-form-item>

          <a-form-item v-bind="formItemLayout" label="密码：" has-feedback>
            <a-input
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: '请输入密码',
                    },
                    {
                      validator: validateToNextPassword,
                    },
                  ],
                },
              ]"
              type="password"
            />
          </a-form-item>
          <a-form-item v-bind="formItemLayout" label="确认密码：" has-feedback>
            <a-input
              v-decorator="[
                'confirm',
                {
                  rules: [
                    {
                      required: true,
                      message: '请重新确认密码',
                    },
                    {
                      validator: compareToFirstPassword,
                    },
                  ],
                },
              ]"
              type="password"
              @blur="handleConfirmBlur"
            />
          </a-form-item>

          <a-form-item
            v-bind="formItemLayout"
            label="人机验证"
            extra="我们需要对你进行人机验证"
          >
            <a-row :gutter="8">
              <a-col :span="12">
                <a-input
                  v-decorator="[
                    'captcha',
                    { rules: [{ required: true, message: '请进行人机验证' }] },
                  ]"
                />
              </a-col>
              <a-col :span="12">
                <a-button>验证</a-button>
              </a-col>
            </a-row>
          </a-form-item>
          <a-form-item v-bind="tailFormItemLayout">
            <a-button type="primary" html-type="submit">
              注册
            </a-button>
          </a-form-item>
        </a-form>
      </div>

      <!-- 邮箱登录表单 -->
      <div class="mailLoginForm" v-show="showA === false & showB === true">
        <a-form
          id="components-form-demo-normal-login"
          :form="mailLoginForm"
          class="login-form"
          @submit="handleMailLoginSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
          'mail',
          { rules: [{ required: true, message: '请输入你的邮箱' }] },
        ]"
              placeholder="账号绑定的邮箱地址"
            >
              <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
          'code',
          { rules: [{ required: true, message: '请输入验证码' }] },
        ]"
              placeholder="邮箱验证码"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
            >
              记住我
            </a-checkbox>
            <a class="login-form-forgot" href="">
              忘记密码
            </a>
            <a-button type="primary" html-type="submit" class="login-form-button">
              登录
            </a-button>
            或
            <a-button type="link" @click="fnChangeToRegister">
              注册
            </a-button>
          </a-form-item>
        </a-form>
      </div>

      <!-- 用户名密码登录表单 -->
      <div class="userLoginForm" v-show="showA === true & showB === false">
        <a-form
          id="components-form-demo-normal-login"
          :form="userLoginForm"
          class="login-form"
          @submit="handleUserLoginSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
          'username',
          { rules: [{ required: true, message: '请输入用户名' }] },
        ]"
              placeholder="用户名"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
          'password',
          { rules: [{ required: true, message: '请输入登录密码' }] },
        ]"
              type="password"
              placeholder="密码"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
            >
              记住我
            </a-checkbox>
            <a class="login-form-forgot" href="">
              忘记密码
            </a>
            <a-button type="primary" html-type="submit" class="login-form-button">
              登录
            </a-button>
              或
            <a-button type="link" @click="fnChangeToRegister">
              注册
            </a-button>
          </a-form-item>
        </a-form>
      </div>

      <!-- 手机号登录表单 -->
      <div class="phoneLoginForm" v-show="showA === true & showB === true">
        <a-form
          id="components-form-demo-normal-login"
          :form="phoneLoginForm"
          class="login-form"
          @submit="handlePhoneLoginSubmit"
        >
          <a-form-item>
            <a-input
              v-decorator="[
          'phone',
          { rules: [{ required: true, message: '请输入绑定的电话号码' }] },
        ]"
              placeholder="电话号码"
            >
              <a-icon slot="prefix" type="phone" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-decorator="[
          'code',
          { rules: [{ required: true, message: '请输入收到的手机登录验证码' }] },
        ]"
              placeholder="验证码"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
            >
              记住我
            </a-checkbox>
            <a class="login-form-forgot" href="">
              忘记密码
            </a>
            <a-button type="primary" html-type="submit" class="login-form-button">
              登录
            </a-button>
            或
            <a-button type="link" @click="fnChangeToRegister">
              注册
            </a-button>
          </a-form-item>
        </a-form>
      </div>

      <div style="margin: 0 auto">
        <a-button type="link" @click="fnChangeToMailLogin">邮箱登录</a-button>
        <el-divider direction="vertical"></el-divider>
        <a-button type="link" @click="fnChangeToUserLogin">账号密码登录</a-button>
        <el-divider direction="vertical"></el-divider>
        <a-button type="link" @click="fnChangeToPhoneLogin">手机登录</a-button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "index",
    layout: 'register',
    data() {
      return {
        showA: false,
        showB: false,
        confirmDirty: false,
        formItemLayout: {
          labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
          },
          wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
          },
        },
        tailFormItemLayout: {
          wrapperCol: {
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          },
        },
      };
    },
    beforeCreate() {
      this.registerForm = this.$form.createForm(this, { name: 'register' });
      this.mailLoginForm = this.$form.createForm(this, { name: 'normal_login' });
      this.userLoginForm = this.$form.createForm(this, { name: 'normal_login' });
      this.phoneLoginForm = this.$form.createForm(this, { name: 'normal_login' });
    },
    methods: {
      handleMailLoginSubmit(e) {
        e.preventDefault();
        this.mailLoginForm.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
      handlePhoneLoginSubmit(e) {
        e.preventDefault();
        this.phoneLoginForm.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
      handleUserLoginSubmit(e) {
        e.preventDefault();
        this.userLoginForm.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
      handleRegisterSubmit(e) {
        e.preventDefault();
        this.registerForm.validateFieldsAndScroll((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
      },
      handleConfirmBlur(e) {
        const value = e.target.value;
        this.confirmDirty = this.confirmDirty || !!value;
      },
      compareToFirstPassword(rule, value, callback) {
        const form = this.registerForm;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      },
      validateToNextPassword(rule, value, callback) {
        const form = this.registerForm;
        if (value && this.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      },
      fnChangeToUserLogin() {
        this.showA = true;
        this.showB = false;
      },
      fnChangeToPhoneLogin() {
        this.showA = true;
        this.showB = true;
      },
      fnChangeToMailLogin() {
        this.showA = false;
        this.showB = true;
      },
      fnChangeToRegister() {
        this.showA = false;
        this.showB = false;
      },
    },
  }
</script>

<style scoped>
  .register {
    margin: 0 auto;
    width: 800px;
    padding-top: 100px;
  }
  .left-register {
    width: 50%;
    float: left;
    background: rgba(0,0,0,.4);
    color: #fff;
  }
  .left-register > h3 {
    color: #fff;
  }
  .right-register {
    width: 50%;
    float: right;
    background-color: #fff;
  }

  .position-register {
    padding: 15px;
    background-clip: padding-box;
  }

  #components-form-demo-normal-login .login-form {
    max-width: 300px;
  }
  #components-form-demo-normal-login .login-form-forgot {
    float: right;
  }
  #components-form-demo-normal-login .login-form-button {
    width: 100%;
  }
</style>

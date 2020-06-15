<template>
  <div class="register">
    <div class="left-register position-register">
      <h3>Echo Blog</h3>
      <p>Echo Blog是一个基于Vue.js和Nuxt.js开发出的具有响应式布局以及丰富样式的个人博客</p>
    </div>
    <div class="right-register position-register">
      <a-form :form="form" @submit="handleSubmit">
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
                message: 'Please confirm your password!',
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
  </div>
</template>

<script>

  export default {
    name: "index",
    layout: 'register',
    data() {
      return {
        confirmDirty: false,
        autoCompleteResult: [],
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
      this.form = this.$form.createForm(this, { name: 'register' });
    },
    methods: {
      handleSubmit(e) {
        e.preventDefault();
        this.form.validateFieldsAndScroll((err, values) => {
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
        const form = this.form;
        if (value && value !== form.getFieldValue('password')) {
          callback('Two passwords that you enter is inconsistent!');
        } else {
          callback();
        }
      },
      validateToNextPassword(rule, value, callback) {
        const form = this.form;
        if (value && this.confirmDirty) {
          form.validateFields(['confirm'], { force: true });
        }
        callback();
      },
      handleWebsiteChange(value) {
        let autoCompleteResult;
        if (!value) {
          autoCompleteResult = [];
        } else {
          autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
        }
        this.autoCompleteResult = autoCompleteResult;
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
    height: 396px;
  }
</style>

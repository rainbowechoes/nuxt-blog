<template>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <div class="nav-container">
      <b-row>
        <b-col cols="2">
          <nuxt-link to="/">
            <b-navbar-brand href="">Echo Blog</b-navbar-brand>
          </nuxt-link>
        </b-col>
        <!-- 折叠栏，手机和平板可见 -->
        <b-col cols="2" offset="7" class="d-block d-sm-block d-md-block d-lg-none">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-col>
        <b-col cols="10">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <!-- 导航条内容 -->
              <b-nav-item-dropdown text="编程语言" >
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown text="开发框架" >
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown text="随笔" >
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item href="/message">留言板</b-nav-item>
              <b-nav-item href="/register" v-if="!isLogin">登录/注册</b-nav-item>
              <b-nav-item href="/profile" v-if="isLogin">
                <dent-icon user-id="zhanghaoman"></dent-icon>
              </b-nav-item>
              <b-nav-item href="/logout" v-if="isLogin">取消登录</b-nav-item>
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="搜索"></b-form-input>
                <nuxt-link to="/search?s=dfds">
                  <b-button size="sm" class="my-2 my-sm-0">Search</b-button>
                </nuxt-link>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
      </b-row>
    </div>
    <a-modal v-model="visible" @ok="handleOk" title="用户登录">
      <a-form
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
      >
        <a-form-item>
          <a-input
            v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
            placeholder="Username"
          >
            <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
          </a-input>
        </a-form-item>
        <a-form-item>
          <a-input
            v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
            type="password"
            placeholder="Password"
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
            Remember me
          </a-checkbox>
          <a class="login-form-forgot" href="">
            Forgot password
          </a>
          <a-button type="primary" html-type="submit" class="login-form-button">
            Log in
          </a-button>
          Or
          <a href="">
            register now!
          </a>
        </a-form-item>
      </a-form>

    </a-modal>
  </b-navbar>
</template>

<script>
import {BNavbar,
  BCollapse,
  BNavbarNav,
  BNavItemDropdown,
  BDropdownItem,
  BNavItem,
  BNavForm,
  BFormInput,
  BButton,
  BNavbarBrand,
  BNavbarToggle,
  BRow,
  BCol} from 'bootstrap-vue'
import DentIcon from './dent-icon'

export default {
  name: "Navigation",
  components: {
    BNavItemDropdown,
    BNavbarNav,
    BNavbar,
    BCollapse,
    BDropdownItem,
    BNavItem,
    BNavForm,
    BFormInput,
    BButton,
    BNavbarBrand,
    BNavbarToggle,
    BRow,
    BCol,
    DentIcon
  },
  data() {
    return {
      isLogin: false,
      visible: false
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    fnShowLoginModal() {
      this.visible = true
    },
    handleOk(e) {
      this.visible = false
    }
  }
}
</script>

<style scoped>

</style>

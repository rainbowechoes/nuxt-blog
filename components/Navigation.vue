<template>
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <div class="nav-container">
      <b-row>
        <b-col cols="2">
          <b-navbar-brand href="#">Echo Blog</b-navbar-brand>
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
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="搜索"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>
            </b-navbar-nav>
          </b-collapse>
        </b-col>
      </b-row>
    </div>
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
    BCol
  }
}
</script>

<style scoped>

</style>

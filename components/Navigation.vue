<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
  <b-navbar toggleable="lg" type="dark" variant="info" fixed="top">
    <div class="nav-container">
      <b-row>
        <b-col cols="2">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>
        </b-col>
        <b-col cols="2" offset="7" class="d-block d-sm-none">
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        </b-col>
        <b-col cols="10">
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item href="#">Link</b-nav-item>
              <b-nav-item href="#" disabled>Disabled</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>

              <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">ES</b-dropdown-item>
                <b-dropdown-item href="#">RU</b-dropdown-item>
                <b-dropdown-item href="#">FA</b-dropdown-item>
              </b-nav-item-dropdown>

              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
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

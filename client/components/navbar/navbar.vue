<template>
  <b-navbar toggleable="md" type="dark" variant="info">
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

    <nav class="navbar">
      <a class="navbar-brand" href="#/">
        <img src="@/assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        SampleTemplate
      </a>
    </nav>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="#/list">List</b-nav-item>
        <b-nav-item href="#/create">Create</b-nav-item>
      </b-navbar-nav>
    </b-collapse>

  </b-navbar>
</template>

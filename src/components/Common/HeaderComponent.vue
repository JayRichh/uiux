<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="navbar navbar-expand-lg navbar-light bg-secondary fixed-top">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand text-white">Learnings</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link text-white" active-class="active">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link text-white" active-class="active">About</RouterLink>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle text-white"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Learnings
            </a>
            <ul
              class="dropdown-menu dropdown-menu-end bg-secondary text-white"
              aria-labelledby="navbarDropdown"
              style="max-height: 300px; overflow-y: auto;"
            >
              <li><RouterLink to="/learnings/learnt-home" class="dropdown-item text-white">Home</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-nav" class="dropdown-item text-white">Navigation</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-cards" class="dropdown-item text-white">Cards</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-dashboards" class="dropdown-item text-white">Dashboards</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-embellishments" class="dropdown-item text-white">Embellishments</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-forms" class="dropdown-item text-white">Forms</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-generative-ai" class="dropdown-item text-white">Generative AI</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-hero" class="dropdown-item text-white">Hero</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-portfolio" class="dropdown-item text-white">Portfolio</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-prototyping" class="dropdown-item text-white">Prototyping</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-responsive" class="dropdown-item text-white">Responsive</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-reviewing" class="dropdown-item text-white">Reviewing</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-sub-pages" class="dropdown-item text-white">Sub Pages</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-tools" class="dropdown-item text-white">Tools</RouterLink></li>
              <li><RouterLink to="/learnings/learnt-ui-meaning" class="dropdown-item text-white">UI Meaning</RouterLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <div class="backdrop" @click="closeNavbar"></div>
</template>

<style scoped>
header {
  height: 60px;
}

.container-fluid {
  max-width: 1200px;
}
.navbar {
  background-color: #d9d9d9;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.nav-link.active {
  background-color: #bfbfbf;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.dropdown-item,
.dropdown-item:hover,
.dropdown-item:focus,
.nav-link:hover,
.nav-link:focus {
  background-color: #495057;
  color: white;
}

.dropdown-menu {
  background-color: #6c757d;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

@media (max-width: 992px) {
  .navbar-nav {
    text-align: center;
  }
}

.backdrop {
  display: none;
}

@media (max-width: 992px) {
  .navbar-collapse.show ~ .backdrop {
    display: block;
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1040;
  }
  .container-fluid {
    background: #6c757d;
  }
}

.navbar-collapse {
  transition: height 0.3s ease;
}

.dropdown-menu {
  transition: all 0.3s ease;
}

body {
  font-family: 'Arial', sans-serif;
  font-size: 16px;
  line-height: 1.5;
  color: #333;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: bold;
}

p {
  margin-bottom: 1rem;
}
</style>

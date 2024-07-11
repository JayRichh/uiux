<!-- eslint-disable vue/multi-word-component-names -->

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="about-container">
    <div class="about-content">
      <h2>About</h2>
      <p>This is a basic about page for my cup of coffee. It provides information about the coffee and its purpose.</p>
      <p>The coffee includes various aromas and features, such as:</p>
      <ul class="feature-list">
        <li>
          <RouterLink to="/learnings/learnt-home">Home</RouterLink>: The main landing page of the application.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-nav">Navigation</RouterLink>: Components and examples related to navigation in the application.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-cards">Cards</RouterLink>: Card components and examples.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-dashboards">Dashboards</RouterLink>: Dashboard components and examples.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-embellishments">Embellishments</RouterLink>: Embellishments and decorative elements in the application.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-forms">Forms</RouterLink>: Form components and examples.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-generative-ai">Generative AI</RouterLink>: Integration and examples of generative AI technologies.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-hero">Hero</RouterLink>: Hero components and examples.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-portfolio">Portfolio</RouterLink>: Portfolio components and examples.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-prototyping">Prototyping</RouterLink>: Prototyping tools and examples.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-responsive">Responsive</RouterLink>: Responsive design components and examples.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-reviewing">Reviewing</RouterLink>: Code review tools and examples.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-sub-pages">Sub Pages</RouterLink>: Sub-page components and examples.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-tools">Tools</RouterLink>: Various tools and utilities used in the application.
        </li>
        <li>
          <RouterLink to="/learnings/learnt-ui-meaning">UI Meaning</RouterLink>: Understanding the meaning and purpose of UI elements.
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.about-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
  position: relative;
  padding: 1rem;
}

.about-content {
  max-width: 800px;
  text-align: center;
}

h2 {
  color: #007bff;
  margin-bottom: 1rem;
}

p {
  margin-bottom: 1rem;
}

.feature-list {
  list-style-type: none;
  padding: 0;
  text-align: left;
}

.feature-list li {
  margin-bottom: 0.5rem;
}
</style>

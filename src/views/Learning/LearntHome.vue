<script setup lang="ts">
import { ref, onMounted, onUnmounted,  } from 'vue';
import { RouterLink } from 'vue-router';

const mapContainer = ref<HTMLElement | null>(null);
const draggingElement = ref<HTMLElement | null>(null);

const points = [
  { label: 'Home', link: '/learnings/learnt-home' },
  { label: 'Navigation', link: '/learnings/learnt-nav' },
  { label: 'Cards', link: '/learnings/learnt-cards' },
  { label: 'Dashboards', link: '/learnings/learnt-dashboards' },
  { label: 'Embellishments', link: '/learnings/learnt-embellishments' },
  { label: 'Forms', link: '/learnings/learnt-forms' },
  { label: 'Generative AI', link: '/learnings/learnt-generative-ai' },
  { label: 'Hero', link: '/learnings/learnt-hero' },
  { label: 'Portfolio', link: '/learnings/learnt-portfolio' },
  { label: 'Prototyping', link: '/learnings/learnt-prototyping' },
  { label: 'Responsive', link: '/learnings/learnt-responsive' },
  { label: 'Reviewing', link: '/learnings/learnt-reviewing' },
  { label: 'Sub Pages', link: '/learnings/learnt-sub-pages' },
  { label: 'Tools', link: '/learnings/learnt-tools' },
  { label: 'UI Meaning', link: '/learnings/learnt-ui-meaning' },
];

const randomizePositions = () => {
  const container = mapContainer.value;
  if (!container) return;

  const width = container.clientWidth;
  const height = container.clientHeight;
  const elements = container.querySelectorAll('.map-point, .map-center');
  
  if (!elements.length || elements.length !== points.length) return;
  
  elements.forEach((element) => {
    const size = (element as HTMLElement).classList.contains('map-center') ? 100 : 80;
    const x = Math.random() * (width - size);
    const y = Math.random() * (height - size);

    (element as HTMLElement).style.left = `${x}px`;
    (element as HTMLElement).style.top = `${y}px`;
  });
};
const handleMouseMove = (event: MouseEvent) => {
  if (!mapContainer.value) return;

  const points = mapContainer.value.querySelectorAll('.map-point, .map-center');
  points.forEach((point) => {
    const element = point as HTMLElement;
    const rect = element.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const dist = Math.sqrt(dx * dx + dy * dy);
    const maxDist = 200;
    const force = Math.max(0, (maxDist - dist) / maxDist);


    if (!draggingElement.value || !mapContainer.value) {
      element.style.transform = `translate(${dx * force}px, ${dy * force}px)`;
    } else {
      const containerRect = mapContainer.value.getBoundingClientRect();
      let newX = event.clientX - containerRect.left - draggingElement.value.offsetWidth / 2;
      let newY = event.clientY - containerRect.top - draggingElement.value.offsetHeight / 2;
      newX = Math.max(0, Math.min(newX, containerRect.width - draggingElement.value.offsetWidth));
      newY = Math.max(0, Math.min(newY, containerRect.height - draggingElement.value.offsetHeight));
      draggingElement.value.style.left = `${newX}px`;
      draggingElement.value.style.top = `${newY}px`;
    }
  });
};
const handleMouseDown = (event) => {
  event.preventDefault();
  draggingElement.value = event.target as HTMLElement;
  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
};

const handleMouseUp = () => {
  document.removeEventListener('mousemove', handleMouseMove);
  document.removeEventListener('mouseup', handleMouseUp);
  draggingElement.value = null;
  randomizePositions();
};

const handleMouseLeave = () => {
  if (!mapContainer.value) return;

  const points = mapContainer.value.querySelectorAll('.map-point, .map-center');
  points.forEach((point) => {
    const element = point as HTMLElement;
    element.style.transform = 'translate(0, 0)';
  });
};

onMounted(() => {
  if (mapContainer.value) {
    randomizePositions();
    mapContainer.value.addEventListener('mousemove', handleMouseMove);
    mapContainer.value.addEventListener('mouseleave', handleMouseLeave);
    mapContainer.value.addEventListener('mouseup', handleMouseUp);
    mapContainer.value.addEventListener('mousedown', handleMouseDown);
  }
});

onUnmounted(() => {
  if (mapContainer.value) {
    mapContainer.value.removeEventListener('mousemove', handleMouseMove);
    mapContainer.value.removeEventListener('mouseleave', handleMouseLeave);
    mapContainer.value.removeEventListener('mouseup', handleMouseUp);
    mapContainer.value.removeEventListener('mousedown', handleMouseDown);
  }
});
</script>

<template>
  <div class="container">
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
                style="max-height: 400px; overflow-y: auto;"
              >
                <li><a to="/learnings/learnt-home" class="dropdown-item text-white">Home</a></li>
                <li><a to="/learnings/learnt-nav" class="dropdown-item text-white">Navigation</a></li>
                <li><a to="/learnings/learnt-cards" class="dropdown-item text-white">Cards</a></li>
                <li><a to="/learnings/learnt-dashboards" class="dropdown-item text-white">Dashboards</a></li>
                <li><a to="/learnings/learnt-embellishments" class="dropdown-item text-white">Embellishments</a></li>
                <li><a to="/learnings/learnt-forms" class="dropdown-item text-white">Forms</a></li>
                <li><a to="/learnings/learnt-generative-ai" class="dropdown-item text-white">Generative AI</a></li>
                <li><a to="/learnings/learnt-hero" class="dropdown-item text-white">Hero</a></li>
                <li><a to="/learnings/learnt-portfolio" class="dropdown-item text-white">Portfolio</a></li>
                <li><a to="/learnings/learnt-prototyping" class="dropdown-item text-white">Prototyping</a></li>
                <li><a to="/learnings/learnt-responsive" class="dropdown-item text-white">Responsive</a></li>
                <li><a to="/learnings/learnt-reviewing" class="dropdown-item text-white">Reviewing</a></li>
                <li><a to="/learnings/learnt-sub-pages" class="dropdown-item text-white">Sub Pages</a></li>
                <li><a to="/learnings/learnt-tools" class="dropdown-item text-white">Tools</a></li>
                <li><a to="/learnings/learnt-ui-meaning" class="dropdown-item text-white">UI Meaning</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <div class="map-container" ref="mapContainer">
        <RouterLink
          v-for="(point, index) in points"
          :key="index"
          :to="point.link"
          :class="['map-point', index === 0 ? 'map-center' : '']"
        >{{ point.label }}</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  height: calc(100vh - (60px + 120px)); 
  width: 100%;
  padding: 0;
}

.navbar {
  flex-shrink: 0;
}

.map-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
}

.map-center {
  background-color: #007bff;
  color: white;
  padding: 20px;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  transition: transform 0.3s ease, left 0.3s ease, top 0.3s ease;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  position: absolute;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.map-point {
  background-color: #6c757d;
  color: white;
  padding: 10px;
  border-radius: 50%;
  text-align: center;
  text-decoration: none;
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  position: absolute;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

@media (max-width: 768px) {
  .map-center {
    width: 80px;
    height: 80px;
    font-size: 14px;
    padding: 15px;
  }

  .map-point {
    width: 60px;
    height: 60px;
    font-size: 12px;
    padding: 10px;
  }
}
</style>

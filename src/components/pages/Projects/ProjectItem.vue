<template>
  <div>
    <section class="section__title">
      <h4 class="title">{{ projectTitle }}</h4>
    </section>
    <section class="section__description">
      <p class="description">{{ projectDescription }}</p>
    </section>
  </div>
</template>

<script>
export default {
  props: ['title', 'description', 'stars', 'forks'],
  computed: {
    projectTitle() {
      return this.title
        .split('-')
        .map(currentTitle => currentTitle[0].toUpperCase() + currentTitle.slice(1))
        .join(' ');
    },
    projectDescription() {
      const description = this.description || 'There is no description provided for this project.';
      return description.length > 200 ? this.description.slice(0, 200) + '...' : description;
    },
  },
};
</script>

<style scoped>
div {
  padding: 0.5rem;
  width: 25rem;
  height: 10rem;
  margin: 1rem;
  background-color: #242424;
}

.title {
  color: rgb(232, 232, 232);
  font-size: 1.2rem;
  font-weight: 00;
  margin: 0;
  padding: 0;
}

.description {
  color: rgb(120, 120, 120);
}
</style>

<template>
  <div class="page">
    <div class="container">
      <div class="projects__container">
        <project-item
          v-for="project in projects"
          :title="project.name"
          :description="project.description"
        ></project-item>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectItem from './ProjectItem.vue';

export default {
  components: { ProjectItem },
  data() {
    return {
      projects: null,
    };
  },
  methods: {
    async getRepositories() {
      try {
        const res = await fetch('https://api.github.com/users/NicolasWebDeveloper/repos');
        if (!res.ok) throw new Error('Error while fetching data!');
        const data = await res.json();
        this.projects = data;
        console.log(this.projects);
      } catch (err) {
        console.error(err);
      }
    },
  },
  mounted() {
    this.getRepositories();
  },
};
</script>

<style scoped>
.projects__container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>

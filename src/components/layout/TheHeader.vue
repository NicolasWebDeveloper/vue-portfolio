<template>
  <section class="top"></section>
  <header>
    <router-link to="/"><h1>Nicolas</h1></router-link>
    <ul class="nav">
      <router-link to="/skills"><li class="nav__item">Skills</li></router-link>
      <router-link to="/projects"><li class="nav__item">Projects</li></router-link>
      <router-link to="/contact"><li class="nav__item">Contact</li></router-link>
    </ul>
  </header>
</template>

<style scoped>
header {
  top: 0rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  background-color: #1a1a1a;
  border-bottom: 1px solid #282828;
}

h1 {
  margin-left: 0.5rem;
  color: #c4d3cc;
  font-size: 1.4rem;
}

.nav {
  list-style-type: none;
  display: flex;
}
.nav__item {
  margin: 0.5rem;
  color: #c4d3cc;
  border: 0;
  /* color: ; */
}

a {
  text-decoration: none;
}

.top {
  margin-top: 3.5rem;
}
</style>

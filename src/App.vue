<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
export default {
  components: { TheHeader },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
* {
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
  font-weight: 100;
}

body {
  margin: 0;
  background-color: #1a1a1a;
}

.container {
  width: 95vw;
}

.page {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

::-webkit-scrollbar {
  display: none;
}
</style>

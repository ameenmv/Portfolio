<template>
  <div>
    <landing />
    <About />
    <Projects />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Landing from "../components/Landing.vue";
import About from "../components/About.vue";
import Projects from "../components/featuredProjects.vue";



import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "App",

  components: {
    Landing,
    About,
    Projects,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss" scoped></style>

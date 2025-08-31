<template>
  <div class="bg-[var(--bg)] min-h-[100vh] color-[var(--white)] pb-[70px]">
    <Navbar />
    <div class="containerr min-h-[100vh] !pt-[150px]">
      <div class="w-[100%] flex justify-center flex flex-col items-center">
        <p class="font2 text-[60px] font-bold text-[var(--white)]">
          My Projects
        </p>
        <p
          class="mt-7 font-bold text-[17px] text-[var(--white)] opacity-[.8] w-[70%] text-center leading-[1.5]"
        >
          I’ve worked on full-featured apps, from online stores to management
          systems, using Vue.js. I enjoy solving complex problems while keeping
          the user experience smooth. Here are some of my top projects
        </p>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 mt-15"
      >
        <div
          @click="goToProject(project.name)"
          v-for="project in projects"
          :key="project.id"
          class="project"
        >
          <img :src="project.img" alt="" />
          <div class="name">{{ project.name }}</div>
          <div class="title flex justify-between">
            {{ project.title }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <path
                d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
              />
            </svg>
          </div>
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
          <div class="four"></div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import { projects } from "../assets/projects";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
export default {
  name: "Projects",

  components: {
    Navbar,
    Footer,
  },
  data() {
    return {
      projects: projects,
    };
  },
  methods: {
    goToProject(name) {
      this.$router.push(`/projects/${name}`);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style lang="scss" scoped>
.project {
  width: 400px;
  border-radius: 20px;
  background: var(--black);
  color: var(--white);
  transition: 0.3s;
  z-index: 4;
  position: relative;

  img {
    width: 100%;
    border-radius: 20px;
    transition: 0.3s;
  }
  .name {
    font-size: 10px;
    margin-top: 10px;
    margin-left: 20px;
    letter-spacing: 1.2px;
    background: var(--bg);
    border-radius: 20px;
    padding: 8px;
    width: fit-content;
    opacity: 0.9;
  }
  .title {
    font-size: 22px;
    font-weight: 600;
    opacity: 0.9;
    margin-top: 10px;
    padding-bottom: 15px;
    margin-left: 20px;
    font-family: cursive;
    svg {
      width: 25px;
      height: 25px;
      fill: var(--white);
      margin-right: 25px;
      transition: 0.3s;
      transform: rotate(-40deg);
      transition: 0.3s;
    }
  }
  .one,
  .two,
  .three,
  .four {
    width: 30px;
    height: 30px;
    position: absolute;
    opacity: 0;
    transition: 0.3s;
  }
  .one {
    left: 0px;
    top: 0px;
    border-left: 1px solid #eee;
    border-top: 1px solid #eee;
  }
  .two {
    border-right: 1px solid #eee;
    border-top: 1px solid #eee;
    right: 0px;
    top: 0px;
  }
  .three {
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    right: 0px;
    bottom: 0px;
  }
  .four {
    border-left: 1px solid #eee;
    border-bottom: 1px solid #eee;
    left: 0px;
    bottom: 0px;
  }
}
.project:hover {
  border-radius: 0;
  svg {
    transform: rotate(0deg);
  }
  img {
    border-radius: 0;
  }
  .one {
    opacity: 1;
    left: -15px;
    top: -15px;
  }
  .two {
    opacity: 1;
    right: -15px;
    top: -15px;
  }
  .three {
    opacity: 1;
    right: -15px;
    bottom: -15px;
  }
  .four {
    opacity: 1;
    left: -15px;
    bottom: -15px;
  }
}
.project:hover,
.project:hover * {
  cursor: url("../assets/mini3.png") 64 64, pointer !important;
}
</style>

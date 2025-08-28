<template>
  <div class="bg-[var(--bg)] pb-10 section h-[fit-content] overflow-x-hidden">
    <div class="containerr">
      <div class="heading">
        <h1 class="!text-[var(--white)]">
          <span class="relative header2"
            >FEATURED PROJECTS<img class="image" src="../assets/hat.png" alt=""
          /></span>
        </h1>
      </div>
      <div class="w-[100%] flex flex-col gap-40 projects">
        <div @click="goToProject(project1.name)" class="project m-auto">
          <img :src="project1.img" alt="" />
          <div class="name">{{ project1.name }}</div>
          <div class="title flex justify-between">
            {{ project1.title }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
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

        <div @click="goToProject(project2.name)" class="project ml-[30%]">
          <img :src="project2.img" alt="" />
          <div class="name">{{ project2.name }}</div>
          <div class="title flex justify-between">
            {{ project2.title }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
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
        <div class="flex gap-10 items-center">
          <div @click="goToProject(project3.name)" class="project">
            <img class="h-[400px]" :src="project3.img" alt="" />
            <div class="name">{{ project3.name }}</div>
            <div class="title flex justify-between">
              {{ project3.title }}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
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
          <div
            @click="goToProject(project4.name)"
            class="project h-[fit-content]"
          >
            <img :src="project4.img" alt="" />
            <div class="name">{{ project4.name }}</div>
            <div class="title flex justify-between">
              {{ project4.title }}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
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
        <div @click="goToProject(project5.name)" class="project m-auto">
          <img :src="project5.img" alt="" />
          <div class="name">{{ project5.name }}</div>
          <div class="title flex justify-between">
            {{ project5.title }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
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
        <div @click="goToProject(project6.name)" class="project mr-[30%]">
          <img :src="project6.img" alt="" />
          <div class="name">{{ project6.name }}</div>
          <div class="title flex justify-between flex justify-between">
            {{ project6.title }}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
              <!--!Font Awesome Free v7.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.-->
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
      <router-link to="/projects">
        <div class="w-[100%] flex justify-center items-center">
          <div class="btnn ml-5 relative mt-20">
            <div class="btn">View More</div>
            <div class="btn2"></div>

            <img src="../assets/star.svg" class="onesvg svgg" alt="" />
            <img src="../assets/star.svg" class="twosvg svgg" alt="" />
            <img src="../assets/star.svg" class="threesvg svgg" alt="" />
            <img src="../assets/star.svg" class="foursvg svgg" alt="" />
            <img src="../assets/star.svg" class="fivesvg svgg" alt="" />
            <img src="../assets/star.svg" class="sixsvg svgg" alt="" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { projects } from "../assets/projects";

export default {
  name: "Projects",
  data() {
    return {
      project1: null,
      project2: null,
      project3: null,
      project4: null,
      project5: null,
      project6: null,
    };
  },
  created() {
    this.project1 = projects.find((p) => p.name === "MVLib");
    this.project2 = projects.find((p) => p.name === "MV LMS");
    this.project3 = projects.find((p) => p.name === "MVClinic");
    this.project4 = projects.find((p) => p.name === "Meditro");
    this.project5 = projects.find((p) => p.name === "KIIIBS");
    this.project6 = projects.find((p) => p.name === "Hidaaya");
  },
  methods: {
    goToProject(name) {
      this.$router.push(`/projects/${name}`);
    },
  },
  mounted() {
    // header2 animation

    gsap.from(".header2", {
      y: 100,
      opacity: 0.2,
      fontSize: "60px",
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".header2",
        start: "top 100%",
        end: "top 70%",
        scrub: true,
      },
    });

    // الأنيميشن التاني (طول ما انت بتسكرول جوه السيكشن)
    gsap.fromTo(
      ".header2",
      {
        y: 0,
        opacity: 1,
        fontSize: "90px", // تبدأ من 90 زي ما كتبت
      },
      {
        y: () => document.querySelector(".section").offsetHeight - 1400,
        opacity: 0.7,
        fontSize: "75px",
        scrollTrigger: {
          trigger: ".section",
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      }
    );

    // الأنيميشن بتاع الصورة زي ما هو
    gsap.fromTo(
      ".image",
      {
        y: -1000,
        opacity: 0.2,
      },
      {
        y: 0,
        opacity: 1,
        scrollTrigger: {
          trigger: ".section",
          start: "top 90%",
          end: "top top",
          scrub: true,
        },
      }
    );

    // gsap.to(".projects", {
    //   y: -3500,
    //   duration: 10,
    //   scrollTrigger: {
    //     trigger: ".section",
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: true,
    //     markers: true,
    //   },
    // });
  },
};
</script>

<style lang="scss" scoped>
.header2 {
  img {
    width: 200px;
    position: absolute;
    top: -120px;
    right: -100px;
    transform: rotate(22deg);
  }
}
.project {
  width: 750px;
  border-radius: 50px;
  background: var(--black);
  color: var(--white);
  transition: 0.3s;
  z-index: 4;
  position: relative;

  img {
    width: 100%;
    border-radius: 50px;
    transition: 0.3s;
  }
  .name {
    font-size: 12px;
    margin-top: 10px;
    margin-left: 20px;
    letter-spacing: 1.2px;
    background: var(--bg);
    border-radius: 50px;
    padding: 8px;
    width: fit-content;
    opacity: 0.9;
  }
  .title {
    font-size: 28px;
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
    width: 35px;
    height: 35px;
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

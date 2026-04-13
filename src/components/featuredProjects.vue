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
          <div class="overflow-hidden">
            <img class="projectimage" :src="project1.img" alt="" />
          </div>

          <div class="name">{{ project1.name }}</div>
          <div class="title flex justify-between">
            {{ project1.title }}
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

        <div @click="goToProject(project2.name)" class="project ml-[30%]">
          <div class="overflow-hidden">
            <img class="projectimage" :src="project2.img" alt="" />
          </div>

          <div class="name">{{ project2.name }}</div>
          <div class="title flex justify-between">
            {{ project2.title }}
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
        <div class="flex gap-10 items-center">
          <div @click="goToProject(project3.name)" class="project">
            <div class="overflow-hidden">
              <img class="projectimage" :src="project3.img" alt="" />
            </div>

            <div class="name">{{ project3.name }}</div>
            <div class="title flex justify-between">
              {{ project3.title }}
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
          <div
            @click="goToProject(project4.name)"
            class="project h-[fit-content]"
          >
            <div class="overflow-hidden">
              <img class="projectimage" :src="project4.img" alt="" />
            </div>

            <div class="name">{{ project4.name }}</div>
            <div class="title flex justify-between">
              {{ project4.title }}
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
        <div @click="goToProject(project5.name)" class="project m-auto">
          <div class="overflow-hidden">
            <img class="projectimage" :src="project5.img" alt="" />
          </div>

          <div class="name">{{ project5.name }}</div>
          <div class="title flex justify-between">
            {{ project5.title }}
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
        <div @click="goToProject(project6.name)" class="project mr-[30%]">
          <div class="overflow-hidden">
            <img class="projectimage" :src="project6.img" alt="" />
          </div>

          <div class="name">{{ project6.name }}</div>
          <div class="title flex justify-between flex justify-between">
            {{ project6.title }}
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
      <div class="w-[100%] flex justify-center items-center">
        <router-link to="/projects">
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
        </router-link>
      </div>
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
    this.project1 = projects.find((p) => p.name === "Exclusive");
    this.project2 = projects.find((p) => p.name === "MVLib");
    this.project3 = projects.find((p) => p.name === "MV LMS");
    this.project4 = projects.find((p) => p.name === "MVClinic");

    this.project5 = projects.find((p) => p.name === "KIIIBS");
    this.project6 = projects.find((p) => p.name === "Hidaaya");
  },
  methods: {
    goToProject(name) {
      this.$router.push(`/projects/${name}`);
    },
  },
  mounted() {
    const isMobile = window.innerWidth < 800;

    // header2 animation - Reading computed font sizes for responsive override safety
    const headerEl = this.$el.querySelector(".header2");
    const computedSize = headerEl
      ? window.getComputedStyle(headerEl).fontSize
      : "90px";
    const startSize = Math.round(parseInt(computedSize) * 0.6) + "px";
    const endSize = computedSize;
    const shrinkSize = Math.round(parseInt(computedSize) * 0.8) + "px";

    gsap.from(".header2", {
      y: isMobile ? 50 : 100,
      opacity: 0.2,
      fontSize: startSize,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".header2",
        start: "top 100%",
        end: "top 70%",
        scrub: 1, // Smooth scrub
      },
    });

    gsap.fromTo(
      ".header2",
      {
        y: 0,
        opacity: 1,
        fontSize: endSize,
      },
      {
        y: () => document.querySelector(".section").offsetHeight - (isMobile ? 500 : 1400),
        opacity: 0.5,
        fontSize: shrinkSize,
        scrollTrigger: {
          trigger: ".section",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      }
    );

    // Hat image animation - giving it a bit more spin/bounce character
    gsap.fromTo(
      ".image",
      {
        y: isMobile ? -300 : -800,
        opacity: 0,
        rotation: 0,
        scale: 0.5,
      },
      {
        y: 0,
        opacity: 1,
        rotation: 22,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".section",
          start: "top 90%",
          end: "top 10%",
          scrub: 1.5,
        },
      }
    );

    // Premium Card Animations
    gsap.utils.toArray(".project").forEach((project) => {
      // 1. The Card Entrance (3D Slide up)
      gsap.from(project, {
        y: 80,
        opacity: 0,
        rotationX: 15,
        transformPerspective: 1000,
        transformOrigin: "center top",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: project,
          start: "top 85%", // Trigger right before it comes into full view
        },
      });

      // 2. The Internal Image Parallax + Scrub
      const img = project.querySelector(".projectimage");
      if (img) {
        gsap.fromTo(
          img,
          {
            scale: 1.25,
            yPercent: -5,
          },
          {
            scale: 1,
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: project,
              start: "top bottom",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }
    });

    // View More Button Reveal
    const btnContainer = this.$el.querySelector(".btnn.relative.mt-20");
    if (btnContainer) {
      gsap.from(btnContainer, {
        opacity: 0,
        y: 30,
        scale: 0.9,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: btnContainer,
          start: "top 90%",
        },
      });
    }
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
  max-width: 750px;
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
    font-family: angry;
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

@media (max-width: 1024px) {
  .project {
    margin-left: 0 !important;
    margin-right: 0 !important;
  }

  .projectimage {
    height: auto !important;
    max-height: 400px;
    width: 100%;
    object-fit: cover;
  }

  .flex.gap-10 {
    flex-direction: column;
    gap: 150px;
  }
}

@media (max-width: 991px) {
  .header2 {
    font-size: 60px !important;
    letter-spacing: -1px !important;
  }

  .projectimage {
    max-height: 350px;
  }
}

@media (max-width: 767px) {
  .header2 {
    font-size: 32px !important;
    letter-spacing: 2px !important;
  }

  .heading {
    height: 50vh;
  }

  .image {
    width: 160px !important;
  }

  .projectimage {
    max-height: 300px;
  }

  .projects {
    gap: 80px !important;
  }
  .flex.gap-10 {
    gap: 80px !important;
  }
  .title {
    font-size: 24px !important;
  }
}

@media (max-width: 600px) {
  .header2 {
    font-size: 26px !important;
    letter-spacing: 1px !important;
  }
  .heading {
    height: 40vh;
  }
  .image {
    width: 130px !important;
    right: -70px !important;
  }

  .projectimage {
    max-height: 250px;
  }

  .projects {
    gap: 60px !important;
  }
  .flex.gap-10 {
    gap: 40px !important;
  }
  .title {
    font-size: 20px !important;
  }
}

@media (max-width: 480px) {
  .header2 {
    font-size: 26px !important;
    letter-spacing: 0.5px !important;
  }

  .image {
    width: 100px !important;
    right: -50px !important;
  }

  .projectimage {
    max-height: 200px;
  }

  .projects {
    gap: 40px !important;
  }
  .title {
    font-size: 20px !important;
  }
}
</style>

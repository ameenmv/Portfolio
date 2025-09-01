<template>
  <div class="h-[100vh] bg-[var(--bg)]">
    <navbar />
    <div
      class="h-[100vh] w-[100%] flex justify-center items-center relative perspective-[5000px] pt-[8vh]"
    >
      <div class="center">
        <p class="one">Ameen</p>
        <p class="two">Mohamed</p>
      </div>
      <p class="absolute work text-[13px]">
        <span class="w-3 h-3 rounded-full bg-[#2ecc71] animate-pulse"></span>
        Avilable for work
      </p>
      <img
        class="absolute top-[65%] w-[300px] rounded-[8px] left-[50%] card"
        ref="card"
        src="../assets/meee.jpg"
        alt=""
        loading="lazy"
        decoding="async"
        fetchpriority="high"
      />
      <div class="cont">
        <div
          v-for="(icon, index) in icons"
          :key="index"
          class="icon-container w-16 h-16 flex justify-center mr-5 items-center rounded-full bg-white cursor-pointer"
          @mousemove="magneticEffect($event, index)"
          @mouseleave="resetIcon(index)"
          ref="socialIcons"
        >
          <a
            class="flex justify-center items-center"
            :href="icon.link"
            target="_blank"
            ><svg
              v-html="icon.svg"
              xmlns="http://www.w3.org/2000/svg"
              class="w-8 h-8"
              viewBox="0 0 24 24"
              fill="currentColor"
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

import { gsap } from "gsap";

export default {
  name: "Landing",
  components: {
    Navbar,
  },
  data() {
    return {
      icons: [
        {
          link: "https://www.linkedin.com/in/ameeenmv",
          name: "LinkedIn",
          svg: `<path d="M4.98 3.5a2.5 2.5 0 1 1-5 0
          2.5 2.5 0 0 1 5 0ZM.5 8.5h4.9v13H.5v-13Zm7.5 0h4.7v1.8h.1c.7-1.3
          2.5-2.6 5.1-2.6 5.5 0 6.5 3.6 6.5 8.2v9.6h-4.9v-8.5c0-2 0-4.6-2.8-4.6-2.8
          0-3.2 2.2-3.2 4.5v8.6H8v-13Z"/>`,
        },
        {
          link: "https://github.com/ameenmv",
          name: "GitHub",
          svg: `<path d="M12 .5C5.73.5.5 5.73.5
          12c0 5.1 3.29 9.4 7.86 10.94.58.1.79-.25.79-.56
          0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72
          1.18.08 1.8 1.21 1.8 1.21 1.04 1.79 2.74 1.27 3.41.97.1-.75.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7
          0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31
          3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63
          1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69
          5.41-5.25 5.7.42.36.8 1.07.8 2.16 0 1.56-.01 2.82-.01
          3.2 0 .31.21.67.8.56A10.51 10.51 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z"/>`,
        },
        {
          link: "https://www.instagram.com/ameeen_mv",
          name: "Instagram",
          svg: `<path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75
          5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75
          5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25
          4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25
          4.25 0 0 0 16.25 3.5h-8.5Zm8.75 2a.75.75 0 1 1 0 1.5.75.75 0
          0 1 0-1.5Zm-4.75 1.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5Zm0
          1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"/>`,
        },
        {
          link: "https://x.com/ameeen_mv",
          name: "Twitter",
          svg: `<path d="M19.633 7.997c.013.175.013.35.013.524 0
          5.33-4.056 11.475-11.475 11.475-2.28 0-4.402-.662-6.186-1.809.324.037.636.05.973.05a8.07
          8.07 0 0 0 5.003-1.722 4.037 4.037 0 0 1-3.768-2.797c.25.037.487.062.75.062.35
          0 .699-.05 1.024-.137a4.027 4.027 0 0 1-3.23-3.955v-.05c.537.3
          1.162.487 1.824.512a4.022 4.022 0 0 1-1.798-3.354c0-.75.2-1.424.55-2.018a11.44
          11.44 0 0 0 8.306 4.214c-.063-.3-.1-.612-.1-.924a4.026 4.026 0
          0 1 6.96-2.753 7.957 7.957 0 0 0 2.55-.974 4.02 4.02 0 0 1-1.774
          2.22 7.996 7.996 0 0 0 2.313-.624 8.642 8.642 0 0 1-2.012
          2.087Z"/>`,
        },
      ],
    };
  },
  mounted() {
   
    window.scrollTo(0, 0);
    

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    

    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        window.scrollTo(0, 0);
      }
    });
    
    window.addEventListener("mousemove", this.handleMouseMove);
    window.addEventListener("mouseleave", this.resetCard);
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseleave", this.resetCard);
  },
  methods: {
    magneticEffect(e, index) {
      const icon = this.$refs.socialIcons[index];
      const bounds = icon.getBoundingClientRect();

      const offsetX = e.clientX - (bounds.left + bounds.width / 2);
      const offsetY = e.clientY - (bounds.top + bounds.height / 2);

      gsap.to(icon, {
        x: offsetX * 1,
        y: offsetY * 1,
        duration: 0.3,
        ease: "power2.out",
      });
    },
    resetIcon(index) {
      const icon = this.$refs.socialIcons[index];
      gsap.to(icon, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: "elastic.out(1, 0.4)",
      });
    },

    handleMouseMove(e) {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const offsetX = e.clientX - centerX;
      const offsetY = e.clientY - centerY;

      const rotateY = offsetX / 40;
      const rotateX = -offsetY / 40;

      const moveX = offsetX / 15;
      const moveY = offsetY / 15;

      gsap.to(this.$refs.card, {
        rotateX,
        rotateY,
        x: moveX,
        y: moveY,
        duration: 0.5,
        ease: "power2.out",
      });
    },
    resetCard() {
      gsap.to(this.$refs.card, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        duration: 1,
        ease: "elastic.out(1, 0.4)",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.cont {
  display: flex;
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.card {
  display: block;
  transform-style: preserve-3d;
  transform: translate(-50%, -50%);
}
.center {
  font-size: 170px;
  font-weight: 500;
  letter-spacing: 20px;
  text-transform: uppercase;
  color: var(--white);
  text-align: center;
  font-family: "angry", sans-serif;
  margin-top: 40px;
}
.work {
  left: 15px;
  bottom: 15px;
  color: white;
  font-weight: 500;
  opacity: 0.7;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  span {
    width: 12px;
    height: 12px;
    background: var(--green);
    display: block;
    border-radius: 50%;
    margin-right: 10px;
  }
}

@media (max-width: 1500px) {
  .center {
    font-size: 180px;
  }
  .card {
    width: 320px;
  }
  .icon-container {
    width: 55px;
    height: 55px;
    a {
      width: 30px;
      height: 30px;
    }
  }
}
@media (max-width: 1200px) {
  .center {
    font-size: 150px;
  }
  .card {
    width: 300px;
  }
  .icon-container {
    width: 55px;
    height: 55px;
    a {
      width: 30px;
      height: 30px;
    }
  }
}
@media (max-width: 1000px) {
  .center {
    font-size: 100px;
  }
  .card {
    width: 260px;
  }
  .cont {
    top: 30%;
  }
}
@media (max-width: 700px) {
  .center {
    font-size: 40px;
    margin-top: 0;
  }
  .card {
    width: 180px;
  }
  .cont {
    top: 35%;
  }
  .icon-container {
    width: 45px;
    height: 45px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
}
</style>

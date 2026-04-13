<template>
  <div class="bg-[white] pb-[70px] about" ref="aboutSection">
    <div class="containerr">
      <div class="heading">
        <h1 class="header">about ameen</h1>
      </div>
    </div>
    <div class="videocont flex items-center justify-center relative">
      <video
        ref="videoEl"
        class="video rounded-[20px]"
        :src="videoSrc"
        loop
        muted
        playsinline
        preload="none"
      ></video>
    </div>
    <div class="containerr content">
      <div class="relative trigger">
        <p
          ref="animatedText"
          class="text-[26px] text font-semibold mt-[100px] animated-text relative leading-[2] kalam"
        >
          Front-End Developer with 1+ year of experience specializing in Vue.js
          and Nuxt.js, with a solid foundation in modern JavaScript. I focus on
          building scalable, high-performance, and user-friendly web
          applications using clean, maintainable code. I enjoy working in
          collaborative environments and turning real business requirements into
          reliable digital solutions.
        </p>
        <div
          class="box box1 kalam absolute left-[-150px] top-[-20px] !rotate-[-2deg]"
        >
          Vue.js
        </div>
        <div
          class="box box2 kalam absolute left-[-150px] top-[45%] !rotate-[-2deg]"
        >
          React.js
        </div>
        <div
          class="box box3 kalam absolute left-[-150px] bottom-[-60px] !rotate-[-2deg]"
        >
          Tailwind CSS
        </div>
        <div
          class="box box4 kalam absolute right-[-100px] top-[-20px] !rotate-[2deg]"
        >
          Gsap
        </div>
        <div
          class="box box5 kalam absolute right-[-100px] top-[45%] !rotate-[2deg]"
        >
          PHP
        </div>
        <div
          class="box box6 kalam absolute right-[-100px] bottom-[-60px] !rotate-[2deg]"
        >
          Laravel
        </div>
      </div>

      <div class="w-[100%] flex justify-center">
        <div class="btnn relative mt-20" ref="cvBtn">
          <a href="https://drive.google.com/file/d/1IZAIni6HLAIoZcogVE7WbQBQf_dPkwO9/view?usp=sharing" target="_blank">
            <div class="btn">Preview My CV ?</div>
            <div class="btn2"></div>
            <img src="../assets/star.svg" class="onesvg svgg" alt="" />
            <img src="../assets/star.svg" class="twosvg svgg" alt="" />
            <img src="../assets/star.svg" class="threesvg svgg" alt="" />
            <img src="../assets/star.svg" class="foursvg svgg" alt="" />
            <img src="../assets/star.svg" class="fivesvg svgg" alt="" />
            <img src="../assets/star.svg" class="sixsvg svgg" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import meVideo from "../assets/me.mp4";
gsap.registerPlugin(ScrollTrigger, Draggable);

export default {
  name: "About",
  data: function () {
    return {
      videoSrc: null,
      skills: [
        "Vue.js",
        "React.js",
        "JavaScript",
        "TypeScript",
        "Unit Testing",
        "ECMAScript 6",
        "HTML",
        "PugJS",
        "Gulp.js",
        "CSS",
        "SASS",
        "Tailwind CSS",
        "Bootstrap",
        "Vuetify",
        "Vue Router",
        "Vuex",
        "Pinia",
        "GSAP",
        "Three.js",
      ],
      skills2: ["PHP", "Laravel", "MySQL", "Database", "RESTful APIs"],
      skills3: [
        "Cs50",
        "C++",
        "C#",
        "Python",
        "OOP",
        "DataStructure",
        "Algorithms",
        "Git",
        "GitHub",
        "English",
        "Research Skills",
        "Freelancing",
        "Project Management",
      ],
    };
  },
  mounted() {
    // Lazy-load the video when it approaches viewport to reduce initial load
    const vidEl = this.$refs.videoEl;
    if (vidEl && "IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.videoSrc = meVideo;
              this.$nextTick(() => {
                vidEl.load();
                const playPromise = vidEl.play();
                if (playPromise && typeof playPromise.catch === "function") {
                  playPromise.catch(() => {
                    /* autoplay blocked — fine to leave muted or user can play */
                  });
                }
              });
              obs.unobserve(entry.target);
            }
          });
        },
        { root: null, rootMargin: "200px", threshold: 0.1 }
      );
      observer.observe(vidEl);
    } else if (vidEl) {
      // Fallback: load immediately on older browsers
      this.videoSrc = meVideo;
    }

    const isMobile = window.innerWidth < 800;

    // header animation — use CSS-computed font size so it doesn't clash with responsive overrides
    const headerEl = this.$el.querySelector(".header");
    const computedSize = headerEl
      ? window.getComputedStyle(headerEl).fontSize
      : "90px";
    const startSize = Math.round(parseInt(computedSize) * 0.65) + "px";
    const endSize = computedSize;
    const endSizeShrink = Math.round(parseInt(computedSize) * 0.95) + "px";

    gsap.from(".header", {
      y: isMobile ? 50 : 100,
      opacity: 0.1,
      duration: 2,
      fontSize: startSize,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".header",
        start: "top 100%",
        end: "top 70%",
        scrub: true,
      },
    });

    gsap.fromTo(
      ".header",
      {
        y: 0,
        opacity: 1,
        fontSize: endSize,
      },
      {
        duration: 10,
        y: isMobile ? 80 : 150,
        opacity: 0.7,
        fontSize: endSizeShrink,
        scrollTrigger: {
          trigger: ".header",
          start: "top 70%",
          end: "top 30%",
          scrub: true,
        },
      }
    );

    // video animations
    gsap.to(".video", {
      y: isMobile ? -80 : -200,
      duration: 5,
      scrollTrigger: {
        trigger: ".video",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    gsap.to(".video", {
      scale: isMobile ? 1.3 : 2,
      duration: 5,
      scrollTrigger: {
        trigger: ".video",
        start: "top 50%",
        scrub: true,
      },
    });

    this.initTextAnimation();
    this.initBoxesAnimation(isMobile);
    this.initButtonAnimation();
  },
  methods: {

    /* ── Text: Word-by-word opacity with y-shift ── */
    initTextAnimation() {
      const el = this.$refs.animatedText;
      const words = el.innerText.split(" ");
      el.innerHTML = words
        .map((word) => `<span>${word}</span>`)
        .join(" ");

      const spans = el.querySelectorAll("span");

      // Initial state
      gsap.set(spans, { opacity: 0.1, y: 8 });

      // Scroll-driven word reveal
      gsap.to(spans, {
        opacity: 1,
        y: 0,
        stagger: 0.15,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 65%",
          scrub: 1.5,
        },
      });
    },

    /* ── Skill Boxes: responsive animation ── */
    initBoxesAnimation(isMobile) {
      const leftBoxes = this.$el.querySelectorAll(".box1, .box2, .box3");
      const rightBoxes = this.$el.querySelectorAll(".box4, .box5, .box6");
      const allBoxes = this.$el.querySelectorAll(".box");

      if (isMobile) {
        // On mobile, boxes are repositioned below text — animate from bottom with opacity
        gsap.set(allBoxes, { opacity: 0, y: 30 });

        gsap.to(allBoxes, {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trigger",
            start: "bottom 85%",
            end: "bottom 50%",
            scrub: 1,
          },
        });
      } else {
        // On desktop, boxes are on the sides — animate from x direction
        gsap.set(leftBoxes, { opacity: 0, x: -60, rotation: -8 });
        gsap.set(rightBoxes, { opacity: 0, x: 60, rotation: 8 });

        gsap.to(leftBoxes, {
          opacity: 1,
          x: 0,
          rotation: -2,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trigger",
            start: "top 75%",
            end: "center 60%",
            scrub: 1,
          },
        });

        gsap.to(rightBoxes, {
          opacity: 1,
          x: 0,
          rotation: 2,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trigger",
            start: "top 75%",
            end: "center 60%",
            scrub: 1,
          },
        });
      }

      // Draggable with snap-back
      Draggable.create(".box", {
        type: "x,y",
        inertia: true,
        onRelease: function () {
          gsap.to(this.target, {
            x: 0,
            y: 0,
            duration: 0.8,
            ease: "elastic.out(2.4, 2.4)",
          });
        },
      });
    },

    /* ── CV Button: scale entrance ── */
    initButtonAnimation() {
      const btn = this.$refs.cvBtn;
      if (!btn) return;

      gsap.set(btn, { opacity: 0, y: 30, scale: 0.9 });

      gsap.to(btn, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: btn,
          start: "top 90%",
          end: "top 70%",
          scrub: 1,
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
video {
  scale: 1;
}

.videocont {
  padding: 0 20px;
}

.video {
  width: 50%;
  max-width: 600px;
  min-width: 300px;
  height: auto;
  aspect-ratio: 16/9;
}

.content {
  line-height: 1.6;
  padding: 0 100px;
}

:deep(.animated-text span) {
  display: inline-block;
  margin-right: 5px;
  will-change: transform, opacity;
}

.box {
  font-weight: bold;
  padding: 10px 20px;
  border-radius: 20px;
  width: fit-content;
  background: var(--white);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  will-change: transform, opacity;
  transition: box-shadow 0.3s;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px, rgba(0, 0, 0, 0.08) 0px 8px 24px;
  }
}

.btn {
  color: #000;
  border: 1px solid #000;
}

.btn2 {
  border: 1px solid #eee;
}

.btnn:hover .btn {
  color: #000;
  background-color: var(--bg);
  border: 1px solid #000;
}

.btnn:hover .btn2 {
  border: 2px solid #000;
}

.svgg {
  filter: brightness(0) invert(1);
}

.btnn:hover .svgg {
  filter: none;
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: var(--bg);
  z-index: -1;
  transition: width 0.5s ease;
  border-radius: 50px;
}

.btnn:hover .btn::before {
  width: 100%;
}

.btnn:hover .btn {
  color: var(--white);
}

@media (max-width: 1500px) {
  .content {
    padding: 0 80px;
  }
}

@media (max-width: 1200px) {
  .content {
    padding: 0 60px;
  }

  .video {
    width: 60%;
  }
}

@media (max-width: 991px) {
  .content {
    padding: 0 40px;
  }

  .video {
    width: 70%;
  }

  .header {
    font-size: 60px !important;
    letter-spacing: -2px !important;
  }
}

@media (max-width: 800px) {
  .content {
    padding: 0 30px !important;
    margin: 0 auto !important;
    width: 100% !important;
  }

  .heading {
    height: 60vh;
  }

  .video {
    width: 85%;
    min-width: 280px;
  }

  .content p {
    font-size: 20px;
    margin-top: -10px;
  }

  .btnn {
    margin-top: 200px;
  }

  .header {
    font-size: 50px !important;
    letter-spacing: -1px !important;
  }

  .box1 {
    top: 105%;
    left: 0;
    transform: rotate(-2deg) scale(0.9);
  }

  .box2 {
    top: 120%;
    left: 0%;
    transform: rotate(-2deg) scale(0.9);
  }

  .box3 {
    bottom: -14%;
    left: 30%;
    transform: rotate(-2deg) scale(0.9);
  }

  .box4 {
    top: 120%;
    left: 41%;
    transform: rotate(2deg) scale(0.9);
  }

  .box5 {
    top: 100%;
    left: 80%;
    transform: rotate(2deg) scale(0.9);
  }

  .box6 {
    bottom: -30%;
    right: 0%;
    transform: rotate(2deg) scale(0.9);
  }
}

@media (max-width: 600px) {
  .content {
    padding: 0 20px !important;
  }

  .heading {
    height: 45vh;
  }

  .video {
    width: 90%;
    min-width: 250px;
  }

  .content p {
    font-size: 18px;
    line-height: 1.8;
  }

  .header {
    font-size: 40px !important;
  }

  .btnn {
    margin-top: 150px;
  }

  .box1 {
    top: 110%;
    left: 2%;
    transform: rotate(-2deg) scale(0.85);
  }

  .box2 {
    top: 125%;
    left: 2%;
    transform: rotate(-2deg) scale(0.85);
  }

  .box3 {
    bottom: -18%;
    left: 32%;
    transform: rotate(-2deg) scale(0.85);
  }

  .box4 {
    top: 125%;
    left: 42%;
    transform: rotate(2deg) scale(0.85);
  }

  .box5 {
    top: 100%;
    left: 78%;
    transform: rotate(2deg) scale(0.85);
  }

  .box6 {
    bottom: -40%;
    right: 2%;
    transform: rotate(2deg) scale(0.85);
  }

  .box {
    padding: 10px 18px;
    font-size: 16px;
  }
  .btnn {
    margin-top: 160px !important;
  }
}

@media (max-width: 480px) {
  .content {
    padding: 0 15px !important;
  }

  .video {
    width: 95%;
    min-width: 220px;
  }

  .content p {
    font-size: 18px !important;
  }

  .header {
    font-size: 32px !important;
  }

  .btnn {
    margin-top: 120px;
  }

  .box2 {
    top: 130%;
    left: 5%;
    transform: rotate(-2deg) scale(0.8);
  }

  .box3 {
    bottom: -20%;
    left: 35%;
    transform: rotate(-2deg) scale(0.8);
  }

  .box4 {
    top: 125%;
    left: 45%;
    transform: rotate(2deg) scale(0.8);
  }

  .box5 {
    top: 104%;
    left: 75%;
    transform: rotate(2deg) scale(0.8);
  }

  .box6 {
    bottom: -40%;
    right: 5%;
    transform: rotate(2deg) scale(0.8);
  }
}
</style>

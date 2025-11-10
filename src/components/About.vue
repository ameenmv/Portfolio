<template>
  <div class="bg-[white] pb-[70px] about">
    <div class="containerr">
      <div class="heading"> 
        <h1 class="header">about ameen</h1>
      </div>
    </div>
    <div class="videocont flex items-center justify-center relative">
      <video
        class="video rounded-[20px]"
        src="../assets/me.mp4"
        loop
        muted
        autoplay
      ></video>
    </div>
    <div class="containerr content">
      <div class="relative trigger">
        <p
          ref="animatedText"
          class="text-[26px] text font-semibold mt-[100px] animated-text relative leading-[2] kalam"
        >
          Front-End Developer with 1 year experience in Vue.js and solid
          knowledge of React, along with expertise in JavaScript. I focus on
          building efficient, scalable, and user-friendly web applications with
          clean and maintainable code. I'm a fast learner and work closely with
          teams and clients to deliver real-world digital solutions. Let's
          collaborate to bring your ideas to life.
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
        <div class="btnn relative mt-20">
          <a
            href="https://drive.google.com/file/d/1ka64aGMrpVLL2XMh7FFTvvwckzTFXyij/view?usp=drive_link"
            target="_blank"
          >
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
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Draggable from "gsap/Draggable";
gsap.registerPlugin(ScrollTrigger, Draggable);

export default {
  name: "About",
  data: function () {
    return {
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
    // header animation
    gsap.from(".header", {
      y: 100,
      opacity: 0.1,
      duration: 2,
      fontSize: "60px",
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
        fontSize: "90px",
      },
      {
        duration: 10,
        y: 150,
        opacity: 0.7,
        fontSize: "85px",
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
      y: -200,
      duration: 5,
      scrollTrigger: {
        trigger: ".video",
        start: "top 100%",
        end: "bottom 100%",
        scrub: true,
      },
    });

    gsap.to(".video", {
      scale: 2,
      duration: 5,
      scrollTrigger: {
        trigger: ".video",
        start: "top 50%",
        scrub: true,
      },
    });

    // split text
    const el = this.$refs.animatedText;
    const words = el.innerText.split(" ");
    el.innerHTML = words.map((word) => `<span>${word}</span>`).join(" ");

    // animate words opacity
    gsap.fromTo(
      el.querySelectorAll("span"),
      { opacity: 0.2 },
      {
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "bottom 75%",
          scrub: true,
        },
      }
    );
    // animate box opacity
    gsap.fromTo(
      ".box",
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".trigger",
          start: "top 90%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );

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
  opacity: 0.5;
  display: inline-block;
  margin-right: 5px;
}

.box {
  font-weight: bold;
  padding: 10px 20px;
  background: red;
  border-radius: 20px;
  width: fit-content;
  background: var(--white);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
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
    font-size: 70px !important;
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

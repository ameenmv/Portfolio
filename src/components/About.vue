<template>
  <div class="bg-[white] pb-[70px] about">
    <div class="containerr">
      <div class="heading">
        <h1 class="header">about ameen</h1>
      </div>
    </div>
    <div class="videocont flex items-center justify-center relative">
      <video
        class="video w-[50%] rounded-[20px]"
        src="../assets/me.mp4"
        loop
        muted
        autoplay
      ></video>
    </div>
    <div class="containerr content">
      <p
        ref="animatedText"
        class="text-[26px] font-semibold mt-[200px] animated-text"
      >
        Front-End Developer with 1 year experience in Vue.js and solid knowledge
        of React, along with expertise in JavaScript. I focus on building
        efficient, scalable, and user-friendly web applications with clean and
        maintainable code. I’m a fast learner and work closely with teams and
        clients to deliver real-world digital solutions. Let’s collaborate to
        bring your ideas to life.
      </p>
      <p class="mt-6 text-[45px] font-bold text-center text-[var(--sc)]">
        Some of Ameen's skills and Technologies
      </p>
      <div class="flex gap-5 flex-wrap mt-10">
        <div v-for="skill in skills" :key="skill.id" class="box">
          {{ skill }}
        </div>
      </div>
      <div class="flex gap-5 flex-wrap mt-10">
        <div v-for="skill in skills2" :key="skill.id" class="box">
          {{ skill }}
        </div>
      </div>
      <div class="flex gap-5 flex-wrap mt-10">
        <div v-for="skill in skills3" :key="skill.id" class="box">
          {{ skill }}
        </div>
      </div>
      <div class="w-[100%] flex justify-center">
        <div class="btnn relative mt-10">
          <div class="btn">
            Preview my cv ?
            <div class="btn2"></div>
          </div>
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
      opacity: 0.2,
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
      ".box", // هنا بيجيب كل العناصر اللي عندها class="box"
      { opacity: 0 },
      {
        opacity: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".box", // التريجر هيبقى أول واحدة من .box
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
.content {
  line-height: 1.6;
}
:deep(.animated-text span) {
  opacity: 0.5;
  display: inline-block;
  margin-right: 5px;
}

.box {
  padding: 10px 20px;
  background: red;
  border-radius: 20px;
  width: fit-content;
  background: var(--white);
  font-weight: 600;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px,
    rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px,
    rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
}
</style>

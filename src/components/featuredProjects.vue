<template>
  <div class="bg-black section relative overflow-hidden h-[fit-content]" ref="sectionRef">
    
    <!-- Mega Background Marquee (Scroll-Linked) -->
    <div class="absolute top-[30%] left-[-20%] whitespace-nowrap opacity-[0.04] select-none pointer-events-none -rotate-[-8deg] z-0">
       <h1 class="text-[200px] font-black uppercase text-white font-[angry] marquee-text">
         SELECTED ARCHIVE WORKS SELECTED ARCHIVE WORKS SELECTED ARCHIVE WORKS
       </h1>
    </div>

    <div class="containerr relative z-10 pt-32 pb-[10vh]">
      
      <!-- Huge Cinematic Header -->
      <div class="heading mb-[10vh] relative flex justify-between items-end">
         <h2 class="text-[8vw] md:text-[5vw] font-bold text-white uppercase leading-none header-title">
           Selected<br/>
           <span class="text-transparent border-text ml-[10%] italic text-[#ccc]">Archives</span>
         </h2>
         <img class="hidden md:block w-[150px] rotating-hat absolute top-[-50px] right-[10%]" src="../assets/hat.png" alt=""/>
      </div>

      <!-- Sticky Stacking Cards Track -->
      <div class="cards-track relative mt-20">
         <div 
           v-for="(project, index) in featuredProjects" :key="index"
           class="stack-card sticky top-[12vh] w-full h-[76vh] flex justify-center items-center mb-[80vh]"
         >
           <!-- The visual card that receives scale/fade 3D physics -->
           <div class="inner-box w-full md:w-[90%] h-full rounded-[30px] md:rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.8)] relative cursor-none" @click="goToProject(project.name)">
              
              <!-- Parallax Image Layer -->
              <div class="absolute top-[-20%] left-0 w-full h-[140%] img-parallax">
                 <img :src="project.img" class="w-full h-full object-cover filter contrast-[1.1] grayscale-[20%] hover:grayscale-0 transition-all duration-700 pointer-events-none" />
              </div>

              <!-- Vignette & Glass Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 pointer-events-none"></div>

              <!-- Content Layer -->
              <div class="absolute inset-0 flex flex-col justify-end p-8 md:p-14 pointer-events-none">
                 <div class="flex justify-between items-end w-full">
                    <div>
                       <span class="text-white font-mono text-[10px] md:text-sm tracking-[0.4em] uppercase opacity-60 block mb-4 border border-white/20 w-fit px-4 py-1 rounded-full backdrop-blur-md">
                         0{{index+1}} — {{project.name}}
                       </span>
                       <h3 class="font-[angry] text-[45px] md:text-[90px] font-black text-white uppercase leading-[0.9] mix-blend-difference title-text">
                         {{project.title}}
                       </h3>
                    </div>
                    
                    <div class="hidden md:flex arrow-box w-[80px] h-[80px] rounded-full border border-white/30 items-center justify-center backdrop-blur-md transition-all duration-500">
                       <svg class="w-[35px] h-[35px] fill-white transform -rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                         <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"/>
                       </svg>
                    </div>
                 </div>
              </div>
           </div>
         </div>
      </div>
      
      <div class="w-[100%] flex justify-center items-center mt-0 md:-mt-32 relative z-20">
        <router-link to="/projects">
          <div class="btnn relative mt-20 cursor-none">
            <div class="btn outline-none">VIEW ALL ARCHIVES</div>
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
      featuredProjects: [],
    };
  },
  created() {
    // Dynamic mapping for a pristine template
    const highlightNames = ["Exclusive", "MVLib", "MV LMS", "MVClinic", "KIIIBS", "Hidaaya"];
    this.featuredProjects = highlightNames.map(name => projects.find((p) => p.name === name)).filter(Boolean);
  },
  methods: {
    goToProject(name) {
      if (!name) return;
      this.$router.push(`/projects/${name}`);
    },
  },
  mounted() {
    // Refresh scroll triggers if layout recalculates
    window.addEventListener("resize", () => ScrollTrigger.refresh());

    const isMobile = window.innerWidth < 800;

    // Header Parallax & Marquee
    gsap.to(".marquee-text", {
      xPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: this.$refs.sectionRef,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      }
    });

    gsap.fromTo(".header-title", 
      { y: 100, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }, 
      { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", ease: "expo.out", duration: 1.5, scrollTrigger: { trigger: ".header-title", start: "top 85%" }}
    );

    gsap.fromTo(".rotating-hat",
      { y: -300, rotation: -45, scale: 0.5, opacity: 0 },
      { y: 0, rotation: 15, scale: 1, opacity: 1, ease: "back.out(1.5)", duration: 1.5, scrollTrigger: { trigger: ".header-title", start: "top 85%" }}
    );

    // ==========================================
    // LUSION TIER ENGINE: Depth Stacking Sticky Cards
    // ==========================================
    const cards = gsap.utils.toArray(".stack-card");

    cards.forEach((card, index) => {
       const inner = card.querySelector(".inner-box");
       const img = card.querySelector(".img-parallax");
       const title = card.querySelector(".title-text");
       const isLast = index === cards.length - 1;

       // 1. Image Extreme Parallax inside the card
       if (img && !isMobile) {
          gsap.to(img, {
             yPercent: 15,
             ease: "none",
             scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
             }
          });
       }

       // 2. Cinematic Title Slide-up
       if (title) {
         gsap.fromTo(title, 
           { y: 80, opacity: 0, rotationX: 15 },
           { y: 0, opacity: 1, rotationX: 0, ease: "power4.out", duration: 1.4, scrollTrigger: { trigger: card, start: "top 80%" }}
         );
       }

       // 3. The 3D Depth Shrink (when next card rolls over this one)
       if (!isLast) {
          const nextCard = cards[index + 1];
          gsap.to(inner, {
             scale: isMobile ? 0.95 : 0.88,
             opacity: 0.3, // Darkens deep into the background
             y: isMobile ? -10 : -30, // Pushes back physically
             rotateX: isMobile ? 0 : -5,
             transformPerspective: 1800,
             transformOrigin: "top center",
             ease: "none",
             scrollTrigger: {
                trigger: nextCard,
                start: "top bottom", // Starts exactly when the next card appears
                end: "top 12%", // Ends exactly when the next card finishes pinning over it
                scrub: true,
             }
          });
       }
    });

    // ==========================================
    // Liquid Magnetic CTA Hover Physics
    // ==========================================
    if (!isMobile) {
      const btnContainerNode = this.$el.querySelector(".btnn");
      const innerBoxes = document.querySelectorAll(".inner-box");

      // Custom cursor mapping on cards
      innerBoxes.forEach(box => {
        box.addEventListener("mousemove", (e) => {
          gsap.to(box, { cursor: `url('../assets/mini3.png') 64 64, pointer`});
        });
      });

      if (btnContainerNode) {
        const innerBtn = btnContainerNode.querySelector(".btn");
        
        btnContainerNode.addEventListener("mousemove", (e) => {
          const rect = btnContainerNode.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(btnContainerNode, { x: x * 0.4, y: y * 0.4, duration: 0.5, ease: "power2.out" });
          if (innerBtn) gsap.to(innerBtn, { x: x * 0.2, y: y * 0.2, duration: 0.5, ease: "power2.out" });
        });

        btnContainerNode.addEventListener("mouseleave", () => {
          gsap.to(btnContainerNode, { x: 0, y: 0, duration: 1.2, ease: "elastic.out(1, 0.3)" });
          if (innerBtn) gsap.to(innerBtn, { x: 0, y: 0, duration: 1.2, ease: "elastic.out(1, 0.3)" });
        });
      }
    }
  },
  beforeUnmount() {
    ScrollTrigger.getAll().forEach(t => t.kill());
  }
};
</script>

<style lang="scss" scoped>

.border-text {
  -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
  color: transparent;
}

/* Custom fonts for this cinematic look */
.font-\[angry\] {
  font-family: angry, sans-serif;
}

/* Base button styles */
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
  color: var(--white);
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

@media (max-width: 767px) {
  .header2 {
    font-size: 32px !important;
    letter-spacing: 2px !important;
  }
}

@media (max-width: 600px) {
  .header2 {
    font-size: 26px !important;
    letter-spacing: 1px !important;
  }
}
</style>

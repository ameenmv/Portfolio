<template>
  <div class="bg-[var(--bg)] min-h-[100vh] text-[var(--white)]">
    <Navbar />
    <div class="containerr min-h-[100vh] !pt-[160px] !pb-[100px]">
      <div class="w-[100%] flex justify-center  flex-col items-center main">
        <p class="kalam text-[70px] font-bold text-[var(--white)]">
          {{ project.name }}
        </p>
        <p
          class="mt-5 font-bold text-[17px] text-[var(--white)] opacity-[.8] w-[70%] text-center leading-[1.5]"
        >
          {{ project.title }}
        </p>
        <div
          v-if="project.video"
          class="relative w-5/5 mx-auto pb-[56.25%] mt-10"
        >
          <iframe
            class="absolute top-0 left-0 w-full h-full"
            :src="project.video"
            frameborder="0"
            allowfullscreen
            title="Embedded post"
          ></iframe>
        </div>

        <img class="mt-15" :src="project.img" alt="" />
        <div class="flex mt-20 gap-10 w-[100%] textt">
          <div class="left w-[60%]">
            <p class="font-bold text-[30px] text-[var(--sc)] kalam">
              {{ project.type }}
            </p>
            <p class="kalam mt-4 leading-[1.6]">
              {{ project.Description }}
            </p>
            <div class="flex mt-8 gap-5">
              <a target="_blank" v-if="project.website" :href="project.website"
                ><button class="kalam">
                  Visit Website
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="arrow"
                    viewBox="0 0 640 640"
                  >
                    <path
                      d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                    />
                  </svg></button
              ></a>

              <a :href="project.github" v-if="project.github" target="_blank"
                ><button class="kalam">
                  View Code
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                    <path
                      d="M237.9 461.4C237.9 463.4 235.6 465 232.7 465C229.4 465.3 227.1 463.7 227.1 461.4C227.1 459.4 229.4 457.8 232.3 457.8C235.3 457.5 237.9 459.1 237.9 461.4zM206.8 456.9C206.1 458.9 208.1 461.2 211.1 461.8C213.7 462.8 216.7 461.8 217.3 459.8C217.9 457.8 216 455.5 213 454.6C210.4 453.9 207.5 454.9 206.8 456.9zM251 455.2C248.1 455.9 246.1 457.8 246.4 460.1C246.7 462.1 249.3 463.4 252.3 462.7C255.2 462 257.2 460.1 256.9 458.1C256.6 456.2 253.9 454.9 251 455.2zM316.8 72C178.1 72 72 177.3 72 316C72 426.9 141.8 521.8 241.5 555.2C254.3 557.5 258.8 549.6 258.8 543.1C258.8 536.9 258.5 502.7 258.5 481.7C258.5 481.7 188.5 496.7 173.8 451.9C173.8 451.9 162.4 422.8 146 415.3C146 415.3 123.1 399.6 147.6 399.9C147.6 399.9 172.5 401.9 186.2 425.7C208.1 464.3 244.8 453.2 259.1 446.6C261.4 430.6 267.9 419.5 275.1 412.9C219.2 406.7 162.8 398.6 162.8 302.4C162.8 274.9 170.4 261.1 186.4 243.5C183.8 237 175.3 210.2 189 175.6C209.9 169.1 258 202.6 258 202.6C278 197 299.5 194.1 320.8 194.1C342.1 194.1 363.6 197 383.6 202.6C383.6 202.6 431.7 169 452.6 175.6C466.3 210.3 457.8 237 455.2 243.5C471.2 261.2 481 275 481 302.4C481 398.9 422.1 406.6 366.2 412.9C375.4 420.8 383.2 435.8 383.2 459.3C383.2 493 382.9 534.7 382.9 542.9C382.9 549.4 387.5 557.3 400.2 555C500.2 521.8 568 426.9 568 316C568 177.3 455.5 72 316.8 72zM169.2 416.9C167.9 417.9 168.2 420.2 169.9 422.1C171.5 423.7 173.8 424.4 175.1 423.1C176.4 422.1 176.1 419.8 174.4 417.9C172.8 416.3 170.5 415.6 169.2 416.9zM158.4 408.8C157.7 410.1 158.7 411.7 160.7 412.7C162.3 413.7 164.3 413.4 165 412C165.7 410.7 164.7 409.1 162.7 408.1C160.7 407.5 159.1 407.8 158.4 408.8zM190.8 444.4C189.2 445.7 189.8 448.7 192.1 450.6C194.4 452.9 197.3 453.2 198.6 451.6C199.9 450.3 199.3 447.3 197.3 445.4C195.1 443.1 192.1 442.8 190.8 444.4zM179.4 429.7C177.8 430.7 177.8 433.3 179.4 435.6C181 437.9 183.7 438.9 185 437.9C186.6 436.6 186.6 434 185 431.7C183.6 429.4 181 428.4 179.4 429.7z"
                    />
                  </svg></button
              ></a>
            </div>
            <p class="font-bold mt-8 text-[20px] text-[var(--sc)]">
              Technologies Used
            </p>
            <p class="kalam mt-4 leading-[1.6]">
              {{ project.Technologies }}
            </p>
          </div>
          <div class="right w-[40%] px-8">
            <p class="font-bold text-[18px] text-[var(--sc)]">
              Project Highlights
            </p>
            <p
              v-for="(Highlight, index) in project.Highlights"
              :key="index"
              class="mt-4 pb-4 border-b border-[#3741517d] kalam leading-[1.6]"
            >
              {{ Highlight }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <Contact />
    <Footer />
  </div>
</template>

<script>

import Navbar from "../components/Navbar.vue";
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";

import { projects } from "../assets/projects";

export default {
  name: "ProjectDetails",
  data() {
    return {
      project: null,
    };
  },
  created() {
    const projectName = this.$route.params.name;

    this.project = projects.find((p) => p.name === projectName);
  },
  components: {
    Navbar,
    Contact,
    Footer,
  },
};
</script>

<style lang="scss" scoped>
.left button {
  display: flex;
  padding: 20px 25px;
  border: 2px solid;
  font-weight: bold;
  border-color: #374151;
  border-radius: 50px;
  background: rgb(31 41 55/0.5);
  transition: 0.5s;

  svg {
    fill: var(--white);
    width: 20px;
    margin-left: 10px;
    transition: 0.5s;
  }
  .arrow {
    transform: rotate(-40deg);
  }
}
.left button:hover {
  background: rgba(31, 41, 55, 0.683);
  border-color: rgb(67, 79, 98);
  .arrow {
    transform: rotate(0deg);
  }
}

@media (max-width: 991px) {
  .textt {
    flex-direction: column;
  }
  .left,
  .right {
    width: 100%;
  }
  .right {
    padding: 0;
  }
  .main p:nth-child(1) {
    font-size: 40px;
  }
  .main p:nth-child(2) {
    font-size: 15px;
    width: 100%;
  }
}
</style>

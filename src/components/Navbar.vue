<template>
  <div
    class="sm:pl-10 sm:pr-10 pl-4 pr-4 flex justify-between items-center absolute top-0 left-0 right-0 h-20 z-50 "
  >
    <router-link to="/"
      ><img class="w-15" src="../assets/mv.png" alt=""
    /></router-link>
    <div class="flex gap-2 items-center sm:gap-6">
      <router-link to="/projects"
        ><p
          class="text-[var(--white)] opacity-80 tracking-[-.5px] font-semibold text-base kalam"
        >
          Projects
        </p></router-link
      >
      <a
        href="https://github.com/ameenmv/CV/raw/main/ameen.pdf"
        ><div class="btnn ml-5 relative">
          <div class="btn">my cv ?</div>
          <div class="btn2"></div>

          <img src="../assets/star.svg" class="onesvg svgg" alt="" />
          <img src="../assets/star.svg" class="twosvg svgg" alt="" />
          <img src="../assets/star.svg" class="threesvg svgg" alt="" />
          <img src="../assets/star.svg" class="foursvg svgg" alt="" />
          <img src="../assets/star.svg" class="fivesvg svgg" alt="" />
          <img src="../assets/star.svg" class="sixsvg svgg" alt="" /></div
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style lang="scss" scoped>
p {
  position: relative;
  height: fit-content;
}
p::after {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  background-color: var(--white);
  left: 0;
  bottom: -5px;
  transition: width 0.3s ease-in-out;
}
p:hover::after {
  width: 100%;
}
</style>

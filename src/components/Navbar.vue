<template>
  <div
    class="pl-10 pr-10 flex justify-between items-center fixed top-0 left-0 right-0 h-[80px] z-50 h-[8vh]"
  >
    <router-link to="/"
      ><img class="w-[50px]" src="../assets/mv.png" alt=""
    /></router-link>
    <div class="flex gap-6 items-center">
      <!-- <p
        class="text-[var(--white)] opacity-[.8] tracking-[-.5px] font-semibold text-[15px]"
      >
        About
      </p> -->
      <router-link to="/projects"
        ><p
          class="text-[var(--white)] opacity-[.8] tracking-[-.5px] font-semibold text-[15px]"
        >
          Projects
        </p></router-link
      >

      <!-- <p
        class="text-[var(--white)] opacity-[.8] tracking-[-.5px] font-semibold text-[15px]"
      >
        Contact
      </p> -->
      <a
        href="https://drive.google.com/uc?export=download&id=1z3-1ywBLo2t6o5o213GaHjmgw6wl73it"
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

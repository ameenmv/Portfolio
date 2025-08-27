<template>
  <div
    class="pl-10 pr-10 flex justify-between items-center fixed top-0 left-0 right-0 h-[80px] z-50 h-[8vh]"
  >
    <router-link to="/"
      ><img class="w-[50px]" src="../assets/mv.png" alt=""
    /></router-link>
    <div class="flex gap-6 items-center">
      <p
        class="text-[var(--white)] opacity-[.8] tracking-[-.5px] font-semibold text-[15px]"
      >
        About
      </p>
      <p
        class="text-[var(--white)] opacity-[.8] tracking-[-.5px] font-semibold text-[15px]"
      >
        Projects
      </p>

      <p
        class="text-[var(--white)] opacity-[.8] tracking-[-.5px] font-semibold text-[15px]"
      >
        Contact
      </p>
      <div class="btnn ml-5 relative">
        <div class="btn">
          my cv ?
          <div class="btn2"></div>
        </div>
      </div>
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

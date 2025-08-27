<template>
  <div class="h-[100vh] bg-[var(--bg)]">
    <navbar />
    <div
      class="h-[100vh] w-[100%] flex justify-center items-center relative pt-[8vh]"
    >
      <div class="center">
        <p class="one">Ameen</p>
        <p class="two">Mohamed</p>
        <p class="three">frontend</p>
        <p class="four">Developer</p>
      </div>
      <p class="absolute work text-[13px]">
        <span> </span>
        Avilable for work
      </p>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "Landing",
  components: {
    Navbar,
  },
};
</script>

<style lang="scss" scoped>
.center {
  font-size: 76px;
  font-weight: 700;
  letter-spacing: -5px;
  text-transform: uppercase;
  color: var(--white);
  text-align: center;
  font-family: "Oswald", sans-serif;
  transform: rotate3d(1, 0, -2, 35deg);
  margin: 0 50px 50px 0;
  p {
    display: flex;
    margin-bottom: -5px;
  }
  .one,
  .three {
    transform: skew(20deg, 14deg);
    font-size: 80px;
    letter-spacing: -3px;
  }
  .two,
  .four {
    transform: skew(-41deg, 13deg);
    letter-spacing: -3px;
  }
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
    animation: span 1.5s infinite;
  }
}
@keyframes span {
  0%,
  100% {
    width: 12px;
    height: 12px;
    opacity: 1;
  }
  50% {
    width: 15px;
    height: 15px;
    opacity: 0.3;
    scale: 1.2;
  }
}
</style>

<template>
  <div class="min-h-[100vh] bg-[var(--bg)]">
    <div class="containerr">
      <div class="pt-20 flex flex-col text-center">
        <p class="text-[#ffffff80] font-semibold">got a project?</p>
        <p
          class="text-[var(--white)] text-[56px] font-semibold mt-3 tracking-[-3px]"
        >
          Let's Work <span class="text-[#ffffff80]">Together</span>
        </p>
        <p class="text-[18px] text-[#ffffff8f] mt-3">
          Feel free to contact me if you have any questions.
        </p>
        <div
          class="flex gap-8 mt-8 text-center justify-center text-[var(--white)] font2"
        >
          <a target="_blank" href="https://wa.me/201017025076"
            ><p class="flex gap-2 items-center cursor-pointer">
              <span class="link">WhatsApp</span>
              <svg
                fill="white"
                width="20px"
                style="transform: rotate(-45deg)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                />
              </svg></p
          ></a>
          <a
            target="_blank"
            href="https://mail.google.com/mail/?view=cm&to=ameeenmv@gmail.com"
          >
            <p class="flex gap-2 items-center cursor-pointer">
              <span class="link">Gmail</span>
              <svg
                fill="white"
                width="20px"
                style="transform: rotate(-45deg)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                />
              </svg></p
          ></a>

          <a target="_blank" href="https://www.linkedin.com/in/ameeenmv/"
            ><p class="flex gap-2 items-center cursor-pointer">
              <span class="link">Linkedin</span>
              <svg
                fill="white"
                width="20px"
                style="transform: rotate(-45deg)"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z"
                />
              </svg></p
          ></a>
        </div>
      </div>
      <div class="mt-30 flex gap-65 items-center">
        <div class="left flex flex-col gap-10 text-[var(--white)]">
          <img class="w-[200px]" src="../assets/callme.png" alt="" />
          <div class="flex flex-col gap-3">
            <p class="text-[40px] font-bold font2">Phone</p>
            <p class="font-bold opacity-[.8]">+201017025076</p>
          </div>
          <div class="flex flex-col gap-3">
            <p class="text-[40px] font-bold font2">Address</p>
            <p class="font-bold opacity-[.8]">Egypt, Mansoura</p>
          </div>
        </div>
        <div class="right flex flex-col gap-5 flex-1">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea type="text" placeholder="Message" />
          <button>Send</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<style lang="scss" scoped>
.link {
  position: relative;
  height: fit-content;
}
.link::after {
  content: "";
  position: absolute;
  width: 0;
  height: 1px;
  background-color: var(--white);
  left: 0;
  bottom: -5px;
  transition: width 0.3s ease-in-out;
}
.link:hover::after {
  width: 100%;
}

.font2 {
  font-family: cursive;
}

.right {
  input,
  textarea {
    outline: none;
    padding: 20px;
    border: 1px solid #ffffff33;
    color: var(--white);
    width: 100%;
    border-radius: 10px;
  }
  textarea {
    min-height: 200px;
    resize: none;
  }
  button {
    width: 100%;
    border-radius: 10px;
    padding: 15px;
    color: #ffffffc1;
    background: #ffffff23;
    transition: all 0.3s ease-in-out;
  }
  button:hover,
  button:hover * {
    cursor: url("../assets/mini2.png") 64 64, pointer !important;
    background: #ffffff34;
  }
}
</style>

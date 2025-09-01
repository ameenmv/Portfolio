self.addEventListener("install", (event) => {
  console.log("Service Worker: Installed");
  self.skipWaiting(); // يخلّي SW يشتغل فورًا
});

self.addEventListener("activate", (event) => {
  console.log("Service Worker: Activated");
});

self.addEventListener("fetch", (event) => {
  // يسيب كل الـ requests تروح عادي للشبكة
  return;
});

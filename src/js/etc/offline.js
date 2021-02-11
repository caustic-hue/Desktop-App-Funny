let loaded;

const loadApp = () => {
  App(
    () => {
      loaded = true;
      clearTimeout(isSlow);
      setTimeout(() => { document.body.className = ""; }, 1000);
      console.debug("loaded");
  });
};

window.addEventListener("offline", () => {
  document.body.className = "offline";
});

window.addEventListener("online", () => {
  document.body.className = "online";
  console.debug("online");
  setTimeout(() => { document.body.className = ""; }, 1000);

  if (!loaded) {
    console.debug("Reconnecting...");
    loadApp();
  }
});

window.addEventListener("DOMContentLoaded", loadApp);
document.addEventListener("fullscreenchange", () => {
  if (document.fullscreenElement) {
    setTimeout(() => {
      console.log(
        `Element: ${document.fullscreenElement.id} entered fullscreen mode.`
      );
      console.log(
        `width: ${document.fullscreenElement.clientWidth}; height: ${document.fullscreenElement.clientHeight}`
      );

      const width = document.fullscreenElement.clientWidth;
      const height = document.fullscreenElement.clientHeight;
      const container = document.querySelector("#video-container");
      if (container) {
        container.setAttribute("data-style", container.style["padding-top"]);
        container.style["padding-top"] = `${(height / width) * 100}%`;
      }
    }, 0);
  } else {
    console.log("Leaving fullscreen mode.");
    const container = document.querySelector("#video-container");
    if (container) {
      container.style["padding-top"] = container.getAttribute("data-style");
    }
  }
});

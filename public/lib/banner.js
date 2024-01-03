globalThis.TFPBanner = {
  create(options) {
    
    const merged = {
      id: undefined,
      theme: "auto",
      fixed: true,
      ...options
    }

    const { id, theme, fixed } = merged;

    let mount;

    document.head.innerHTML +=
    '<link rel="stylesheet" href="https://tfpb.techforpalestine.org/lib/banner.min.css" type="text/css"/>';

    document.addEventListener("DOMContentLoaded", () => {
      if (id) {
        mount = document.getElementById(id);
      } else {
        mount = document.createElement("div");
        mount.setAttribute(
          "id",
          "tfp__banner_" + Math.random().toString(36).substr(2, 9)
        );
        
        document.body.prepend(mount);
      }

      mount.innerHTML = `
        <div class="tfp__banner ${theme} ${fixed && "fixed"}">
          <p class="tfp__banner__description">🇵🇸 #SaveGaza: Call For A Ceasefire Now! 🇵🇸</p>
          <a class="tfp__banner__link" href="https://techforpalestine.org" target="_blank">Learn</a>
        </div>
      `;
    })
  }
}

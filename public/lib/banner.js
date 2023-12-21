class PBanner {
  constructor() {
    this.options = {
      theme: "system",
      fixed: true,
    };

    document.head.innerHTML +=
      '<link rel="stylesheet" href="https://watermelon-cm1.pages.dev/lib/banner.min.css" type="text/css"/>';
  }
  create(options) {
    this.options = { ...this.options, ...options };
    const mount = document.createElement("div");
    document.body.prepend(mount);
    const { theme, fixed } = this.options;
    mount.innerHTML = `
      <div class="fp__banner ${theme} ${fixed && "fixed"}">
        <p class="fp__banner__description">Isreals genocide against 🇵🇸 Palestine needs to stop. Our hearts are with those who suffer</p>
        <a href="#" class="fp__banner__link" href="https://ceasefiretoday.com/" target="_blank">🍉 Palestine</a>
      </div>
    `;
  }
}

window.PBanner = new PBanner();

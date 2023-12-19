class PBanner {
  constructor() {
    this.element = "#banner";
    this.options = {
      theme: "system",
      fixed: true,
    };
  }
  init(element, options) {
    this.element = element;
    this.options = { ...this.options, ...options };
    document.head.innerHTML +=
      '<link rel="stylesheet" href="/lib/banner-style.css" type="text/css"/>';
  }
  create() {
    const banner = document.querySelector(this.element);
    const { theme, fixed } = this.options;

    if (!banner) {
      throw new Error("You must provide an element to create the banner in");
    } else {
      banner.innerHTML = `
        <div class="fp__banner ${theme} ${fixed && "fixed"}">
          <p class="fp__banner__description">Isreals genocide against 🇵🇸 Palestine needs to stop. Our hears are with those who suffer</p>
          <a href="#" class="fp__banner__link" href="https://ceasefiretoday.com/" target="_blank">🍉 Palestine</a>
        </div>
      `;
      console.log("🇵🇸 Free Palestine Banner init with options", this.options);
    }
  }
}

window.PBanner = new PBanner();

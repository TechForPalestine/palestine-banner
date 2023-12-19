const PBanner = {
  init: (element, options) => {
    const banner = document.querySelector(element);

    if (banner) {
      banner.innerHTML = `
        <div class="banner" style="display: flex, height: 48, gap: 12; background: #ff0000">
          <p class="banner__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, quia.</p>
          <a href="#" class="banner__link">Click here</a>
        </div>
      `;
    }

    console.log("🇵🇸 Free Palestine Banner init with options", options);
  },
};

window.PBanner = PBanner;

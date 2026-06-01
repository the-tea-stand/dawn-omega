const populateHomepageText = () => {
  console.debug("Setting homepage text...");
  if (description && description.length) {
    let section = document.getElementById("cover-description");
    section.innerHTML += description;
  }
  if (articlesTitle && articlesTitle.length) {
    let section = document.getElementById("articles-section-title");
    section.innerHTML += articlesTitle;
  }
  if (programmingSubtitle && programmingSubtitle.length) {
    let section = document.getElementById("programming-subtitle");
    section.innerHTML += programmingSubtitle;
  }
  if (newsletterSubtitle && newsletterSubtitle.length) {
    let section = document.getElementById("articles-section-subtitle");
    section.innerHTML += newsletterSubtitle;
  }
  // TODO: add subtitles to programming and monthly newsletters
};

const populateHomepageCards = () => {
  const setSectionAttributes = () => {
    console.debug("Setting section attributes...");
    let section = document.getElementById("card-container");
    section.setAttribute("class", "card-container");
  };

  const createCardElements = () => {
    console.debug("Creating card elements...");
    let section = document.getElementById("card-container");
    cards.map((card) => {
      const cardElement = `
        <a href="${card.url}">
            <div class="cover-card" style="background-image: url(${card.image});">
                <div class="gradient">
                    <span class="card-title">
                        ${card.title}
                    </span>
                </div>
            </div>
        </a>
        `;
      section.innerHTML += cardElement;
    });
  };

  if (cards && cards.length > 0) {
    setSectionAttributes();
    createCardElements();
  }
};

const populateGetInvolvedSection = () => {
  console.debug("Setting get involved section...");
  let section = document.getElementById("get-involved-section");
  if (getInvolvedSections && getInvolvedSections.length > 0) {
    section.innerHTML += `<h2 class="section-title">Get Involved</h2>`;
    const teacup = document.createElement("div");
    teacup.className = "teacup-break mt-6";
    teacup.textContent = "🍵";
    section.after(teacup);
  }
  section.classList.add("section-title-container");
  getInvolvedSections.map((item) => {
    if (!item.title || !item.description) {
      console.warn(
        "Skipping get involved item due to missing title or description",
        item,
      );
      return;
    }
    const itemElement = `
        <div class="get-involved-item section-title-container">
          <h5 class="get-involved-title">${item.title}</h5>
          <span class="get-involved-description">${item.description}</span>
          ${
            item.ctaText && item.url
              ? `
            <div class="cover-cta align-center">
              <a href="${item.url}" class="button">${item.ctaText}</a>
            </div>
          `
              : ""
          }
        </div>
      `;
    section.innerHTML += itemElement;
  });
};

populateHomepageText();
populateHomepageCards();
populateGetInvolvedSection();

const populateNewsletterText = () => {
  console.debug("Setting newsletter subtitle text...");
  if (newsletterSignupDescription && newsletterSignupDescription.length) {
    const section = document.getElementById("newsletter-subtitle");
    if (section) {
      section.innerHTML += newsletterSignupDescription;
    }
  }
};

populateNewsletterText();

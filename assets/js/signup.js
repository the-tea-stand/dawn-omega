const populateSignupText = () => {
  console.debug("Setting signup text...");
  if (signupDescription && signupDescription.length) {
    const section = document.getElementById("signup-description");
    if (section) {
      section.innerHTML += signupDescription;
    }
  }
  console.debug("Setting membership text...");
  if (membersDescription && membersDescription.length) {
    const section = document.getElementById("members-description");
    if (section) {
      section.innerHTML += membersDescription;
    }
  }
};
const populateMembershipTierPerks = () => {
  console.debug("Setting membership tier benefits...");
  if (membershipTiers && membershipTiers.length) {
    membershipTiers.forEach((tier) => {
      const section = document.getElementById(tier.name);
      if (section) {
        tier.perks.forEach((perk) => {
          const title = typeof perk === "string" ? perk : perk.title;
          const isBold = typeof perk === "object" && perk.state === "bold";

          const containerElement = document.createElement("div");
          containerElement.classList.add("perk-container");

          const titleElement = document.createElement("div");
          titleElement.classList.add("perk-title");
          titleElement.innerHTML = `${isBold ? `<strong>${title}</strong>` : title}`;
          containerElement.appendChild(titleElement);

          if (isBold && perk.subtitle) {
            const subtitleElement = document.createElement("div");
            subtitleElement.classList.add("perk-subtitle");
            subtitleElement.innerHTML = perk.subtitle;
            containerElement.appendChild(subtitleElement);
          }
          section.appendChild(containerElement);
        });
      }
    });
  }
};

const getTierForAmount = (amount) => {
  if (amount >= 99) return "Mega Steeper";
  if (amount >= 33) return "Big Steeper";
  if (amount >= 9) return "Steeper";
  if (amount < 9) return "Sipper";
  return null;
};

const initSubscriptionAmountListener = () => {
  const input = document.getElementById("subscriptionAmount");
  if (!input) return;

  let label = null;
  let debounceTimer;

  const updateTier = () => {
    const tier = getTierForAmount(Number(input.value));
    label.style.opacity = "0";
    setTimeout(() => {
      label.textContent = tier || "";
      label.style.opacity = "1";
    }, 150);
  };

  input.addEventListener("input", () => {
    if (!label) {
      const tier = getTierForAmount(Number(input.value));
      const container = document.createElement("div");
      container.className = "selected-tier-container";
      container.innerHTML = 'Your Tier: <strong id="selectedTier"></strong>';
      input
        .closest(".card")
        .querySelector(".card-details")
        .appendChild(container);
      label = container.querySelector("#selectedTier");
      label.textContent = tier || "";
      requestAnimationFrame(() => {
        requestAnimationFrame(() =>
          container.classList.add("selected-tier-container--visible"),
        );
      });
      return;
    }

    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(updateTier, 150);
  });
};

const rearrangeSignupTiers = () => {
  const container = document.querySelector(".membership-plans");
  if (!container) return;

  const cards = Array.from(container.querySelectorAll(".card[id]")).filter(
    (card) => card.id !== "" && !isNaN(Number(card.id))
  );

  if (cards.length < 2) return;

  const parent = cards[0].parentElement;
  const after = cards[cards.length - 1].nextSibling;

  cards.sort((a, b) => Number(a.id) - Number(b.id));

  const fragment = document.createDocumentFragment();
  cards.forEach((card) => fragment.appendChild(card));

  if (after) {
    parent.insertBefore(fragment, after);
  } else {
    parent.appendChild(fragment);
  }
};

populateSignupText();
populateMembershipTierPerks();
rearrangeSignupTiers();
document.addEventListener("DOMContentLoaded", initSubscriptionAmountListener);

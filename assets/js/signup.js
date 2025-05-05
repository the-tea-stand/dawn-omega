const populateSignupText = () => {
  console.debug("Setting signup text...");
  if (signupDescription && signupDescription.length) {
    const section = document.getElementById("signup-description");
    section.innerHTML += signupDescription;
  }
  console.debug("Setting membership text...");
  if (membersDescription && membersDescription.length) {
    console.log(membersDescription);
    const section = document.getElementById("members-description");
    console.log(section);
    section.innerHTML += membersDescription;
  }
};

populateSignupText();

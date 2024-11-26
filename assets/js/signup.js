
const populateSignupText = () => {
    console.debug('Setting signup text...')
    if (signupDescription && signupDescription.length) {
        const section = document.getElementById('signup-description')
        section.innerHTML += signupDescription
    }
    // TODO: add subtitles to programming and monthly newsletters
}

populateSignupText()    
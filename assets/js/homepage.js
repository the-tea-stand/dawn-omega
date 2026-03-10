
const populateHomepageText = () => {
    console.debug('Setting homepage text...')
    if (description && description.length) {
        let section = document.getElementById('cover-description')
        section.innerHTML += description
    }
    if (articlesTitle && articlesTitle.length) {
        let section = document.getElementById('articles-section-title')
        section.innerHTML += articlesTitle
    }
    if (programmingSubtitle && programmingSubtitle.length) {
        let section = document.getElementById('programming-subtitle')
        section.innerHTML += programmingSubtitle
    }
    if (newsletterSubtitle && newsletterSubtitle.length) {
        let section = document.getElementById('articles-section-subtitle')
        section.innerHTML += newsletterSubtitle
    }
    // TODO: add subtitles to programming and monthly newsletters
}

const populateHomepageCards = () => {
    const setSectionAttributes = () => {
        console.debug('Setting section attributes...')
        let section = document.getElementById('card-container')
        section.setAttribute("class", "card-container")
    }

    const createCardElements = () => {
        console.debug('Creating card elements...')
        let section = document.getElementById('card-container')
        cards.map((card) => {
            const cardElement = 
            `
        <a href="${card.url}">
            <div class="cover-card" style="background-image: url(${card.image});">
                <div class="gradient">
                    <span class="card-title">
                        ${card.title}
                    </span>
                </div>
            </div>
        </a>
        `
            section.innerHTML += cardElement
        })
    }

    if (cards && cards.length > 0) {
        setSectionAttributes()
        createCardElements()
    }
}

populateHomepageText()
populateHomepageCards()
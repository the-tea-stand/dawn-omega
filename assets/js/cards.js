const setSectionAttributes = () => {
    console.debug('Setting section attributes...')
    const section = document.getElementById('card-container')
    section.setAttribute("class", "card-container")
}

const createCardElements = () => {
    console.debug('Creating card elements...')
    const section = document.getElementById('card-container')
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
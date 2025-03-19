// Homepage text
// 
// Notes:
// Each of these variables should be a string.  It should be well-formed HTML.
// This is a site to test your HTML: https://onecompiler.com/html/
// It can also just be a regular string, e.g. "This is a string"


const description = "<span>We serve free tea to build trust<br/>and community around Brooklyn.<br/><br/>To date, we've served 5,016<br/>free cups and counting 🍵</span>"

const articlesTitle = "Our Newsletter"

const programmingSubtitle = "serving free tea at parks, food distributions, and events we host"

const newsletterSubtitle = "monthly reflections on what it's like to run The Tea Stand"

// Modality cards on homepage
//
// Notes:
// Make sure cards.url is a full link!
// Notice those quotations
// Hit me if you have any questions
// 
// e.g.
// const cards = [
//     {
//         title: 'Distros',
//         image: 'https://www.gpb.org/sites/default/files/2024-06/062124_food_distro_01.jpg',
//         url: 'http://theteastand.org/distros/' 
//     },
//     {
//         title: 'Popups',
//         image: 'https://www.gpb.org/sites/default/files/2024-06/062124_food_distro_01.jpg',
//         url: 'https://theteastand.org/popups/' 
//     },
// ]

const cards = [
    {
        title: "⛩️ Popups",
        url: "https://www.theteastand.org/popups/",
        image: "https://github.com/the-tea-stand/dawn-omega/blob/main/assets/images/popup.JPG?raw=true"
    },
    {
        title: "🥬 Distros",
        url: "https://www.theteastand.org/distros/",
        image: "https://github.com/the-tea-stand/dawn-omega/blob/main/assets/images/distro.jpg?raw=true"
    },
    {
        title: "🫖 Tea Talks",
        url: "https://www.theteastand.org/tea-talks/",
        image: "https://github.com/the-tea-stand/dawn-omega/blob/main/assets/images/tea-talk.JPG?raw=true"
    },
    {
        title: "📀 Steeped in Sound",
        url: "https://www.theteastand.org/steeped-in-sound/",
        image: "https://github.com/the-tea-stand/dawn-omega/blob/main/assets/images/steeped.jpeg?raw=true"
    },
]

// Signup Page Text
// 
// You can use template literals (with `ticks`) to make multiline strings.

const signupDescription = `
<div>
The Tea Stand is 
<a href='/a-note-from-miles' class='link'>my</a> 
full-time work and is supported by neighbors & comrades.
</div>
<div>
By signing up for our membership program, you sustain The Tea Stand as an anti-capitalist project. In exchange, you receive perks which encourage community participation and alignment with the natural world <a href='/member-perks' class='link'>(more info here)</a>. 
</div>
<div>
Perks are offered as an act of reciprocity and are not meant to equal the dollar value of contributions!
</div>
<div>
Thank you for enabling us to host <a href='/calendar' class='link'>free events</a>, serve free tea, and create spaces of stillness and trust.
</div>
`

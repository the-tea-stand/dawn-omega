// Homepage text
// 
// Notes:
// Each of these variables should be a string.  It should be well-formed HTML.
// This is a site to test your HTML: https://onecompiler.com/html/
// It can also just be a regular string, e.g. "This is a string"


const description = "<span>We serve free tea to build solidarity<br/>and community around Brooklyn.<br/><br/>To date, we've served 5,016<br/>free cups and counting 🍵</span>"

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
full-time work and main source of income.
</div>
<div>
We created this membership program with the goal of keeping The Tea Stand running as an anti-capitalist, community-led project. Thank you for enabling us to host <a href='/calendar' class='link'>free events</a>, serve free tea, and cultivate neighborhood trust.
</div>
<div>
We offer perks which encourage community participation and alignment with the natural world -- they are not meant to equal the dollar value of your contribtions, but rather are offered as an act of reciprocity for your support.
</div>
<div>
More info about select perks: seasonal <a href='/the-tea-box' class='link'>Tea Boxes</a>, issues of <a href='/bocha' class='link'>our zine bōcha</a>, and <a href='/discounts' class='link'>discounts</a> at local businesses.
</div>
<div>
Join for as little as $1/month!
</div>
`

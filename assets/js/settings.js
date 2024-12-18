// Homepage text
// 
// Notes:
// Each of these variables should be a string.  It should be well-formed HTML.
// This is a site to test your HTML: https://onecompiler.com/html/
// It can also just be a regular string, e.g. "This is a string"


const description = "<span>We serve free tea to build solidarity<br/>and community around Brooklyn.<br/><br/>To date, we've served 4,166<br/>free cups and counting 🍵</span>"

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
full-time work and only source of income.
</div>
<div>
In order to keep The Tea Stand running as an anti-capitalist, community-led project, we created this membership program:
it enables us to host free events, serve free tea, and create freeing spaces for all.
</div>
<div>
Explore the tiers below, featuring perks like seasonal 
<a href='/the-tea-box' class='link'>Tea Boxes</a>, 
issues of our zine <a href='/bocha' class='link'>bōcha</a>, discounts at <a href='/discounts' class='link'>local small businesses</a>, etc.
</div>
<div>
Join for as little as $1/month!
</div>
`

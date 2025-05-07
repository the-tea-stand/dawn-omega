// Homepage text
//
// Notes:
// Each of these variables should be a string.  It should be well-formed HTML.
// This is a site to test your HTML: https://onecompiler.com/html/
// It can also just be a regular string, e.g. "This is a string"

const description =
  "<span>We serve free tea to build trust<br/>and community around Brooklyn.<br/><br/>To date, we've served 6,809<br/>free cups and counting!</span>";

const articlesTitle = "Our Newsletter";

const programmingSubtitle =
  "we serve free tea at parks, food distributions, and events. check out <a href='/calendar' class='link'>our calendar</a>!";

const newsletterSubtitle =
  "once a month, we share volunteer opportunities, events, and reflections! it's free :)";

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
    image:
      "https://github.com/the-tea-stand/dawn-omega/blob/main/assets/images/popup.JPG?raw=true",
  },
  {
    title: "🥬 Distros",
    url: "https://www.theteastand.org/distros/",
    image:
      "https://github.com/the-tea-stand/dawn-omega/blob/main/assets/images/distro.jpg?raw=true",
  },
  {
    title: "🫖 Tea Talks",
    url: "https://www.theteastand.org/tea-talks/",
    image:
      "https://github.com/the-tea-stand/dawn-omega/blob/main/assets/images/tea-talk.JPG?raw=true",
  },
  {
    title: "📀 Steeped in Sound",
    url: "https://www.theteastand.org/steeped-in-sound/",
    image:
      "https://github.com/the-tea-stand/dawn-omega/blob/main/assets/images/steeped.jpeg?raw=true",
  },
  {
    title: "🪷 Silent Sanctuary",
    url: "https://www.theteastand.org/silent-sanctuary/",
    image:
      "https://github.com/the-tea-stand/dawn-omega/blob/main/assets/images/silent-sanctuary.jpg?raw=true",
  },
  {
    title: "🌀 Perpetual Brew",
    url: "https://www.theteastand.org/perpetual-brew/",
    image:
      "https://github.com/the-tea-stand/dawn-omega/blob/main/assets/images/perpetual-brew.jpg?raw=true",
  },
];

// Signup Page Text
//
// You can use template literals (with `ticks`) to make multiline strings.

// Description below signup and above tiers
const signupDescription = `
<div>
The Tea Stand is 
<a href='/a-note-from-miles' class='link'>my</a> 
full-time work and is supported by neighbors & comrades. By signing up for our membership program, you sustain The Tea Stand as an anti-capitalist, community-funded project.
</div>
<div>
We offer <a href='/member-perks' class='link'>several perks</a> which encourage community participation and seasonal alignment. Perks are offered as an act of reciprocity and are not meant to equal the dollar value of contributions!
</div>
<div>
Thank you for enabling us to host <a href='/calendar' class='link'>free events</a>, serve free tea, and create accessible spaces for connection.
</div>
`;

// Description below tiers

// const membersDescription = `
// <div>
// Thank you again for your support of this community, and we hope to see you soon!
// </div>
// <div>
// Adin, Miles, Ben, Alex, Jean Paul, Nat, Val, Joyce, Darren, Paula, Jolene, Darren, Lydia.
// </div>
// `;

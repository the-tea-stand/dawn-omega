// Homepage text
//
// Notes:
// Each of these variables should be a string.  It should be well-formed HTML.
// This is a site to test your HTML: https://onecompiler.com/html/
// It can also just be a regular string, e.g. "This is a string"

const description =
  "<span>We serve free tea to build trust<br/>and community around Brooklyn.<br/><br/>To date, we've served 7,083<br/>free cups and counting!</span>";

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
      "https://i.postimg.cc/k59bH6XL/popup.png",
  },
  {
    title: "🥬 Distros",
    url: "https://www.theteastand.org/distros/",
    image:
      "https://i.postimg.cc/KvM3vr1d/distro.png",
  },
  {
    title: "🫖 Tea Talks",
    url: "https://www.theteastand.org/tea-talks/",
    image:
      "https://i.postimg.cc/8c0FrX8v/DSCF0837.jpg",
  },
  {
    title: "📀 Steeped in Sound",
    url: "https://www.theteastand.org/steeped-in-sound/",
    image:
      "https://i.postimg.cc/zv9LF3ct/steeped.png",
  },
  {
    title: "🪷 Silent Sanctuary",
    url: "https://www.theteastand.org/silent-sanctuary/",
    image:
      "https://i.postimg.cc/5yHYz8nQ/silent-sanctuary.png",
  },
  {
    title: "🌀 Perpetual Brew",
    url: "https://www.theteastand.org/perpetual-brew/",
    image:
      "https://i.postimg.cc/tg5xGqsJ/perpetual-brew.png",
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

const membersDescription = `
<div>
We are so grateful to all of our supporters:
</div>
<div>
Shamile Aldossary, Eric Alvarez, Sam Aberbuch, Ben Averbuch, Tim Bannister, Ziggy Bee, Alex Bender, Nat Berman, Micah Bernat, Mat Bibik, Veronica Blackwell, Josie Bradshaw, Autumn Brown, Peter Camardo, Jennifer Calandra, Carmen, Tami Chaize, Kristen Chen, Jac Clayton, Clare Cullinan, Sabar Dasgupta, Kaitlin Deveau, Nick Deveau, Clay Devlin, Hugh Ferguson, Eli Goldman, Eliana Grosof, Emma Gubitz, Emma Hancock, Caroline Hanlon, Dewi Harjanto, Sebastian Hodge, Wilson Jacobs, JW, Divisha Khandelwal, Izzie Kirsch, Kenny Kirsch, Daniela Kotovsky, Ariel Kovlakas, Devika Kumar, Serena Lakhiani, Darren Lee, Tori Lee, Sophia Livecchi, Charlotte McCune, Mark McGovern, Jim Moore, Naqiya Motiwalla, Mae Nagusky, Stephen New, Isa Nicdao, Michelle Nip, Zachary Paul, Addy Pedro, Noel Peng, Momo Ramstedt, Elliot Richardson, Noah Sai, Jada Shannon, Juniper Sokolov, Juliet Shen, Peter Steele, Janice Steele, Jean Paul Torre, Finn Trondson, Adin Vashi, Edmund White, Val Yang, Josh You
</div>
`;

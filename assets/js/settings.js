// Link to background color for whole site:
// https://github.com/the-tea-stand/dawn-omega/blob/9db30bdf203f01a65d3431a895821bc13187042f/assets/css/site/cover.css#L145-L151


// Homepage text
//
// Notes:
// Each of these variables should be a string.  It should be well-formed HTML.
// This is a site to test your HTML: https://onecompiler.com/html/
// It can also just be a regular string, e.g. "This is a string"

const description =
  "<span>We serve free tea to build trust<br/>and community around Brooklyn.<br/><br/>To date, we've served 8,567<br/>free cups and counting!</span>";

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
//  {
//    title: "🪷 Silent Sanctuary",
//    url: "https://www.theteastand.org/silent-sanctuary/",
//    image:
//      "https://i.postimg.cc/5yHYz8nQ/silent-sanctuary.png",
//  },
//  {
//   title: "🌀 Perpetual Brew",
//    url: "https://www.theteastand.org/perpetual-brew/",
//    image:
//      "https://i.postimg.cc/tg5xGqsJ/perpetual-brew.png",
//  },
];

// Signup Page Text
//
// You can use template literals (with `ticks`) to make multiline strings.

// Description below signup and above tiers
const signupDescription = `
<div>
The Tea Stand is a community project which serves free tea to create spaces for local connection. It is 
<b><a href='/a-note-from-miles' class='link'>my</a></b> full-time work and it's sustained by neighbors & comrades like you :)
</div>
<div>
Members receive <b><a href='/member-perks' class='link'>several perks</a></b> in exchange for their support. All perks encourage community participation and sustainable living.
</div>
<div>
Thank you for enabling us to host free events, work toward a post-capitalist world, and serve FREE TEA FOR ALL!
</div>
`;

// Description below tiers

const membersDescription = `
<div>
<b>To gift a membership:</b> sign up with your own info and reply to your welcome email with the giftee's info.
</div>
<div>
<b>For those outside the US:</b> due to high shipping prices, we cannot offer the same perks for Steepers or Big Steepers. Alternatives include increasing your contribution amount OR less frequent shipments. Reach out to theteastandnyc@gmail.com and we'll work something out :)
</div>
<div>
🍵
</div>
<div>
We are so grateful to all of our supporters:
</div>
<div>
Moustafa Abdelaziz, Sam Aberbuch, Robin Achtstetter, Shamile Aldossary, Eric Alvarez, Jade Ammeen, Arlene Arevalo, Maria Paula Arriaga, Arlou Arteta, Ben Averbuch, Tim Bannister, Ziggy Bee, Alex Bender, Nat Berman, Micah Bernat, Tanya Bhatia, Mat Bibik, Casey Bivens, Veronica Blackwell, Josie Bradshaw, Autumn Brown, Peter Camardo, Jennifer Calandra, Carmen, Timothy Chacko, Tami Chaize, Kristen Chen, Jac Clayton, Clare Cullinan, Sabar Dasgupta, Kaitlin Deveau, Nick Deveau, Clay Devlin, Lynn Dreifus, Tony Edelstein, Lauren Espinola, Hugh Ferguson, Zoe Fortune, Andrea Garcia, Eli Goldman, Emma Gubitz, Emma Hancock, Caroline Hanlon, Dewi Harjanto, Sebastian Hodge, Mokarram Hossain, Wilson Jacobs, JW, Divisha Khandelwal, Izzie Kirsch, Kenny Kirsch, Nicki Klar, Daniela Kotovsky, Ariel Kovlakas, Devika Kumar, Serena Lakhiani, Darren Lee, Tori Lee, Sophia Livecchi, Charlotte McCune, Mark McGovern, Nickon Mir, Jim Moore, Naqiya Motiwalla, Taher Motiwalla, Mae Nagusky, Stephen New, Isa Nicdao, Michelle Nip, Ray Orr, Zachary Paul, Grayson Pike, Addy Pedro, Noel Peng, Amira R, Momo Ramstedt, Elliot Richardson, Noah Sai, Natalie Sears, Jada Shannon, Juniper Sokolov, Juliet Shen, Peter Steele, Janice Steele, Charmaine Thomas, Tanner Tomasi, Jean Paul Torre, Finn Trondson, Rebecca Urena, Adin Vashi, Lucas Vickers, Edmund White, Val Yang, Joellene Yap, Josh You, Jen Zafra, Sarah Zigler`

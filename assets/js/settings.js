// Link to background color for whole site:
// https://github.com/the-tea-stand/dawn-omega/blob/9db30bdf203f01a65d3431a895821bc13187042f/assets/css/site/cover.css#L145-L151

// Homepage text
//
// Notes:
// Each of these variables should be a string.  It should be well-formed HTML.
// This is a site to test your HTML: https://onecompiler.com/html/
// It can also just be a regular string, e.g. "This is a string"

const description =
  "<span>We serve free tea to cultivate trust<br/>& connection around Brooklyn.<br/><br/>To date, we've served<br/>9,649 cups of free tea!</span>";

const articlesTitle = "Our Newsletter";

const programmingSubtitle =
  "the tea stand takes many forms.<br/>view our event calendar <a href='/calendar' class='link'>here</a>!";

const newsletterSubtitle =
  "we prefer the slow pace of email.<br/>it's free, just like the tea!";

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
    image: "https://i.postimg.cc/k59bH6XL/popup.png",
  },
  {
    title: "🥬 Distros",
    url: "https://www.theteastand.org/distros/",
    image: "https://i.postimg.cc/KvM3vr1d/distro.png",
  },
  {
    title: "🫖 Tea Talks",
    url: "https://www.theteastand.org/tea-talks/",
    image: "https://i.postimg.cc/8c0FrX8v/DSCF0837.jpg",
  },
  {
    title: "📀 Steeped in Sound",
    url: "https://www.theteastand.org/steeped-in-sound/",
    image: "https://i.postimg.cc/zv9LF3ct/steeped.png",
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
The Tea Stand serves free tea to create spaces for local connection. It is 
<b><a href='/a-note-from-miles' class='link'>my</a></b> full-time work & sustained by neighbors & people like you :)
</div>
<div>
In exchange for your support, members receive perks which encourage community participation & sustainable living. More <b><a href='/member-perks' class='link'>here</a></b>. 
</div>
<div>
Y'all enable us to host free events, work toward a post-capitalist world, and serve FREE TEA FOR ALL!
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
<b>We are so grateful to all of our supporters:</b>
</div>
<div>
Moustafa Abdelaziz, Sam Aberbuch, Robin Achtstetter, Shamile Aldossary, Eric Alvarez, Jade Ammeen, Arlene Arevalo, Maria Paula Arriaga, Arlou Arteta, Ben Averbuch, Tim Bannister, Vasilisa Bashlovkina, Ziggy Bee, Alex Bender, Amory Benjamin, Nat Berman, Micah Bernat, Tanya Bhatia, Mat Bibik, Casey Bivens, Veronica Blackwell, Josie Bradshaw, Autumn Brown, Peter Camardo, Jennifer Calandra, Carmen, Timothy Chacko, Tami Chaize, Kristen Chen, Jac Clayton, Clare Cullinan, Sabar Dasgupta, Steven DeGroot, Josh DeSieno, Kaitlin Deveau, Nick Deveau, Clay Devlin, Lynn Dreifus, Mack Drummond, Tony Edelstein, Lauren Espinola, Hugh Ferguson, Zoe Fortune, Andrea Garcia, Eli Goldman, Elizabeth Gruber, Emma Gubitz, Emma Hancock, Caroline Hanlon, Dewi Harjanto, Sebastian Hodge, Mokarram Hossain, Wilson Jacobs, JW, Divisha Khandelwal, Izzie Kirsch, Kenny Kirsch, Nicki Klar, Paige Kloss, Daniela Kotovsky, Ariel Kovlakas, Devika Kumar, Emily LaBombard, Serena Lakhiani, Darren Lee, Tori Lee, Serena Lewin, Anna Lin, Sophia Livecchi, Taylor Maude Love, Anqi Lu, Charlotte McCune, Mark McGovern, Nickon Mir, Jim Moore, Naqiya Motiwalla, Taher Motiwalla, Mae Nagusky, Stephen New, Isa Nicdao, Michelle Nip, Ray Orr, Matti Parone, Zachary Paul, Grayson Pike, Addy Pedro, Noel Peng, Amira R, Momo Ramstedt, Elliot Richardson, Ella Richmond, Noah Sai, Natalie Sears, Jada Shannon, Juniper Sokolov, Yelena Sokolov, Juliet Shen, Kathryn Stadt, Peter Steele, Janice Steele, Charmaine Thomas, Tanner Tomasi, Jean Paul Torre, Finn Trondson, Rebecca Urena, Adin Vashi, Lucas Vickers, Thinh Vu, Hannah Weisz, Edmund White, Val Yang, Joellene Yap, Josh You, Jen Zafra, Sarah Zigler
</div>
`;

// Perpetual Brew Schedule
//
// Notes:
// dayInISOFormat - "YYYY-MM-DD"
// startTime / endTime - "HH:MM" in New York time (ET)
// host - string, name of whoever is hosting that day

// Coordinates used for the weather forecast
const perpetualBrewLat = 40.704011;
const perpetualBrewLon = -73.922854;
const perpetualBrewCupsServed = 1,178;
const perpetualBrewSchedule = [
  {
    day: "2026-04-01",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
  {
    day: "2026-04-02",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-03",
    host: "Paige",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-04",
    host: "Mattie",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-05",
    host: "Andrea & Noah",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-06",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-07",
    host: "Aimee",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-08",
    host: "Paige",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-09",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-10",
    host: "Ziggy",
    startTime: "12:00",
    endTime: "18:00",
  },
  {
    day: "2026-04-11",
    host: "???",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-12",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-13",
    host: "Mattie",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-14",
    host: "Juno (12-4pm), Miles (4-6pm)",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-15",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-16",
    host: "Andrea",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-17",
    host: "Ziggy",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-18",
    host: "Mae",
    startTime: "12:00",
    endTime: "18:00",
  },
    {    
    day: "2026-04-19",
    host: "Aimee",
    startTime: "12:00",
    endTime: "18:00",
  },
  {
    day: "2026-04-20",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-21",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-22",
    host: "???",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-23",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-24",
    host: "Noah",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-25",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-26",
    host: "Andrea & Noah",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-27",
    host: "Syd",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-28",
    host: "Sarah",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-29",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
    {
    day: "2026-04-30",
    host: "Miles",
    startTime: "12:00",
    endTime: "18:00",
  },
];

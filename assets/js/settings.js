// Link to background color for whole site:
// https://github.com/the-tea-stand/dawn-omega/blob/9db30bdf203f01a65d3431a895821bc13187042f/assets/css/site/cover.css#L145-L151

// Homepage text
//
// Notes:
// Each of these variables should be a string.  It should be well-formed HTML.
// This is a site to test your HTML: https://onecompiler.com/html/
// It can also just be a regular string, e.g. "This is a string"

const description =
  "<span>We serve free tea to cultivate trust<br/>& connection around Brooklyn.<br/><br/>To date, we've served<br/>12,322 cups of free tea!</span>";

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

// Membership Tiers and Perks
//
// name - string, should match the name of the tier in Ghost admin (case-sensitive)
// perks - array objects with {state, title, subtitle}
// state - string, either "bold" or "normal".  If "bold", perk title will be bolded and subtitle will be included.
// title - string, the text that will be displayed for that perk
// subtitle - string, additional text that will be displayed under the title in a smaller font.  Only used if state is "bold".
let membershipTiers = [
  {
    name: "Sipper",
    perks: [
      {
        state: "bold",
        title: "🎟️ Discounts at local tea shops",
        subtitle:
          "Up to 20% off at our partner tea shops and small businesses.",
      },
      {
        state: "bold",
        title: "🏠 Town Halls",
        subtitle: "Access to virtual livestreams with Q&A.",
      },
      {
        state: "bold",
        title: '🟢 "free tea for all" sticker',
        subtitle: "A sticker to rep the tea stand far and wide.",
      },
    ],
  },
  {
    name: "Steeper",
    perks: [
      {
        state: "bold",
        title: "📦 Tea Boxes",
        subtitle: "Receive a box of curated tea & art once per season.",
      },
      {
        state: "bold",
        title: "🍵 Travel Cup",
        subtitle: "A customized collapsible & reusable cup made by Stojo.",
      },
      {
        state: "bold",
        title: "📗 bōcha",
        subtitle: "Receive copies of our collaborative zine every solstice.",
      },
      {
        state: "bold",
        title: "➕ All Sipper Perks Included",
        subtitle: "Discounts at local tea shops, town halls, and a sticker",
      },
    ],
  },
  {
    name: "Big Steeper",
    perks: [
      {
        state: "bold",
        title: "🏺 Local Ceramics",
        subtitle:
          "Receive handcrafted teaware (like a teapot!) by NYC-based artists once a year.",
      },
      {
        state: "bold",
        title: "🫖 Tea Ceremonies",
        subtitle:
          "Partake in an educational, interactive, gongfu-style tea session once a year (in-person & virtual).",
      },
      {
        state: "bold",
        title: "⛪ Ambient Church",
        subtitle:
          "Free ticket giveaways to deep listening events across the US.",
      },
      {
        state: "bold",
        title: "🌱 Brooklyn Tea Tour",
        subtitle: "A guided tour of DONA's tea warehouse in Bushwick.",
      },
      {
        state: "bold",
        title: "🆓 Free Merch",
        subtitle: "All items in The Tea Stand marketplace are 100% free!",
      },
      {
        state: "bold",
        title: "➕ All Steeper Perks Included",
        subtitle: "Tea boxes every season, a travel cup, and the bōcha zine.",
      },
      {
        state: "bold",
        title: "➕ All Sipper Perks Included",
        subtitle: "Discounts at local tea shops, town halls, and a sticker",
      },
    ],
  },
];

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
Moustafa Abdelaziz, Sam Aberbuch, Robin Achtstetter, Shamile Aldossary, Eric Alvarez, Jade Ammeen, Arlene Arevalo, Maria Paula Arriaga, Arlou Arteta, Ben Averbuch, Tim Bannister, Vasilisa Bashlovkina, Ziggy Bee, Alex Bender, Amory Benjamin, Nat Berman, Micah Bernat, Tanya Bhatia, Mat Bibik, Casey Bivens, Veronica Blackwell, Josie Bradshaw, Autumn Brown, Peter Camardo, Jennifer Calandra, Carmen, Timothy Chacko, Tami Chaize, Kristen Chen, Jac Clayton, Clare Cullinan, Sabar Dasgupta, Steven DeGroot, Josh DeSieno, Kaitlin Deveau, Nick Deveau, Clay Devlin, Allyssa Dezaldivar, Lynn Dreifus, Mack Drummond, Tony Edelstein, Lauren Espinola, Hugh Ferguson, Aery Foist, Zoe Fortune, Andrea Garcia, Eli Goldman, Elizabeth Gruber, Emma Gubitz, Emma Hancock, Caroline Hanlon, Dewi Harjanto, Sebastian Hodge, Mokarram Hossain, Anne Hubben, Wilson Jacobs, JW, Aidan Kaminer, Divisha Khandelwal, Izzie Kirsch, Kenny Kirsch, Nicki Klar, Paige Kloss, Daniela Kotovsky, Ariel Kovlakas, Devika Kumar, Emily LaBombard, Serena Lakhiani, Darren Lee, Tori Lee, Serena Lewin, Anna Lin, Sophia Livecchi, Taylor Maude Love, Anqi Lu, John Martin, Charlotte McCune, Mark McGovern, Nickon Mir, Anien Monsoon, Jim Moore, Jesse Morgan, Naqiya Motiwalla, Taher Motiwalla, Mae Nagusky, Kelly Nagusky, Stephen New, Isa Nicdao, Michelle Nip, Ray Orr, Matti Parone, Zachary Paul, Grayson Pike, Addy Pedro, Noel Peng, Amira R, Momo Ramstedt, Elliot Richardson, Ella Richmond, Aidan Ryan, Noah Sai, Natalie Sears, Jada Shannon, Juniper Sokolov, Yelena Sokolov, Juliet Shen, Kathryn Stadt, Peter Steele, Janice Steele, Aimee Tadmore, Charmaine Thomas, Tanner Tomasi, Jean Paul Torre, Finn Trondson, Rebecca Urena, Adin Vashi, Lucas Vickers, Thinh Vu, Hannah Weisz, Edmund White, Val Yang, Joellene Yap, Josh You, Jen Zafra, Sarah Zigler
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
const perpetualBrewCupsServed = 2002;
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
    day: "2026-04-20",
    host: "Nickon & Noah",
    startTime: "19:00",
    endTime: "21:00",
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
    host: "Everyone",
    startTime: "06:00",
    endTime: "20:00",
  },
];

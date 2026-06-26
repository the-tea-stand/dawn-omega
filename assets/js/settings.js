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
  "the tea stand takes many forms.<br/>explore our core event types below.";

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

// Get Involved Section
//
// Title: string of the section title, e.g. "Get Involved" (REQUIRED)
// description: string of the section description (REQUIRED)
//
// Following fields are optional, but both are required for CTA button to appear
// ctaText: string of the call to action text, e.g. "Join Now"
// url: string of the url that the call to action button will link to

const getInvolvedSections = [
   {
     title: "Become a Member",
     description:
       "Help sustain The Tea Stand and receive perks like zines & teaware. Tiers start at $3/mo.",
     ctaText: "See Membership Tiers",
     url: "/signup",
   },
   {
     title: "Volunteer",
     description:
       "Serve tea at an event, illustrate a flyer, or assist with behind-the-scenes prep work.",
     ctaText: "Learn More",
     url: "/volunteer",
   },
   {
     title: "Donate Tea",
     description:
       "All the tea we serve has been donated by the community. Learn more about how to donate!",
     ctaText: "Tea Donation Guidelines",
     url: "/donate-tea",
   },
 ];

// ------------------------------------------ Sign up page text ------------------------------------------

// Signup Page Text
//
// You can use template literals (with `ticks`) to make multiline strings.

// Description below signup and above tiers
const signupDescription = `
<div>
The Tea Stand serves free tea to create spaces for local connection.
</div>
<div>
Our members make this possible, and in exchange receive perks like seasonal tea boxes and locally made teapots. Explore the tiers below!
</div>
<div>
Together, we can build local autonomy, practice reciprocity, and continue serving FREE TEA FOR ALL!
</div>
`;

// Newsletter Page Text
//
const newsletterSignupDescription = ``;

// Membership Tiers and Perks
//
// name - string, should match the name of the tier in Ghost admin (case-sensitive)
// image - string (optional), URL of a photo shown at the top of the tier card
// perks - array objects with {state, title, subtitle}
// state - string, either "bold" or "normal".  If "bold", perk title will be bolded and subtitle will be included.
// title - string, the text that will be displayed for that perk
// subtitle - string, additional text that will be displayed under the title in a smaller font.  Only used if state is "bold".
let membershipTiers = [
  {
    name: "Sipper",
    image: "",
    perks: [
      {
        state: "bold",
        title: "🎟️ Discounts at local tea shops",
        subtitle:
          "Receive up to 20% off at several local tea shops & small businesses, like Brooklyn Tea.",
      },
      {
        state: "bold",
        title: "🏠 Town Halls",
        subtitle: "Access to virtual livestreams with Q&A.",
      },
      {
        state: "bold",
        title: '🟢 "free tea for all" sticker',
        subtitle: "Put it on your thermos or on the sidewalk :)",
      },
    ],
  },
  {
    name: "Steeper",
    image:
      "https://static.wikia.nocookie.net/kong/images/9/91/Esquire-npr-2015--2_custom-026f28deb64e00c991a9edf63fcd413b5a4d9adc-s1100-c50.jpg/revision/latest?cb=20231028221828",
    perks: [
      {
        state: "bold",
        title: "📦 Tea Boxes",
        subtitle:
          "Boxes of curated tea & locally illustrated postcards delivered to your door, 4x per year.",
      },
      {
        state: "bold",
        title: "🍵 Custom Mug",
        subtitle: "A 14oz enamel cup with \"free tea for all\" printed on the side. Perfect for tea in the park.",
      },
      {
        state: "bold",
        title: "📗 bōcha",
        subtitle: "Receive issues of our biannual community zine.",
      },
      {
        state: "bold",
        title: "➕ All Sipper Perks Included",
        subtitle: "Discounts, town halls, and a sticker.",
      },
    ],
  },
  {
    name: "Big Steeper",
    image: "",
    perks: [
      {
        state: "bold",
        title: "🪷 Tea Ceremonies",
        subtitle:
          "Partake in educational, intimate tea ceremonies led by tea practitioner Tim Chacko once per year. Offered in-person & virtual.",
      },
      {
        state: "bold",
        title: "🧵 Embroidered Tea Towel",
        subtitle:
          "Linen tea towel with custom hand-embroidery. Available in brown and green — the choice is yours!",
      },
      {
        state: "bold",
        title: "⛪ Ambient Church",
        subtitle:
          "Free ticket giveaways to deep listening events across the US.",
      },
      {
        state: "bold",
        title: "🔮 Future Space",
        subtitle:
          "Free entry to Future Space's weekly Open Hours event series. One free entry per month.",
      },
      {
        state: "bold",
        title: "➕ All Steeper Perks Included",
        subtitle: "Tea boxes, custom mug, and issues of bōcha.",
      },
      {
        state: "bold",
        title: "➕ All Sipper Perks Included",
        subtitle: "Discounts, town halls, and a sticker.",
      },
    ],
  },
  {
    name: "Mega Steeper",
    image: "",
    perks: [
      {
        state: "bold",
        title: "🫖 Handmade Teapot",
        subtitle:
          "An artisanal 'easy gaiwan' teapot (pictured above) made by local ceramicist Lilian Wu.",
      },
      {
        state: "bold",
        title: "🏺 Custom Teaware",
        subtitle:
          "Receive locally made teaware, like tea cups & tea pets, every year on the winter solstice.",
      },
      {
        state: "bold",
        title: "🆓 Free Merch",
        subtitle:
          "All items in The Tea Stand marketplace are 100% free (up to $100 per year).",
      },
      {
        state: "bold",
        title: "🌱 Brooklyn Tea Tour",
        subtitle: "A tour of DONA's tea warehouse in Bushwick.",
      },
      {
        state: "bold",
        title: "➕ All Big Steeper Perks Included",
        subtitle:
          "Tea ceremonies, tea towel, Ambient Church giveaways, and Future Space free entry.",
      },
      {
        state: "bold",
        title: "➕ All Steeper Perks Included",
        subtitle: "Tea boxes, custom mug, and issues of bōcha.",
      },
      {
        state: "bold",
        title: "➕ All Sipper Perks Included",
        subtitle: "Discounts, town halls, and a sticker.",
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
<div class="text-align-center">
🍵
</div>
<div>
<b>We are so grateful to all of our supporters:</b>
</div>
<div>
Moustafa Abdelaziz, Sam Aberbuch, Robin Achtstetter, Shamile Aldossary, Eric Alvarez, Jade Ammeen, Arlene Arevalo, Maria Paula Arriaga, Arlou Arteta, Ben Averbuch, Tim Bannister, Vasilisa Bashlovkina, Ziggy Bee, Alex Bender, Amory Benjamin, Nat Berman, Micah Bernat, Tanya Bhatia, Mat Bibik, Casey Bivens, Veronica Blackwell, Josie Bradshaw, Autumn Brown, Peter Camardo, Jennifer Calandra, Carmen, Timothy Chacko, Tami Chaize, Kristen Chen, Jac Clayton, Clare Cullinan, Sabar Dasgupta, Steven DeGroot, Josh DeSieno, Kaitlin Deveau, Nick Deveau, Clay Devlin, Allyssa Dezaldivar, Lynn Dreifus, Mack Drummond, Tony Edelstein, Lauren Espinola, Hugh Ferguson, Aery Foist, Zoe Fortune, Andrea Garcia, Eli Goldman, Elizabeth Gruber, Emma Gubitz, Emma Hancock, Caroline Hanlon, Dewi Harjanto, Sebastian Hodge, Mokarram Hossain, Anne Hubben, Wilson Jacobs, JW, Aidan Kaminer, Divisha Khandelwal, Izzie Kirsch, Kenny Kirsch, Nicki Klar, Paige Kloss, Daniela Kotovsky, Ariel Kovlakas, Devika Kumar, Emily LaBombard, Serena Lakhiani, Darren Lee, Tori Lee, Serena Lewin, Anna Lin, Sophia Livecchi, Taylor Maude Love, Anqi Lu, John Martin, Charlotte McCune, Mark McGovern, Nickon Mir, Anien Monsoon, Jim Moore, Jesse Morgan, Naqiya Motiwalla, Taher Motiwalla, Mae Nagusky, Kelly Nagusky, Stephen New, Isa Nicdao, Michelle Nip, Ray Orr, Matti Parone, Zachary Paul, Grayson Pike, Addy Pedro, Noel Peng, Amira R, Momo Ramstedt, Elliot Richardson, Ella Richmond, Aidan Ryan, Noah Sai, Natalie Sears, Jada Shannon, Juniper Sokolov, Yelena Sokolov, Juliet Shen, Kathryn Stadt, Peter Steele, Janice Steele, Aimee Tadmore, Charmaine Thomas, Tanner Tomasi, Jean Paul Torre, Finn Trondson, Rebecca Urena, Adin Vashi, Lucas Vickers, Thinh Vu, Hannah Weisz, Edmund White, Val Yang, Joellene Yap, Josh You, Jen Zafra, Sarah Zigler
</div>
<div>
<b>You can find my privilege statement <a href='/a-note-from-miles' class='link'>here</a>.</b>
</div>
`;

// ------------------------------------------ Perpetual Brew  ------------------------------------------

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

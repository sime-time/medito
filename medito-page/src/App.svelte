  <!-- JAVASCRIPT --> 
<script>
import NavBar from './lib/NavBar.svelte';
import Fundraiser from './lib/Fundraiser.svelte';
import Footer from './lib/Footer.svelte';

import medito_logo from '/medito-logo.svg';
const medito_url = "https://www.meditofoundation.org";

// FUNDRAISER DESCRIPTION AND IMAGE CONTENT (images are optional)
// data passed to Fundraiser.svelte
let fundraiser = { 
  title: "Community Service Campaign",
  description: `For the past 20 years I have been a licensed barber/cosmetologist in my hometown of Cincinnati, Ohio. As of 2019 I took a step toward entrepreneurship in the personal care industry and became owner of Noble Barber & Beauty. During my role of both owner and barber, I have been given the opportunity to build strong relationships with those who enter the barbershop. As my shop provides a supportive environment; clients feel comfortable in sharing stories of struggle and triumph, good days and bad. On any given day, barbershop talk might range from a recap of the latest sports game to updates on births of children and grandchildren. Clients may tell of challenges experienced at work, while youth are always excited to tell me about school and the activities they are involved in. I am grateful for these relationships and the space I have available to listen, encourage and support as best I can.One relationship that has really been humbling for me, is a young man whose mother drives over an hour to receive a haircut for her son. Due to the additional time required and accommodations needed, this mother could not find a barber in her hometown who was willing to provide a haircut for her son who has special needs.`,
};

// FAQ ITEMS 
// data passed to Fundraiser.svelte -> FAQ.svelte 
let faq_items = [
  {isOpen: false, question: "How are ebooks delivered?", answer: "I've partnered with Sendowl for ebook delivery; after the campaign closes, you'll get a survey asking you for an email address to send your download code to. Note: If you use Apple's Private Relay service for email, you must provide an alternative email address for delivery when you fill in your survey. By design, these email addresses only work with one service. The address you provide to Kickstarter won't work with Sendowl or Libro.fm!"},
  {isOpen: false, question: "How are audiobooks delivered?", answer: "I've partnered with the great Libro.fm to make it easier for people who don't want to wrangle sideloading their own media. If you choose Libro.fm for audiobook delivery, you'll get a download code by email. Just install the Libro app (for iOS or Android), enter the code, and the book will show up in your account (Libro also lets you download all the books in your library as MP3s)."},
  {isOpen: false, question: "Where do signed books ship from?", answer: "Signed books get fulfilled by LA's Book Soup/Vroman's, a superb, independent bookseller. I drop by to sign books there once per week, and they ship all over the world for me. Non-US buyers may have the pay customs charges when these books arrive."},
  {isOpen: false, question: "Will I get the US or UK covers on my print books?", answer: "Backers in Canada and the USA will get the US cover. from Tor Books. All other backers will get the UK cover, from Head of Zeus."},
  {isOpen: false, question: "Have another question?", answer: "FORM"}
];

// API DATA FOR RECENT DONOR NOTIFICATIONS 
// data passed to Fundraiser.svelte -> Notification.svelte
let donators = [
  {name: "Anon", currency: "$", spent: 20}, 
  {name: "Beta", currency: "$", spent: 15}, 
  {name: "Chad", currency: "$", spent: 100}
];

// API DATA FOR TOTAL DONATIONS AND DONATION GOAL PROGRESS
// data passed to Fundraiser.svelte -> GoalProgress.svelte 
const donation_stats = {
  money_raised: 45000,
  money_goal: 65000,
  total_donations: 4420
}

// REWARDS AND ACCEPTED CURRENCY TYPES
// data passed to Fundraiser.svelte -> GoalProgress.svelte -> Donate.svelte
let rewards = [ // Font Awesome Icons
  {name: "Diamond", minimum: 100, icon: "fa-solid fa-gem", isSelected: false}, 
  {name: "Gold", minimum: 50, icon: "fa-solid fa-sack-dollar", isSelected: false},
  {name: "Iron", minimum: 5, icon: "fa-solid fa-coins", isSelected: false}
]; 

let currencies = [
  {name: "USD", icon: "&#36;"},
  {name: "EUR", icon: "&#8364;"},
  {name: "CAD", icon: "&#36;"},
  {name: "GBP", icon: "&#163;"},
  {name: "AUD", icon: "&#36;"}
];


</script>

  <!-- HTML -->
<main>
  <NavBar logo_src={medito_logo} logo_url={medito_url} />
  <Fundraiser 
      title = {fundraiser.title}
      description = {fundraiser.description}
      faq_items = {faq_items} 
      donators = {donators}
      donation_stats = {donation_stats}
      rewards = {rewards} 
      currencies = {currencies}
  />
  <Footer />
</main>

  <!-- CSS -->
<style>

</style>

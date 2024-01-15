<!-- JAVASCRIPT -->
<script>
const faqItems = [
  {question: "How are ebooks delivered?", answer: "I've partnered with Sendowl for ebook delivery; after the campaign closes, you'll get a survey asking you for an email address to send your download code to. Note: If you use Apple's Private Relay service for email, you must provide an alternative email address for delivery when you fill in your survey. By design, these email addresses only work with one service. The address you provide to Kickstarter won't work with Sendowl or Libro.fm!"},
  {question: "How are audiobooks delivered?", answer: "I've partnered with the great Libro.fm to make it easier for people who don't want to wrangle sideloading their own media. If you choose Libro.fm for audiobook delivery, you'll get a download code by email. Just install the Libro app (for iOS or Android), enter the code, and the book will show up in your account (Libro also lets you download all the books in your library as MP3s)."},
  {question: "Where do signed books ship from?", answer: "Signed books get fulfilled by LA's Book Soup/Vroman's, a superb, independent bookseller. I drop by to sign books there once per week, and they ship all over the world for me. Non-US buyers may have the pay customs charges when these books arrive."},
  {question: "Will I get the US or UK covers on my print books?", answer: "Backers in Canada and the USA will get the US cover. from Tor Books. All other backers will get the UK cover, from Head of Zeus."},
];


</script>



<!-- HTML -->
<div class="faq-container">
  <h3>Frequently Asked Questions:</h3>
  {#each faqItems as item}
    <div class="faq-item">
      <div class="question" >{item.question}</div>
      <div class="answer">{item.answer}</div>
    </div>
  {/each}
</div>



<!-- CSS -->
<style>
.faq-container {
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
.faq-item {
  
}
.question {
  font-weight: 600;
  padding: 1em;
  border: 2px solid var(--foreground);
}
.answer {
  font-weight: 200;
  padding: 1em;

}
</style>

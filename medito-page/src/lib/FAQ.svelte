<!-- JAVASCRIPT -->
<script>
const faqItems = [
  {question: "How are ebooks delivered?", answer: "I've partnered with Sendowl for ebook delivery; after the campaign closes, you'll get a survey asking you for an email address to send your download code to. Note: If you use Apple's Private Relay service for email, you must provide an alternative email address for delivery when you fill in your survey. By design, these email addresses only work with one service. The address you provide to Kickstarter won't work with Sendowl or Libro.fm!"},
  {question: "How are audiobooks delivered?", answer: "I've partnered with the great Libro.fm to make it easier for people who don't want to wrangle sideloading their own media. If you choose Libro.fm for audiobook delivery, you'll get a download code by email. Just install the Libro app (for iOS or Android), enter the code, and the book will show up in your account (Libro also lets you download all the books in your library as MP3s)."},
  {question: "Where do signed books ship from?", answer: "Signed books get fulfilled by LA's Book Soup/Vroman's, a superb, independent bookseller. I drop by to sign books there once per week, and they ship all over the world for me. Non-US buyers may have the pay customs charges when these books arrive."},
  {question: "Will I get the US or UK covers on my print books?", answer: "Backers in Canada and the USA will get the US cover. from Tor Books. All other backers will get the UK cover, from Head of Zeus."},
  {question: "Have another question?", answer: "FORM HERE"}
]; 

document.addEventListener("DOMContentLoaded", () => {
  
  // for loop through all questions 
  let questions = document.getElementsByClassName("question");
  for (let i = 0; i < questions.length; i++) {

    
    // when each question is clicked:
    questions[i].addEventListener("click", function() {

      // toggle transformation of the dropdown arrow 
      let dropdownIcon = this.lastElementChild; 
      if (dropdownIcon.classList.contains("active")) {
        dropdownIcon.classList.remove("active");
      } else {
        dropdownIcon.classList.add("active");
      }
      
      // toggle visibility of answers       
      let answer = this.nextElementSibling;
      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });

  }
});

</script>



<!-- HTML -->
<div class="faq-container">
  <h3 class="small-title">Frequently Asked Questions:</h3>
  {#each faqItems as item}
    <div class="faq-item">
      <button class="question">
        {item.question}
        <i class="fa-solid fa-chevron-down"></i>
      </button>
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
  width: 100%;
}
.faq-item {
  border-radius: var(--border-radius);
  border: 2px solid var(--foreground);
  background: var(--background-accent);
  box-shadow: 3px 3px var(--foreground);
  transition: 0.4s;
}
.faq-item:hover {
  background: var(--tertiary);
}
.question {
  font-weight: bold;
  font-size: 1rem;
  padding: 1em;
  border-radius: var(--border-radius);
  cursor: pointer;
  color: var(--foreground);
  background-color: inherit;
  border: none;
  outline: none;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

/* transition for the arrow icon */ 
.question > i {
  font-size: 1.2rem;
}

.answer {
  font-size: 1rem;
  line-height: 1.5;
  padding-inline: 1em;
  padding-bottom: 1em;
  overflow: hidden;
  display: none;
}

</style>

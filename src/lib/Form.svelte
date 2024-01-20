<!-- JAVASCRIPT -->
<script>

</script>



<!-- HTML -->
<form id="contact-form">

  <div class="input-container">
    <label for="name">Name</label>
    <input type="text" id="name" name="name" placeholder="John Smith" required>
  </div>

  <div class="input-container">
    <label for="mail">Email Address<sup>*</sup></label>
    <input type="email" id="mail" name="mail" placeholder="johnsmith@email.com" required>
    <span><sup>*</sup>Your email address is required to prevent spam and allow follow up queries</span>
  </div>

  <div class="input-container">
    <label for="new-faq-question">Question</label>
    <textarea id="new-faq-question" name="new-faq-question" placeholder="Write your question..."></textarea>
  </div>

  <input type="submit" class="submit-button" value="Submit">

</form>



<!-- CSS -->
<style>
form {
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 1em;
  justify-items: space-between;
  font-family: inherit;
}

.input-container {
  display: flex;
  flex-direction: column;
}
.input-container > span {
  font-size: 0.7rem; 
  color: var(--foreground);
  font-style: italic;
}

.input-container > input {
  padding: 1em;
  background: var(--background); 
  border: 2px solid var(--foreground);
  border-radius: var(--border-radius);
  color: var(--foreground);
  font-size: 1rem;
  font-family: inherit;
}
.input-container > textarea {
  padding: 1em;
  background: var(--background);
  color: var(--foreground);
  font-size: 1rem;
  font-family: inherit;
  border: 2px solid var(--foreground); 
  border-radius: var(--border-radius);
  resize: vertical;
  min-height: 100px;
  line-height: 1.5;
}
.submit-button {
  cursor: pointer;
  font-size: 1rem;
  color: var(--background);
  background: var(--secondary);
  border-radius: var(--border-radius);
  border: 2px solid var(--foreground);
  box-shadow: 3px 3px var(--foreground);
  padding: 1em;
  text-align: center;
  transition: 0.2s ease;
  font-family: inherit;
}

.submit-button:hover {
  color: var(--secondary);
  background-color: var(--background);
  border: 2px solid var(--secondary);
  box-shadow: none;
}


</style>

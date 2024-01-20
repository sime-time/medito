<!-- JAVASCRIPT -->
<script>
import { slide } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
import Form from './Form.svelte';

export let faq_items;

// open answer block when question is clicked 
function toggleAnswer(index) {
  faq_items[index].isOpen = !faq_items[index].isOpen;
}

</script>



<!-- HTML -->
<div class="faq-container" id="faq">
  <h3 class="small-title">Frequently Asked Questions:</h3>
  {#each faq_items as item, i}
    <div class="faq-item">
      <button class="question" on:click={() => toggleAnswer(i)}>
        {item.question}

        {#if item.isOpen}
          <i class="fa-solid fa-chevron-up"></i>
        {:else}
          <i class="fa-solid fa-chevron-down"></i>
        {/if}

      </button>

      {#if item.isOpen}
        <div class="answer" transition:slide={{ delay: 0, duration: 500, easing: quintOut, axis: 'y' }} >

          {#if item.answer == "FORM"}
            <Form /> 
          {:else}
            {item.answer}
          {/if}

        </div>
      {/if}

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
  font-weight: 500;
  font-family: inherit;
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
.question > i {
  font-size: 1.2rem;
}

.answer {
  font-size: 1rem;
  line-height: 1.5;
  padding-inline: 1em;
  padding-bottom: 1em;
  overflow: hidden;
  display: block;
}

</style>

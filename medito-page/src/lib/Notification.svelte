  <!-- JAVASCRIPT -->
<script>
import { fly } from 'svelte/transition';
import { linear } from 'svelte/easing';

// get donator data from API 
export let donators;

let currentDonatorIndex = 0;
let showNotification = true;

// updateDonator function is called when the close button is clicked, 
// and it increments the currentDonatorIndex to cycle through the donators array. 
function updateDonator() {
  currentDonatorIndex = (currentDonatorIndex + 1) % donators.length;
  
  // once showNotification reaches 0 again the notification will close completely 
  showNotification = currentDonatorIndex !== 0; 
}

// The currentDonator variable is reactive, 
// so the component will automatically update when the current donator changes. 
$: currentDonator = donators[currentDonatorIndex]; 
</script>




  <!-- HTML -->
{#if currentDonator && showNotification}
  <div class="noti-ribbon" transition:fly={{ delay: 0, duration: 200, x: 300, y: 0, opacity: 0.5, easing: linear }}>
    <span class="noti-icon">
      <i class="fa-solid fa-hand-holding-heart"></i>
    </span>
    <span class="message">{currentDonator.name} just donated {currentDonator.currency}{currentDonator.spent}</span>
    <button class="close-button" on:click={updateDonator}>
      <span class="fas fa-times"></span>
    </button>
  </div>
{/if}
    



  <!-- CSS -->
<style>
.noti-ribbon {
  background: var(--background-accent);
  color: var(--secondary);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  border-radius: var(--border-radius); 
  border-left: 6px solid var(--secondary);
  box-shadow: 3px 3px 5px var(--tertiary); 
  opacity: 0.8;
}
.noti-icon {
  flex: 1;
}
.fa-hand-holding-heart {
  font-size: 1.5em;
}
.message {
  flex: 10;
  padding-left: 1rem;
  font-weight: bold;
  width: 100%;
}

.close-button {
  flex: 2;
  display: flex;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  background: inherit;
  color: inherit;
  border: none;
}
.fa-times {
  font-size: 1.5em;
}

</style>

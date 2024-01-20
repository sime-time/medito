  <!-- JAVASCRIPT -->
<script> 
  import { slide, fade } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
  import Donate from './Donate.svelte';

  // pass these props to Donate.svelte 
  export let currencies;
  export let rewards;

  // take donation data from API 
  export let donation_stats;
  console.log(donation_stats.money_goal);

  // format API data to $USD
  let currency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });
  
  // translate donation API data for front-end text
  const progress_percentage = Math.floor(donation_stats.money_raised/donation_stats.money_goal*100);
  let money_raised = currency.format(donation_stats.money_raised);
  let money_goal = currency.format(donation_stats.money_goal);
  let total_donations = donation_stats.total_donations.toString();


  function updateProgressBar() {
    const progressBarElements = document.querySelectorAll('.progress-bar'); // returns collection
    progressBarElements.forEach(function(progressBar) {
      progressBar.style.width = `${progress_percentage}%`;
    });
  }

  var donationOpen = false; 

  function openDonate() {
    donationOpen = true;
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateProgressBar();
  });
</script>



  <!-- HTML -->
<div class="goal-progress-container">
  <div class="goal-content">
    
    <div class="goal-numbers">
      <h2 class="small-title">{money_raised}
       <span class="subtext"> raised of {money_goal} goal!</span>
      </h2>
    </div>
    <div class="progress-bar-container">
      <div class="progress-bar"></div>
    </div>
    <div class="donation-numbers">
      <h3 class="progress-percent">{progress_percentage.toString()}% Complete</h3>
      <h3 class="subtext">{total_donations} donations</h3>
    </div>
    <div class="button-container">

      <div class="share-button">Share</div>
      <!-- if donationOpen is true, then switch out the Donation button 
           and add donation panel -->
      {#if donationOpen}
        <div class="donation-panel" transition:slide={{ delay: 0, duration: 700, easing: quintOut, axis: 'y' }} >
          <Donate rewards={rewards} currencies={currencies} />
        </div>
      {:else}
        <button class="donate-button" on:click={openDonate} transition:fade={{ delay: 0, duration: 20}}>Donate</button>
      {/if}
    </div>

  </div>
</div>



  <!-- CSS -->
<style>
.goal-progress-container {
  width: 100%;
  padding: 1em;
  background: var(--background-accent);
  border-radius: var(--border-radius);
  border: 2px solid var(--foreground);
  box-shadow: 3px 3px var(--foreground);
  box-sizing: border-box;
}

.goal-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
}

.goal-numbers {
  display: flex;
  flex-direction: row;
}
.donation-numbers {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.progress-percent {
  color: limegreen;
  font-size: 16px;
}
.subtext {
  color: var(--tertiary);
  font-size: 14px;
}
.progress-bar-container {
  width: 100%;
  background-color: var(--tertiary); /* Background color of the progress container */
  border-radius: var(--border-radius); /* Optional: Add rounded corners */
  overflow: hidden; /* Hide overflowing content */
}

.progress-bar {
  width: 0%;
  height: 8px; /* height of the progress bar */
  background-color: limegreen; /* Color of the progress bar */
  transition: width 1.5s ease; /* Add a smooth transition effect */
  animation-name: animationProgress;
  animation-duration: 1.5s;
}
@keyframes animationProgress {
  from {
    width: 0; 
  }
}

.donation-panel {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
}

</style> 

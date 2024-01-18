<!-- JAVASCRIPT -->
<script> 
import { slide, fade } from 'svelte/transition';
import { quintOut } from 'svelte/easing';
import Donate from './Donate.svelte';

// take donation data from API 
const money_raised_api = 34000;
const money_goal_api = 55000;
const donations_api = 1420;
const progress_percentage = Math.floor(money_raised_api/money_goal_api*100);
 
// format API data to $USD
let currency = Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

let money_raised = currency.format(money_raised_api);
let money_goal = currency.format(money_goal_api);
let donations = donations_api;

function updateProgressBar(percent) {
  const progressBarElements = document.querySelectorAll('.progress-bar'); // returns collection
  progressBarElements.forEach(function(progressBar) {
    progressBar.style.width = percent + '%';
  });
}

let donationOpen = false; 

function openDonate() {
  donationOpen = true;
}

document.addEventListener("DOMContentLoaded", () => {
  updateProgressBar(progress_percentage);
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
      <h3 class="subtext">{donations} donations</h3>
    </div>
    <div class="button-container">

      <div class="share-button">Share</div>
      <!-- if donationOpen is true, then switch out the Donation button 
           and add donation panel -->
      {#if donationOpen}
        <div class="donation-panel" transition:slide={{ delay: 0, duration: 700, easing: quintOut, axis: 'y' }} >
          <Donate />
          <a class="donate-button" href="#">Continue</a> <!-- link to payment page --> 
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
}
.progress-percent {
  color: limegreen;
  font-size: 16px;
}
.subtext {
  color: var(--tertiary);
  font-size: 16px;
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
  transition: width 0.3s ease-in-out; /* Add a smooth transition effect */
}

.donation-panel {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1em;
}
</style> 

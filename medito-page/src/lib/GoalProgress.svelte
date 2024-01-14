<script> 
  // take donation data from API 
  const money_raised_api = 34000;
  const money_goal_api = 55000;
  const donations_api = 1420;
  const progress_percentage = Math.floor(money_raised_api/money_goal_api*100);

  // format API data to $USD
  const currency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  let money_raised = currency.format(money_raised_api);
  let money_goal = currency.format(money_goal_api);
  let donations = donations_api;

  function updateProgressBar(percent) {
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = percent + '%';
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateProgressBar(progress_percentage);
  });
</script>


<div class="goal-progress-container">
  <div class="goal-content">
    

    <div class="goal-numbers">
      <h2 class="small-title">{money_raised}
       <span class="subtext"> raised of {money_goal} goal!</span>
      </h2>
    </div>
    <div class="progress-bar-container">
      <div id="progress-bar"></div>
    </div>
    <div class="donations">
      <h3 class="subtext">{donations} donations</h3>
    </div>
    <div class="button-container">
      <div class="share-button">Share</div>
      <div class="donate-button">Donate</div>
    </div>

  </div>
</div>

<style>
  .goal-progress-container {
    padding: 1em;
    background: var(--background-accent);
    border-radius: var(--border-radius);
    box-shadow: 3px 3px var(--foreground);
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
  .small-title {
    color: var(--foreground);
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

  #progress-bar {
    width: 0%;
    height: 8px; /* height of the progress bar */
    background-color: #A0AF84; /* Color of the progress bar */
    transition: width 0.3s ease-in-out; /* Add a smooth transition effect */
  }

  .button-container {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .donate-button {
    color: var(--foreground);
    background-color: var(--primary);
    border-radius: var(--border-radius);
    border: 2px solid var(--foreground);
    box-shadow: 3px 3px var(--foreground);
    padding: 1em;
    text-align: center;
    transition: 0.2s ease;
  }
  .donate-button:hover {
    color: var(--primary);
    background-color: var(--background);
    border-radius: var(--border-radius);
    border: 2px solid var(--primary);
    box-shadow: none;
  }
  .share-button {
    color: var(--background);
    background-color: var(--secondary);
    border-radius: var(--border-radius);
    border: 2px solid var(--foreground);
    box-shadow: 3px 3px var(--foreground);
    padding: 1em;
    text-align: center;
    transition: 0.2s ease;
  }
  .share-button:hover {
    color: var(--secondary);
    background-color: var(--background);
    border-radius: var(--border-radius);
    border: 2px solid var(--secondary);
    box-shadow: none;
  }


</style> 

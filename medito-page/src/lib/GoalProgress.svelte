<script> 
  // take donation data from API 
  const money_raised_api = 34000;
  const money_goal_api = 55000;
  const donations_api = 1420;

  // format API data to $USD
  const currency = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });

  let money_raised = currency.format(money_raised_api);
  let money_goal = currency.format(money_goal_api);
  let donations = currency.format(donations_api);


</script>


<div class="goal-progress-container">
  <div class="goal-content">
    

    <div class="goal-numbers">
      <h2 class="small-title">{money_raised}
       <span class="subtext"> raised of {money_goal} goal!</span>
      </h2>
    </div>
    <div class="goal-bar">
    </div>


  </div>
</div>

<style>
  .goal-progress-container {
    padding: 1em;
    background: var(--tertiary);
    border-radius: var(--border-radius);
  }
  
  .goal-content {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
  }
  .goal-numbers {
    display: flex;
    flex-direction: row;
  }
  .subtext {
    color: var(--primary);
    font-size: 16px;
  }

</style> 

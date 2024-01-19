<!-- JAVASCRIPT -->
<script>

let rewards = [
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

// dynamic bind values for donation amount 
let amount;
let minAmount;

function selectReward(index) {
  // selecting a reward should unselect every other reward 
  rewards[index].isSelected = true;
  amount = rewards[index].minimum;
  minAmount = rewards[index].minimum;

  for (let i = 0; i < rewards.length; i++) {
    if (!(i===index)) {
      rewards[i].isSelected = false; 
    }
  }
}

let selectedCurrency = currencies[0].name;
let selectedCurrencyIcon = currencies[0].icon;

function handleCurrencyChange(event) {
  selectedCurrency = event.target.value;
  selectedCurrencyIcon = getCurrencyIcon();
}
function getCurrencyIcon() {
  if (selectedCurrency) {
    // find the currency with the matching name
    const selectedCurrencyObj = currencies.find(currency => currency.name === selectedCurrency);

    // if a matching currency is found, return its icon; otherwise, return the icon of the first currency
    return selectedCurrencyObj ? selectedCurrencyObj.icon : currencies[0].icon;
  } else {
    // if selectedCurrency is falsy, return the icon of the first currency
    return currencies[0].icon;
  }
}

// event handler for input changes 
function handleAmountInput(event) {
  let inputValue = event.target.value;

  // remove non-digit characters except decimal point
  inputValue = inputValue.replace(/[^\d.]/g, '');

  // ensure only one decimal point is present
  const decimalCount = inputValue.split('.').length - 1;
  if (decimalCount > 1) {
    inputValue = inputValue.slice(0, inputValue.lastIndexOf('.'));
  }

  // update the amount with the cleaned and formatted value
  amount = inputValue; 

  // TODO: make the selected reward change based on the amount 
}

</script>


<!-- HTML -->
<div class="panel-container">

  <h4>Rewards</h4>
  <div class="rewards-container">
    {#each rewards as reward, idx}
      <button class="reward" on:click={() => selectReward(idx)} class:active={reward.isSelected}>
        <i class={reward.icon}></i>
        <div class="reward-desc">
          <span>{reward.name}</span>
          <p>The minimum for this tier is {@html selectedCurrencyIcon}{reward.minimum.toString()}</p>
        </div>
      </button>
    {/each}
  </div>

  <h4>Donation amount</h4>
  <div class="donation-container">
    <div class="currency-container">

      <!-- when the dropdown selection changes, choose the correct currency symbol -->
      <label for="currency-dropdown" class="currency-label">{@html selectedCurrencyIcon}</label>

      <select class="currency-dropdown" name="currency" on:change={handleCurrencyChange}>
        {#each currencies as currency}
          <option value={currency.name}>{currency.name}</option>
        {/each}
      </select>
    </div>
    <div class="input-container">
      <input type="text" class="input-amount" bind:value={amount} on:input={handleAmountInput} placeholder=0 />
    </div>
  </div>


</div>



<!-- CSS -->
<style>
h4 {
  padding-block: 0.5em;
}
input {
  border: none;
}
select {
  border: none;
}
.rewards-container {
  display: flex;
  flex-direction: column;
  background: var(--tertiary);
  border-radius: var(--border-radius);
  padding: 3px;
  gap: 0.5em;
  justify-content: space-between;
}
.reward {
  cursor: pointer;
  color: var(--foreground);
  display: flex;
  align-items: center;
  border-radius: var(--border-radius);
  border: none;
  opacity: 0.3;
  padding: 0.5em;
  background: var(--tertiary);
  transition: 0.4s ease;
}

.reward:hover {
  opacity: 0.8;
}

.reward.active {
  color: var(--background);
  opacity: 1;
  background: var(--primary);
}

.reward > i {
  padding: 0.5em;
  font-size: 1.2em;
}
.reward-desc {
  display: flex;
  justify-items: flex-start;
  flex-direction: column;
  text-align: left;
  margin-left: 0.5em;
}
.reward-desc > span {
  font-size: 1rem;
}
.reward-desc > p {
  font-size: 0.8rem;
}


.donation-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1em;
  border: 2px solid var(--foreground);
  border-radius: var(--border-radius);
  overflow: hidden;
  height: 5em;
}

.currency-container {
  display: flex;
  flex-direction: column;
  padding: 1em;
  gap: 0.5em;
  background-color: var(--background);
  height: inherit;
  justify-content: center;
}
.currency-label {
  text-align: center;
  font-size: 1.5em;
}
.currency-dropdown {
  color: var(--foreground);
  background: inherit;
}

.input-container {
  height: inherit;
  border-left: 2px solid var(--foreground);
}
.input-amount {
  width: 100%;
  height: 100%;
  color: var(--foreground);
  background: var(--background);
  font-size: 2em;
  padding-left: 10px;
}


</style>

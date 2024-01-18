<!-- JAVASCRIPT -->
<script>

let rewards = [
  {name: "Diamond", minimum: 100, icon: "fa-solid fa-gem", isSelected: false},
  {name: "Gold", minimum: 50, icon: "fa-solid fa-sack-dollar", isSelected: false},
  {name: "Iron", minimum: 1, icon: "fa-solid fa-coins", isSelected: true}
]; 

function selectReward(index) {
  // selecting a reward should unselect every other reward 
  rewards[index].isSelected = true; 

  for (let i = 0; i < rewards.length; i++) {
    if (!(i===index)) {
      rewards[i].isSelected = false; 
    }
  }
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
          <p>The minimum for this tier is ${reward.minimum.toString()}</p>
        </div>
      </button>
    {/each}
  </div>

  <h4>Donation amount</h4>
  <div class="donation-container">

  </div>


</div>



<!-- CSS -->
<style>
h4 {
  padding-block: 0.5em;
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

</style>

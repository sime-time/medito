<!-- JAVASCRIPT -->
<script>
import GoalProgress from './GoalProgress.svelte';
import Notification from './Notification.svelte';
import FAQ from './FAQ.svelte';
import fundraiser_image from '../assets/fundraiser-photo.jpg';

export let title;
export let description; 
export let faq_items; 
export let donators;
export let rewards;
export let currencies; 
export let donation_stats;

</script>
  


<!-- HTML -->
<div class="title-container">
  <h1 class="title">{title}</h1>
  <div class="noti-container" >
    <Notification donators={donators}/>
  </div>
</div>
<div class="main-body-container">
   <div id="left-content">
    <div class="img-container">
      <img src={fundraiser_image} alt="fundraising topic" />
    </div>
    <div id="goal-container-mobile">
      <GoalProgress donation_stats={donation_stats} rewards={rewards} currencies={currencies} />
    </div>
    <div id="description">
      <h3 class="small-title">Purpose:</h3>
      <p class="description-text">{description}</p>
      <div class="expand-container"><input class="expand-button" type="checkbox"></div>
    </div>
    <FAQ faq_items={faq_items} />
  </div>
  <div id="right-content">
    <div id="goal-container">
      <GoalProgress donation_stats={donation_stats} rewards={rewards} currencies={currencies}/>
    </div>
  </div>
</div>



<!-- CSS -->
<style>
.title {
  flex: 2;
  font-weight: 500;
  height: 2em;
  display: flex;
  align-items: center;
}
.noti-container {
  flex: 1;
}
.title-container {
  max-width: var(--max-width);
  margin: auto;
  margin-bottom: 1em;
  padding-inline: 1em;
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  gap: 1em;
  align-items: center;
}
.main-body-container {
  max-width: var(--max-width);
  margin: auto;
  padding-inline: 1em;
  display: flex;
  flex-direction: row; 
  justify-content: space-between;
  gap: 1em;
} 
#left-content {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1em;
  justify-content: space-between;
}
#right-content {
  flex: 1;
}

#goal-container {
  position: sticky; 
  top: 1em;
}

.img-container img {
  width: 100%;
  height: auto;
  border-radius: var(--border-radius);
}
#goal-container-mobile {
  display: none;
}

#description {
  font-size: 1rem;
  margin-block: 1em;
  line-height: 1.5;
}

.description-text {
  --max-lines: 4;
  --line-height: 1.5;

  max-height: calc(var(--max-lines) * 1em * var(--line-height));
  line-height: var(--line-height);

  overflow: hidden;
  position: relative;
}
.description-text:has(+ .expand-container > .expand-button:not(:checked))::before {
  content: "";
  position: absolute;
  height: calc(1em * var(--line-height));
  width: 100%;
  bottom: 0;
  pointer-events: none;
  background: linear-gradient(to bottom, transparent, var(--background));
}
/* when the .description-text class has a sibling named expand-container,
   if the checkbox inside of the container is checked, then remove 
   the max-height limitation and gradient effects. */
.description-text:has(+ .expand-container > .expand-button:checked) {
  max-height: none;
}

.expand-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.expand-button {
  appearance: none; /* removes the checkbox */
  font-family: inherit;
  color: var(--secondary);
  padding: 0.5em;
  max-width: 100%;
  width: 50%;
  text-align: center;
}
.expand-button:hover {
  color: var(--primary);
}

.expand-button::before {
  content: "show more";
  max-width: 100%;
}

.expand-button:checked::before {
  content: "show less";
  max-width: 100%;
}


@media(max-width: 768px) {
  #description {
    width: 100%;
  }
  #right-content {
    display: none;
  }
  #goal-container-mobile {
    display: flex;
    margin-block: 1em;
  }
  .title-container {
    flex-direction: column;
  }
  .noti-container {
    width: 100%;
  }
}

</style>

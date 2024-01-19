<!-- JAVASCRIPT -->
<script>
import GoalProgress from './GoalProgress.svelte';
import Notification from './Notification.svelte';
import FAQ from './FAQ.svelte';
import fundraiserImg from '../assets/fundraiser-photo.jpg';
let fundraiser_title = "Community Service Campaign";

// you can use html code to add variation to the desc like
// indentation, new lines<br/>, or titles <h3> etc.
let fundraiser_description = `
For the past 20 years I have been a licensed
barber/cosmetologist in my hometown of
Cincinnati, Ohio. As of 2019 I took a step
toward entrepreneurship in the personal care
industry and became owner of Noble Barber &
Beauty. During my role of both owner and
barber, I have been given the opportunity to
build strong relationships with those who enter
the barbershop. As my shop provides a
supportive environment; clients feel
comfortable in sharing stories of struggle and
triumph, good days and bad. On any given day,
barbershop talk might range from a recap of
the latest sports game to updates on births of
children and grandchildren. Clients may tell of
challenges experienced at work, while youth
are always excited to tell me about school and
the activities they are involved in. I am grateful
for these relationships and the space I have
available to listen, encourage and support as
best I can. 
<br/>
<br/>
One relationship that has really been humbling
for me, is a young man whose mother drives
over an hour to receive a haircut for her son.
Due to the additional time required and
accommodations needed, this mother could
not find a barber in her hometown who was
willing to provide a haircut for her son who has
special needs.`;

</script>
  


<!-- HTML -->
<div class="title-container">
  <h1 class="title">{fundraiser_title}</h1>
  <div class="noti-container" >
    <Notification />
  </div>
</div>
<div class="main-body-container">
   <div id="left-content">
    <div class="img-container">
      <img src={fundraiserImg} alt="fundraiser" />
    </div>
    <div id="goal-container-mobile">
      <GoalProgress />
    </div>
    <div id="description">
      <h3 class="small-title">Purpose:</h3>
      <p class="description-text">{@html fundraiser_description}</p>
      <div class="expand-container"><input class="expand-button" type="checkbox"></div>
    </div>
    <FAQ />
  </div>
  <div id="right-content">
    <div id="goal-container">
      <GoalProgress />
    </div>
  </div>
</div>



<!-- CSS -->
<style>
.title {
  flex: 2;
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
  color: var(--primary);
  padding: 0.5em;
  max-width: 100%;
  width: 50%;
  text-align: center;
}
.expand-button:hover {
  color: var(--secondary);
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

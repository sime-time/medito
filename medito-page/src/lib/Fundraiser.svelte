<script>
  import Description from './Description.svelte'
  import GoalProgress from './GoalProgress.svelte'
  let fundraiser_title = "Community Service Campaign"
</script>


<div class="container">
  <h1 class="title">{fundraiser_title}</h1>
  <div class="fundraiser-info">
    <div id="desc-container">
      <Description />
    </div>
    <div id="goal-container">
      <GoalProgress />
    </div>
  </div>
</div>

<style>
  .container {
    max-width: var(--max-width);
    margin: auto;
    padding: 1em;
    display: flex;
    flex-direction: column;
  }

  .fundraiser-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1em;
  }

  .title {
    padding-block: 0.5em;
  }

  #desc-container {
    width: 100%;
    flex: 2;
  }
  #goal-container {
    width: 100%;
    flex: 1;

  }

</style>

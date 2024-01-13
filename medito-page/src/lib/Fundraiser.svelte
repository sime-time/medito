<script>
  import Description from './Description.svelte'
  import GoalProgress from './GoalProgress.svelte'
</script>


<div class="container">
  <h1>Hello Medito Hero</h1>
  <div class="fundraiser-info">
    <Description />
    <GoalProgress />
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
    max-width: var(--max-width);
    display: flex;
    flex-direction: row;
  }
</style>

<script>

  import Description from './Description.svelte'
  import GoalProgress from './GoalProgress.svelte'
</script>

<h1>Hello Medito Hero</h1>
<div class="container"> 
  <Description />
  <GoalProgress />
</div>

<style>
  .container {
    max-width: var(--max-width);
    margin: auto;
    padding: 1em;
    display: flex;
  }
  
</style>

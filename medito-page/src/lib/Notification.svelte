  <!-- JAVASCRIPT -->
<script>
  // get API data
  let donator_spent = 20;
  let donator_name = "Anon";
  let donator_currency = "$";

</script>

  <!-- HTML -->
<div class="noti-ribbon">

  <span class="noti-icon">
    <i class="fa-solid fa-hand-holding-heart"></i>
  </span>
  <span class="message">{donator_name} just donated {donator_currency}{donator_spent}</span>
  <div class="close-button">
    <span class="fas fa-times"></span>
  </div>

</div>

  <!-- CSS -->
<style>
.noti-ribbon {
  background: var(--background-accent);
  color: var(--secondary);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  border-radius: var(--border-radius); 
  border-left: 6px solid var(--secondary);
  box-shadow: 3px 3px 5px var(--tertiary); 
  opacity: 0.8;
}
.noti-icon {
  flex: 1;
}
.fa-hand-holding-heart {
  font-size: 1.5em;
}
.message {
  flex: 10;
  padding-left: 1rem;
  font-weight: bold;
  width: 100%;
}

.close-button {
  flex: 2;
  display: flex;
  justify-content: center;
  height: 100%;
  cursor: pointer;
}
.fa-times {
  font-size: 1.5em;
}

</style>

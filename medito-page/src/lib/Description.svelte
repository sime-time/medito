<script>
  import fundraiserImg from '../assets/fundraiser-photo.jpg'
</script>

<div class="description">
  <div class="img-container">
    <img src={fundraiserImg} alt="fundraising topic" />
  </div>
  <div class="txt-container">
    <p>This is a description of the fundraiser</p>  
  </div>
</div>


<style>
  .description {
    display: flex;
    flex-direction: column;
  }
  .img-container img {
    width: 100%;
    height: auto;
    border-radius: 12px;
  }

  @media (max-width: 768px) {
    .img-container img {
      width: 100%;
      height: auto;
    }
  }
</style>

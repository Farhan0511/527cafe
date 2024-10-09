<template>

  <div class="hero">
    <!-- Desktop -->
    <div class="d-none d-md-block">
      <div class="container">
        <div class="row align-items-center justify-content-around">
          <div class="col mt-3">
            <h2 class="mb-3">"Menikmati Rasa Nusantara: Tempat yang Menghidangkan Kelezatan Lokal"</h2>
            <p>Ayo pilih makanan kesukaanmu!</p>
            <button class="btn btn-lg btn-dark">Pesan Sekarang <b-icon-arrow-right></b-icon-arrow-right></button>
          </div>
          <div class="col-md-5 text-center">
            <img src="@/assets/images.jpeg" alt=""  class="img-fluid" width="70%">
          </div>
        </div>
      </div>

    </div>

    <!-- Mobile -->
    <div class="d-sm-block d-md-none">
      <div class="container">
        <div class="row align-items-center justify-content-around">
          <div class="col-md-5 text-center mb-4">
            <img src="@/assets/images.jpeg" alt=""  class="img-fluid" width="400px">
          </div>
          <div class="col">
            <h2>"Menikmati Rasa Nusantara: Tempat yang Menghidangkan Kelezatan Lokal"</h2>
            <p>Ayo pilih makanan kesukaanmu!</p>
            <button class="btn btn-lg btn-dark">Pesan Sekarang<b-icon-arrow-right></b-icon-arrow-right></button>
          </div>
        </div>
      </div>

    </div>
  </div>

</template>

<script>
export default {
  name: "Hero"
}
</script>

<style></style>
<template>
  <div class="fullwidth">
    <button class="mui-btn"><router-link id="righty" to="district">District</router-link></button>
    <button class="mui-btn"><router-link id="lefty" to="overview">Overview</router-link></button>

    <div class="timeline group">

      <div class="item">
        <h2>January</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
      </div>

      <div class="item">
        <h2>February</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
      </div>

      <div class="item">
        <h2>March</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
      </div>

      <div class="item">
        <h2>April</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. </p>
      </div>

      <div class="item">
        <h2>May</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
      </div>

      <div class="item">
        <h2>June</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
      </div>

      <div class="item">
        <h2>July</h2>
        <p> Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
      </div>

      <div class="item">
        <h2>August</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
      </div>

      <div class="item">
        <h2>September</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
      </div>

      <div class="item">
        <h2>October</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
      </div>

      <div class="item">
        <h2>November</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. </p>
      </div>

      <div class="item">
        <h2>Dezember</h2>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
      </div>

    </div>

  </div>
</template>

<script>
// export default {
//   data () {
//     return {
//       dismissSecs: 10,
//       dismissCountDown: 0,
//       showDismissibleAlert: false
//     }
//   },
//   methods: {
//     countDownChanged (dismissCountDown) {
//       this.dismissCountDown = dismissCountDown
//     },
//     showAlert () {
//       this.dismissCountDown = this.dismissSecs
//     }
//   }
// }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Yrsa');

#app {
  background: white !important;
}

.fullwidth {
  font-family: serif !important;
  line-height: 95%;
  font-size: 125%;
}

.group:after {
  content: "";
  display: table;
  clear: both;
}

.fullwidth {
  width: 100%;
  height: 100%

}

.timeline {
  width: 100%;
  max-width: 60rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-bottom: 4rem;
  padding-left: 2rem;
  background-image: -webkit-linear-gradient(#999999, #999999);
  background-image: linear-gradient(#999999, #999999);
  background-size: 2px 100%;
  background-position: 50% 1rem;
  background-repeat: no-repeat;
}
@media (max-width: 40rem) {
  .timeline {
    background-position: 2rem 0;
  }
}

.timeline .item {
  position: relative;
  display: block;
  width: 50%;
  float: left;
  clear: both;
  margin-top: -1rem;
}
@media (max-width: 40rem) {
  .timeline .item {
    width: 100%;
    float: none;
    margin-top: 0;
    margin-bottom: 3rem;
  }
}
.timeline .item:before {
  content: '';
  position: absolute;
  top: 0.3rem;
  width: 1rem;
  height: 1rem;
  border: 2px solid #999999;
  border-radius: 50%;
  background-color: #e6e6e6;
}
.timeline .item:hover:before {
  background-color: #999999;
}

.timeline .item:first-child {
  margin-top: 0;
}

.timeline .item:nth-child(odd) {
  float: right;
  padding-left: 2rem;
}
.timeline .item:nth-child(odd):before {
  left: -0.5rem;
}

.timeline .item:nth-child(even) {
  padding-right: 2rem;
}
@media (max-width: 40rem) {
  .timeline .item:nth-child(even) {
    padding-right: 0;
    padding-left: 2rem;
  }
}
.timeline .item:nth-child(even):before {
  right: -0.5rem;
}
@media (max-width: 40rem) {
  .timeline .item:nth-child(even):before {
    left: -0.5rem;
  }
}

.timeline .item h2 {
  display: block;
  margin-bottom: 1rem;
}

.timeline .item:nth-child(even) h2 {
  text-align: right;
}
@media (max-width: 40rem) {
  .timeline .item:nth-child(even) h2 {
    text-align: left;
  }
}
</style>

<!-- alert.vue -->

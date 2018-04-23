<template>
  <div id="timeline">

    <div class="fullwidth">
      <!-- simple nav header -->
      <div class="simple-navigation-header">
        <button id="lefty" type="button" class="mui-btn"><router-link to="General">General</router-link></button>
        <a href="/" id="takeMeOmhDaddy"><p id="takeMeOmh">The Voter's Companion</p></a>
        <button id="righty" type="button" class="mui-btn"><router-link to="Overview">Overview</router-link></button>
      </div><br/>
      <!-- body -->
      <div class="hotBod">
        <div>
          {{ displayElections }}
        </div>
        <div id="yourTimeline">
          <ul style="width: 650px;" class="timeline">
            <li class="timeline-header">
              <span class="tag is-medium is-primary">Future</span>
            </li>
            <li class="timeline-item is-primary">
              <div class="timeline-marker is-primary"></div>
              <div class="timeline-content">
                <p class="heading">January 2016</p>
                <p class="timeline-item-content"> IS-PRIMARY = GREEN?Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </li>
            <li class="timeline-item is-primary">
              <div class="timeline-marker is-image is-primary is-icon">
              </div>
              <div class="timeline-content">
                <p class="heading">February 2016</p>
                <p class="timeline-item-content"> IS-WARNING = YELLOW? - Can include any HTML element</p>
              </div>
            </li>
            <li class="timeline-item is-past">
              <div class="timeline-marker is-past">
                <span class="icon has-text-success">
                  <i class="fa fa-check-square"></i>
                </span>
              </div>
              <div class="timeline-content">
                <p class="heading">March 2017</p>
                <p class="timeline-item-content">is-past = RED? - Can include any HTML element</p>
              </div>
            </li>
            <li class="timeline-item is-past">
              <div class="timeline-marker is-past">
                <span class="icon has-text-success">
                  <i class="fa fa-check-square"></i>
                </span>
              </div>
              <div class="timeline-content">
                <p class="heading">March 2017</p>
                <p class="timeline-item-content">more lorem => simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
              </div>
            </li>
            <li class="timeline-header">
              <span class="tag is-medium is-primary">Past</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'timeline',
  methods: {

  },
  computed: {
    displayElections () {
      var heyLookAtMe = JSON.stringify(this.$store.getters.getElections, null, '\t')
      return heyLookAtMe
    }
  }
}

</script>

<style >

#app {
  background-color: #F5F4EA;
}

.hotBod {
}

.tag {
  background-color: #33825e !important;
}

.tag-past {
  background-color: #b60000;
}

#yourTimeline {
  position: relative;
}

#takeMeOmh {
  justify-content: center;
  position: relative;
  left: 5px;
}

.timeline-item-content {
  font-size: 100%;
}

p {
  text-align: left;
}

.heading {
  display: block;
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
  font-weight: lighter;
}

.timeline .timeline-header {
    width: 4em;
}

.timeline .timeline-item {
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    position: relative;
    border-left: .1rem solid #dbdbdb;
    margin-left: calc( 4em / 2 );
    padding-bottom: 2em
}

.timeline .timeline-item .timeline-marker {
    position: absolute;
    background: #dbdbdb;
    border: .1em solid #dbdbdb;
    border-radius: 100%;
    content: "";
    display: block;
    height: .8rem;
    left: -0.45em;
    position: absolute;
    top: 1.2rem;
    width: .8rem
}

.timeline .timeline-item .timeline-marker.is-image {
    background: #dbdbdb;
    border: .1em solid #dbdbdb;
    border-radius: 100%;
    display: block;
    overflow: hidden;
}

.timeline .timeline-item .timeline-marker.is-image.is-16x16 {
    height: 16px;
    width: 16px;
    left: -8px
}

.timeline .timeline-item .timeline-marker.is-image.is-24x24 {
    height: 24px;
    width: 24px;
    left: -12px
}

.timeline .timeline-item .timeline-marker.is-image.is-32x32 {
    height: 32px;
    width: 32px;
    left: -16px
}

.timeline .timeline-item .timeline-marker.is-image.is-48x48 {
    height: 48px;
    width: 48px;
    left: -24px
}

.timeline .timeline-item .timeline-marker.is-image.is-64x64 {
    height: 64px;
    width: 64px;
    left: -32px
}

.timeline .timeline-item .timeline-marker.is-image.is-96x96 {
    height: 96px;
    width: 96px;
    left: -48px
}

.timeline .timeline-item .timeline-marker.is-image.is-128x128 {
    height: 128px;
    width: 128px;
    left: -64px
}

.timeline .timeline-item .timeline-marker.is-icon {
    height: 1.5rem;
    width: 1.5rem;
    left: -0.8rem;
    line-height: .75rem;
    padding: .25rem;
    background: #dbdbdb;
    border: .1em solid #dbdbdb;
    border-radius: 100%
}

.timeline .timeline-item .timeline-marker.is-icon>i {
    color: #fff;
    font-size: .75rem !important
}

.timeline .timeline-item .timeline-marker.is-outlined .image {
    background: #fff
}

.timeline .timeline-item .timeline-marker.is-outlined.is-icon {
    background: #fff
}

.timeline .timeline-item .timeline-marker.is-outlined.is-icon>i {
    color: #dbdbdb
}

.timeline .timeline-item .timeline-marker.is-white {
    background-color: #fff !important;
    border-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-white .image {
    border-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-white.is-icon {
    background-color: #fff !important;
    border-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-white.is-icon>i {
    color: #0a0a0a !important
}

.timeline .timeline-item .timeline-marker.is-white.is-outlined {
    background-color: #fff !important;
    border-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-white.is-outlined .image {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-white.is-outlined.is-icon {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-white.is-outlined.is-icon>i {
    color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-black {
    background-color: #0a0a0a !important;
    border-color: #0a0a0a !important
}

.timeline .timeline-item .timeline-marker.is-black .image {
    border-color: #0a0a0a !important
}

.timeline .timeline-item .timeline-marker.is-black.is-icon {
    background-color: #0a0a0a !important;
    border-color: #0a0a0a !important
}

.timeline .timeline-item .timeline-marker.is-black.is-icon>i {
    color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-black.is-outlined {
    background-color: #fff !important;
    border-color: #0a0a0a !important
}

.timeline .timeline-item .timeline-marker.is-black.is-outlined .image {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-black.is-outlined.is-icon {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-black.is-outlined.is-icon>i {
    color: #0a0a0a !important
}

.timeline .timeline-item .timeline-marker.is-light {
    background-color: #f5f5f5 !important;
    border-color: #f5f5f5 !important
}

.timeline .timeline-item .timeline-marker.is-light .image {
    border-color: #f5f5f5 !important
}

.timeline .timeline-item .timeline-marker.is-light.is-icon {
    background-color: #f5f5f5 !important;
    border-color: #f5f5f5 !important
}

.timeline .timeline-item .timeline-marker.is-light.is-icon {
    color: #363636 !important
}

.timeline .timeline-item .timeline-marker.is-light.is-outlined {
    background-color: #fff !important;
    border-color: #f5f5f5 !important
}

.timeline .timeline-item .timeline-marker.is-light.is-outlined .image {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-light.is-outlined.is-icon {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-light.is-outlined.is-icon {
    color: #f5f5f5 !important
}

.timeline .timeline-item .timeline-marker.is-dark {
    background-color: #363636 !important;
    border-color: #363636 !important
}

.timeline .timeline-item .timeline-marker.is-dark .image {
    border-color: #363636 !important
}

.timeline .timeline-item .timeline-marker.is-dark.is-icon {
    background-color: #363636 !important;
    border-color: #363636 !important
}

.timeline .timeline-item .timeline-marker.is-dark.is-icon>i {
    color: #f5f5f5 !important
}

.timeline .timeline-item .timeline-marker.is-dark.is-outlined {
    background-color: #fff !important;
    border-color: #363636 !important
}

.timeline .timeline-item .timeline-marker.is-dark.is-outlined .image {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-dark.is-outlined.is-icon {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-dark.is-outlined.is-icon>i {
    color: #363636 !important
}

.timeline .timeline-item .timeline-marker.is-primary {
    background-color: #33825e !important;
    border-color: #33825e !important
}

.timeline .timeline-item .timeline-marker.is-primary .image {
    border-color: #33825e !important
}

.timeline .timeline-item .timeline-marker.is-primary.is-icon {
    background-color: #33825e !important;
    border-color: #33825e !important
}

.timeline .timeline-item .timeline-marker.is-primary.is-icon>i {
    color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-primary.is-outlined {
    background-color: #fff !important;
    border-color: #33825e !important
}

.timeline .timeline-item .timeline-marker.is-primary.is-outlined .image {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-primary.is-outlined.is-icon {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-primary.is-outlined.is-icon>i {
    color: #33825e !important
}

.timeline .timeline-item .timeline-marker.is-info {
    background-color: #3273dc !important;
    border-color: #3273dc !important
}

.timeline .timeline-item .timeline-marker.is-info .image {
    border-color: #3273dc !important
}

.timeline .timeline-item .timeline-marker.is-info.is-icon {
    background-color: #3273dc !important;
    border-color: #3273dc !important
}

.timeline .timeline-item .timeline-marker.is-info.is-icon>i {
    color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-info.is-outlined {
    background-color: #fff !important;
    border-color: #3273dc !important
}

.timeline .timeline-item .timeline-marker.is-info.is-outlined .image {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-info.is-outlined.is-icon {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-info.is-outlined.is-icon>i {
    color: #3273dc !important
}

.timeline .timeline-item .timeline-marker.is-success {
    background-color: #23d160 !important;
    border-color: #23d160 !important
}

.timeline .timeline-item .timeline-marker.is-success .image {
    border-color: #23d160 !important
}

.timeline .timeline-item .timeline-marker.is-success.is-icon {
    background-color: #23d160 !important;
    border-color: #23d160 !important
}

.timeline .timeline-item .timeline-marker.is-success.is-icon>i {
    color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-success.is-outlined {
    background-color: #fff !important;
    border-color: #23d160 !important
}

.timeline .timeline-item .timeline-marker.is-success.is-outlined .image {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-success.is-outlined.is-icon {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-success.is-outlined.is-icon>i {
    color: #23d160 !important
}

.timeline .timeline-item .timeline-marker.is-warning {
    background-color: #ffdd57 !important;
    border-color: #ffdd57 !important
}

.timeline .timeline-item .timeline-marker.is-warning .image {
    border-color: #ffdd57 !important
}

.timeline .timeline-item .timeline-marker.is-warning.is-icon {
    background-color: #ffdd57 !important;
    border-color: #ffdd57 !important
}

.timeline .timeline-item .timeline-marker.is-warning.is-icon>i {
    color: rgba(0,0,0,0.7) !important
}

.timeline .timeline-item .timeline-marker.is-warning.is-outlined {
    background-color: #fff !important;
    border-color: #ffdd57 !important
}

.timeline .timeline-item .timeline-marker.is-warning.is-outlined .image {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-warning.is-outlined.is-icon {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-warning.is-outlined.is-icon>i {
    color: #ffdd57 !important
}

.timeline .timeline-item .timeline-marker.is-past {
    background-color: #b60000 !important;
    border-color: #b60000 !important
}

.timeline .timeline-item .timeline-marker.is-past .image {
    border-color: #b60000 !important
}

.timeline .timeline-item .timeline-marker.is-past.is-icon {
    background-color: #b60000 !important;
    border-color: #b60000 !important
}

.timeline .timeline-item .timeline-marker.is-past.is-icon>i {
    color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-past.is-outlined {
    background-color: #fff !important;
    border-color: #b60000 !important
}

.timeline .timeline-item .timeline-marker.is-past.is-outlined .image {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-past.is-outlined.is-icon {
    background-color: #fff !important
}

.timeline .timeline-item .timeline-marker.is-past.is-outlined.is-icon>i {
    color: #b60000 !important
}

.timeline .timeline-item .timeline-content {
    padding: 1em 0 0 .5em;
    padding: 1em 0 0 2em
}

.timeline .timeline-item .timeline-content .heading {
    font-weight: 600
}

.timeline .timeline-item.is-white {
    border-left-color: #fff
}

.timeline .timeline-item.is-black {
    border-left-color: #0a0a0a
}

.timeline .timeline-item.is-light {
    border-left-color: #f5f5f5
}

.timeline .timeline-item.is-dark {
    border-left-color: #363636
}

.timeline .timeline-item.is-primary {
    border-left-color: #33825e
}

.timeline .timeline-item.is-info {
    border-left-color: #3273dc
}

.timeline .timeline-item.is-success {
    border-left-color: #23d160
}

.timeline .timeline-item.is-warning {
    border-left-color: #ffdd57
}

.timeline .timeline-item.is-past {
    border-left-color: #b60000
}

li.timeline-item:nth-child(odd) {
  background: #eaebf5 !important;
}

li.timeline-content:nth-child(even) {
  background: #fff !important;
}

</style>

<!-- alert.vue -->

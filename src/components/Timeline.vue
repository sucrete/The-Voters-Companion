<template>
  <!-- eslint-disable -->
  <div id="timeline">

    <div class="fullwidth">
      <!-- simple nav header -->
      <div class="simple-navigation-header">
        <button id="lefty" type="button" class="mui-btn"><router-link to="General">General</router-link></button>
        <a href="/" id="takeMeOmhDaddy"><p id="takeMeOmh">THE VOTER'S COMPANION</p></a>
        <button id="righty" type="button" class="mui-btn"><router-link to="Overview">Overview</router-link></button>
      </div>

      <div id="overviewNoticeWrapper">
        <div id="overviewMarquee">
          Timeline
        </div>
        <div id="overviewNotice">
          This page is devoted to your elections.
        </div>
        <a id="bigButtonLink"><img id="bigButton" :src=" register " hidden></a>
      </div>
      <!-- body -->
      <div class="hotBod">


        <br />

        <div id="timelineBod" v-html="timelineHTML">  </div>

<!--
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
              <div class="timeline-marker is-primary"></div>
              <div class="timeline-content">
                <p class="heading">February 2016</p>
                <p class="timeline-item-content"> IS-WARNING = YELLOW? - Can include any HTML element</p>
              </div>
            </li>

            <li class="timeline-item is-past">
              <div class="timeline-marker is-past"></div>
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
                <p class="timeline-item-content">more and more lorem </p>
              </div>
            </li>
            <li class="timeline-header">
              <span class="tag is-medium is-primary">Past</span>
            </li>
          </ul>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
var hdate = require('human-date')
import registerBi from '../assets/76pix.png'
export default {
  name: 'timeline',
  data () {
    return {
      whatAPrimaryIs: '',
      register: registerBi,
      timelineHTML: ''
    }
  },
  methods: {
    timeToVoteGuys () {
      var electionsInfo = this.$store.getters.getElections.data.objects
      var electionsInfoSorted = electionsInfo.sort(this.sorter)
      console.log('SORTED ELECTIONS ' + '\n' + '\n' + JSON.stringify(electionsInfoSorted, null, '\t'))
      console.log('come now... ' + '\n' + this.getDate())
      var todayHTML = '<li class="timeline-header"><span class="tag is-medium is-primary">Today</span></li>'
      var futureTagHTML = '<li class="timeline-header"><span class="tag is-medium is-primary">Future</span></li>'
      var timelineBitsBetweenNowAndLater = ''
      electionsInfoSorted.forEach(tally => {
        let timelineBit
        var electionDate = tally.election_date.split('-')
        electionDate.push(electionDate.shift())
        electionDate.join('/')
        var prettyElectionDate = hdate.prettyPrint(electionDate)
        var timelineBitHeading = '<p class="heading">' + prettyElectionDate + '</p>'
        var votableContentGrid
        var votableHeader = '<div class="votableHeader">' + tally.title + '</div>'
        var allNewVoterRegistrationDates = ''
        var allAbsenteeBallotReturnDates = ''
        var allAbsenteeBallotRequestDates = ''
        var inPersonAbsenteeVotingToFrom = 'none on record'
        var earlyVotingToFrom = 'none on record'
        var additionalInformation = ''
        if (!(tally.additional_information === '')) {
          additionalInformation = '<em class="additionalInformation">' + tally.additional_information + '</em>'
        }
        tally.dates.forEach(booger => {
          if (booger.kind === 'DRD') {
            allNewVoterRegistrationDates += '<div class="votingDates">' + booger.date_human_readable + '</div><br />'
          } else if (booger.kind === 'DBED') {
            allAbsenteeBallotReturnDates += '<div class="votingDates">' + booger.date_human_readable + '</div><br />'
          } else if (booger.kind === 'DBRD') {
            allAbsenteeBallotRequestDates += '<div class="votingDates">' + booger.date_human_readable + '</div><br />'
          } else if (booger.kind === 'AVF') {
            inPersonAbsenteeVotingToFrom = booger.date_human_readable
          } else if (booger.kind === 'AVT') {
            inPersonAbsenteeVotingToFrom += ' - ' + booger.date_human_readable
          } else if (booger.kind === 'EVF') {
            earlyVotingToFrom = booger.date_human_readable
          } else if (booger.kind === 'EVT') {
            earlyVotingToFrom += ' - ' + booger.date_human_readable
          }
        })
        var newVoterRegistration = '<div class="votingType">New Voter Registration</div><div class=votingValue>' + allNewVoterRegistrationDates + '</div>'
        var absenteeBallotReturn = '<div class="votingType">Absentee Ballot Return</div><div class=votingValue>' + allAbsenteeBallotReturnDates + '</div>'
        var absenteeBallotRequest = '<div class="votingType">Absentee Ballot Request</div><div class=votingValue>' + allAbsenteeBallotRequestDates + '</div>'
        var inPersonAbsenteeVoting = '<div class="votingType">In-Person Absentee Voting</div><div class=votingValue>' + inPersonAbsenteeVotingToFrom + '</div>'
        var earlyVoting = '<div class="votingType">Early Voting</div><div class=votingValue>' + earlyVotingToFrom + '</div>'
        votableContentGrid = newVoterRegistration + absenteeBallotRequest + absenteeBallotReturn + inPersonAbsenteeVoting + earlyVoting
        var timelineBitContent = votableHeader + '<div class="timeline-item-content">' + votableContentGrid + '</div>' + additionalInformation
        timelineBit = '<li class="timeline-item is-primary"><div class="timeline-marker is-primary"></div><div class="timeline-content">' + timelineBitHeading + timelineBitContent + '</div></li>'
        timelineBitsBetweenNowAndLater += timelineBit
      })
      this.timelineHTML = '<ul style="width: 650px;" class="timeline">' + todayHTML + timelineBitsBetweenNowAndLater + futureTagHTML + '</ul>'
    },
    sorter (a, b) {
      const obj1 = a.election_date
      const obj2 = b.election_date

      let comparison = 0
      if (obj1 > obj2) {
        comparison = 1
      } else if (obj1 < obj2) {
        comparison = -1
      }
      return comparison
    },
    getDate () {
      // js for getDate() from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript
      var objToday = new Date()
      var weekday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      var dayOfWeek = weekday[objToday.getDay()]
      var dayOfMonth = today + (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate()
      var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      var curMonth = months[objToday.getMonth()]
      var curYear = objToday.getFullYear()
      var today = dayOfWeek + ' ' + dayOfMonth + ' of ' + curMonth + ', ' + curYear
      return today
    }
  },
  mounted () {
    this.timeToVoteGuys()
  }
}

</script>

<style >

.votableHeader {
  text-align: left;
  margin-top: -.75rem;
  padding-left: 1.75rem;
  padding-bottom: .2rem;
  width: 36.9rem;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-top: .65rem;
  padding-bottom: .5rem;
  font-weight: 500;
  font-size: 140%;
}
#timelineBod:not(.heading) {
  font-family: 'IBM Plex Sans Condensed', sans-serif;
  font-weight: 400;
  color: #353839;
}
#timelineBod {
  top: auto;
  margin-left: .75rem;
}
.tag {
  background-color: #33825e !important;
  font-weight: 500;
}

.tag-past {
  background-color: #b60000;
}

.timeline-item-content {
  margin-top: .2rem;
  font-size: 90%;
  display: grid;
  grid-template-columns: 35% auto;
  grid-template-rows: repeat(5, 20%);
  text-align: left;
  grid-column-gap: .2rem;
  grid-row-gap: .2rem;
  width: 37rem;
}

.votingType {
  grid-column-start: 1;
  grid-column-end: 2;
  font-weight: 500;
  text-align: left;
  position: relative;
  padding-left: calc( 4em / 2 );
  padding-top: .25rem;
  z-index: 1;
}
.votingValue {
  grid-column-start: 2;
  grid-column-end: 3;
  line-height: 97%;
  position: relative;
  padding-left: .5rem;
  padding-top: .4rem;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
}
.additionalInformation {
  text-align: left;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  width: inherit;
  padding-left: 1.75rem;
  margin-top: .2rem;
  padding-top: .2rem;
  position: relative;
  left: -1.6rem;
  min-height: 2rem;
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  position: relative;
  margin-left: 1.65rem;
  padding-bottom: 2em;
  width: 36.9rem
}
.votingDates {
  line-height: 110%;
}

p {
  text-align: left;
}
.heading, .votingType, .votableHeader {

  margin-left: .08rem;
}
.heading {
  display: block;
  font-size: 110%;
  letter-spacing: 1px;
  margin-bottom: .5rem;
  text-transform: uppercase;
  position: relative;
  top: 2px;
  padding-left: 1.75rem;
  margin-top: .6rem;
  padding-top: .35rem;
  color: #33825e;
  border-top-right-radius: 5px;
  width: 36.9rem;
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
    padding-bottom: .5rem;
}

.timeline .timeline-item .timeline-marker {
    position: absolute;
    background: #dbdbdb;
    border: .1em solid #dbdbdb;
    border-radius: 100%;
    content: "";
    display: block;
    height: 1rem;
    left: -0.55rem;
    position: absolute;
    top: 1.2rem;
    width: 1rem;
    z-index: 3;
}


.timeline .timeline-item .timeline-marker.is-primary {
    background-color: #33825e !important;
    border-color: #33825e !important
}


.timeline .timeline-item .timeline-marker.is-warning {
    background-color: #ffdd57 !important;
    border-color: #ffdd57 !important
}


.timeline .timeline-item .timeline-marker.is-past {
    background-color: #b60000 !important;
    border-color: #b60000 !important
}



.timeline .timeline-item .timeline-content .heading {
    font-weight: 500
}

.timeline .timeline-item.is-primary {
    border-left-color: #33825e;
    z-index: 600;
}

.timeline .timeline-item.is-past {
    border-left-color: #b60000;
    z-index: 600;
}

.timeline-item:nth-child(even) .timeline-content .heading, .timeline-item:nth-child(even) .timeline-content .votableHeader, .timeline-item:nth-child(even) .timeline-content .timeline-item-content > *, .timeline-item:nth-child(even) .timeline-content .additionalInformation {
  background-color: #ede8e8 !important;
}

.timeline-item:nth-child(odd) .timeline-content .heading, .timeline-item:nth-child(odd) .timeline-content .votableHeader, .timeline-item:nth-child(odd) .timeline-content .timeline-item-content > *, .timeline-item:nth-child(odd) .timeline-content .additionalInformation {
  background-color: #ede8e8 !important;
}

.timeline-item .timeline-content .timeline-item-content > * {
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
}

#app {
  background-color: #F5F4EA;
}

</style>

<!-- alert.vue -->

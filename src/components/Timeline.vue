<template>
  <!-- eslint-disable -->
  <div id="Timeline">

    <div class="fullwidth">

      <div id="overviewNoticeWrapper">
        <div id="overviewMarquee">
        </div>
        <div id="overviewNotice">

        </div>
        <a hidden id="bigButtonLink" v-if="presentBadge" target="_blank" v-bind:href="regURL">
          <img id="bigButton" :src=" register ">
        </a>
      </div>
      <!-- body -->

      <v-container class="timelineContainer" style="max-width: 42em;">
        <v-timeline dense>
          <v-timeline-item
            class="mb-2"
            hide-dot
          >
          </v-timeline-item>
          <v-timeline-item
            class="mb-4"
            medium
            color="orange"
          >
            <v-layout justify-space-between>
              <v-flex xs7 text-xs-left>TODAY</v-flex>
              <v-flex xs5 text-xs-right> {{ todaysdate }}</v-flex>
            </v-layout>
          </v-timeline-item>

           <!-- 🎐 🎐 🎐 new item iterator below 🎐 🎐 🎐 -->

          <v-timeline-item
            class="mb-3"
            color="grey"
            icon-color="grey lighten-2"
            small
          >
            <v-layout justify-space-between>
              <v-flex xs7 text-xs-left>This order was archived.</v-flex>
              <v-flex xs5 text-xs-right>15:26 EDT</v-flex>
            </v-layout>
          </v-timeline-item>

          <!-- 🧲 🧲 🧲 old timeline items below 🧲 🧲 🧲 -->

          <v-timeline-item
            class="mb-3"
            color="grey"
            icon-color="grey lighten-2"
            small
          >
            <v-layout justify-space-between>
              <v-flex xs7 text-xs-left>This order was archived.</v-flex>
              <v-flex xs5 text-xs-right>15:26 EDT</v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item
            class="mb-3"
            small
            color="blue"
          >
            <v-layout justify-space-between>
              <v-flex xs7>
                <v-chip
                  class="white--text ml-0"
                  color="purple"
                  label
                  small
                >
                  APP
                </v-chip>
                Digital Downloads fulfilled 1 item.
              </v-flex>
              <v-flex xs5 text-xs-right>15:25 EDT</v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item
            class="mb-3"
            color="grey"
            small
          >
            <v-layout justify-space-between>
              <v-flex xs7>
                Order confirmation email was sent to John Leider (john@vuetifyjs.com).
              </v-flex>
              <v-flex xs5 text-xs-right>15:25 EDT</v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item
            class="mb-3"
            hide-dot
          >
            <v-btn
              class="mx-0"
              color="white"
            >
              Resend Email
            </v-btn>
          </v-timeline-item>

          <v-timeline-item
            class="mb-3"
            color="grey"
            small
          >
            <v-layout justify-space-between>
              <v-flex xs7>
                A $15.00 USD payment was processed on PayPal Express Checkout
              </v-flex>
              <v-flex xs5 text-xs-right>15:25 EDT</v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item
            color="grey"
            small
          >
            <v-layout justify-space-between>
              <v-flex xs7>
                John Leider placed this order on Online Store (checkout #1937432132572).
              </v-flex>
              <v-flex xs5 text-xs-right>15:25 EDT</v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-container>
      <div class="hotBod">


        <br />

        <div id="timelineBod" v-html="timelineHTML">  </div>

      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
var hdate = require('human-date')
export default {
  name: 'Timeline',
  data () {
    return {
      whatAPrimaryIs: '',
      timelineHTML: '',
      presentBadge: this.$store.getters.shouldIDisplayBadge,
      regURL: this.$store.getters.getUserBadgeURL,
      electionTimelineObject: [],
      dummyInfo: [
        {
      		"prettyElectionDate": "March 5th, 2019",
      		"electionTitle": "Fresno County General Election",
      		"additionalInformation": "This election is for Board of Supervisors District 2",
      		"newVoterRegistrationDates": [
      			"Mon Feb 18, 2019",
      			"Received by Mon Feb 18, 2019",
      			"Online by Mon Feb 18, 2019 11:59PM PST",
      			"Postmarked by Mon Feb 18, 2019 11:59PM PST"
      		],
      		"absenteeBallotReturnDates": [
      			"Received by Fri Mar 8, 2019",
      			"Postmarked by Tue Mar 5, 2019",
      			"Post received by Fri Mar 8, 2019",
      			"Hand Delivered by Tue Mar 5, 2019 8:00PM PST"
      		],
      		"absenteeBallotRequestDates": [
      			"Tue Feb 26, 2019",
      			"Received by Tue Feb 26, 2019"
      		],
      		"inPersonAbsenteeVotingToFrom": "none on record",
      		"earlyVotingToFrom": "Deadline Dates Vary by Locality - Contact Local Election Office",
      		"electionType": "General",
      		"color": "0"
      	},
      	{
      		"prettyElectionDate": "March 12th, 2019",
      		"electionTitle": "Orange County General Election",
      		"additionalInformation": "This election is for Board of Supervisors District 3",
      		"newVoterRegistrationDates": [
      			"Mon Feb 25, 2019",
      			"Received by Mon Feb 25, 2019",
      			"Online by Mon Feb 25, 2019 11:59PM PST",
      			"Postmarked by Mon Feb 25, 2019 11:59PM PST"
      		],
      		"absenteeBallotReturnDates": [
      			"Received by Fri Mar 15, 2019",
      			"Postmarked by Tue Mar 12, 2019",
      			"Post received by Fri Mar 15, 2019",
      			"Hand Delivered by Tue Mar 12, 2019 8:00PM PDT"
      		],
      		"absenteeBallotRequestDates": [
      			"Tue Mar 5, 2019",
      			"Received by Tue Mar 5, 2019"
      		],
      		"inPersonAbsenteeVotingToFrom": "none on record",
      		"earlyVotingToFrom": "Deadline Dates Vary by Locality - Contact Local Election Office",
      		"electionType": "General",
      		"color": "1"
      	},
      	{
      		"prettyElectionDate": "March 12th, 2019",
      		"electionTitle": "City of Riverside General Election",
      		"additionalInformation": "This election will be for City Council - Wards 1, 3, 5, 7",
      		"newVoterRegistrationDates": [
      			"Mon May 20, 2019",
      			"Received by Mon May 20, 2019",
      			"Online by Mon May 20, 2019 11:59PM PDT",
      			"Postmarked by Mon May 20, 2019 11:59PM PDT"
      		],
      		"absenteeBallotReturnDates": [
      			"Received by Fri Jun 7, 2019",
      			"Postmarked by Tue Jun 4, 2019",
      			"Post received by Fri Jun 7, 2019",
      			"Hand Delivered by Tue Jun 4, 2019 8:00PM PDT"
      		],
      		"absenteeBallotRequestDates": [
      			"Tue May 28, 2019",
      			"Received by Tue May 28, 2019"
      		],
      		"inPersonAbsenteeVotingToFrom": "none on record",
      		"earlyVotingToFrom": "Deadline Dates Vary by Locality - Contact Local Election Office",
      		"electionType": "General",
      		"color": "2"
      	}
      ]
      timelineColors: {
        '0': '#cedcf1',
        '1': '#adb5c4',
        '2': '#29417e'
      },
      todaysdate: 'March 29, 2019'
    }
  },
  components: {

  },
  methods: {
    timeToVoteGuys () {
      var electionsInfo = this.$store.getters.getElections.objects
      var electionsInfoSorted = electionsInfo.sort(this.sorter)
      // colorIndex key: 0 = baby blue (#cedcf1), 1 = dusty blue (#adb5c4), 2 = strong blue (#29417e)
      var colorIndex = 0
      electionsInfoSorted.forEach(tally => {
        var timelineItemSaver = {}
        var electionDateArray = tally.election_date.split('-')
        var firstElement = electionDateArray.shift()
        electionDateArray.push(firstElement)
        var electionDate = electionDateArray.join('/')
        // your TIMELINE ITEM date below (ie prettyElectionDate)
        timelineItemSaver.prettyElectionDate = hdate.prettyPrint(electionDate)
        // the TITLE OF THE ELECTION below (ie electionTitle)
        timelineItemSaver.electionTitle = tally.title
        // "additional information", quote, but often very explanatory
        timelineItemSaver.additionalInformation = null
        if (!(tally.additional_information === '')) {
           timelineItemSaver.additionalInformation = tally.additional_information
        }
        timelineItemSaver.newVoterRegistrationDates = []
        timelineItemSaver.absenteeBallotReturnDates = []
        timelineItemSaver.absenteeBallotRequestDates = []
        timelineItemSaver.inPersonAbsenteeVotingToFrom = 'none on record'
        timelineItemSaver.earlyVotingToFrom = 'none on record'
        timelineItemSaver.electionType = tally.election_type.name || null
        tally.dates.forEach(booger => {
          if (booger.kind === 'DRD') {
            timelineItemSaver.newVoterRegistrationDates.push(booger.date_human_readable)
          } else if (booger.kind === 'DBED') {
            timelineItemSaver.absenteeBallotReturnDates.push(booger.date_human_readable)
          } else if (booger.kind === 'DBRD') {
            timelineItemSaver.absenteeBallotRequestDates.push(booger.date_human_readable)
          } else if (booger.kind === 'AVF') {
            timelineItemSaver.inPersonAbsenteeVotingToFrom = booger.date_human_readable
          } else if (booger.kind === 'AVT') {
            timelineItemSaver.inPersonAbsenteeVotingToFrom += ' - ' + booger.date_human_readable
          } else if (booger.kind === 'EVF') {
            timelineItemSaver.earlyVotingToFrom = booger.date_human_readable
          } else if (booger.kind === 'EVT') {
            timelineItemSaver.earlyVotingToFrom += ' - ' + booger.date_human_readable
          }
        })
        if (colorIndex === 3) {
          colorIndex = 0
        }
        timelineItemSaver.color = colorIndex.toString()
        colorIndex += 1
        this.electionTimelineObject.push(timelineItemSaver)
      })
      console.log('🎾🎾🎾🎾🎾🎾🎾🎾🎾' + JSON.stringify(this.electionTimelineObject, null, '\t') + '🎾🎾🎾🎾🎾🎾🎾🎾🎾')
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
#app {
  padding-bottom: 16em;
}
.timelineContainer {
  padding-top: 0px;
}
footer {
  display: block;
}
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
  font-family: 'Karla', sans-serif;
  font-weight: 400;
  color: #353839;
}
#timelineBod {
  top: auto;
  margin-left: .75rem;
}
.tag-past {
  background-color: #b60000;
}
ul.timeline {
  margin-left: -1.3rem;
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
  overflow: auto;
}
.votingValue:last-child {
  padding-bottom: 2em;
}
.additionalInformation {
  text-align: left;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  width: inherit;
  padding-left: 1.75rem;
  margin-top: 1rem;
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
  color: #588937;
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
    background-color: #588937 !important;
    border-color: #588937 !important
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
    border-left-color: #588937;
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
ul {
  list-style-type: none;
}
ul>li {
    text-indent: 0px;
}
.tag {
  background-color: #588937!important;
  border-radius: 3px;
  padding: 5px;
  padding-left: 7px;
  padding-right: 7px;
  color: white;
  font-weight: 500;
}
#app {
  margin-bottom: 10em;
}
@media screen and (max-width: 700px) {
  #timelineBod {
    margin-left: -1rem;
  }
}
</style>

<!-- alert.vue -->

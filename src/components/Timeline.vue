<template>
  <div id="Timeline">
    <div id="overviewNoticeWrapper">
      <div id="overviewMarquee"></div>
      <div id="overviewNotice"></div>
    </div>
    <v-container class="timelineContainer pb-0" style="max-width: 42em;">
      <v-timeline align-top dense>
        <v-timeline-item
          class="mb-4"
          small
          color="orange"
          v-bind:class="{ dummyInfo: useDummyInfo }"
        >
          <v-layout justify-space-between class="subheading">
            <v-flex xs7 text-xs-left class="todayElement">{{ returnPrettyDate(todaysDate) }}</v-flex>
            <v-flex xs5 text-xs-right class="todayElement">TODAY</v-flex>
          </v-layout>
        </v-timeline-item>

        <v-timeline-item
          v-for="votable in electionsTimelineObject"
          class="mt-2 eachItem"
          v-bind:class="{ dummyInfo: useDummyInfo }"
          v-bind:color="votable.color"
          small
        >
          <v-layout justify-space-between class="subheading mb-2">
            <v-flex xs7 text-xs-left>{{ returnPrettyDate(votable.electionDate) }}</v-flex>
            <v-flex xs5 text-xs-right>{{ returnRelativeTime(votable.electionDate) }}</v-flex>
          </v-layout>
          <div class="text-xs-left mb-2 subheading font-weight-bold">
            {{ votable.electionTitle }}
            <span class="infoTooltip" v-if="votable.electionType !== null">
              <span class="infoTooltipText">?</span>
              <span class="tooltiptext" v-html="electionTypes[votable.electionType]"></span>
            </span>
          </div>
          <div class="text-xs-left font-italic subheading">
            {{ votable.additionalInformation }}
          </div>
          <v-list
            class="timelineList"
            v-bind:class="{ dummyInfo: useDummyInfo }"
          >
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>New Voter Registration Dates</v-list-tile-title>
                <v-list-tile-sub-title v-bind:class="{ dummyInfo: useDummyInfo }" v-for="info in votable.newVoterRegistrationDates">{{ info }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Absentee Ballot Request Dates</v-list-tile-title>
                <v-list-tile-sub-title v-bind:class="{ dummyInfo: useDummyInfo }" v-for="info in votable.newVoterRegistrationDates">{{ info }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Absentee Ballot Return Dates</v-list-tile-title>
                <v-list-tile-sub-title v-bind:class="{ dummyInfo: useDummyInfo }" v-for="info in votable.absenteeBallotReturnDates">{{ info }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Window for In-Person Absentee Voting</v-list-tile-title>
                <v-list-tile-sub-title v-bind:class="{ dummyInfo: useDummyInfo }">{{ votable.inPersonAbsenteeVotingToFrom }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Window for Early Voting</v-list-tile-title>
                <v-list-tile-sub-title v-bind:class="{ dummyInfo: useDummyInfo }">{{ votable.earlyVotingToFrom }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>

          </v-list>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
var hdate = require('human-date')
export default {
  name: 'Timeline',
  data () {
    return {
      timelineHTML: '',
      presentBadge: this.$store.getters.shouldIDisplayBadge,
      regURL: this.$store.getters.getUserBadgeURL,
      electionsTimelineObject: [],
      useDummyInfo: false,
      electionTypes: {
        'General':
          '<p>"A <u>general election</u> is an election in which all or most members of a given political body are chosen...</p><p class="secondP">...In U.S. politics, general elections are elections held at any level (e.g. city, county, congressional district, state) that typically involve competition between at least two parties. General elections occur every two to six years...and include the presidential election..."</p><p class="wikiCitation">Wikipedia contributors. (2019, February 25). General election. In Wikipedia, The Free Encyclopedia. Retrieved 00:44, May 16, 2019, from https://en.wikipedia.org/w/index.php?title=General_election&oldid=884941090</p>'
        ,
        'Runoff':
          '<q>The two-round system is known as run-off voting in the United States, where the second round is known as a <u>run-off election</u>. Run-off voting is also sometimes used as a generic term to describe any method involving a number of rounds of voting, with eliminations after each round...</q><p class="wikiCitation">Wikipedia contributors. (2019, May 8). Two-round system. In Wikipedia, The Free Encyclopedia. Retrieved 00:49, May 16, 2019, from https://en.wikipedia.org/w/index.php?title=Two-round_system&oldid=896105269</p>'
        ,
        'Primary':
          '<q>A <u>primary election</u> is the process by which voters, either the general public (open primary) or members of a political party (closed primary), can indicate their preference for a candidate in an upcoming general election or by-election, thus narrowing the field of candidates...</q><p class="wikiCitation">Wikipedia contributors. (2019, April 16). Primary election. In Wikipedia, The Free Encyclopedia. Retrieved 00:50, May 16, 2019, from https://en.wikipedia.org/w/index.php?title=Primary_election&oldid=892689977</p>'
        ,
        'Special':
          '<q>[<u>Special elections</u>] are used to fill elected offices that have become vacant between general elections...In most cases these elections occur after the incumbent dies or resigns, but they also occur when the incumbent becomes ineligible to continue in office (because of a recall, ennoblement, criminal conviction, or failure to maintain a minimum attendance)...</q><p class="wikiCitation">Wikipedia contributors. (2019, May 11). By-election. In Wikipedia, The Free Encyclopedia. Retrieved 00:58, May 16, 2019, from https://en.wikipedia.org/w/index.php?title=By-election&oldid=896529062</p>'
        ,
        'Regular':
          '<p>Also known as a general election, a <u>regular election</u> is "...an election in which all or most members of a given political body are chosen...</p><p class="secondP">...In U.S. politics, general elections are elections held at any level (e.g. city, county, congressional district, state) that typically involve competition between at least two parties. General elections occur every two to six years...and include the presidential election..."</p><p class="wikiCitation">Wikipedia contributors. (2019, February 25). General election. In Wikipedia, The Free Encyclopedia. Retrieved 00:44, May 16, 2019, from https://en.wikipedia.org/w/index.php?title=General_election&oldid=884941090</p>'
      },
      dummyInfo: [
        {
      		"electionDate": "04/30/2019",
      		"electionTitle": "North Carolina District 3 Special Primary Election",
      		"additionalInformation": "Special Election for Congressional District 3",
      		"newVoterRegistrationDates": [
      			"Fri Apr 5, 2019"
      		],
      		"absenteeBallotReturnDates": [
      			"Tue Apr 30, 2019"
      		],
      		"absenteeBallotRequestDates": [
      			"Tue Apr 23, 2019"
      		],
      		"inPersonAbsenteeVotingToFrom": "none on record",
      		"earlyVotingToFrom": "Thu Apr 11, 2019 - Sat Apr 27, 2019",
      		"electionType": null,
      		"color": "#cedcf1"
      	},
      	{
      		"electionDate": "05/14/2019",
      		"electionTitle": "North Carolina District 9 New Primary Election",
      		"additionalInformation": "New Election for Congressional District 9",
      		"newVoterRegistrationDates": [
      			"Fri Apr 19, 2019"
      		],
      		"absenteeBallotReturnDates": [
      			"Tue May 14, 2019"
      		],
      		"absenteeBallotRequestDates": [
      			"Tue May 7, 2019"
      		],
      		"inPersonAbsenteeVotingToFrom": "none on record",
      		"earlyVotingToFrom": "Thu Apr 25, 2019 - Sat May 11, 2019",
      		"electionType": null,
      		"color": "#adb5c4"
      	},
      	{
      		"electionDate": "07/09/2019",
      		"electionTitle": "North Carolina District 3 Special Election",
      		"additionalInformation": "Special Election for Congressional District 3",
      		"newVoterRegistrationDates": [
      			"Fri Jun 14, 2019"
      		],
      		"absenteeBallotReturnDates": [
      			"Tue Jul 9, 2019"
      		],
      		"absenteeBallotRequestDates": [
      			"Tue Jul 2, 2019"
      		],
      		"inPersonAbsenteeVotingToFrom": "none on record",
      		"earlyVotingToFrom": "Thu Jun 20, 2019 - Sat Jul 6, 2019",
      		"electionType": null,
      		"color": "#29417e"
      	}
      ],
      timelineColors: {
        '0': '#cedcf1',
        '1': '#adb5c4',
        '2': '#29417e'
      },
      todaysDate: '',
      relativeTime: ''
    }
  },
  components: {

  },
  methods: {
    returnRelativeTime (date) {
      return hdate.relativeTime(date, {futureSuffix: 'from TODAY'})
    },
    returnPrettyDate (date) {
      return hdate.prettyPrint(date)
    },
    getTodaysDate () {
      var today = new Date()
      var dd = String(today.getDate()).padStart(2, '0')
      var mm = String(today.getMonth() + 1).padStart(2, '0') // January is 0!
      var yyyy = today.getFullYear()
      this.todaysDate = mm + '/' + dd + '/' + yyyy
    },
    timeToVoteGuys () {
      var electionsInfo = this.$store.getters.getElections.objects
      var electionsInfoSorted = electionsInfo.sort(this.sorter)

      if (electionsInfo.length === 0) {
        this.useDummyInfo = true
        this.electionsTimelineObject = this.dummyInfo
      }
      // colorIndex key: 0 = baby blue (#cedcf1), 1 = dusty blue (#adb5c4), 2 = strong blue (#29417e)
      console.log(' 🤲 🤲 🤲 🤲 🤲 🤲 🤲 ' + '\n' + JSON.stringify(electionsInfo, null, '\t'))
      var colorIndex = 0
      electionsInfoSorted.forEach(tally => {
        var timelineItemSaver = {}
        var electionDateArray = tally.election_date.split('-')
        var firstElement = electionDateArray.shift()
        electionDateArray.push(firstElement)
        var electionDate = electionDateArray.join('/')
        // your TIMELINE ITEM date below (ie prettyElectionDate)
        timelineItemSaver.electionDate = electionDate
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
        switch (tally.election_type.name) {
          case 'General':
            timelineItemSaver.electionType = tally.election_type.name;
            break;
          case 'Runoff':
            timelineItemSaver.electionType = tally.election_type.name;
            break;
          case 'Primary':
             timelineItemSaver.electionType = tally.election_type.name;
            break;
          case 'Special':
            timelineItemSaver.electionType = tally.election_type.name;
            break;
          case 'Regular':
            timelineItemSaver.electionType = tally.election_type.name;
            break;
          default:
            timelineItemSaver.electionType = null
        }
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
        timelineItemSaver.color = this.timelineColors[colorIndex.toString()]
        colorIndex += 1
        this.electionsTimelineObject.push(timelineItemSaver)
      })
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
    this.getTodaysDate()
  }
}

</script>

<style >

.eachItem:last-child {
  padding-bottom: 60px;
}
.todayElement {
  position: relative;
  top: 1em;
}
.timelineContainer {
  padding-top: 0px;
}
footer {
  display: block;
}
/* below BOUNCE animation to be implemented every 15-20 seconds on timeline question mark */

.infoTooltip {
  cursor: default;
  color: white;
  position: relative;
  display: inline-block;
  border-radius: 50%;
  height: 22px;
  background-color: #008c61;
  width: 22px;
  bottom: 5px;
  position: relative; right: 2px;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}
span.tooltiptext p, span.tooltiptext q {
  margin-bottom: 10px !important;
}
.infoTooltipText {
  position: absolute;
  transform: rotate(7deg);
  color: white;
  font-size: 120%;
  left: 6px;
}

.infoTooltip:not(.tooltiptext) {
  animation: sklonse 15s infinite;
  animation-delay: 2s;
}
.tooltiptext {
  visibility: hidden;
  width: 500px;
  max-width: 90vw;
  background-color: #555555e6;
  color: #fff;
  text-align: left;
  border-radius: 3px;
  padding: 16px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -250px;
  opacity: 0;
  transition: opacity 0.3s;
  font-size: .8em;
  padding-top: 18px;
  padding-left: 18px;
  padding-bottom: 5px;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 3px 0 rgba(0,0,0,.12);
}
.infoTooltip .tooltiptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555555e6 transparent transparent transparent;
}
.wikiCitation {
  color: rgb(186, 186, 186);
  font-size: .85em
}
.infoTooltip:hover .tooltiptext {
  visibility: visible !important;
  opacity: 1 !important;
}
@@keyframes sklonse {
  0%, 100% {
    animation-timing-function: ease-out;
  }
  1.666666667% {
    transform: translateY(-5px);
    animation-timing-function: ease-in;
  }
  3.333333333% {
    transform: translateY(5px);
    animation-timing-function: ease-out;
  }
}
#Timeline * {
  font-family: 'Roboto', sans-serif;
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
.tag-past {
  background-color: #b60000;
}
ul.timeline {
  margin-left: -1.3rem;
}
.timelineList {
  background-color: transparent !important;
  position: relative;
  left: -.9em;
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
.votableInfo, .votableInfo *{
  display: block;
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
.v-list__tile {
  height: 100% !important;
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

@media screen and (max-width: 600px) {
  /* works 600px and smaller including on the iPhone 5,6,7, and X */
  .timelineContainer {
    padding-right: calc(20vw/3.2);
  }
}
@media only screen and (max-width: 375px) {
  .v-timeline--dense .v-timeline-item__body {
      max-width: calc(100% - 53px) !important;
  }
}
.dummyInfo, .dummyInfo > *, .timelineList.dummyInfo {
  color: rgb(169, 173, 177) !important;
}
</style>

<!-- alert.vue -->

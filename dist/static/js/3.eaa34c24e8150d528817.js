(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2p6p":function(e,t,i){"use strict";i.r(t);var n=i("gDS+"),o=i.n(n),r=i("fU/y"),a={name:"Timeline",data:function(){return{whatAPrimaryIs:"",timelineHTML:"",presentBadge:this.$store.getters.shouldIDisplayBadge,regURL:this.$store.getters.getUserBadgeURL,electionTimelineObject:[],dummyInfo:[{electionDate:"04/30/2019",electionTitle:"North Carolina District 3 Special Primary Election",additionalInformation:"Special Election for Congressional District 3",newVoterRegistrationDates:["Fri Apr 5, 2019"],absenteeBallotReturnDates:["Tue Apr 30, 2019"],absenteeBallotRequestDates:["Tue Apr 23, 2019"],inPersonAbsenteeVotingToFrom:"none on record",earlyVotingToFrom:"Thu Apr 11, 2019 - Sat Apr 27, 2019",electionType:"Special Primary",color:"#cedcf1"},{electionDate:"05/14/2019",electionTitle:"North Carolina District 9 New Primary Election",additionalInformation:"New Election for Congressional District 9",newVoterRegistrationDates:["Fri Apr 19, 2019"],absenteeBallotReturnDates:["Tue May 14, 2019"],absenteeBallotRequestDates:["Tue May 7, 2019"],inPersonAbsenteeVotingToFrom:"none on record",earlyVotingToFrom:"Thu Apr 25, 2019 - Sat May 11, 2019",electionType:"Special Primary",color:"#adb5c4"},{electionDate:"07/09/2019",electionTitle:"North Carolina District 3 Special Election",additionalInformation:"Special Election for Congressional District 3",newVoterRegistrationDates:["Fri Jun 14, 2019"],absenteeBallotReturnDates:["Tue Jul 9, 2019"],absenteeBallotRequestDates:["Tue Jul 2, 2019"],inPersonAbsenteeVotingToFrom:"none on record",earlyVotingToFrom:"Thu Jun 20, 2019 - Sat Jul 6, 2019",electionType:"Special General",color:"#29417e"},{electionDate:"09/10/2019",electionTitle:"North Carolina District 9 New Election",additionalInformation:"New Election for Congressional District 9",newVoterRegistrationDates:["Fri Aug 16, 2019"],absenteeBallotReturnDates:["Tue Sep 10, 2019"],absenteeBallotRequestDates:["Tue Sep 3, 2019"],inPersonAbsenteeVotingToFrom:"none on record",earlyVotingToFrom:"Thu Aug 22, 2019 - Sat Sep 7, 2019",electionType:"Special",color:"#cedcf1"}],timelineColors:{0:"#cedcf1",1:"#adb5c4",2:"#29417e"},todaysDate:"",relativeTime:""}},components:{},methods:{returnRelativeTime:function(e){return r.relativeTime(e)},returnPrettyDate:function(e){return r.prettyPrint(e)},getTodaysDate:function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),i=String(e.getMonth()+1).padStart(2,"0"),n=e.getFullYear();this.todaysDate=i+"/"+t+"/"+n},timeToVoteGuys:function(){var e=this,t=0;this.$store.getters.getElections.objects.sort(this.sorter).forEach(function(i){var n={},o=i.election_date.split("-"),r=o.shift();o.push(r);var a=o.join("/");n.electionDate=a,n.electionTitle=i.title,n.additionalInformation=null,""!==i.additional_information&&(n.additionalInformation=i.additional_information),n.newVoterRegistrationDates=[],n.absenteeBallotReturnDates=[],n.absenteeBallotRequestDates=[],n.inPersonAbsenteeVotingToFrom="none on record",n.earlyVotingToFrom="none on record",n.electionType=i.election_type.name||null,i.dates.forEach(function(e){"DRD"===e.kind?n.newVoterRegistrationDates.push(e.date_human_readable):"DBED"===e.kind?n.absenteeBallotReturnDates.push(e.date_human_readable):"DBRD"===e.kind?n.absenteeBallotRequestDates.push(e.date_human_readable):"AVF"===e.kind?n.inPersonAbsenteeVotingToFrom=e.date_human_readable:"AVT"===e.kind?n.inPersonAbsenteeVotingToFrom+=" - "+e.date_human_readable:"EVF"===e.kind?n.earlyVotingToFrom=e.date_human_readable:"EVT"===e.kind&&(n.earlyVotingToFrom+=" - "+e.date_human_readable)}),3===t&&(t=0),n.color=e.timelineColors[t.toString()],t+=1,e.electionTimelineObject.push(n)}),console.log("🎾🎾🎾🎾🎾🎾🎾🎾🎾"+o()(this.electionTimelineObject,null,"\t")+"🎾🎾🎾🎾🎾🎾🎾🎾🎾")},sorter:function(e,t){var i=e.election_date,n=t.election_date,o=0;return i>n?o=1:i<n&&(o=-1),o},getDate:function(){var e=new Date,t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]+" "+(t+(e.getDate()<10)?"0"+e.getDate():e.getDate())+" of "+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+", "+e.getFullYear();return t}},mounted:function(){this.timeToVoteGuys(),this.getTodaysDate()}},l=i("JFUb"),A=Object(l.a)(a,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"Timeline"}},[i("div",{staticClass:"fullwidth"},[e._m(0),e._v(" "),i("v-container",{staticClass:"timelineContainer pb-0",staticStyle:{"max-width":"42em"}},[i("v-timeline",{attrs:{"align-top":"",dense:""}},[i("v-timeline-item",{staticClass:"mb-4",attrs:{small:"",color:"orange"}},[i("v-layout",{staticClass:"subheading",attrs:{"justify-space-between":""}},[i("v-flex",{staticClass:"todayElement",attrs:{xs7:"","text-xs-left":""}},[e._v(e._s(e.returnPrettyDate(e.todaysDate)))]),e._v(" "),i("v-flex",{staticClass:"todayElement",attrs:{xs5:"","text-xs-right":""}},[e._v("TODAY")])],1)],1),e._v(" "),e._l(e.electionTimelineObject,function(t){return i("v-timeline-item",{staticClass:"mt-2 eachItem",attrs:{color:t.color,small:""}},[i("v-layout",{staticClass:"subheading mb-2",attrs:{"justify-space-between":""}},[i("v-flex",{attrs:{xs7:"","text-xs-left":""}},[e._v(e._s(e.returnPrettyDate(t.electionDate)))]),e._v(" "),i("v-flex",{attrs:{xs5:"","text-xs-right":""}},[e._v(e._s(e.returnRelativeTime(t.electionDate)))])],1),e._v(" "),i("div",{staticClass:"text-xs-left mb-2 subheading font-weight-bold"},[e._v(e._s(t.electionTitle))]),e._v(" "),i("div",{staticClass:"text-xs-left font-italic subheading"},[e._v("\n            "+e._s(t.additionalInformation)+"\n          ")]),e._v(" "),i("v-list",{staticClass:"timelineList"},[i("v-list-tile",[i("v-list-tile-content",[i("v-list-tile-title",[e._v("New Voter Registration Dates")]),e._v(" "),e._l(t.newVoterRegistrationDates,function(t){return i("v-list-tile-sub-title",[e._v(e._s(t))])})],2)],1),e._v(" "),i("v-list-tile",[i("v-list-tile-content",[i("v-list-tile-title",[e._v("Absentee Ballot Request Dates")]),e._v(" "),e._l(t.newVoterRegistrationDates,function(t){return i("v-list-tile-sub-title",[e._v(e._s(t))])})],2)],1),e._v(" "),i("v-list-tile",[i("v-list-tile-content",[i("v-list-tile-title",[e._v("Absentee Ballot Return Dates")]),e._v(" "),e._l(t.absenteeBallotReturnDates,function(t){return i("v-list-tile-sub-title",[e._v(e._s(t))])})],2)],1),e._v(" "),i("v-list-tile",[i("v-list-tile-content",[i("v-list-tile-title",[e._v("Window for In-Person Absentee Voting")]),e._v(" "),i("v-list-tile-sub-title",[e._v(e._s(t.inPersonAbsenteeVotingToFrom))])],1)],1),e._v(" "),i("v-list-tile",[i("v-list-tile-content",[i("v-list-tile-title",[e._v("Window for Early Voting")]),e._v(" "),i("v-list-tile-sub-title",[e._v(e._s(t.earlyVotingToFrom))])],1)],1)],1)],1)})],2)],1)],1)])},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"overviewNoticeWrapper"}},[t("div",{attrs:{id:"overviewMarquee"}}),this._v(" "),t("div",{attrs:{id:"overviewNotice"}})])}],!1,function(e){i("5dvt")},null,null);t.default=A.exports},"5dvt":function(e,t,i){var n=i("IuUq");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals),(0,i("SZ7m").default)("46c52389",n,!0,{})},IuUq:function(e,t,i){(e.exports=i("I1BE")(!0)).push([e.i,'.eachItem:last-child{padding-bottom:60px}.todayElement{position:relative;top:1em}.timelineContainer{padding-top:0}footer{display:block}.votableHeader{text-align:left;margin-top:-.75rem;padding-left:1.75rem;padding-bottom:.2rem;width:36.9rem;border-top-right-radius:3px;border-bottom-right-radius:3px;padding-top:.65rem;padding-bottom:.5rem;font-weight:500;font-size:140%}.tag-past{background-color:#b60000}ul.timeline{margin-left:-1.3rem}.timelineList{background-color:transparent!important;position:relative;left:-.9em}.timeline-item-content{margin-top:.2rem;font-size:90%;display:grid;grid-template-columns:35% auto;grid-template-rows:repeat(5,20%);text-align:left;grid-column-gap:.2rem;grid-row-gap:.2rem;width:37rem}.votableInfo,.votableInfo *{display:block}.votingType{grid-column-start:1;grid-column-end:2;font-weight:500;text-align:left;position:relative;padding-left:2em;padding-top:.25rem;z-index:1}.votingValue{grid-column-start:2;grid-column-end:3;line-height:97%;position:relative;padding-left:.5rem;padding-top:.4rem;border-top-left-radius:3px;border-bottom-left-radius:3px;overflow:auto}.votingValue:last-child{padding-bottom:2em}.additionalInformation{text-align:left;border-top-right-radius:3px;border-bottom-right-radius:3px;width:inherit;padding-left:1.75rem;margin-top:1rem;padding-top:.2rem;left:-1.6rem;min-height:2rem;display:-webkit-box;display:flex;display:-ms-flexbox;display:-webkit-flex;position:relative;margin-left:1.65rem;padding-bottom:2em;width:36.9rem}.votingDates{line-height:110%}p{text-align:left}.heading,.votableHeader,.votingType{margin-left:.08rem}.heading{display:block;font-size:110%;letter-spacing:1px;margin-bottom:.5rem;text-transform:uppercase;position:relative;top:2px;padding-left:1.75rem;margin-top:.6rem;padding-top:.35rem;color:#588937;border-top-right-radius:5px;width:36.9rem}.timeline .timeline-header{width:4em}.timeline .timeline-item{display:-webkit-box;display:flex;display:-ms-flexbox;display:-webkit-flex;position:relative;border-left:.1rem solid #dbdbdb;margin-left:2em;padding-bottom:.5rem}.timeline .timeline-item .timeline-marker{background:#dbdbdb;border:.1em solid #dbdbdb;border-radius:100%;content:"";display:block;height:1rem;left:-.55rem;position:absolute;top:1.2rem;width:1rem;z-index:3}.v-list__tile{height:100%!important}.timeline .timeline-item .timeline-marker.is-primary{background-color:#588937!important;border-color:#588937!important}.timeline .timeline-item .timeline-marker.is-warning{background-color:#ffdd57!important;border-color:#ffdd57!important}.timeline .timeline-item .timeline-marker.is-past{background-color:#b60000!important;border-color:#b60000!important}.timeline .timeline-item .timeline-content .heading{font-weight:500}.timeline .timeline-item.is-primary{border-left-color:#588937;z-index:600}.timeline .timeline-item.is-past{border-left-color:#b60000;z-index:600}.timeline-item:nth-child(2n) .timeline-content .additionalInformation,.timeline-item:nth-child(2n) .timeline-content .heading,.timeline-item:nth-child(2n) .timeline-content .timeline-item-content>*,.timeline-item:nth-child(2n) .timeline-content .votableHeader,.timeline-item:nth-child(odd) .timeline-content .additionalInformation,.timeline-item:nth-child(odd) .timeline-content .heading,.timeline-item:nth-child(odd) .timeline-content .timeline-item-content>*,.timeline-item:nth-child(odd) .timeline-content .votableHeader{background-color:#ede8e8!important}.timeline-item .timeline-content .timeline-item-content>*{border-top-right-radius:3px;border-bottom-right-radius:3px}ul{list-style-type:none}ul>li{text-indent:0}.tag{background-color:#588937!important;border-radius:3px;padding:5px;padding-left:7px;padding-right:7px;color:#fff;font-weight:500}@media screen and (max-width:600px){.timelineContainer{padding-right:6.25vw}}@media only screen and (max-width:375px){.v-timeline--dense .v-timeline-item__body{max-width:calc(100% - 53px)!important}}',"",{version:3,sources:["/Users/williamandree/Kod3n/votr/src/components/Timeline.vue"],names:[],mappings:"AACA,qBACE,mBAAqB,CACtB,AACD,cACE,kBAAmB,AACnB,OAAS,CACV,AACD,mBACE,aAAiB,CAClB,AACD,OACE,aAAe,CAChB,AACD,eACE,gBAAiB,AACjB,mBAAoB,AACpB,qBAAsB,AACtB,qBAAsB,AACtB,cAAe,AACf,4BAA6B,AAC7B,+BAAgC,AAChC,mBAAoB,AACpB,qBAAsB,AACtB,gBAAiB,AACjB,cAAgB,CACjB,AACD,UACE,wBAA0B,CAC3B,AACD,YACE,mBAAqB,CACtB,AACD,cACE,uCAAyC,AACzC,kBAAmB,AACnB,UAAY,CACb,AACD,uBACE,iBAAkB,AAClB,cAAe,AACf,aAAc,AACd,+BAAgC,AAChC,iCAAmC,AACnC,gBAAiB,AACjB,sBAAuB,AACvB,mBAAoB,AACpB,WAAa,CACd,AACD,4BACE,aAAe,CAChB,AACD,YACE,oBAAqB,AACrB,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,iBAA8B,AAC9B,mBAAoB,AACpB,SAAW,CACZ,AACD,aACE,oBAAqB,AACrB,kBAAmB,AACnB,gBAAiB,AACjB,kBAAmB,AACnB,mBAAoB,AACpB,kBAAmB,AACnB,2BAA4B,AAC5B,8BAA+B,AAC/B,aAAe,CAChB,AACD,wBACE,kBAAoB,CACrB,AACD,uBACE,gBAAiB,AACjB,4BAA6B,AAC7B,+BAAgC,AAChC,cAAe,AACf,qBAAsB,AACtB,gBAAiB,AACjB,kBAAmB,AAEnB,aAAc,AACd,gBAAiB,AACjB,oBAAqB,AACrB,aAAc,AACd,oBAAqB,AACrB,qBAAsB,AACtB,kBAAmB,AACnB,oBAAqB,AACrB,mBAAoB,AACpB,aAAc,CACf,AACD,aACE,gBAAkB,CACnB,AACD,EACE,eAAiB,CAClB,AACD,oCAEE,kBAAoB,CACrB,AACD,SACE,cAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,oBAAqB,AACrB,yBAA0B,AAC1B,kBAAmB,AACnB,QAAS,AACT,qBAAsB,AACtB,iBAAkB,AAClB,mBAAoB,AACpB,cAAe,AACf,4BAA6B,AAC7B,aAAe,CAChB,AACD,2BACI,SAAW,CACd,AACD,yBACI,oBAAqB,AACrB,aAAc,AACd,oBAAqB,AACrB,qBAAsB,AACtB,kBAAmB,AACnB,gCAAiC,AACjC,gBAA6B,AAC7B,oBAAsB,CACzB,AACD,0CAEI,mBAAoB,AACpB,0BAA2B,AAC3B,mBAAoB,AACpB,WAAY,AACZ,cAAe,AACf,YAAa,AACb,aAAe,AACf,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,SAAW,CACd,AACD,cACE,qBAAwB,CACzB,AACD,qDACI,mCAAqC,AACrC,8BAAgC,CACnC,AACD,qDACI,mCAAqC,AACrC,8BAAgC,CACnC,AACD,kDACI,mCAAqC,AACrC,8BAAgC,CACnC,AACD,oDACI,eAAgB,CACnB,AACD,oCACI,0BAA2B,AAC3B,WAAa,CAChB,AACD,iCACI,0BAA2B,AAC3B,WAAa,CAChB,AAID,4gBACE,kCAAqC,CACtC,AACD,0DACE,4BAA6B,AAC7B,8BAAgC,CACjC,AACD,GACE,oBAAsB,CACvB,AACD,MACI,aAAiB,CACpB,AACD,KACE,mCAAoC,AACpC,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,WAAa,AACb,eAAiB,CAClB,AACD,oCAEA,mBACI,oBAA8B,CACjC,CACA,AACD,yCACA,0CACM,qCAAwC,CAC7C,CACA",file:"Timeline.vue",sourcesContent:['\n.eachItem:last-child {\n  padding-bottom: 60px;\n}\n.todayElement {\n  position: relative;\n  top: 1em;\n}\n.timelineContainer {\n  padding-top: 0px;\n}\nfooter {\n  display: block;\n}\n.votableHeader {\n  text-align: left;\n  margin-top: -.75rem;\n  padding-left: 1.75rem;\n  padding-bottom: .2rem;\n  width: 36.9rem;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  padding-top: .65rem;\n  padding-bottom: .5rem;\n  font-weight: 500;\n  font-size: 140%;\n}\n.tag-past {\n  background-color: #b60000;\n}\nul.timeline {\n  margin-left: -1.3rem;\n}\n.timelineList {\n  background-color: transparent !important;\n  position: relative;\n  left: -.9em;\n}\n.timeline-item-content {\n  margin-top: .2rem;\n  font-size: 90%;\n  display: grid;\n  grid-template-columns: 35% auto;\n  grid-template-rows: repeat(5, 20%);\n  text-align: left;\n  grid-column-gap: .2rem;\n  grid-row-gap: .2rem;\n  width: 37rem;\n}\n.votableInfo, .votableInfo *{\n  display: block;\n}\n.votingType {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  font-weight: 500;\n  text-align: left;\n  position: relative;\n  padding-left: calc( 4em / 2 );\n  padding-top: .25rem;\n  z-index: 1;\n}\n.votingValue {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  line-height: 97%;\n  position: relative;\n  padding-left: .5rem;\n  padding-top: .4rem;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  overflow: auto;\n}\n.votingValue:last-child {\n  padding-bottom: 2em;\n}\n.additionalInformation {\n  text-align: left;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  width: inherit;\n  padding-left: 1.75rem;\n  margin-top: 1rem;\n  padding-top: .2rem;\n  position: relative;\n  left: -1.6rem;\n  min-height: 2rem;\n  display: -webkit-box;\n  display: flex;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  position: relative;\n  margin-left: 1.65rem;\n  padding-bottom: 2em;\n  width: 36.9rem\n}\n.votingDates {\n  line-height: 110%;\n}\np {\n  text-align: left;\n}\n.heading, .votingType, .votableHeader {\n\n  margin-left: .08rem;\n}\n.heading {\n  display: block;\n  font-size: 110%;\n  letter-spacing: 1px;\n  margin-bottom: .5rem;\n  text-transform: uppercase;\n  position: relative;\n  top: 2px;\n  padding-left: 1.75rem;\n  margin-top: .6rem;\n  padding-top: .35rem;\n  color: #588937;\n  border-top-right-radius: 5px;\n  width: 36.9rem;\n}\n.timeline .timeline-header {\n    width: 4em;\n}\n.timeline .timeline-item {\n    display: -webkit-box;\n    display: flex;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    position: relative;\n    border-left: .1rem solid #dbdbdb;\n    margin-left: calc( 4em / 2 );\n    padding-bottom: .5rem;\n}\n.timeline .timeline-item .timeline-marker {\n    position: absolute;\n    background: #dbdbdb;\n    border: .1em solid #dbdbdb;\n    border-radius: 100%;\n    content: "";\n    display: block;\n    height: 1rem;\n    left: -0.55rem;\n    position: absolute;\n    top: 1.2rem;\n    width: 1rem;\n    z-index: 3;\n}\n.v-list__tile {\n  height: 100% !important;\n}\n.timeline .timeline-item .timeline-marker.is-primary {\n    background-color: #588937 !important;\n    border-color: #588937 !important\n}\n.timeline .timeline-item .timeline-marker.is-warning {\n    background-color: #ffdd57 !important;\n    border-color: #ffdd57 !important\n}\n.timeline .timeline-item .timeline-marker.is-past {\n    background-color: #b60000 !important;\n    border-color: #b60000 !important\n}\n.timeline .timeline-item .timeline-content .heading {\n    font-weight: 500\n}\n.timeline .timeline-item.is-primary {\n    border-left-color: #588937;\n    z-index: 600;\n}\n.timeline .timeline-item.is-past {\n    border-left-color: #b60000;\n    z-index: 600;\n}\n.timeline-item:nth-child(even) .timeline-content .heading, .timeline-item:nth-child(even) .timeline-content .votableHeader, .timeline-item:nth-child(even) .timeline-content .timeline-item-content > *, .timeline-item:nth-child(even) .timeline-content .additionalInformation {\n  background-color: #ede8e8 !important;\n}\n.timeline-item:nth-child(odd) .timeline-content .heading, .timeline-item:nth-child(odd) .timeline-content .votableHeader, .timeline-item:nth-child(odd) .timeline-content .timeline-item-content > *, .timeline-item:nth-child(odd) .timeline-content .additionalInformation {\n  background-color: #ede8e8 !important;\n}\n.timeline-item .timeline-content .timeline-item-content > * {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\nul {\n  list-style-type: none;\n}\nul>li {\n    text-indent: 0px;\n}\n.tag {\n  background-color: #588937!important;\n  border-radius: 3px;\n  padding: 5px;\n  padding-left: 7px;\n  padding-right: 7px;\n  color: white;\n  font-weight: 500;\n}\n@media screen and (max-width: 600px) {\n  /* works 600px and smaller including on the iPhone 5,6,7, and X */\n.timelineContainer {\n    padding-right: calc(20vw/3.2);\n}\n}\n@media only screen and (max-width: 375px) {\n.v-timeline--dense .v-timeline-item__body {\n      max-width: calc(100% - 53px) !important;\n}\n}\n'],sourceRoot:""}])}}]);
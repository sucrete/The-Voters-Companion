(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"2DEW":function(e,i,t){e.exports=t.p+"static/img/registerBadge.89419f3.png"},"2p6p":function(e,i,t){"use strict";t.r(i);var n=t("2DEW"),A=t.n(n),o=t("fU/y"),r={name:"timeline",data:function(){return{whatAPrimaryIs:"",register:A.a,timelineHTML:"",presentBadge:this.$store.getters.shouldIDisplayBadge,regURL:this.$store.getters.getUserBadgeURL}},methods:{timeToVoteGuys:function(){var e="";this.$store.getters.getElections.objects.sort(this.sorter).forEach(function(i){var t=i.election_date.split("-"),n=t.shift();t.push(n);var A=t.join("/"),r='<p class="heading">'+o.prettyPrint(A)+"</p>",d='<div class="votableHeader">'+i.title+"</div>",a="",l="",m="",g="none on record",C="none on record",s="";""!==i.additional_information&&(s='<em class="additionalInformation">'+i.additional_information+"</em>"),i.dates.forEach(function(e){"DRD"===e.kind?a+='<div class="votingDates">'+e.date_human_readable+"</div><br />":"DBED"===e.kind?l+='<div class="votingDates">'+e.date_human_readable+"</div><br />":"DBRD"===e.kind?m+='<div class="votingDates">'+e.date_human_readable+"</div><br />":"AVF"===e.kind?g=e.date_human_readable:"AVT"===e.kind?g+=" - "+e.date_human_readable:"EVF"===e.kind?C=e.date_human_readable:"EVT"===e.kind&&(C+=" - "+e.date_human_readable)}),e+='<li class="timeline-item is-primary"><div class="timeline-marker is-primary"></div><div class="timeline-content">'+r+d+'<div class="timeline-item-content"><div class="votingType">New Voter Registration</div><div class=votingValue>'+a+'</div><div class="votingType">Absentee Ballot Request</div><div class=votingValue>'+m+'</div><div class="votingType">Absentee Ballot Return</div><div class=votingValue>'+l+'</div><div class="votingType">In-Person Absentee Voting</div><div class=votingValue>'+g+'</div><div class="votingType">Early Voting</div><div class=votingValue>'+C+"</div></div>"+s+"</div></li>"}),this.timelineHTML='<ul style="width: 650px;" class="timeline"><li class="timeline-header"><span class="tag is-medium is-primary">Today</span></li>'+e+"</ul>"},sorter:function(e,i){var t=e.election_date,n=i.election_date,A=0;return t>n?A=1:t<n&&(A=-1),A},getDate:function(){var e=new Date,i=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]+" "+(i+(e.getDate()<10)?"0"+e.getDate():e.getDate())+" of "+["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+", "+e.getFullYear();return i}},mounted:function(){this.timeToVoteGuys()}},d=t("JFUb"),a=Object(d.a)(r,function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{attrs:{id:"timeline"}},[t("div",{staticClass:"fullwidth"},[t("div",{staticClass:"simple-navigation-header"},[t("button",{staticClass:"mui-btn",attrs:{id:"lefty",type:"button"}},[t("router-link",{attrs:{to:"General"}},[t("img",{staticClass:"arrowL",attrs:{hidden:"",src:"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE4NS4zNDMgMTg1LjM0MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTg1LjM0MyAxODUuMzQzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUxLjcwNywxODUuMzQzYy0yLjc0MSwwLTUuNDkzLTEuMDQ0LTcuNTkzLTMuMTQ5Yy00LjE5NC00LjE5NC00LjE5NC0xMC45ODEsMC0xNS4xNzUgICAgbDc0LjM1Mi03NC4zNDdMNDQuMTE0LDE4LjMyYy00LjE5NC00LjE5NC00LjE5NC0xMC45ODcsMC0xNS4xNzVjNC4xOTQtNC4xOTQsMTAuOTg3LTQuMTk0LDE1LjE4LDBsODEuOTM0LDgxLjkzNCAgICBjNC4xOTQsNC4xOTQsNC4xOTQsMTAuOTg3LDAsMTUuMTc1bC04MS45MzQsODEuOTM5QzU3LjIwMSwxODQuMjkzLDU0LjQ1NCwxODUuMzQzLDUxLjcwNywxODUuMzQzeiIgZmlsbD0iIzNiM2MzNiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="}}),e._v("General")])],1),e._v(" "),e._m(0),e._v(" "),t("button",{staticClass:"mui-btn",attrs:{id:"righty",type:"button"}},[t("router-link",{attrs:{to:"Overview"}},[e._v("Overview"),t("img",{staticClass:"arrowR",attrs:{hidden:"",src:"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTguMS4xLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDE4NS4zNDMgMTg1LjM0MyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTg1LjM0MyAxODUuMzQzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgd2lkdGg9IjE2cHgiIGhlaWdodD0iMTZweCI+CjxnPgoJPGc+CgkJPHBhdGggZD0iTTUxLjcwNywxODUuMzQzYy0yLjc0MSwwLTUuNDkzLTEuMDQ0LTcuNTkzLTMuMTQ5Yy00LjE5NC00LjE5NC00LjE5NC0xMC45ODEsMC0xNS4xNzUgICAgbDc0LjM1Mi03NC4zNDdMNDQuMTE0LDE4LjMyYy00LjE5NC00LjE5NC00LjE5NC0xMC45ODcsMC0xNS4xNzVjNC4xOTQtNC4xOTQsMTAuOTg3LTQuMTk0LDE1LjE4LDBsODEuOTM0LDgxLjkzNCAgICBjNC4xOTQsNC4xOTQsNC4xOTQsMTAuOTg3LDAsMTUuMTc1bC04MS45MzQsODEuOTM5QzU3LjIwMSwxODQuMjkzLDU0LjQ1NCwxODUuMzQzLDUxLjcwNywxODUuMzQzeiIgZmlsbD0iIzNiM2MzNiIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo="}})])],1)]),e._v(" "),t("div",{attrs:{id:"overviewNoticeWrapper"}},[t("div",{attrs:{id:"overviewMarquee"}},[e._v("\n          Timeline\n        ")]),e._v(" "),t("div",{attrs:{id:"overviewNotice"}}),e._v(" "),e.presentBadge?t("a",{attrs:{id:"bigButtonLink",target:"_blank",href:e.regURL}},[t("img",{attrs:{id:"bigButton",src:e.register}})]):e._e()]),e._v(" "),t("div",{staticClass:"hotBod"},[t("br"),e._v(" "),t("div",{attrs:{id:"timelineBod"},domProps:{innerHTML:e._s(e.timelineHTML)}})])])])},[function(){var e=this.$createElement,i=this._self._c||e;return i("a",{attrs:{href:"/",id:"takeMeOmhDaddy"}},[i("p",{attrs:{id:"takeMeOmh"}},[this._v("THE VOTER'S COMPANION")])])}],!1,function(e){t("5dvt")},null,null);i.default=a.exports},"5dvt":function(e,i,t){var n=t("IuUq");"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals),(0,t("SZ7m").default)("46c52389",n,!0,{})},IuUq:function(e,i,t){(e.exports=t("I1BE")(!0)).push([e.i,'.votableHeader{text-align:left;margin-top:-.75rem;padding-left:1.75rem;padding-bottom:.2rem;width:36.9rem;border-top-right-radius:3px;border-bottom-right-radius:3px;padding-top:.65rem;padding-bottom:.5rem;font-weight:500;font-size:140%}#timelineBod:not(.heading){font-family:IBM Plex Sans Condensed,sans-serif;font-weight:400;color:#353839}#timelineBod{top:auto;margin-left:.75rem}.tag-past{background-color:#b60000}ul.timeline{margin-left:-1.3rem}.timeline-item-content{margin-top:.2rem;font-size:90%;display:grid;grid-template-columns:35% auto;grid-template-rows:repeat(5,20%);text-align:left;grid-column-gap:.2rem;grid-row-gap:.2rem;width:37rem}.votingType{grid-column-start:1;grid-column-end:2;font-weight:500;text-align:left;position:relative;padding-left:2em;padding-top:.25rem;z-index:1}.votingValue{grid-column-start:2;grid-column-end:3;line-height:97%;position:relative;padding-left:.5rem;padding-top:.4rem;border-top-left-radius:3px;border-bottom-left-radius:3px;overflow:auto}.votingValue:last-child{padding-bottom:2em}.additionalInformation{text-align:left;border-top-right-radius:3px;border-bottom-right-radius:3px;width:inherit;padding-left:1.75rem;margin-top:1rem;padding-top:.2rem;left:-1.6rem;min-height:2rem;display:-webkit-box;display:flex;display:-ms-flexbox;display:-webkit-flex;position:relative;margin-left:1.65rem;padding-bottom:2em;width:36.9rem}.votingDates{line-height:110%}p{text-align:left}.heading,.votableHeader,.votingType{margin-left:.08rem}.heading{display:block;font-size:110%;letter-spacing:1px;margin-bottom:.5rem;text-transform:uppercase;position:relative;top:2px;padding-left:1.75rem;margin-top:.6rem;padding-top:.35rem;color:#588937;border-top-right-radius:5px;width:36.9rem}.timeline .timeline-header{width:4em}.timeline .timeline-item{display:-webkit-box;display:flex;display:-ms-flexbox;display:-webkit-flex;position:relative;border-left:.1rem solid #dbdbdb;margin-left:2em;padding-bottom:.5rem}.timeline .timeline-item .timeline-marker{background:#dbdbdb;border:.1em solid #dbdbdb;border-radius:100%;content:"";display:block;height:1rem;left:-.55rem;position:absolute;top:1.2rem;width:1rem;z-index:3}.timeline .timeline-item .timeline-marker.is-primary{background-color:#588937!important;border-color:#588937!important}.timeline .timeline-item .timeline-marker.is-warning{background-color:#ffdd57!important;border-color:#ffdd57!important}.timeline .timeline-item .timeline-marker.is-past{background-color:#b60000!important;border-color:#b60000!important}.timeline .timeline-item .timeline-content .heading{font-weight:500}.timeline .timeline-item.is-primary{border-left-color:#588937;z-index:600}.timeline .timeline-item.is-past{border-left-color:#b60000;z-index:600}.timeline-item:nth-child(2n) .timeline-content .additionalInformation,.timeline-item:nth-child(2n) .timeline-content .heading,.timeline-item:nth-child(2n) .timeline-content .timeline-item-content>*,.timeline-item:nth-child(2n) .timeline-content .votableHeader,.timeline-item:nth-child(odd) .timeline-content .additionalInformation,.timeline-item:nth-child(odd) .timeline-content .heading,.timeline-item:nth-child(odd) .timeline-content .timeline-item-content>*,.timeline-item:nth-child(odd) .timeline-content .votableHeader{background-color:#ede8e8!important}.timeline-item .timeline-content .timeline-item-content>*{border-top-right-radius:3px;border-bottom-right-radius:3px}ul{list-style-type:none}ul>li{text-indent:0}.tag{background-color:#588937!important;border-radius:3px;padding:5px;padding-left:7px;padding-right:7px;color:#fff;font-weight:500}#app{background-color:#f7f7f0}@media screen and (max-width:700px){#timelineBod{margin-left:-1rem}}',"",{version:3,sources:["/Users/williamandree/Kod3n/votr/src/components/Timeline.vue"],names:[],mappings:"AACA,eACE,gBAAiB,AACjB,mBAAoB,AACpB,qBAAsB,AACtB,qBAAsB,AACtB,cAAe,AACf,4BAA6B,AAC7B,+BAAgC,AAChC,mBAAoB,AACpB,qBAAsB,AACtB,gBAAiB,AACjB,cAAgB,CACjB,AACD,2BACE,+CAAmD,AACnD,gBAAiB,AACjB,aAAe,CAChB,AACD,aACE,SAAU,AACV,kBAAoB,CACrB,AACD,UACE,wBAA0B,CAC3B,AACD,YACE,mBAAqB,CACtB,AACD,uBACE,iBAAkB,AAClB,cAAe,AACf,aAAc,AACd,+BAAgC,AAChC,iCAAmC,AACnC,gBAAiB,AACjB,sBAAuB,AACvB,mBAAoB,AACpB,WAAa,CACd,AACD,YACE,oBAAqB,AACrB,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,iBAA8B,AAC9B,mBAAoB,AACpB,SAAW,CACZ,AACD,aACE,oBAAqB,AACrB,kBAAmB,AACnB,gBAAiB,AACjB,kBAAmB,AACnB,mBAAoB,AACpB,kBAAmB,AACnB,2BAA4B,AAC5B,8BAA+B,AAC/B,aAAe,CAChB,AACD,wBACE,kBAAoB,CACrB,AACD,uBACE,gBAAiB,AACjB,4BAA6B,AAC7B,+BAAgC,AAChC,cAAe,AACf,qBAAsB,AACtB,gBAAiB,AACjB,kBAAmB,AAEnB,aAAc,AACd,gBAAiB,AACjB,oBAAqB,AACrB,aAAc,AACd,oBAAqB,AACrB,qBAAsB,AACtB,kBAAmB,AACnB,oBAAqB,AACrB,mBAAoB,AACpB,aAAc,CACf,AACD,aACE,gBAAkB,CACnB,AACD,EACE,eAAiB,CAClB,AACD,oCAEE,kBAAoB,CACrB,AACD,SACE,cAAe,AACf,eAAgB,AAChB,mBAAoB,AACpB,oBAAqB,AACrB,yBAA0B,AAC1B,kBAAmB,AACnB,QAAS,AACT,qBAAsB,AACtB,iBAAkB,AAClB,mBAAoB,AACpB,cAAe,AACf,4BAA6B,AAC7B,aAAe,CAChB,AACD,2BACI,SAAW,CACd,AACD,yBACI,oBAAqB,AACrB,aAAc,AACd,oBAAqB,AACrB,qBAAsB,AACtB,kBAAmB,AACnB,gCAAiC,AACjC,gBAA6B,AAC7B,oBAAsB,CACzB,AACD,0CAEI,mBAAoB,AACpB,0BAA2B,AAC3B,mBAAoB,AACpB,WAAY,AACZ,cAAe,AACf,YAAa,AACb,aAAe,AACf,kBAAmB,AACnB,WAAY,AACZ,WAAY,AACZ,SAAW,CACd,AACD,qDACI,mCAAqC,AACrC,8BAAgC,CACnC,AACD,qDACI,mCAAqC,AACrC,8BAAgC,CACnC,AACD,kDACI,mCAAqC,AACrC,8BAAgC,CACnC,AACD,oDACI,eAAgB,CACnB,AACD,oCACI,0BAA2B,AAC3B,WAAa,CAChB,AACD,iCACI,0BAA2B,AAC3B,WAAa,CAChB,AAID,4gBACE,kCAAqC,CACtC,AACD,0DACE,4BAA6B,AAC7B,8BAAgC,CACjC,AACD,GACE,oBAAsB,CACvB,AACD,MACI,aAAiB,CACpB,AACD,KACE,mCAAoC,AACpC,kBAAmB,AACnB,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,WAAa,AACb,eAAiB,CAClB,AACD,KACE,wBAA0B,CAC3B,AACD,oCACA,aACI,iBAAmB,CACtB,CACA",file:"Timeline.vue",sourcesContent:["\n.votableHeader {\n  text-align: left;\n  margin-top: -.75rem;\n  padding-left: 1.75rem;\n  padding-bottom: .2rem;\n  width: 36.9rem;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  padding-top: .65rem;\n  padding-bottom: .5rem;\n  font-weight: 500;\n  font-size: 140%;\n}\n#timelineBod:not(.heading) {\n  font-family: 'IBM Plex Sans Condensed', sans-serif;\n  font-weight: 400;\n  color: #353839;\n}\n#timelineBod {\n  top: auto;\n  margin-left: .75rem;\n}\n.tag-past {\n  background-color: #b60000;\n}\nul.timeline {\n  margin-left: -1.3rem;\n}\n.timeline-item-content {\n  margin-top: .2rem;\n  font-size: 90%;\n  display: grid;\n  grid-template-columns: 35% auto;\n  grid-template-rows: repeat(5, 20%);\n  text-align: left;\n  grid-column-gap: .2rem;\n  grid-row-gap: .2rem;\n  width: 37rem;\n}\n.votingType {\n  grid-column-start: 1;\n  grid-column-end: 2;\n  font-weight: 500;\n  text-align: left;\n  position: relative;\n  padding-left: calc( 4em / 2 );\n  padding-top: .25rem;\n  z-index: 1;\n}\n.votingValue {\n  grid-column-start: 2;\n  grid-column-end: 3;\n  line-height: 97%;\n  position: relative;\n  padding-left: .5rem;\n  padding-top: .4rem;\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n  overflow: auto;\n}\n.votingValue:last-child {\n  padding-bottom: 2em;\n}\n.additionalInformation {\n  text-align: left;\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n  width: inherit;\n  padding-left: 1.75rem;\n  margin-top: 1rem;\n  padding-top: .2rem;\n  position: relative;\n  left: -1.6rem;\n  min-height: 2rem;\n  display: -webkit-box;\n  display: flex;\n  display: -ms-flexbox;\n  display: -webkit-flex;\n  position: relative;\n  margin-left: 1.65rem;\n  padding-bottom: 2em;\n  width: 36.9rem\n}\n.votingDates {\n  line-height: 110%;\n}\np {\n  text-align: left;\n}\n.heading, .votingType, .votableHeader {\n\n  margin-left: .08rem;\n}\n.heading {\n  display: block;\n  font-size: 110%;\n  letter-spacing: 1px;\n  margin-bottom: .5rem;\n  text-transform: uppercase;\n  position: relative;\n  top: 2px;\n  padding-left: 1.75rem;\n  margin-top: .6rem;\n  padding-top: .35rem;\n  color: #588937;\n  border-top-right-radius: 5px;\n  width: 36.9rem;\n}\n.timeline .timeline-header {\n    width: 4em;\n}\n.timeline .timeline-item {\n    display: -webkit-box;\n    display: flex;\n    display: -ms-flexbox;\n    display: -webkit-flex;\n    position: relative;\n    border-left: .1rem solid #dbdbdb;\n    margin-left: calc( 4em / 2 );\n    padding-bottom: .5rem;\n}\n.timeline .timeline-item .timeline-marker {\n    position: absolute;\n    background: #dbdbdb;\n    border: .1em solid #dbdbdb;\n    border-radius: 100%;\n    content: \"\";\n    display: block;\n    height: 1rem;\n    left: -0.55rem;\n    position: absolute;\n    top: 1.2rem;\n    width: 1rem;\n    z-index: 3;\n}\n.timeline .timeline-item .timeline-marker.is-primary {\n    background-color: #588937 !important;\n    border-color: #588937 !important\n}\n.timeline .timeline-item .timeline-marker.is-warning {\n    background-color: #ffdd57 !important;\n    border-color: #ffdd57 !important\n}\n.timeline .timeline-item .timeline-marker.is-past {\n    background-color: #b60000 !important;\n    border-color: #b60000 !important\n}\n.timeline .timeline-item .timeline-content .heading {\n    font-weight: 500\n}\n.timeline .timeline-item.is-primary {\n    border-left-color: #588937;\n    z-index: 600;\n}\n.timeline .timeline-item.is-past {\n    border-left-color: #b60000;\n    z-index: 600;\n}\n.timeline-item:nth-child(even) .timeline-content .heading, .timeline-item:nth-child(even) .timeline-content .votableHeader, .timeline-item:nth-child(even) .timeline-content .timeline-item-content > *, .timeline-item:nth-child(even) .timeline-content .additionalInformation {\n  background-color: #ede8e8 !important;\n}\n.timeline-item:nth-child(odd) .timeline-content .heading, .timeline-item:nth-child(odd) .timeline-content .votableHeader, .timeline-item:nth-child(odd) .timeline-content .timeline-item-content > *, .timeline-item:nth-child(odd) .timeline-content .additionalInformation {\n  background-color: #ede8e8 !important;\n}\n.timeline-item .timeline-content .timeline-item-content > * {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\nul {\n  list-style-type: none;\n}\nul>li {\n    text-indent: 0px;\n}\n.tag {\n  background-color: #588937!important;\n  border-radius: 3px;\n  padding: 5px;\n  padding-left: 7px;\n  padding-right: 7px;\n  color: white;\n  font-weight: 500;\n}\n#app {\n  background-color: #f7f7f0;\n}\n@media screen and (max-width: 700px) {\n#timelineBod {\n    margin-left: -1rem;\n}\n}\n"],sourceRoot:""}])}}]);
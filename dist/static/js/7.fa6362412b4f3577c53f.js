(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{LjvO:function(n,t,e){var o=e("mBUS");"string"==typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals),(0,e("SZ7m").default)("313f86d6",o,!0,{})},RJaL:function(n,t,e){n.exports=e.p+"static/img/mauve2.3109407.png"},Vtdi:function(n,t,e){"use strict";e.r(t);var o=e("oCYn"),A=e("RJaL"),r=e.n(A),a={name:"app",data:function(){return{logFin:r.a,bolstarMsg:"you did it kiddo",civicData:"",params:"",form:{country:{label:null,data:{}}}}},methods:{},created:function(){}},i=e("JFUb"),p=Object(i.a)(a,function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view"),this._v(" "),t("footer",[this._v("\n    a bunch of stuff\n    "),t("a",{attrs:{id:"logoLink",href:"https://www.usvotefoundation.org/",target:"_blank"}},[t("img",{attrs:{src:this.logFin}})])])],1)},[],!1,function(n){e("LjvO")},null,null).exports,s=e("jE9Z");o.default.use(s.a);var C=new s.a({mode:"history",hash:!1,routes:[{path:"/Main",name:"main",component:function(){return Promise.all([e.e(0),e.e(1)]).then(e.bind(null,"JhTm"))}},{path:"",name:"landing",component:function(){return Promise.all([e.e(0),e.e(2)]).then(e.bind(null,"TVVO"))}},{path:"/Officials",name:"officials",component:function(){return Promise.all([e.e(0),e.e(5)]).then(e.bind(null,"PHLJ"))}},{path:"/Resources",name:"resources",component:function(){return Promise.all([e.e(0),e.e(4)]).then(e.bind(null,"X4Sp"))}},{path:"/Timeline",name:"timeline",component:function(){return Promise.all([e.e(0),e.e(3)]).then(e.bind(null,"2p6p"))}},{path:"*",redirect:"/"}]}),d=e("GQeE"),m=e.n(d),l=e("L2JU");o.default.use(l.a);var g=new l.a.Store({strict:!0,state:{displayQuestionMark:!1,badgeURL:null,googvotekey:"AIzaSyBY3zNf2iIVGQWmoRPHNgObx4PnWT4-cqE",usVoteKey:"b7f16d8d92a4ff0ef4ec01d85e3beef26e255995",form:{postcode:null,country:{label:null,data:{}}},algoliaResponse:{},googleResponse:{},allStatesResponse:{},USVoteElections:{},voterInformation:{},holla:"ghost!"},mutations:{setUserBadgeURL:function(n,t){n.badgeURL=t},displayBadgeQuestionMark:function(n,t){n.displayQuestionMark=t},setUsersAddress:function(n,t){n.form.country.label=t},setUsersPostcode:function(n,t){n.form.postcode=t},setGoogleResponse:function(n,t){n.googleResponse=t},setSuggestion:function(n,t){n.algoliaResponse=t},setAllStateIDs:function(n,t){n.allStatesResponse=t},setUSVoteElections:function(n,t){n.USVoteElections=t,console.log("elections Object keys >>>>>>>>>>>>>>\n"),m()(t).forEach(function(n){console.log(n+"\n")})},setVoterInformation:function(n,t){n.voterInformation=t,console.log("voter info shoved in to the STORE"),m()(t).forEach(function(n){console.log(n+"\n")})}},actions:{},getters:{getUserBadgeURL:function(n){return n.badgeURL},shouldIDisplayBadge:function(n){return n.displayQuestionMark},showMeDatState:function(n){return n},ghostGetter:function(n){return n.holla},labelMaker:function(n){return n.form.country.label},stuper:function(n){return n.googleResponse.data},getElections:function(n){return n.USVoteElections},getVoterInfo:function(n){return n.voterInformation}}}),b=e("GIGG"),B=e.n(b),c=e("nDAh"),f=(e("Ud79"),e("4JRs"),e("Q/mQ")),h=e.n(f),x=(e("v0CA"),e("zlta")),u=e.n(x);o.default.use(u.a),o.default.use(h.a),o.default.use(c.MdTabs),o.default.use(B.a,{dynamic:!0}),o.default.config.productionTip=!1,new o.default({store:g,el:"#app",mounted:function(){this.$material.ripple=!1},router:C,template:"<App/>",components:{App:p}})},mBUS:function(n,t,e){(t=n.exports=e("I1BE")(!0)).push([n.i,"@import url(https://fonts.googleapis.com/css?family=Karla:400|Roboto:400,500,700,900);",""]),t.push([n.i,'.v-tabs__div{cursor:pointer}#bigButton{position:absolute;right:1rem;z-index:888;top:6.7em;filter:drop-shadow(1px 5px 3px rgba(15,13,2,.2)) drop-shadow(0 -5px 5px rgb(173,39,15,.2));-webkit-filter:drop-shadow(1px 5px 3px rgba(15,13,2,.2)) drop-shadow(0 -5px 5px rgba(173,39,15,.2))}footer{background-color:#f3f3f3;height:15em;width:97%;bottom:10px;color:#3e3830;margin:0 auto;padding:16px;border-radius:3px;display:block}#logoLink{z-index:777;position:relative;top:.3em;float:right;filter:drop-shadow(0 2px 3px rgba(26,47,136,.46));-webkit-filter:drop-shadow(0 2px 3px rgba(26,47,136,.46))}html{background:linen url("https://cl.ly/image/381U2k0A3L3S/bg.png");height:100%;-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}.v-tabs{border-top-left-radius:3px;border-top-right-radius:3px}#app{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;width:46rem;margin:auto;margin-top:1.5em;margin-bottom:5em;text-align:center;-webkit-box-shadow:0 .4rem .4rem rgba(102,111,214,.17),0 .8rem .8rem rgba(18,35,72,.1),0 1.6rem 1.5rem rgba(4,15,58,.1),0 3.2rem 3.2rem rgba(65,67,111,.1);box-shadow:0 .4rem .4rem rgba(102,111,214,.17),0 .8rem .8rem rgba(18,35,72,.1),0 1.6rem 1.5rem rgba(4,15,58,.1),0 3.2rem 3.2rem rgba(65,67,111,.1);min-height:52em;border-radius:3px;padding-bottom:9px}#app,.hotBod{position:relative}.hotBod{top:1rem;padding-bottom:1rem}#overviewNotice{color:#5e5e5a;font-size:130%;width:20rem;text-align:left;line-height:150%;height:12rem;padding-left:.7em;font-weight:400;letter-spacing:.07em}#overviewNoticeWrapper{background-color:hsla(0,0%,90%,.8);font-family:Karla,sans-serif;width:100%;padding-left:1.75rem;padding-top:2.2rem;padding-bottom:1rem;position:relative;margin-bottom:0}#overviewMarquee{font-size:200%;color:#5b524a;font-family:Roboto,sans-serif;text-align:left;margin-bottom:.5em;text-shadow:0 2px 4px rgba(0,0,0,.2);font-weight:500;letter-spacing:.08em;padding-left:.4em}a:hover{text-decoration:none!important}body{margin:0;padding:0;height:100%;display:block}a,a:visited{text-decoration:none!important}a:visited{color:#5b524a!important}h1{font-size:34px;line-height:40px;margin:0;padding:0}h2{font-size:25px}input,input:focus{border:none;outline:none}#takeMeOmh:visited,#takeMeOmhDaddy:visited{color:#5b524a!important}#e9_texte{font-size:1.5rem;font-family:Karla,sans-serif}.v--modal{border-radius:100%!important;-webkit-box-sizing:none!important;box-sizing:none!important}.image,.v--modal{position:relative}.image{width:100px;height:160px;font-size:40px;text-align:center;-webkit-transform-origin:bottom center;transform-origin:bottom center;-webkit-animation:3s rotate infinite!important;animation:3s rotate infinite!important;opacity:0;color:blue;top:2.1rem;left:3.2rem}.v--modal-box span{color:#fff;display:block;font-size:115%;width:100%;text-align:center;position:absolute!important;z-index:778;bottom:50px}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}10%{opacity:0}35%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}55%{opacity:1}65%{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}75%{opacity:0}to{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}@keyframes rotate{0%{-webkit-transform:rotate(90deg);transform:rotate(90deg)}10%{opacity:0}35%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}55%{opacity:1}65%{-webkit-transform:rotate(0deg);transform:rotate(0deg);opacity:1}75%{opacity:0}to{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}}.v--modal-overlay .v--modal-box{overflow:visible!important;position:relative!important;background-color:#888;-webkit-box-shadow:0 8px 12px rgba(58,68,41,.2),0 12px 20px rgba(0,0,0,.1),0 0 17px rgba(0,0,0,.14)!important;box-shadow:0 8px 12px rgba(58,68,41,.2),0 12px 20px rgba(0,0,0,.1),0 0 17px rgba(0,0,0,.14)!important}.v--modal-overlay{background-color:rgba(0,0,0,.4);border-radius:0;border-style:none}.scale-enter-active,.scale-leave-active{-webkit-transition:all .5s;transition:all .5s}.scale-enter,.scale-leave-active{opacity:0;-webkit-transform:scale(.3) translateY(24px);transform:scale(.3) translateY(24px)}@media only screen and (max-width:750px){#app{width:100vw;min-height:100vh!important;margin-bottom:0!important;margin-top:0;-webkit-box-shadow:0 0 0 0 transparent;box-shadow:0 0 0 0 transparent;border-radius:0}#overviewNoticeWrapper{height:225px}#overviewMarquee{font-size:250%;margin-bottom:.3em}#overviewNotice{padding-right:3em;padding-left:.2em}#logoLink{right:-2.7em}footer{width:95%;margin:0 auto;position:relative;margin-top:2.5%}}@media only screen and (max-width:375px){footer{width:95%}#logoLink{top:.7em}#overviewNoticeWrapper{height:175px}}',"",{version:3,sources:["/Users/williamandree/Kod3n/votr/src/App.vue"],names:[],mappings:"AAEA,aACE,cAAgB,CACjB,AACD,WACE,kBAAmB,AACnB,WAAY,AACZ,YAAa,AACb,UAAW,AAEX,2FAAqG,AACrG,mGAA6G,CAC9G,AAKD,OAEA,yBAAqC,AACrC,YAAa,AACb,UAAW,AACX,YAAa,AACb,cAAe,AACf,cAAe,AACf,aAAc,AACd,kBAAmB,AACnB,aAAe,CACd,AACD,UACE,YAAa,AACb,kBAAmB,AACnB,SAAU,AACV,YAAa,AAEb,kDAAuD,AACxD,yDAA+D,CAG/D,AACD,KACE,gEAAmE,AACnE,YAAa,AACb,8BAA+B,AACvB,qBAAuB,CAChC,AACD,iBACE,2BAA4B,AACpB,kBAAoB,CAC7B,AACD,QACE,2BAA4B,AAC5B,2BAA6B,CAC9B,AACD,KACE,mCAAoC,AACpC,kCAAmC,AACnC,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,kBAAmB,AAEnB,2JAAmL,AAC3K,mJAA2K,AAEnL,gBAAiB,AAEjB,kBAAmB,AACnB,kBAAoB,CACrB,AACD,aAJE,iBAAmB,CAQpB,AAJD,QAEE,SAAU,AACV,mBAAqB,CACtB,AACD,gBACE,cAAuB,AACvB,eAAgB,AAChB,YAAa,AACb,gBAAiB,AACjB,iBAAkB,AAClB,aAAc,AACd,kBAAmB,AACnB,gBAAiB,AACjB,oBAAsB,CACvB,AACD,uBACE,mCAA2C,AAC3C,6BAAiC,AACjC,WAAY,AACZ,qBAAsB,AACtB,mBAAoB,AACpB,oBAAqB,AACrB,kBAAmB,AACnB,eAAmB,CACpB,AACD,iBACE,eAAgB,AAChB,cAAe,AACf,8BAAkC,AAClC,gBAAiB,AACjB,mBAAoB,AACpB,qCAAyC,AACzC,gBAAiB,AACjB,qBAAsB,AACtB,iBAAmB,CACpB,AACD,QACE,8BAAiC,CAClC,AACD,KACE,SAAU,AACV,UAAW,AAEX,YAAa,AACb,aAAe,CAChB,AAID,YAFE,8BAAiC,CAKlC,AAHD,UACE,uBAA0B,CAE3B,AACD,GACE,eAAgB,AAChB,iBAAkB,AAClB,SAAU,AACV,SAAW,CACZ,AACD,GACE,cAAgB,CACjB,AACD,kBACE,YAAa,AACb,YAAc,CACf,AACD,2CACE,uBAA0B,CAC3B,AACD,UACE,iBAAkB,AAClB,4BAAiC,CAClC,AAID,UACE,6BAA+B,AAC/B,kCAAoC,AAC5B,yBAA4B,CAErC,AACD,iBAFE,iBAAmB,CAgBpB,AAdD,OACE,YAAa,AACb,aAAc,AACd,eAAgB,AAChB,kBAAmB,AACnB,uCAAwC,AAChC,+BAAgC,AACxC,+CAAiD,AACzC,uCAAyC,AACjD,UAAW,AACX,WAAY,AACZ,WAAY,AACZ,WAAa,CAEd,AACD,mBACE,WAAa,AACb,cAAe,AACf,eAAgB,AAChB,WAAY,AACZ,kBAAmB,AACnB,4BAA8B,AAC9B,YAAa,AACb,WAAa,CACd,AAGD,0BACA,GACI,gCAAiC,AACzB,uBAAyB,CACpC,AACD,IACI,SAAW,CACd,AACD,IACI,+BAAgC,AACxB,sBAAwB,CACnC,AACD,IACI,SAAW,CACd,AACD,IACI,+BAAgC,AACxB,uBAAwB,AAChC,SAAW,CACd,AACD,IACI,SAAW,CACd,AACD,GACI,iCAAkC,AAC1B,wBAA0B,CACrC,CACA,AACD,kBACA,GACI,gCAAiC,AACzB,uBAAyB,CACpC,AACD,IACI,SAAW,CACd,AACD,IACI,+BAAgC,AACxB,sBAAwB,CACnC,AACD,IACI,SAAW,CACd,AACD,IACI,+BAAgC,AACxB,uBAAwB,AAChC,SAAW,CACd,AACD,IACI,SAAW,CACd,AACD,GACI,iCAAkC,AAC1B,wBAA0B,CACrC,CACA,AACD,gCACE,2BAA6B,AAC7B,4BAA8B,AAC9B,sBAA0B,AAC1B,8GAAmI,AAC3H,qGAA2H,CACpI,AACD,kBACE,gCAAoC,AACpC,gBAAmB,AAGnB,iBAAmB,CACpB,AACD,wCACC,2BAA6B,AAC7B,kBAAqB,CACrB,AACD,iCACC,UAAW,AACX,6CAA+C,AACvC,oCAAuC,CAC/C,AACD,yCACA,KACI,YAAa,AACb,2BAA6B,AAC7B,0BAA8B,AAC9B,aAAgB,AAChB,uCAA4C,AACpC,+BAAoC,AAC5C,eAAmB,CACtB,AACD,uBACI,YAAc,CACjB,AACD,iBACI,eAAgB,AAChB,kBAAoB,CACvB,AACD,gBACI,kBAAmB,AACnB,iBAAmB,CACtB,AACD,UACI,YAAc,CACjB,AACD,OACI,UAAW,AACX,cAAe,AACf,kBAAmB,AACnB,eAAgB,CACnB,CACA,AACD,yCACA,OACI,SAAW,CACd,AACD,UACI,QAAU,CACb,AACD,uBACI,YAAc,CACjB,CACA",file:"App.vue",sourcesContent:["\n@import url('https://fonts.googleapis.com/css?family=Karla:400|Roboto:400,500,700,900');\n.v-tabs__div {\n  cursor: pointer;\n}\n#bigButton {\n  position: absolute;\n  right: 1rem;\n  z-index: 888;\n  top: 6.7em;\n  /* first drop shadow handles the v light shadow and the second handles the sharper shadow drop-shadow(1px 14px 6px rgba(15, 13, 2, 0.07)) */\n  filter: drop-shadow(1px 5px 3px rgba(15, 13, 2, 0.2)) drop-shadow(0px -5px 5px rgb(173, 39, 15, .2));\n  -webkit-filter: drop-shadow(1px 5px 3px rgba(15, 13, 2, 0.2)) drop-shadow(0px -5px 5px rgb(173, 39, 15, .2));\n}\n/* #bigButton:hover {\n  filter: drop-shadow(1px 14px 14px rgba(15, 13, 2, 0.2)) drop-shadow(1px 8px 10px rgba(15, 13, 2, 0.25));\n  -webkit-filter: drop-shadow(1px 14px 14px rgba(15, 13, 2, 0.2)) drop-shadow(1px 8px 10px rgba(15, 13, 2, 0.25));\n} */\nfooter {\n/* position: absolute; */\nbackground-color: rgb(243, 243, 243);\nheight: 15em;\nwidth: 97%;\nbottom: 10px;\ncolor: #3e3830;\nmargin: 0 auto;\npadding: 16px;\nborder-radius: 3px;\ndisplay: block;\n}\n#logoLink {\n  z-index: 777;\n  position: relative;\n  top: .3em;\n  float: right;\n\n  filter: drop-shadow(0 2px 3px rgba(26, 47, 136, 0.46));\n\t-webkit-filter: drop-shadow(0 2px 3px rgba(26, 47, 136, 0.46));\n  /* -webkit-filter: drop-shadow(4px 4px 0 #A57F70);\n    filter:drop-shadow(4px 4px 0 #A57F70)*/\n}\nhtml {\n  background: linen url( \"https://cl.ly/image/381U2k0A3L3S/bg.png\" );\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*, *:before, *:after {\n  -webkit-box-sizing: inherit;\n          box-sizing: inherit;\n}\n.v-tabs {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n#app {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  width: 46rem;\n  margin: auto;\n  margin-top: 1.5em;\n  margin-bottom: 5em;\n  text-align: center;\n  /* box-shadow from Domenico on https://codepen.io/ryandom/pen/ALQkWq*/\n  -webkit-box-shadow: 0 0.4rem 0.4rem rgba(102, 111, 214, 0.17), 0 0.8rem 0.8rem rgba(18, 35, 72, 0.1), 0 1.6rem 1.5rem rgba(4, 15, 58, 0.1), 0 3.2rem 3.2rem rgba(65, 67, 111, 0.1);\n          box-shadow: 0 0.4rem 0.4rem rgba(102, 111, 214, 0.17), 0 0.8rem 0.8rem rgba(18, 35, 72, 0.1), 0 1.6rem 1.5rem rgba(4, 15, 58, 0.1), 0 3.2rem 3.2rem rgba(65, 67, 111, 0.1);\n  /* padding: 10px 24px; */\n  min-height: 52em;\n  position: relative;\n  border-radius: 3px;\n  padding-bottom: 9px;\n}\n.hotBod {\n  position: relative;\n  top: 1rem;\n  padding-bottom: 1rem;\n}\n#overviewNotice {\n  color: rgb(94, 94, 90);\n  font-size: 130%;\n  width: 20rem;\n  text-align: left;\n  line-height: 150%;\n  height: 12rem;\n  padding-left: .7em;\n  font-weight: 400;\n  letter-spacing: .07em;\n}\n#overviewNoticeWrapper {\n  background-color: rgba(230, 230, 230, 0.8);\n  font-family: 'Karla', sans-serif;\n  width: 100%;\n  padding-left: 1.75rem;\n  padding-top: 2.2rem;\n  padding-bottom: 1rem;\n  position: relative;\n  margin-bottom: 0em;\n}\n#overviewMarquee {\n  font-size: 200%;\n  color: #5b524a;\n  font-family: 'Roboto', sans-serif;\n  text-align: left;\n  margin-bottom: .5em;\n  text-shadow: 0px 2px 4px rgba(0,0,0,0.2);\n  font-weight: 500;\n  letter-spacing: .08em;\n  padding-left: .4em;\n}\na:hover {\n  text-decoration: none !important;\n}\nbody {\n  margin: 0;\n  padding: 0;\n  /* 👇 the color behind the 'page' element */\n  height: 100%;\n  display: block;\n}\na {\n  text-decoration: none !important;\n}\na:visited {\n  color: #5b524a !important;\n  text-decoration: none !important;\n}\nh1 {\n  font-size: 34px;\n  line-height: 40px;\n  margin: 0;\n  padding: 0;\n}\nh2 {\n  font-size: 25px;\n}\ninput, input:focus {\n  border: none;\n  outline: none;\n}\n#takeMeOmh:visited, #takeMeOmhDaddy:visited {\n  color: #5b524a !important;\n}\n#e9_texte {\n  font-size: 1.5rem;\n  font-family: 'Karla', sans-serif;\n}\n\n/* loading modal below this line ================================= */\n/* The modal-loader below created by Alex Rutherford >>> https://codepen.io/Ruddy/pen/RNRybN */\n.v--modal {\n  border-radius: 100% !important;\n  -webkit-box-sizing: none !important;\n          box-sizing: none !important;\n  position: relative;\n}\n.image {\n  width: 100px;\n  height: 160px;\n  font-size: 40px;\n  text-align: center;\n  -webkit-transform-origin: bottom center;\n          transform-origin: bottom center;\n  -webkit-animation: 3s rotate infinite !important;\n          animation: 3s rotate infinite !important;\n  opacity: 0;\n  color: blue;\n  top: 2.1rem;\n  left: 3.2rem;\n  position: relative;\n}\n.v--modal-box span {\n  color: white;\n  display: block;\n  font-size: 115%;\n  width: 100%;\n  text-align: center;\n  position: absolute !important;\n  z-index: 778;\n  bottom: 50px;\n}\n\n/* The loader below created by Alex Rutherford >>> https://codepen.io/Ruddy/pen/RNRybN  */\n@-webkit-keyframes rotate{\n0% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n10% {\n    opacity: 0;\n}\n35% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n55% {\n    opacity: 1;\n}\n65% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    opacity: 1;\n}\n75% {\n    opacity: 0;\n}\n100%{\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n}\n}\n@keyframes rotate{\n0% {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n10% {\n    opacity: 0;\n}\n35% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n55% {\n    opacity: 1;\n}\n65% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n    opacity: 1;\n}\n75% {\n    opacity: 0;\n}\n100%{\n    -webkit-transform: rotate(-90deg);\n            transform: rotate(-90deg);\n}\n}\n.v--modal-overlay .v--modal-box {\n  overflow: visible !important;\n  position: relative !important;\n  background-color: #888888;\n  -webkit-box-shadow: 0px 8px 12px rgba(58, 68, 41, 0.2), 0px 12px 20px rgba(0, 0, 0, .1), 0px 0px 17px rgba(0, 0, 0, .14)!important;\n          box-shadow: 0px 8px 12px rgba(58, 68, 41, 0.2), 0px 12px 20px rgba(0, 0, 0, .1), 0px 0px 17px rgba(0, 0, 0, .14)!important;\n}\n.v--modal-overlay {\n  background-color: rgba(0, 0, 0, .4);\n  border-radius: 0px;\n  /* width: 100vw;\n  height: 100vh; */\n  border-style: none;\n}\n.scale-enter-active, .scale-leave-active {\n -webkit-transition: all 0.5s;\n transition: all 0.5s;\n}\n.scale-enter, .scale-leave-active {\n opacity: 0;\n -webkit-transform: scale(0.3) translateY(24px);\n         transform: scale(0.3) translateY(24px);\n}\n@media only screen and (max-width: 750px) {\n#app {\n    width: 100vw;\n    min-height: 100vh !important;\n    margin-bottom: 0px !important;\n    margin-top: 0px;\n    -webkit-box-shadow: 0 0 0 0 rgba(0,0,0, .0);\n            box-shadow: 0 0 0 0 rgba(0,0,0, .0);\n    border-radius: 0px;\n}\n#overviewNoticeWrapper {\n    height: 225px;\n}\n#overviewMarquee {\n    font-size: 250%;\n    margin-bottom: .3em;\n}\n#overviewNotice {\n    padding-right: 3em;\n    padding-left: .2em;\n}\n#logoLink {\n    right: -2.7em;\n}\nfooter {\n    width: 95%;\n    margin: 0 auto;\n    position: relative;\n    margin-top: 2.5%\n}\n}\n@media only screen and (max-width: 375px) {\nfooter {\n    width: 95%;\n}\n#logoLink {\n    top: .7em;\n}\n#overviewNoticeWrapper {\n    height: 175px;\n}\n}\n"],sourceRoot:""}])}},[["Vtdi",6,0]]]);
/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: true,
  state: {
    displayQuestionMark: false,
    badgeURL: null,
    googvotekey: process.env.GOOGLE_API_KEY,
    usVoteKey: process.env.VOTE_KEY,
    form: {
      postcode: null,
      country: {
        label: null,
        data: {}
      }
    },
    algoliaResponse: {},
    googleResponse: {
      data: {
        normalizedInput: {
          line1: "4153 Mercier Street",
          city: "Kansas City",
          state: "MO",
          zip: "64112"
        },
        kind: "civicinfo#representativeInfoResponse",
        divisions: {
          "ocd-division/country:us/state:mo": {
            name: "Missouri",
            officeIndices: [2, 4, 5, 6, 7, 8, 9, 10]
          },
          "ocd-division/country:us/state:mo/cd:5": {
            name: "Missouri's 5th congressional district",
            officeIndices: [3]
          },
          "ocd-division/country:us": {
            name: "United States",
            officeIndices: [0, 1]
          },
          "ocd-division/country:us/state:mo/county:jackson": {
            name: "Jackson County",
            officeIndices: [11, 12, 13, 14]
          }
        },
        offices: [
          {
            name: "President of the United States",
            divisionId: "ocd-division/country:us",
            levels: ["country"],
            roles: ["headOfState", "headOfGovernment"],
            officialIndices: [0]
          },
          {
            name: "Vice President of the United States",
            divisionId: "ocd-division/country:us",
            levels: ["country"],
            roles: ["deputyHeadOfGovernment"],
            officialIndices: [1]
          },
          {
            name: "U.S. Senator",
            divisionId: "ocd-division/country:us/state:mo",
            levels: ["country"],
            roles: ["legislatorUpperBody"],
            officialIndices: [2, 3]
          },
          {
            name: "U.S. Representative",
            divisionId: "ocd-division/country:us/state:mo/cd:5",
            levels: ["country"],
            roles: ["legislatorLowerBody"],
            officialIndices: [4]
          },
          {
            name: "Governor of Missouri",
            divisionId: "ocd-division/country:us/state:mo",
            levels: ["administrativeArea1"],
            roles: ["headOfGovernment"],
            officialIndices: [5]
          },
          {
            name: "Lieutenant Governor of Missouri",
            divisionId: "ocd-division/country:us/state:mo",
            levels: ["administrativeArea1"],
            roles: ["deputyHeadOfGovernment"],
            officialIndices: [6]
          },
          {
            name: "MO Secretary of State",
            divisionId: "ocd-division/country:us/state:mo",
            levels: ["administrativeArea1"],
            officialIndices: [7]
          },
          {
            name: "MO State Treasurer",
            divisionId: "ocd-division/country:us/state:mo",
            levels: ["administrativeArea1"],
            officialIndices: [8]
          },
          {
            name: "MO Attorney General",
            divisionId: "ocd-division/country:us/state:mo",
            levels: ["administrativeArea1"],
            officialIndices: [9]
          },
          {
            name: "MO Supreme Court Judge",
            divisionId: "ocd-division/country:us/state:mo",
            levels: ["administrativeArea1"],
            officialIndices: [10, 11, 12, 13, 14, 15, 16]
          },
          {
            name: "MO State Auditor",
            divisionId: "ocd-division/country:us/state:mo",
            levels: ["administrativeArea1"],
            officialIndices: [17]
          },
          {
            name: "Jackson County Sheriff",
            divisionId: "ocd-division/country:us/state:mo/county:jackson",
            levels: ["administrativeArea2"],
            officialIndices: [18]
          },
          {
            name: "Jackson County Prosecuting Attorney",
            divisionId: "ocd-division/country:us/state:mo/county:jackson",
            levels: ["administrativeArea2"],
            officialIndices: [19]
          },
          {
            name: "Jackson County Executive",
            divisionId: "ocd-division/country:us/state:mo/county:jackson",
            levels: ["administrativeArea2"],
            officialIndices: [20]
          },
          {
            name: "Jackson County Legislator",
            divisionId: "ocd-division/country:us/state:mo/county:jackson",
            levels: ["administrativeArea2"],
            officialIndices: [21, 22, 23]
          }
        ],
        officials: [
          {
            name: "Donald J. Trump",
            address: [
              {
                line1: "1600 Pennsylvania Avenue Northwest",
                city: "Washington",
                state: "DC",
                zip: "20500"
              }
            ],
            party: "Republican Party",
            phones: ["(202) 456-1111"],
            urls: ["https://www.whitehouse.gov/"],
            photoUrl:
              "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/PE%20Color.jpg",
            channels: [
              {
                type: "Facebook",
                id: "DonaldTrump"
              },
              {
                type: "Twitter",
                id: "potus"
              },
              {
                type: "YouTube",
                id: "whitehouse"
              }
            ]
          },
          {
            name: "Mike Pence",
            address: [
              {
                line1: "1600 Pennsylvania Avenue Northwest",
                city: "Washington",
                state: "DC",
                zip: "20500"
              }
            ],
            party: "Republican Party",
            phones: ["(202) 456-1111"],
            urls: ["https://www.whitehouse.gov/"],
            photoUrl:
              "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg",
            channels: [
              {
                type: "Facebook",
                id: "mikepence"
              },
              {
                type: "Twitter",
                id: "VP"
              }
            ]
          },
          {
            name: "Roy Blunt",
            address: [
              {
                line1: "260 Russell Senate Office Building",
                city: "Washington",
                state: "DC",
                zip: "20510"
              }
            ],
            party: "Republican Party",
            phones: ["(202) 224-5721"],
            urls: ["https://www.blunt.senate.gov/"],
            photoUrl:
              "http://bioguide.congress.gov/bioguide/photo/B/B000575.jpg",
            channels: [
              {
                type: "Facebook",
                id: "SenatorBlunt"
              },
              {
                type: "Twitter",
                id: "RoyBlunt"
              },
              {
                type: "YouTube",
                id: "SenatorBlunt"
              },
              {
                type: "YouTube",
                id: "BluntforSenate2010"
              }
            ]
          },
          {
            name: "Josh Hawley",
            address: [
              {
                line1: "212 Russell Senate Office Building",
                city: "Washington",
                state: "DC",
                zip: "20510"
              }
            ],
            party: "Republican Party",
            phones: ["(202) 224-6154"],
            urls: ["https://www.hawley.senate.gov/"],
            emails: ["senator@hawley.senate.gov"],
            channels: [
              {
                type: "Facebook",
                id: "SenatorHawley"
              },
              {
                type: "Twitter",
                id: "SenHawleyPress"
              }
            ]
          },
          {
            name: "Emanuel Cleaver",
            address: [
              {
                line1: "2335 Rayburn House Office Building",
                city: "Washington",
                state: "DC",
                zip: "20515"
              }
            ],
            party: "Democratic Party",
            phones: ["(202) 225-4535"],
            urls: ["https://cleaver.house.gov/"],
            photoUrl:
              "http://bioguide.congress.gov/bioguide/photo/C/C001061.jpg",
            channels: [
              {
                type: "Facebook",
                id: "emanuelcleaverii"
              },
              {
                type: "Twitter",
                id: "repcleaver"
              },
              {
                type: "YouTube",
                id: "repcleaver"
              }
            ]
          },
          {
            name: "Michael L. Parson",
            address: [
              {
                line1: "State Capitol Building",
                line2: "201 West Capitol Avenue",
                line3: "Room 224",
                city: "Jefferson City",
                state: "MO",
                zip: "65101"
              }
            ],
            party: "Republican Party",
            phones: ["(573) 751-3222"],
            urls: ["https://governor.mo.gov/"],
            photoUrl:
              "https://ltgov.mo.gov/wp-content/uploads/2017/01/Parson-headshot.jpg",
            emails: ["ltgovinfo@ltgov.mo.gov"],
            channels: [
              {
                type: "Facebook",
                id: "GovMikeParson"
              },
              {
                type: "Twitter",
                id: "GovParsonMO"
              }
            ]
          },
          {
            name: "Mike Kehoe",
            address: [
              {
                line1: "201 West Capitol Avenue",
                city: "Jefferson City",
                state: "MO",
                zip: "65101"
              }
            ],
            party: "Republican Party",
            phones: ["(573) 751-4727"],
            urls: ["https://ltgov.mo.gov/"],
            channels: [
              {
                type: "Facebook",
                id: "MoLtGovMikeKehoe"
              },
              {
                type: "Twitter",
                id: "LtGovMikeKehoe"
              }
            ]
          },
          {
            name: "John R. Ashcroft",
            address: [
              {
                line1: "201 West Capitol Avenue",
                city: "Jefferson City",
                state: "MO",
                zip: "65101"
              }
            ],
            party: "Republican Party",
            phones: ["(573) 751-4936"],
            urls: ["https://www.sos.mo.gov/"],
            emails: ["info@sos.mo.gov"],
            channels: [
              {
                type: "Facebook",
                id: "MissouriSOS"
              },
              {
                type: "Twitter",
                id: "MissouriSOS"
              }
            ]
          },
          {
            name: "Scott Fitzpatrick",
            party: "Republican Party",
            phones: ["(573) 751-8533"],
            urls: ["https://www.treasurer.mo.gov/"],
            emails: ["info@treasurer.mo.gov"],
            channels: [
              {
                type: "Facebook",
                id: "MOTreasurer"
              },
              {
                type: "Twitter",
                id: "MOTreasurer"
              }
            ]
          },
          {
            name: "Eric Schmitt",
            party: "Republican Party",
            phones: ["(573) 751-3321"],
            urls: ["https://www.ago.mo.gov/"],
            channels: [
              {
                type: "Facebook",
                id: "AttorneyGeneralSchmitt"
              },
              {
                type: "Twitter",
                id: "AGEricSchmitt"
              }
            ]
          },
          {
            name: "George W. Draper, III",
            party: "Nonpartisan",
            phones: ["(573) 751-4144"],
            urls: ["https://www.courts.mo.gov/page.jsp?id=27"]
          },
          {
            name: "Patricia Breckenridge",
            party: "Nonpartisan",
            phones: ["(573) 751-4144"],
            urls: ["https://www.courts.mo.gov/page.jsp?id=27"]
          },
          {
            name: "Paul C. Wilson",
            party: "Nonpartisan",
            phones: ["(573) 751-4144"],
            urls: ["https://www.courts.mo.gov/page.jsp?id=27"]
          },
          {
            name: "Zel M. Fischer",
            party: "Nonpartisan",
            phones: ["(573) 751-4144"],
            urls: ["https://www.courts.mo.gov/page.jsp?id=27"]
          },
          {
            name: "Laura Denvir Stith",
            party: "Nonpartisan",
            phones: ["(573) 751-4144"],
            urls: ["https://www.courts.mo.gov/page.jsp?id=27"]
          },
          {
            name: "Mary R. Russell",
            party: "Nonpartisan",
            phones: ["(573) 751-4144"],
            urls: ["https://www.courts.mo.gov/page.jsp?id=27"]
          },
          {
            name: "W. Brent Powell",
            party: "Nonpartisan",
            phones: ["(573) 751-4144"],
            urls: ["https://www.courts.mo.gov/page.jsp?id=27"]
          },
          {
            name: "Nicole Galloway",
            party: "Democratic Party",
            phones: ["(800) 347-8597"],
            urls: ["https://auditor.mo.gov/"],
            emails: ["moaudit@auditor.mo.gov"],
            channels: [
              {
                type: "Facebook",
                id: "NicoleGallowayCPA"
              },
              {
                type: "Twitter",
                id: "AuditorGalloway"
              }
            ]
          },
          {
            name: "Darryl Forte",
            address: [
              {
                line1: "4001 Northeast Lakewood Court",
                city: "Lee's Summit",
                state: "MO",
                zip: "64064"
              }
            ],
            party: "Democratic",
            phones: ["(816) 541-1969"],
            urls: ["https://www.jacksoncountysheriff.org/"],
            emails: ["sheriff@jacksongov.org"]
          },
          {
            name: "Jean Peters Baker",
            address: [
              {
                line1: "415 East 12th Street",
                city: "Kansas City",
                state: "MO",
                zip: "64106"
              }
            ],
            party: "Democratic",
            phones: ["(816) 881-3555"],
            urls: ["https://www.jacksoncountyprosecutor.com/"]
          },
          {
            name: "Frank White, Jr.",
            address: [
              {
                line1: "415",
                line2: "200 East 12th Street",
                city: "Kansas City",
                state: "MO",
                zip: "64106"
              }
            ],
            party: "Democratic",
            phones: ["(816) 881-3333"],
            urls: ["http://www.jacksongov.org/395/County-Executive"],
            emails: ["mhennosy@jacksongov.org"]
          },
          {
            name: "Crystal Williams",
            address: [
              {
                line1: "415 East 12th Street",
                city: "Kansas City",
                state: "MO",
                zip: "64106"
              }
            ],
            party: "Democratic",
            phones: ["(816) 881-3464"],
            urls: [
              "https://www.jacksongov.org/704/2nd-District-At-Large-Crystal-Williams"
            ],
            emails: ["crystalwilliams@jacksongov.org"]
          },
          {
            name: "Tony Miller",
            address: [
              {
                line1: "201 West Lexington Avenue",
                city: "Independence",
                state: "MO",
                zip: "64050"
              }
            ],
            party: "Unknown",
            phones: ["(816) 881-4423"],
            urls: [
              "https://www.jacksongov.org/705/3rd-District-At-Large-Tony-Miller"
            ],
            emails: ["tmiller@jacksongov.org"]
          },
          {
            name: "Jalen Anderson",
            address: [
              {
                line1: "415",
                line2: "201 East 12th Street",
                city: "Kansas City",
                state: "MO",
                zip: "64106"
              }
            ],
            party: "Democratic",
            phones: ["(816) 881-4477"],
            urls: [
              "https://www.jacksongov.org/1077/1st-District-At-Large-Jalen-Anderson"
            ],
            emails: ["JAnderson@jacksongov.org"]
          }
        ]
      },
      status: 200,
      statusText: "",
      headers: {
        "cache-control": "private",
        "content-encoding": "gzip",
        "content-length": "2234",
        "content-type": "application/json; charset=UTF-8",
        date: "Sun, 30 Aug 2020 05:27:10 GMT",
        server: "ESF"
      },
      config: {
        transformRequest: {},
        transformResponse: {},
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        headers: {
          Accept: "application/json, text/plain, */*"
        },
        method: "get",
        url:
          "https://www.googleapis.com/civicinfo/v2/representatives?key=AIzaSyBY3zNf2iIVGQWmoRPHNgObx4PnWT4-cqE&address=4153+Mercier+Street%2C+Kansas+City%2C+Missouri+64112"
      },
      request: {}
    },
    allStatesResponse: {},
    USVoteElections: {},
    voterInformation: {},
    holla: "ghost!"
  },
  mutations: {
    setUserBadgeURL(state, payload) {
      state.badgeURL = payload;
    },
    displayBadgeQuestionMark(state, payload) {
      state.displayQuestionMark = payload;
    },
    setUsersAddress(state, payload) {
      // console.log('setUsersAddress was fired')
      state.form.country.label = payload;
    },
    setUsersPostcode(state, payload) {
      // console.log('postcode payload (in STORE): ' + payload)
      state.form.postcode = payload;
    },
    setGoogleResponse(state, payload) {
      state.googleResponse = payload;
    },
    setSuggestion(state, payload) {
      state.algoliaResponse = payload;
    },
    setAllStateIDs(state, payload) {
      state.allStatesResponse = payload;
      console.log("StateIDs set in store");
    },
    setUSVoteElections(state, payload) {
      state.USVoteElections = payload;
      console.log("elections Object keys >>>>>>>>>>>>>>" + "\n");
      Object.keys(payload).forEach(vlooty => {
        console.log(vlooty + "\n");
      });
    },
    setVoterInformation(state, payload) {
      state.voterInformation = payload;
    }
  },
  actions: {},
  getters: {
    getUserBadgeURL: state => {
      let ubu = state;
      return ubu.badgeURL;
    },
    shouldIDisplayBadge: state => {
      let gggggget = state;
      return gggggget.displayQuestionMark;
    },
    showMeDatState: state => {
      var bb = state;
      return bb;
    },
    ghostGetter: state => {
      var carn = state;
      return carn.holla;
    },
    labelMaker(state) {
      var helloboys = state;
      return helloboys.form.country.label;
    },
    stuper: state => {
      return state.googleResponse.data;
    },
    getElections: state => {
      return state.USVoteElections;
    },
    getVoterInfo: state => {
      return state.voterInformation;
    }
  }
});

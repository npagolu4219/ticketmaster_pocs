import React from "react";
import data from "./data";
let eventsData = [],
  marketingData = [],
  promotionsData = [];

let dataProcessing = (yearFrom, yearTo) => {
  let msg;
  if (yearFrom <= yearTo) {
    let monsterride = 0,
      event1 = 0,
      event2 = 0,
      event3 = 0,
      event4 = 0,
      nuclear = 0,
      chydroelectric = 0,
      wind = 0,
      solar = 0,
      geothermal = 0,
      inEvent = 0,
      wood = 0,
      otherbio = 0;
    for (let i = yearFrom; i - 1 < yearTo; i++) {
      monsterride += data.monsterride[i];
      event1 += data.event1[i];
      event2 += data.event2[i];
      event3 += data.event3[i];
      event4 += data.event4[i];
    }

    eventsData = [
      { name: "Monster Jam", y: monsterride },
      { name: "Blake Shelton", y: event1 },
      { name: "Disney On Ice presents Dream Big", y: event2 },
      { name: "Brett Eldredge", y: event3 },
      { name: "Others", y: event1 },
      { name: "Grease Sing-A-Long", y: event4 },
      { name: "Brett Eldredge", y: event2 }
    ];

    promotionsData = [
      { name: "In Event", y: event4 },
      { name: "Online", y: event1 },
      { name: "Website", y: event2 }
    ];

    marketingData = [
      { name: "Facebook", y: event3 },
      { name: "Twitter", y: event2 },
      { name: "Instagram", y: event4 }
    ];
    msg = "Select the range";
  } else {
    msg = (
      <>
        Year <b>From</b> should be less or equal to year <b>To</b>
      </>
    ); //do nothing
  }
  return msg;
};

export default dataProcessing;
export { eventsData, promotionsData, marketingData };

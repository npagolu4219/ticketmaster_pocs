import React from 'react';
import { FaBullhorn,FaMapMarkerAlt } from 'react-icons/fa';
import { Toast, ToastBody, ToastHeader,Row,Col,Input } from 'reactstrap';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';


class TwitterHashDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hashDetails : [
                {
                    "eventName": "Seattle Seahawks vs. Tampa Bay Buccaneers",
                    "noOfPeopleTalking": 0,
                    "location": "Canada",
                    "eventLink":"https://www1.ticketmaster.com/seattle-seahawks-vs-san-francisco-49ers/event/0F005674B41C981A"
                },
                {
                    "eventName": "Minnesota Vikings vs. Green Bay Packers",
                    "noOfPeopleTalking": 2,
                    "location": "London"
                },
                {
                    "eventName": "Los Angeles Chargers vs. Green Bay Packers",
                    "noOfPeopleTalking": 0,
                    "location": "London"
                },
                {
                    "eventName": "Boston Celtics vs. Milwaukee Bucks",
                    "noOfPeopleTalking": 2,
                    "location": "Hawaii"
                },
                {
                    "eventName": "Philadelphia Eagles vs. Chicago Bears",
                    "noOfPeopleTalking": 2,
                    "location": "California"
                },
                {
                    "eventName": "Denver Broncos vs. Cleveland Browns",
                    "noOfPeopleTalking": 0,
                    "location": "London"
                },
                {
                    "eventName": "Phoenix Suns vs. Los Angeles Lakers",
                    "noOfPeopleTalking": 0, 
                    "location": "London"
                },
                {
                    "eventName": "Cleveland Browns vs. Pittsburgh Steelers",
                    "noOfPeopleTalking": 1,
                    "location": "London"
                },
                {
                    "eventName": "Eagles",
                    "noOfPeopleTalking": 81,
                    "location": "London"
                },
                {
                    "eventName": "Atlanta Hawks vs. Los Angeles Lakers",
                    "noOfPeopleTalking": 3
                },
                {
                    "eventName": "Miami Dolphins vs. New York Jets",
                    "noOfPeopleTalking": 5,
                    "location": "London"
                },
                {
                    "eventName": "Tampa Bay Buccaneers vs. New Orleans Saints",
                    "noOfPeopleTalking": 1,
                    "location": "London",
                    "location": "London"

                },
                {
                    "eventName": "Chicago Bears vs. Kansas City Chiefs",
                    "noOfPeopleTalking": 0,
                    "location": "London"
                },
                {
                    "eventName": "Baltimore Ravens vs. New England Patriots",
                    "noOfPeopleTalking": 8, 
                    "location": "London"

                },
                {
                    "eventName": "Brooklyn Nets v. Houston Rockets",
                    "noOfPeopleTalking": 0,
                    "location": "Louisiana"
                },
                {
                    "eventName": "Buffalo Bills vs. Denver Broncos",
                    "noOfPeopleTalking": 1,
                    "location": "Albama"
                },
                {
                    "eventName": "UFC 244",
                    "noOfPeopleTalking": 85,
                    "location": "New york"
                }
            ],
            isAppear : false
        }
       
    }
   
  render() {
      let { isAppear,hashDetails } = this.state;
        
    return (
        <ApolloClient client={client}>
        <div className="container">
            <div className="text-center">
                <h2>Hash Tag Details</h2>
            </div>
            <br></br>
            <div>
                <Input type="text" name="event" className="seachEvent" placeholder="Search for event ... " />
        
            </div>
            <Row>
            {hashDetails.map(hashDetail => (
                <Col xs="5" className="toastwrapper xs-7 mb-3 pb-1">
                    <p className="toastHeader" title={hashDetail.eventName}>{hashDetail.eventName}</p>
                    <p><FaBullhorn size="1.5em" color="#026cdf" /> <span className="talkingCount">{hashDetail.noOfPeopleTalking} <i className="peaopleare">people are talking about this event</i> </span><pre></pre><FaMapMarkerAlt size="1.5em" color="#026cdf"/> <span className="talkingCount">{hashDetail.location}</span><a href={hashDetail.eventLink} target="_blank" className="eventLink">View Venue</a></p>
                </Col>
                ))}
            </Row>
            
        </div>
        </ApolloClient>
    )
  }
}
export default TwitterHashDetails
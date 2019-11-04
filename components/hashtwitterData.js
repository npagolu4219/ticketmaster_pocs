import React from 'react';
import { FaBullhorn,FaMapMarkerAlt } from 'react-icons/fa';
import { Row,Col,Input } from 'reactstrap';

let data = [
    {
        "eventName": "Seattle Seahawks vs. Tampa Bay Buccaneers",
        "noOfPeopleTalking": 0,
        "location": "Canada",
        "eventLink":"https://www1.ticketmaster.com/seattle-seahawks-vs-san-francisco-49ers/event/0F005674B41C981A"
    },
    {
        "eventName": "Minnesota Vikings vs. Green Bay Packers",
        "noOfPeopleTalking": 2,
        "location": "London",
        "eventLink":"https://www1.ticketmaster.com/seattle-seahawks-vs-san-francisco-49ers/event/0F005674B41C981A"
    },
    {
        "eventName": "Los Angeles Chargers vs. Green Bay Packers",
        "noOfPeopleTalking": 0,
        "location": "London",
        "eventLink":"https://www1.ticketmaster.com/seattle-seahawks-vs-san-francisco-49ers/event/0F005674B41C981A"
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
        "noOfPeopleTalking": 3,
         "location": "London"
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
]

class TwitterHashDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hashDetails : this.getSortedData(data),
            isAppear : false,
            hashDetailsFiltered: this.getSortedData(data)
        }
    }
    
   /* componentDidMount(){
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
    targetUrl = '10.6.20.17:8080/api/hashtagCount'
    fetch(proxyUrl + targetUrl).then(res => res.json().then(json => {
            this.setState({
                isAppear:true,
                hashDetails:json
            })
            console.log(json);
        }))
    }
    */

    getSortedData = (data) =>{
        data = data.filter(e => e.noOfPeopleTalking!==0)
        let sortedData = data.sort((a,b)=> b.noOfPeopleTalking-a.noOfPeopleTalking)
        return sortedData
    }

    handleChange = (e) =>{
        let {hashDetails} = this.state;
        let value = e.target.value;
        let hashDetailsFiltered = []
        if(!value){
            hashDetailsFiltered = hashDetails;
        }else{
            hashDetailsFiltered = hashDetails.filter(e =>{
                if((e.eventName.toLowerCase().search(value.toLowerCase())!==-1) || (e.location.toLowerCase().search(value.toLowerCase())!==-1)){
                    return e
                }
            })
        }
        hashDetailsFiltered = this.getSortedData(hashDetailsFiltered)
        this.setState({hashDetailsFiltered})
    }

  render() {
      let { isAppear,hashDetails, hashDetailsFiltered } = this.state;
    
    return (
        <div className="container">
            <div className="text-center">
                <h2>Hash Tag Details</h2>
            </div>
            <br></br>
            <div>
                <Input type="text" name="event" className="seachEvent" placeholder="Search by event or location ... " onChange={this.handleChange}/>
            </div>

            <Row>
            {hashDetailsFiltered.map(hashDetail => (
                <Col xs="5" className="toastwrapper xs-7 mb-3 pb-1">
                    <a  href={hashDetail.eventLink} className="toastHeader" title={hashDetail.eventName}>{hashDetail.eventName}</a>
                    <p><FaBullhorn size="1.5em" color="#026cdf" /> 
                    <span className="talkingCount">{hashDetail.noOfPeopleTalking} 
                    <i className="peaopleare">people are talking about this event</i> 
                    </span><pre></pre><FaMapMarkerAlt size="1.5em" color="#026cdf"/> 
                    <span className="talkingCount">{hashDetail.location}</span>
                    </p>
                </Col>
                ))}
            </Row>
        </div>
    )
  }
}
export default TwitterHashDetails
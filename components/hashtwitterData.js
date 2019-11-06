import React from 'react';
import { FaBullhorn, FaMapMarkerAlt } from 'react-icons/fa';
import { Row, Col, Input } from 'reactstrap';
import { graphql } from 'react-apollo';
import { getHashtagCountQuery } from './queries/queries'
import axios from 'axios';

let data = [
    {
        "eventName": "New York Jets vs. New York Giants",
        "noOfPeopleTalking": "13",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/metlife-stadium-tickets-east-rutherford/venue/1233",
        "city": "East Rutherford"
    },
    {
        "eventName": "Tennessee Titans vs. Kansas City Chiefs",
        "noOfPeopleTalking": "0",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/nissan-stadium-tickets-nashville/venue/221867",
        "city": "Nashville"
    },
    {
        "eventName": "Chicago Bulls vs. Los Angeles Lakers",
        "noOfPeopleTalking": "2",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/united-center-tickets-chicago/venue/32882",
        "city": "Chicago"
    },
    {
        "eventName": "Oakland Raiders vs. Los Angeles Chargers",
        "noOfPeopleTalking": "1",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/oakland-alameda-county-coliseum-oakland-raiders-tickets-oakland/venue/229867",
        "city": "Oakland"
    },
    {
        "eventName": "Minnesota Vikings vs. Green Bay Packers",
        "noOfPeopleTalking": "7",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/us-bank-stadium-tickets-minneapolis/venue/49284",
        "city": "Minneapolis"
    },
    {
        "eventName": "Vegas Golden Knights vs. Chicago Blackhawks",
        "noOfPeopleTalking": "1",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/tmobile-arena-tickets-las-vegas/venue/376926",
        "city": "Las Vegas"
    },
    {
        "eventName": "New Orleans Saints vs. San Francisco 49ers",
        "noOfPeopleTalking": "5",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/mercedesbenz-superdome-tickets-new-orleans/venue/221661",
        "city": "New Orleans"
    },
    {
        "eventName": "San Francisco 49ers vs. Arizona Cardinals",
        "noOfPeopleTalking": "25",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/levis-stadium-tickets-santa-clara/venue/229947",
        "city": "Santa Clara"
    },
    {
        "eventName": "Phoenix Suns vs. Los Angeles Lakers",
        "noOfPeopleTalking": "1",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/talking-stick-resort-arena-tickets-phoenix/venue/205079",
        "city": "Phoenix"
    },
    {
        "eventName": "Anaheim Ducks vs. Vegas Golden Knights",
        "noOfPeopleTalking": "2",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/honda-center-tickets-anaheim/venue/73797",
        "city": "Anaheim"
    },
    {
        "eventName": "San Francisco 49ers vs. Seattle Seahawks",
        "noOfPeopleTalking": "3",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/levis-stadium-tickets-santa-clara/venue/229947",
        "city": "Santa Clara"
    },
    {
        "eventName": "Eagles",
        "noOfPeopleTalking": "86",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/madison-square-garden-tickets-new-york/venue/483329",
        "city": "New York"
    },
    {
        "eventName": "Hamilton (Touring)",
        "noOfPeopleTalking": "1",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/old-national-centre-tickets-indianapolis/venue/42026",
        "city": "Indianapolis"
    },
    {
        "eventName": "New York Giants vs. Dallas Cowboys",
        "noOfPeopleTalking": "83",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/metlife-stadium-tickets-east-rutherford/venue/1233",
        "city": "East Rutherford"
    },
    {
        "eventName": "San Francisco 49ers vs. Green Bay Packers",
        "noOfPeopleTalking": "5",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/levis-stadium-tickets-santa-clara/venue/229947",
        "city": "Santa Clara"
    },
    {
        "eventName": "Philadelphia Eagles vs. Dallas Cowboys",
        "noOfPeopleTalking": "10",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/lincoln-financial-field-tickets-philadelphia/venue/16752",
        "city": "Philadelphia"
    },
    {
        "eventName": "Miami Dolphins vs. Philadelphia Eagles",
        "noOfPeopleTalking": "1",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/hard-rock-stadium-tickets-miami/venue/106734",
        "city": "Miami"
    },
    {
        "eventName": "Dallas Cowboys vs. Minnesota Vikings",
        "noOfPeopleTalking": "2",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/att-stadium-tickets-arlington/venue/99096",
        "city": "Arlington"
    },
    {
        "eventName": "2020 Bridgestone NHL Winter Classic Nashville Predators v Dallas Stars",
        "noOfPeopleTalking": "0",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/cotton-bowl-tickets-dallas/venue/98311",
        "city": "Dallas"
    },
    {
        "eventName": "Cleveland Browns vs. Buffalo Bills",
        "noOfPeopleTalking": "2",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/firstenergy-stadium-home-of-the-cleveland-tickets-cleveland/venue/40971",
        "city": "Cleveland"
    },
    {
        "eventName": "Seattle Seahawks vs. San Francisco 49ers",
        "noOfPeopleTalking": "3",
        "country": "United States Of America",
        "eventUrl": "https://www.ticketmaster.com/centurylink-field-tickets-seattle/venue/123449",
        "city": "Seattle"
    }
]

class TwitterHashDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hashDetails: this.getSortedData(data),
            isAppear: false,
            hashDetailsFiltered: this.getSortedData(data),
            totalcount:""
        }
    }
    getSortedData = (data) => {
        data = data.filter(e => e.noOfPeopleTalking !== "0")
        let sortedData = data.sort((a, b) => b.noOfPeopleTalking - a.noOfPeopleTalking)
        return sortedData
    }

    // componentDidMount(){
    //     this.getHashData();
    // }

    // async getHashData() {
    //     let query = `{
    //         getHashtagCount{
    //         eventName
    //         noOfPeopleTalking
    //         country
    //         eventUrl
    //         city
    //         }
    //     } `;

    //     let data = await axios.post('http://10.6.19.70:3000/api/hashtagCount', {
    //         query: query
    //     })
    //     console.log(data);
    // }

    handleChange = (e) => {
        let { hashDetails } = this.state;
        let value = e.target.value;
        let hashDetailsFiltered = []
        if (!value) {
            hashDetailsFiltered = hashDetails;
        } else {
            hashDetailsFiltered = hashDetails.filter(e => {
                if ((e.eventName.toLowerCase().search(value.toLowerCase()) !== -1) || (e.country.toLowerCase().search(value.toLowerCase()) !== -1) || (e.city.toLowerCase().search(value.toLowerCase()) !== -1)) {
                    return e
                }
            })
        }
        hashDetailsFiltered = this.getSortedData(hashDetailsFiltered)
        this.setState({ hashDetailsFiltered })
    }

    render() {
        console.log(this.props);
        let { isAppear, hashDetails, hashDetailsFiltered,totalcount } = this.state;
        this.totalcount = hashDetailsFiltered.length;
        return (
            <div className="container">
                <br></br>
                <div className="text-center">
                    <h2>Event Twitter Dashboard</h2>
                </div><hr></hr>
                <br></br>
                <div>
                    <Input type="text" name="event" className="seachEvent" placeholder="Search by event or location ... " onChange={this.handleChange} />
                </div>
                <p className="total_events">Total event count : {this.totalcount}</p>
               
                <Row>
                    {hashDetailsFiltered.map(hashDetail => (
                        <Col xs="4" className="toastwrapper xs-7 mb-4 pb-1">
                            <a href={hashDetail.eventUrl} target="_blank" className="toastHeader" title={hashDetail.eventName}>{hashDetail.eventName}</a>
                            <p><FaBullhorn size="1.3em" color="#026cdf" />
                                <span className="talkingCount"> {hashDetail.noOfPeopleTalking}
                                    <i className="peaopleare"> people are talking about this event</i>
                                </span>
                            </p>
                            <p>
                            <FaMapMarkerAlt size="1.3em" color="#026cdf" />
                                <span className="venue_location" title={hashDetail.city}>{hashDetail.country},{hashDetail.city}</span>
                            </p>
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }
}
export default graphql(getHashtagCountQuery)(TwitterHashDetails)
// export default TwitterHashDetails
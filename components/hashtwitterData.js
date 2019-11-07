import React from 'react';
import { FaBullhorn, FaMapMarkerAlt } from 'react-icons/fa';
import { Row, Col, Input } from 'reactstrap';
import { graphql } from 'react-apollo';
import { getHashtagCountQuery } from './queries/queries';
import GlobalLoader from '../components/loader'
import _ from 'lodash'
import axios from 'axios';

let data = [];
let count = 0;

class TwitterHashDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString : "",
            filteredItems: this.props.data.getHashtagCount,
        }
    }
   
    handleChange = (e) => {
        this.setState({
            searchString : e.target.value
        })
    }
    createWidgets(){
        if (this.props.data.loading) {
            return <GlobalLoader />;
        } else {
            let fItems =  _.filter(this.props.data.getHashtagCount,(item) => {
                    return item.eventName.toUpperCase().indexOf(this.state.searchString.toUpperCase()) >= 0 || 
                    item.country.toUpperCase().indexOf(this.state.searchString.toUpperCase()) >= 0 || 
                    item.city.toUpperCase().indexOf(this.state.searchString.toUpperCase()) >= 0;
                });
            fItems = this.getSortedData(fItems).slice();
            count = fItems.length;
           
            return fItems.map((event) => {
                return <div>
                    <Col xs="4" className="toastwrapper xs-7 mb-4 pb-1">
                        <a href={event.eventUrl} target="_blank" className="toastHeader" title={event.eventName}>{event.eventName}</a>
                        <p><FaBullhorn size="1.3em" color="#026cdf" />
                            <span className="talkingCount"> {event.noOfPeopleTalking}
                                <i className="peaopleare"> people are talking about this event</i>
                            </span>
                        </p>
                        <p>
                        <FaMapMarkerAlt size="1.3em" color="#026cdf" />
                            <span className="venue_location" title={event.city}>{event.country},{event.city}</span>
                        </p>
                    </Col>
                </div>
            })
        }
    }

    getSortedData = (data) => {
        let filteredItems = data.filter(e => e.noOfPeopleTalking !== "0")
        let sortedData = filteredItems.sort((a, b) => b.noOfPeopleTalking - a.noOfPeopleTalking)
        return sortedData
    }
    render() {
        return (
            <div className="container-fluid">
              
                <div className="container">
                    <br></br>
                    <div className="text-center">
                        <h1>Event Twitter Dashboard</h1>
                    </div>
                    <hr></hr>
                    <div>
                        <Input type="text" name="event" className="seachEvent" placeholder="Search by event or location ... " onChange={this.handleChange} />
                    </div>
                    {/* <p className="total_events">Total event count : {this.state.totalcount}</p> */}
                    <Row>
                     {this.createWidgets()}
                    </Row>
                </div>
            </div>
        )
    }
}
export default graphql(getHashtagCountQuery)(TwitterHashDetails)
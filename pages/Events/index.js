import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Container, Row, Col, Button, InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

import Select from 'react-select';

import Layout from '../../components/layout';
import MyMapComponent from '../../components/Map';


const Events = (props) => {
    const [markers, setMarkers] = useState([]);
    const [keyword, setKeyword] = useState(null);
    const [selectedOption, setSelectedOption] = useState({
        value: 324,
        label: "Los Angeles"
    });
    let locationsList = [
        {
            value: 200,
            label: "All"
        }, {
            value: 324,
            label: "Los Angeles"
        },
        {
            value: 256,
            label: "Columbia, SC"
        },
        {
            value: 327,
            label: "Macon"
        }, {
            value: 345,
            label: "New York"
        }, {
            value: 356,
            label: "Parkersburg"
        },
        {
            value: 359,
            label: "Phoenix"
        },
        {
            value: 362,
            label: "Portland, OR"
        },
        {
            value: 369,
            label: "Richmond - Petersburg"
        },
        {
            value: 378,
            label: "Salt Lake City"
        },
        {
            value: 409,
            label: "Washington DC (Hagerstown)"
        }
    ]
    let getEvents = async function (locCode, kywrd) {
        let { data } = await axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?dmaId=${locCode}${kywrd ? ('&keyword=' + kywrd) : ''}&size=20&apikey=5JlomN1W2n26MXy3sg59czy5qOI3XgsZ`);
        let result = [];
        data._embedded && _.each(data._embedded.events, function (item) {
            let { name, images, _embedded, dates } = item;
            _.each(_embedded.venues, (loc) => {
                result.push({
                    eventName: name,
                    venueName: loc.name,
                    lat: Number(loc.location.latitude),
                    lng: Number(loc.location.longitude),
                    images,
                    dates
                });
            });
        });
        setMarkers(result);
    };

    let handleChange = (option) => {
        setSelectedOption(option);
    }

    let updateKeyWord = (e) => {
        setKeyword(e.target.value);
    }

    let handleSearch = () => {
        getEvents(selectedOption.value, keyword);
    }

    useEffect(() => {
        getEvents(selectedOption.value);
    }, []);

    console.log(selectedOption)

    return (
        <Layout>
            <Container>
                <Row>
                    <Col>
                        <Select
                            value={selectedOption}
                            onChange={handleChange}
                            options={locationsList}
                        />
                    </Col>
                    <Col>
                        <InputGroup>
                            <Input placeholder="search by Event, venue etc.." value={keyword} name="keyword" onChange={updateKeyWord} />
                            <InputGroupAddon addonType="append">
                                <InputGroupText>@</InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                    <Col>
                        <Button color="primary" outline onClick={handleSearch}>Search</Button>
                    </Col>
                </Row>
            </Container>
            {
                markers.length &&   (
                    <MyMapComponent
                        markers={markers}
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6ytGTT86EN1ih4mm10nWQ7uV36khvcCc"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100vh` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                )
            }
        </Layout>
    )
}

export default Events
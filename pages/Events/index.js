import { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';

import Layout from '../../components/layout';
import MyMapComponent from '../../components/Map';


const Events = (props) => {
    const [markers, setMarkers] = useState([]);
    let getEvents = async function () {
        let { data } = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json?dmaId=324&size=20&apikey=5JlomN1W2n26MXy3sg59czy5qOI3XgsZ');
        // console.log(data);
        let result = [];
        data._embedded && _.each(data._embedded.events, function (item) {
            let { name, images, _embedded } = item;
            _.each(_embedded.venues, (loc) => {
                result.push({
                    eventName: name,
                    venueName: loc.name,
                    lat: Number(loc.location.latitude),
                    lng: Number(loc.location.longitude),
                    images
                });
            });
        });
        setMarkers(result);
    };

    useEffect(() => {
        getEvents();
    }, []);
    return (
        <Layout>
            <MyMapComponent
                markers={markers}
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA6ytGTT86EN1ih4mm10nWQ7uV36khvcCc"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100vh` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </Layout>
    )
}

export default Events
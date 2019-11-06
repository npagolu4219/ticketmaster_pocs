import { useEffect, useState } from 'react';
const { compose, withProps, withState, withHandlers } = require("recompose");
const {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    InfoWindow,
} = require("react-google-maps");

import Spiderfy from "./Spiderfy";
import AltiCard from '../AltiCard';

const MapWithControlledZoom = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyA6ytGTT86EN1ih4mm10nWQ7uV36khvcCc&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `100vh` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withState('zoom', 'onZoomChange', 8),
    withHandlers(() => {
        const refs = {
            map: undefined,
        }

        return {
            onMapMounted: () => ref => {
                refs.map = ref
            },
            onZoomChanged: ({ onZoomChange }) => () => {
                onZoomChange(refs.map.getZoom())
            }
        }
    }),
    withScriptjs,
    withGoogleMap
)(props => {

    const [eventDetails, setEventDetails] = useState({ infoOpen: false });
    let _bounds;
    let map;

    function updateInformation() {
        setEventDetails({
            ...eventDetails,
            lat: this.lat,
            lng: this.lng,
            infoOpen: true,
            title: this.eventName,
            subtitle: "",
            description: this.venueName,
            url: this.images[9].url,
            date: this.dates
        });
    }

    function closeInfoWindow() {
        setEventDetails({
            ...eventDetails,
            infoOpen: false
        })
    }

    let getCenter = () => {
        _bounds = new google.maps.LatLngBounds();

        props.markers.forEach((marker, index) => {
            const position = new google.maps.LatLng(marker.lat, marker.lng);
            _bounds.extend(position);
        });
        // console.log(_bounds.getCenter().lat());
        return _bounds;
    }

    let markers = props.markers ? props.markers.map(function (item, index) {
        // console.log(item)
        return (
            <Marker
                key={index}
                title={item.eventName}
                position={item}
                icon={{
                    url: item.images[9].url,
                    anchor: new google.maps.Point(16, 16),
                    scaledSize: new google.maps.Size(32, 32),
                    updateInfo: updateInformation.bind(item),

                }}
                options={item}

            />
        )
    }) : [];

    let refMethod = (ref) => {
        map = ref;
        if (ref) {
            ref.fitBounds(getCenter())
        }
    }
    return (
        <GoogleMap
            zoom={props.zoom}
            ref={refMethod}
            onClick={closeInfoWindow}
        >
            {
                eventDetails.infoOpen && (
                    <InfoWindow position={{ lat: eventDetails.lat, lng: eventDetails.lng }} onCloseClick={closeInfoWindow}>
                        <AltiCard detail={eventDetails} />
                    </InfoWindow>

                )
            }
            <Spiderfy>
                {markers}
            </Spiderfy>
        </GoogleMap>
    )
}

);

export default MapWithControlledZoom;
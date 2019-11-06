import React from "react";
import PropTypes from "prop-types";
import { MAP, MARKER } from "react-google-maps/lib/constants";


class Spiderfy extends React.Component {
    static contextTypes = {
        [MAP]: PropTypes.object
    };

    constructor(props, context) {
        super(props, context);
        const oms = require(`npm-overlapping-marker-spiderfier/lib/oms.min`)
        this.oms = new oms.OverlappingMarkerSpiderfier(this.context[MAP], {
            markersWontMove: true,
            markersWontHide: true,
            basicFormatEvents: true
        });
        // console.log(this.oms)
        this.markerNodeMounted = this.markerNodeMounted.bind(this);
    }

    markerNodeMounted(ref) {
        if(ref){
            const marker = ref.state[MARKER];
            this.oms.addMarker(marker);
            let currentMark;
            let pr = this.props;
            var iw = new google.maps.InfoWindow();

            window.google.maps.event.addListener(marker, "spider_click", (e) => {
                currentMark = this;
                marker.icon.updateInfo();
                if (this.props.onSpiderClick) this.props.onSpiderClick(e);
            });
        }
    }
    
    render() {
        return React.Children.map(this.props.children, child =>
            React.cloneElement(child, { ref: this.markerNodeMounted })
        );
    }
}

export default Spiderfy;
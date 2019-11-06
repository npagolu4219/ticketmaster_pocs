/* global google */
import React, { useState } from "react";
import { compose } from "recompose";
import {
    withGoogleMap,
    GoogleMap,
    Marker,
    withScriptjs,
    InfoWindow
} from "react-google-maps";

import Spiderfy from "./Spiderfy";
import AltiCard from '../AltiCard';


const MyMapComponent = compose(
    withScriptjs,
    withGoogleMap
)(props => {
    let data = [
        {
            eventName: "LA Clippers vs. Toronto Raptors",
            venueName: "STAPLES Center",
            lat: 34.053101,
            lng: -118.2649,
            images: [
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_EVENT_DETAIL_PAGE_16_9.jpg",
                    width: 205,
                    height: 115,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_LANDSCAPE_16_9.jpg",
                    width: 1136,
                    height: 639,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_3_2.jpg",
                    width: 640,
                    height: 427,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                    height: 576,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    width: 2048,
                    height: 1152,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RECOMENDATION_16_9.jpg",
                    width: 100,
                    height: 56,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_16_9.jpg",
                    width: 640,
                    height: 360,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_3_2.jpg",
                    width: 1024,
                    height: 683,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_ARTIST_PAGE_3_2.jpg",
                    width: 305,
                    height: 203,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "4_3",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_CUSTOM.jpg",
                    width: 305,
                    height: 225,
                    fallback: false,
                    attribution: "TM Generic"
                }
            ]
        },
        {
            eventName: "LA Clippers vs. Toronto Raptors",
            venueName: "STAPLES Center",
            lat: 34.053150,
            lng: -118.2649,
            images: [
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_EVENT_DETAIL_PAGE_16_9.jpg",
                    width: 205,
                    height: 115,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_LANDSCAPE_16_9.jpg",
                    width: 1136,
                    height: 639,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_3_2.jpg",
                    width: 640,
                    height: 427,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                    height: 576,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    width: 2048,
                    height: 1152,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RECOMENDATION_16_9.jpg",
                    width: 100,
                    height: 56,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_16_9.jpg",
                    width: 640,
                    height: 360,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_3_2.jpg",
                    width: 1024,
                    height: 683,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_ARTIST_PAGE_3_2.jpg",
                    width: 305,
                    height: 203,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "4_3",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_CUSTOM.jpg",
                    width: 305,
                    height: 225,
                    fallback: false,
                    attribution: "TM Generic"
                }
            ]
        },
        {
            eventName: "Los Angeles Chargers vs. Green Bay Packers",
            venueName: "ROKiT Field at Dignity Health Sports Park",
            lat: 33.863741,
            lng: -118.261083,
            images: [
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/d31/60eca3fb-c0f0-4ab3-99d2-aec0c4958d31_549631_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    width: 2048,
                    height: 1152,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/d31/60eca3fb-c0f0-4ab3-99d2-aec0c4958d31_549631_ARTIST_PAGE_3_2.jpg",
                    width: 305,
                    height: 203,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/d31/60eca3fb-c0f0-4ab3-99d2-aec0c4958d31_549631_RETINA_LANDSCAPE_16_9.jpg",
                    width: 1136,
                    height: 639,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/d31/60eca3fb-c0f0-4ab3-99d2-aec0c4958d31_549631_RETINA_PORTRAIT_16_9.jpg",
                    width: 640,
                    height: 360,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/d31/60eca3fb-c0f0-4ab3-99d2-aec0c4958d31_549631_EVENT_DETAIL_PAGE_16_9.jpg",
                    width: 205,
                    height: 115,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/d31/60eca3fb-c0f0-4ab3-99d2-aec0c4958d31_549631_RETINA_PORTRAIT_3_2.jpg",
                    width: 640,
                    height: 427,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/d31/60eca3fb-c0f0-4ab3-99d2-aec0c4958d31_549631_TABLET_LANDSCAPE_3_2.jpg",
                    width: 1024,
                    height: 683,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/d31/60eca3fb-c0f0-4ab3-99d2-aec0c4958d31_549631_RECOMENDATION_16_9.jpg",
                    width: 100,
                    height: 56,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/d31/60eca3fb-c0f0-4ab3-99d2-aec0c4958d31_549631_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                    height: 576,
                    fallback: false
                },
                {
                    ratio: "4_3",
                    url:
                        "https://s1.ticketm.net/dam/a/d31/60eca3fb-c0f0-4ab3-99d2-aec0c4958d31_549631_CUSTOM.jpg",
                    width: 305,
                    height: 225,
                    fallback: false
                }
            ]
        },
        {
            eventName: "LA Clippers vs. San Antonio Spurs",
            venueName: "STAPLES Center",
            lat: 34.053101,
            lng: -118.2649,
            images: [
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_EVENT_DETAIL_PAGE_16_9.jpg",
                    width: 205,
                    height: 115,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_LANDSCAPE_16_9.jpg",
                    width: 1136,
                    height: 639,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_3_2.jpg",
                    width: 640,
                    height: 427,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                    height: 576,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    width: 2048,
                    height: 1152,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RECOMENDATION_16_9.jpg",
                    width: 100,
                    height: 56,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_16_9.jpg",
                    width: 640,
                    height: 360,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_3_2.jpg",
                    width: 1024,
                    height: 683,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_ARTIST_PAGE_3_2.jpg",
                    width: 305,
                    height: 203,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "4_3",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_CUSTOM.jpg",
                    width: 305,
                    height: 225,
                    fallback: false,
                    attribution: "TM Generic"
                }
            ]
        },
        {
            eventName: "Hamilton (Touring)",
            venueName: "Hollywood Pantages Theatre",
            lat: 34.10200961,
            lng: -118.32586552,
            images: [
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_3_2.jpg",
                    width: 640,
                    height: 427,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RECOMENDATION_16_9.jpg",
                    width: 100,
                    height: 56,
                    fallback: false
                },
                {
                    ratio: "4_3",
                    url:
                        "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_CUSTOM.jpg",
                    width: 305,
                    height: 225,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_LANDSCAPE_16_9.jpg",
                    width: 1136,
                    height: 639,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_3_2.jpg",
                    width: 1024,
                    height: 683,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    width: 2048,
                    height: 1152,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_ARTIST_PAGE_3_2.jpg",
                    width: 305,
                    height: 203,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_RETINA_PORTRAIT_16_9.jpg",
                    width: 640,
                    height: 360,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                    height: 576,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/300/88bcb3d0-aa78-428d-ad10-52514ea72300_570131_EVENT_DETAIL_PAGE_16_9.jpg",
                    width: 205,
                    height: 115,
                    fallback: false
                }
            ]
        },
        {
            eventName: "LA Clippers vs. Utah Jazz",
            venueName: "STAPLES Center",
            lat: 34.053101,
            lng: -118.2649,
            images: [
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_EVENT_DETAIL_PAGE_16_9.jpg",
                    width: 205,
                    height: 115,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_LANDSCAPE_16_9.jpg",
                    width: 1136,
                    height: 639,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_3_2.jpg",
                    width: 640,
                    height: 427,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                    height: 576,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    width: 2048,
                    height: 1152,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RECOMENDATION_16_9.jpg",
                    width: 100,
                    height: 56,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_16_9.jpg",
                    width: 640,
                    height: 360,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_3_2.jpg",
                    width: 1024,
                    height: 683,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_ARTIST_PAGE_3_2.jpg",
                    width: 305,
                    height: 203,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "4_3",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_CUSTOM.jpg",
                    width: 305,
                    height: 225,
                    fallback: false,
                    attribution: "TM Generic"
                }
            ]
        },
        {
            eventName: "Eagles",
            venueName: "The Forum",
            lat: 33.9583,
            lng: -118.341868,
            images: [
                {
                    ratio: "4_3",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg",
                    width: 305,
                    height: 225,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                    height: 576,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg",
                    width: 640,
                    height: 427,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg",
                    width: 205,
                    height: 115,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg",
                    width: 1024,
                    height: 683,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    width: 2048,
                    height: 1152,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg",
                    width: 640,
                    height: 360,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg",
                    width: 100,
                    height: 56,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg",
                    width: 305,
                    height: 203,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg",
                    width: 1136,
                    height: 639,
                    fallback: false
                }
            ]
        },
        {
            eventName: "Eagles",
            venueName: "The Forum",
            lat: 33.9583,
            lng: -118.341868,
            images: [
                {
                    ratio: "4_3",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg",
                    width: 305,
                    height: 225,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                    height: 576,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg",
                    width: 640,
                    height: 427,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg",
                    width: 205,
                    height: 115,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg",
                    width: 1024,
                    height: 683,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    width: 2048,
                    height: 1152,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg",
                    width: 640,
                    height: 360,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg",
                    width: 100,
                    height: 56,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg",
                    width: 305,
                    height: 203,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg",
                    width: 1136,
                    height: 639,
                    fallback: false
                }
            ]
        },
        {
            eventName: "LA Clippers vs. Atlanta Hawks",
            venueName: "STAPLES Center",
            lat: 34.053101,
            lng: -118.2649,
            images: [
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_EVENT_DETAIL_PAGE_16_9.jpg",
                    width: 205,
                    height: 115,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_LANDSCAPE_16_9.jpg",
                    width: 1136,
                    height: 639,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_3_2.jpg",
                    width: 640,
                    height: 427,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                    height: 576,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    width: 2048,
                    height: 1152,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RECOMENDATION_16_9.jpg",
                    width: 100,
                    height: 56,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_16_9.jpg",
                    width: 640,
                    height: 360,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_3_2.jpg",
                    width: 1024,
                    height: 683,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_ARTIST_PAGE_3_2.jpg",
                    width: 305,
                    height: 203,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "4_3",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_CUSTOM.jpg",
                    width: 305,
                    height: 225,
                    fallback: false,
                    attribution: "TM Generic"
                }
            ]
        },
        {
            eventName: "Eagles",
            venueName: "The Forum",
            lat: 33.9583,
            lng: -118.341868,
            images: [
                {
                    ratio: "4_3",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_CUSTOM.jpg",
                    width: 305,
                    height: 225,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                    height: 576,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_3_2.jpg",
                    width: 640,
                    height: 427,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_EVENT_DETAIL_PAGE_16_9.jpg",
                    width: 205,
                    height: 115,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_3_2.jpg",
                    width: 1024,
                    height: 683,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    width: 2048,
                    height: 1152,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_PORTRAIT_16_9.jpg",
                    width: 640,
                    height: 360,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RECOMENDATION_16_9.jpg",
                    width: 100,
                    height: 56,
                    fallback: false
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_ARTIST_PAGE_3_2.jpg",
                    width: 305,
                    height: 203,
                    fallback: false
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/c40/e0f4dedd-b435-4b8b-8fd0-e73e47e93c40_851341_RETINA_LANDSCAPE_16_9.jpg",
                    width: 1136,
                    height: 639,
                    fallback: false
                }
            ]
        },
        {
            eventName: "LA Clippers vs. Portland Trail Blazers",
            venueName: "STAPLES Center",
            lat: 34.053101,
            lng: -118.2649,
            images: [
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_EVENT_DETAIL_PAGE_16_9.jpg",
                    width: 205,
                    height: 115,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_LANDSCAPE_16_9.jpg",
                    width: 1136,
                    height: 639,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_3_2.jpg",
                    width: 640,
                    height: 427,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_16_9.jpg",
                    width: 1024,
                    height: 576,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_LARGE_16_9.jpg",
                    width: 2048,
                    height: 1152,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RECOMENDATION_16_9.jpg",
                    width: 100,
                    height: 56,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "16_9",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_RETINA_PORTRAIT_16_9.jpg",
                    width: 640,
                    height: 360,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_TABLET_LANDSCAPE_3_2.jpg",
                    width: 1024,
                    height: 683,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "3_2",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_ARTIST_PAGE_3_2.jpg",
                    width: 305,
                    height: 203,
                    fallback: false,
                    attribution: "TM Generic"
                },
                {
                    ratio: "4_3",
                    url:
                        "https://s1.ticketm.net/dam/a/baa/e07f33b1-b831-4795-b43b-e3a66570bbaa_1183951_CUSTOM.jpg",
                    width: 305,
                    height: 225,
                    fallback: false,
                    attribution: "TM Generic"
                }
            ]
        }
    ];
    const [eventDetails, setEventDetails] = useState({ infoOpen: false });

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

    let _bounds;
    let getCenter = () => {
        _bounds = new google.maps.LatLngBounds();

        props.markers.forEach((marker, index) => {
            const position = new google.maps.LatLng(marker.lat, marker.lng);
            _bounds.extend(position);
        });
        console.log(_bounds.getCenter().lat());
        return _bounds.getCenter();
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
    // props.markers.length && console.log(props.markers[0].lat, props.markers[0].lng);
    return (
        <div style={{ height: '100vh', width: '100%' }}>
            {props.markers.length && (
                <GoogleMap
                    defaultZoom={10}
                    initialCenter={getCenter()}
                    center={getCenter()}
                    onClick={closeInfoWindow}
                    onIdle = {(map)=>{console.log(map,"data")}}
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
            )}
        </div>
    );
});

export default MyMapComponent;

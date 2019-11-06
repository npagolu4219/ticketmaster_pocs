import React,{Component} from 'react';
import axios from 'axios';
import analyticsData from './analyticsData';
import {
    BarChart, LineChart, AreaChart, Area, Line,linearGradient, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, LabelList
  } from 'recharts';

class Analytics extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: getFormattedData(analyticsData),
        }
    }

    
    render(){
        let {data} = this.state;
        return(
            <div>
                <div className='m-5'>
                    <BarChart
                    width={1200}
                    height={500}
                    data={data.events._embedded.events}
                    margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" >
                    <Label value="Event name" offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis 
                    label={{ value: 'Price range $(min/max)', angle: -90, position: 'insideLeft' }} 
                    />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Max Price" fill="#8884d8">
                        <LabelList dataKey="Max Price" position="top" />
                    </Bar>
                    <Bar dataKey="Min Price" fill="#82ca9d">
                        <LabelList dataKey="Min Price" position="top" />
                    </Bar>

                </BarChart>
                </div>
                    <div className='m-5'>
                <LineChart width={1200} height={500} data={data.attractions._embedded.attractions}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" >
                    <Label value="Event name" offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis
                        label={{ value: 'Upcoming Event Tickets', angle: -90, position: 'insideLeft' }} 
                    />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Total Tickets" stroke="#8884d8" >
                    {/* <LabelList dataKey="Total Tickets" position="top" /> */}
                    </Line>
                    <Line type="monotone" dataKey="Ticketmaster Tickets" stroke="#82ca9d" >
                    {/* <LabelList dataKey="Ticketmaster Tickets" position="bottom" /> */}
                    </Line>

                </LineChart>
                </div>

                <div className='m-5'>
                <LineChart width={1200} height={500} data={data.venues._embedded.venues}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" >
                    <Label value="Venue name" offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis 
                        label={{ value: 'Upcoming Event Tickets', angle: -90, position: 'insideLeft' }} 
                    />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="Total Tickets" stroke="#8884d8" />
                    <Line type="monotone" dataKey="Ticketmaster Tickets" stroke="#82ca9d" />
                </LineChart>
                </div>
            </div>
        )
    }
}
export default Analytics

function getFormattedData(data){
    data.events._embedded.events.forEach(e=>{
        e["Min Price"] = e.priceRanges && e.priceRanges[0].min
        e["Max Price"] = e.priceRanges && e.priceRanges[0].max
    })
    data.attractions._embedded.attractions.forEach(e=>{
        e["Total Tickets"] = e.upcomingEvents._total;
        e["Ticketmaster Tickets"] = e.upcomingEvents.ticketmaster;
    })
    data.venues._embedded.venues.forEach(e=>{
        e["Total Tickets"] = e.upcomingEvents._total;
        e["Ticketmaster Tickets"] = e.upcomingEvents.ticketmaster;
    })
    return data
}
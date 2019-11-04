import React,{Component} from 'react';
import axios from 'axios';
import analyticsData from './analyticsData';
import {
    BarChart, LineChart, AreaChart, Area, Line,linearGradient, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Label, LabelList
  } from 'recharts';

  class CustomizedAxisTick extends Component {
    render() {
      const {
        x, y, stroke, payload,
      } = this.props;
  
      return (
        <g transform={`translate(${x},${y})`}>
          <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">{payload.value}</text>
        </g>
      );
    }
  }

class Analytics extends Component{
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }
    
    render(){
        console.log(analyticsData.events._embedded.events)
        return(
            <div>
                <div className='m-5'>
                    <BarChart
                    width={1200}
                    height={300}
                    data={analyticsData.events._embedded.events}
                    margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" 
                    // tick={<CustomizedAxisTick />}
                     >
                    <Label value="Event name" offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis 
                    label={{ value: 'Price range $(min/max)', angle: -90, position: 'insideBottomLeft' }} 
                    />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="priceRanges[0].min" fill="#8884d8">
                    <LabelList dataKey="min" position="top" />
                    </Bar>
                    <Bar dataKey="priceRanges[0].max" fill="#82ca9d" />
                </BarChart>
                </div>
                    <div className='m-5'>
                <LineChart width={1200} height={300} data={analyticsData.attractions._embedded.attractions}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" 
                    // tick={<CustomizedAxisTick />}
                    >
                    <Label value="Event name" offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis
                        label={{ value: 'No of upcoming Events', angle: -90, position: 'insideBottomLeft' }} 
                    />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="upcomingEvents._total" stroke="#8884d8" />
                    <Line type="monotone" dataKey="upcomingEvents.ticketmaster" stroke="#82ca9d" />
                </LineChart>
                </div>

                <div className='m-5'>
                <LineChart width={1200} height={300} data={analyticsData.venues._embedded.venues}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" 
                    // tick={<CustomizedAxisTick />}
                     >
                    <Label value="Venue name" offset={-5} position="insideBottom" />
                    </XAxis>
                    <YAxis 
                        label={{ value: 'No of upcoming Events', angle: -90, position: 'insideBottomLeft' }} 
                    />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="upcomingEvents._total" stroke="#8884d8" />
                    <Line type="monotone" dataKey="upcomingEvents.ticketmaster" stroke="#82ca9d" />
                </LineChart>
                </div>
            </div>
        )
    }
}
export default Analytics
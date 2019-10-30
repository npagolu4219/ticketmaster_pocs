import React, { Component } from "react";
import template from "./template";
import Selection from "./Selection";
import Dashboard from "./Dashboard.js";
import dataProcessing, {
  eventsData,
  hydroElectricData,
  marketingData,
  promotionsData
} from "./dataProcessing";

class Insights extends Component {
  state = template;

  copyDataSeries = (obj = {}) => {
    this.setState({
      ...obj,
      //
      charts: [
       
        //{ serie: hydroElectricData, title: "Sales",type:"line" },
        { serie: marketingData, title: "Marketing",type:"pie" },
        { serie: eventsData, title: "Events Data",type:"bar" },
        { serie: promotionsData, title: "Promotions",type:"area" }
      ]
    });
  };
  componentDidMount() {
    dataProcessing(this.state.yearFrom, this.state.yearTo, this.state.msg);
    this.copyDataSeries();
  }

  handleSubmit = e => {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
    e.preventDefault();
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.yearFrom !== this.state.yearFrom) {
      this.handleChangeSelect();
    }
    if (prevState.yearTo !== this.state.yearTo) {
      this.handleChangeSelect();
    }
  }
  handleChangeSelect() {
    let msg = dataProcessing(this.state.yearFrom, this.state.yearTo);
    this.copyDataSeries({ msg: msg });
  }

  handleChangeYear = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <>
        <div className="container">
          <h2 className="text-center mt-5">
           Insights
          </h2>
        </div>
        <div className="container  mb-5 pb-3">
          <div
            className={
              "text-center mb-0 pt-3 bold " +
              (this.state.msg !== "Select the range" ? "text-danger" : "")
            }
          >
            <strong>{this.state.msg}</strong>
          </div>
          <Selection
            yearFrom={this.state.yearFrom}
            yearTo={this.state.yearTo}
            onChangeYear={this.handleChangeYear}
            onSubmit={this.handleSubmit}
          />
          <Dashboard
            userConfig={this.state.userConfig}
            charts={this.state.charts}
          />
        </div>
      </>
    );
  }
}

export default Insights;

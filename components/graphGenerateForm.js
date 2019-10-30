import React, { Component } from 'react';
import uuid from 'uuid';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col } from 'reactstrap';

class GraphGenerateForm extends Component {
    /* state = {
         fields: [
             {
                 id: uuid(),
                 name: "Monaarjun",
                 graphType: "barchart"
             }
         ]
     }*/
    constructor(prps) {
        super(prps);
        this.state = {
            reportHeader: '',
            reportType: '',
            reportFor: ''
        };
    }
    
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const form = {
            reportHeader: this.state.reportHeader,
            reportType: this.state.reportType,
            reportFor: this.state.reportFor
        }
        console.log(form)
        {/* -----------you would send data to API to get results, I used database for ease, this also clears the form on submit----------------*/ }
        // database.push(form);
        this.setState({
            reportHeader: '',
            reportType: '',
            reportFor: ''
        })
    }
    render() {
        return (
            <div className="container">
                <h3>Generate Chart</h3>
                <hr></hr>
                <Form>
                    <div className="row">
                        <div className="col-lg-6">
                            <FormGroup>
                                <Label for="exampleEmail">Report Name</Label>
                                <Input required type="Text" name="reportHeader" id="reportName" value={this.state.reportHeader}
                                    onChange={e => this.handleChange(e)} placeholder="Report name" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="selectClient">Report Type</Label>
                                <Input type="select" name="reportType" id="selectClientName" value={this.state.reportType}
                                    onChange={e => this.handleChange(e)}>
                                    <option>Bar Chart</option>
                                    <option>Pie Chart</option>
                                    <option>Stock Chart</option>
                                    <option>Map Chart</option>
                                </Input>
                            </FormGroup>
                        </div>
                        <div className="col-lg-6">
                            <FormGroup>
                                <Label for="selectClient">Report For</Label>
                                <Input type="select" name="reportFor" id="selectClientName" value={this.state.reportFor}
                                    onChange={e => this.handleChange(e)}>
                                    <option>Altimetrik</option>
                                    <option>PayPal</option>
                                    <option>Intuit</option>
                                    <option>Ticket Master</option>
                                    <option>HSB</option>
                                    <option>Visa</option>
                                </Input>
                            </FormGroup>

                        </div>
                    </div>
                    <hr></hr>
                    <Row className="float-right">
                        <Col xs="2"> <Button color="primary" value="Send" onClick={(e) => this.onSubmit(e)}> Create</Button>{' '}</Col>
                    </Row>
                </Form>
            </div>
        );
    }
}

export default GraphGenerateForm;
import React, { Component } from 'react';
import {
  Col,
  Row
} from 'reactstrap';


class MadlibForm extends Component {
  constructor(props){
    super(props)

    this.state={
      color:'',
      pluralNoun:'',
      adjectiveOne:'',
      celebrtityOne:''
    }
}


  handleChange= function(props){
    return function(event){
      this.setState({[props.inputTitle]:event.target.value})
      console.log(`value for state ${props.inputTitle} is: ${this.state[props.inputTitle]}`);
    }.bind(this)
  }

    render() {
      return (
        <Row style={{textAlign: 'center', color: 'white'}}>
          <Col md="3">
            <Row>
              <Col md='2'>
                <label className="greenLabel">1</label>
              </Col>
              <Col md='10'>
                <input placeholder='Color' type='text' onChange={this.handleChange({inputTitle: 'color'})}/>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className='inputDescription'>Color</div>
              </Col>
            </Row>
          </Col>
          <Col md="3">
            <Row>
              <Col md='2'>
                <label className="greenLabel">1</label>
              </Col>
              <Col md='10'>
              <input placeholder='Color' type='text' onChange={this.handleChange({inputTitle: 'pluralNoun'})}/>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className='inputDescription'>Noun (plural)</div>
              </Col>
            </Row>
          </Col>
          <Col md="3">
            <Row>
              <Col md='2'>
                <label className="greenLabel">1</label>
              </Col>
              <Col md='10'>
              <input placeholder='Color' type='text' onChange={this.handleChange({inputTitle: 'adjectiveOne'})}/>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className='inputDescription'>Adjective</div>
              </Col>
            </Row>
          </Col>
          <Col md="3">
            <Row>
              <Col md='2'>
                <label className="greenLabel">1</label>
              </Col>
              <Col md='10'>
              <input placeholder='Color' type='text' onChange={this.handleChange({inputTitle: 'celebrityOne'})}/>
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <div className='inputDescription'>Celebrity</div>
              </Col>
            </Row>
          </Col>
        </Row>
      ) 
       }
}

export default MadlibForm;
import './App.css';
import Header from './Components/Header';
import Login from './Components/Login';
import { Row, Col } from 'react-bootstrap'
import { getInitialData } from './Actions/all';
import React from 'react';
import { connect } from 'react-redux'
import {
  Route
} from "react-router-dom";



class App extends React.Component {

  componentDidMount() {
    this.props.getInitialData()
  }
  render() {
    return (
      <>
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <br />
        {
          this.props.authUser != null
            ? <h1>Connected</h1>
            : <Row className="justify-content-md-center" style={{ textAlign: 'center' }}>
              <Col className="col-3">
                <Login />
              </Col>
            </Row>
        }
        <br />
        <Row style={{ textAlign: 'center' }}>
          <Col>
            <p>Created By: <a href='https://fr.linkedin.com/in/nassimbouyacoub'>Nassim</a></p>
          </Col>
        </Row>
      </>
    );
  }
}
const MapStateToProps = ({ authUser }) => {
  return { authUser }
}
export default connect(MapStateToProps, { getInitialData })(App);

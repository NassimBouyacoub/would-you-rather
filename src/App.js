import './App.css';
import Header from './Components/Header';
import { Row, Col } from 'react-bootstrap'
import Response from './Components/Response';
import { getInitialData } from './Actions/all';
import React from 'react';
import Login from './Components/Login'
import Home from './Components/Home'
import NewQuestion from './Components/NewQuestion';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


class App extends React.Component {

  componentDidMount() {
    this.props.getInitialData()
  }
  render() {
    return (
      <BrowserRouter >
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
        <br />
        <Row style={{ textAlign: "center" }}>
          <Col md={{ span: 4, offset: 4 }}>
            <Routes  >
              {
                this.props.authUser != null
                  ?
                  <>
                    <Route path="/newQuestion" element={<NewQuestion />} />
                    <Route path="/response/*" element={<Response />} />
                    <Route path="/" element={<Home />} />
                    
                  </>
                  : <Route path="*" element={<Login />} />
              }
              {/* 
              <Route path="/" element={
                this.props.authUser != null
                  ? <Home />
                  : <Login />
              } /> */}

            </Routes>
          </Col>
        </Row>
        <br />
        <Row style={{ textAlign: 'center' }}>
          <Col>
            <p>Created By: <a href='https://fr.linkedin.com/in/nassimbouyacoub'>Nassim</a></p>
          </Col>
        </Row>
      </BrowserRouter>
    );
  }
}

const MapStateToProps = ({ authUser }) => {
  return { authUser }
}
export default connect(MapStateToProps, { getInitialData })(App);

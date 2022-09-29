import './App.css';
import Header from './Components/Header';
import { Row, Col } from 'react-bootstrap'
import { getInitialData } from './Actions/all';
import React from 'react';
import Login from './Components/Login'
import Home from './Components/Home'
import Leaderboard from './Components/Leaderboard'
import NewQuestion from './Components/NewQuestion';
import { connect } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import QuestionDetails from './Components/QuestionDetails';
import PageNotFound from './Components/PageNotFound';


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
                    <Route path='*' element={<PageNotFound />} />
                    <Route path="/newQuestion" element={<NewQuestion />} />
                    <Route path="/question/*" element={<QuestionDetails />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/" element={<Home />} />

                  </>
                  : <>
                    <Route path='*' element={<PageNotFound />} />
                  </>
              }
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

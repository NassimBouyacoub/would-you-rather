import './App.css';
import Header from './Components/Header';
import { Row, Col, Button } from 'react-bootstrap'
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
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this.showCreator = this.showCreator.bind(this);

  }
  componentDidMount() {
    this.props.getInitialData()
  }
  showCreator() {
    console.log(this.state.show)
    this.state.show = !this.state.show
    this.forceUpdate()
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

                    <Route path="/add" element={<NewQuestion />} />
                    <Route path="/question/:questionId" element={<QuestionDetails />} />
                    <Route path="/leaderboard" element={<Leaderboard />} />
                    <Route path="/" element={<Home />} />
                    <Route element={<PageNotFound />} />
                  </>
                  : <>
                    <Route path='*' element={<Login />} />
                  </>
              }
            </Routes>
          </Col>
        </Row>
        <br />
        <Row style={{ textAlign: 'center' }}>

          <Col>
            <Button data-testid="showC" onClick={this.showCreator}>Who created this application?</Button>
          </Col>
          {this.state.show ? <p data-testid="Creator">this application was created By: <a href='https://fr.linkedin.com/in/nassimbouyacoub'>Nassim</a></p> : null}

        </Row>
      </BrowserRouter>
    );
  }
}

const MapStateToProps = ({ authUser }) => {
  return { authUser }
}
export default connect(MapStateToProps, { getInitialData })(App);

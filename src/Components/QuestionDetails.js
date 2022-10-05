import React from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col, Image, Button, ProgressBar } from 'react-bootstrap'
import { Link, Navigate, redirect, Route, Routes, useNavigate, useHistory, useNavigation } from 'react-router-dom';
import { SaveQuestionAnswers } from '../Actions/users'
import PageNotFound from './PageNotFound';
class QuestionDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            option: null,
            ren: false
        };
        this.onChangeValue = this.onChangeValue.bind(this);
        this.submit = this.submit.bind(this);

    }
    UNSAFE_componentWillMount = () => {
        if (this.props.questions[window.location.pathname.slice(10)] == undefined) {
            this.state.ren = true
        }
    }

    submit() {
        this.props.SaveQuestionAnswers(this.props.authUser, window.location.pathname.slice(10), this.state.option)
    }
    onChangeValue(event) {
        this.state.option = event.target.value
        console.log(window.location.pathname.slice(10))

    }
    render() {
        if (this.state.ren) {
            return (<PageNotFound />)
        } else {

            return (
                <Card style={{ margin: "1%", padding: "1%" }}>
                    <Card.Header style={{ textAlign: "left" }}>{this.props.users[this.props.questions[window.location.pathname.slice(10)].author].name} asks:</Card.Header>
                    <Card.Body>
                        <Row>
                            <Col >
                                <Image src={this.props.users[this.props.questions[window.location.pathname.slice(10)].author].avatarURL} fluid thumbnail />
                            </Col>
                            {
                                Object.keys(this.props.users[this.props.authUser].answers).includes(window.location.pathname.slice(10))
                                    ? <Col>
                                        <h3>Would you rather</h3>
                                        <br />
                                        <label>{this.props.questions[window.location.pathname.slice(10)].optionOne.text}</label>
                                        {this.props.users[this.props.authUser].answers[window.location.pathname.slice(10)]=="optionOne"
                                        ?<p>(Your vote)</p>
                                        :null
                                        }
                                        <ProgressBar now={this.props.questions[window.location.pathname.slice(10)].optionOne.votes.length / Object.keys(this.props.users).length * 100} label={(this.props.questions[window.location.pathname.slice(10)].optionOne.votes.length / Object.keys(this.props.users).length * 100).toPrecision(4) + "%"} />
                                        <br/>
                                        <label>{this.props.questions[window.location.pathname.slice(10)].optionTwo.text}</label>
                                        {this.props.users[this.props.authUser].answers[window.location.pathname.slice(10)]=="optionTwo"
                                        ?<p>(Your vote)</p>
                                        :null
                                        }
                                        <ProgressBar now={this.props.questions[window.location.pathname.slice(10)].optionTwo.votes.length / Object.keys(this.props.users).length * 100} label={(this.props.questions[window.location.pathname.slice(10)].optionTwo.votes.length / Object.keys(this.props.users).length * 100).toPrecision(4) + '%'} />
                                        <br />
                                        <Link to={`/`}>
                                            <Button>
                                                Back
                                            </Button>
                                        </Link>
                                    </Col>
                                    : <Col>
                                        <h3>Would you rather</h3>
                                        <br />
                                        <div onChange={this.onChangeValue}>
                                            <input type="radio" name="resp" value={"optionOne"} /> <label>{this.props.questions[window.location.pathname.slice(10)].optionOne.text}</label>
                                            <h4>or</h4>
                                            <input type="radio" name="resp" value={"optionTwo"} /> <label>{this.props.questions[window.location.pathname.slice(10)].optionTwo.text}</label>                            <br />
                                        </div>
                                        <br />
                                        <Link to={'/question/' + window.location.pathname.slice(10)} onClick={this.submit} >
                                            <Button >
                                                Submit
                                            </Button>
                                        </Link>
                                    </Col>
                            }


                        </Row>
                        <br />
                    </Card.Body>

                </Card >
            )
        }
    }
}
const MapStateToProps = ({ questions, users, authUser }) => {
    return { questions, users, authUser }
}
export default connect(MapStateToProps, { SaveQuestionAnswers })(QuestionDetails);
import React from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col, Image, Button, ProgressBar } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class QuestionDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            qstOne: this.props.questions[window.location.pathname.slice(10)].optionOne.votes.length,
            qstTwo: this.props.questions[window.location.pathname.slice(10)].optionTwo.votes.length,
            answered: Object.keys(this.props.users[this.props.authUser].answers).includes(window.location.pathname.slice(10))

        };

    }
    render() {
        const { qstOne, qstTwo } = this.state;
        console.log(qstTwo)
        return (
            <Card style={{ margin: "1%", padding: "1%" }}>
                <Card.Header style={{ textAlign: "left" }}>{this.props.users[this.props.questions[window.location.pathname.slice(10)].author].id} asks:</Card.Header>
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
                                    <ProgressBar now={qstOne / Object.keys(this.props.users).length * 100} label={qstOne / qstTwo * 100} />
                                    <label>{this.props.questions[window.location.pathname.slice(10)].optionTwo.text}</label>
                                    <br />
                                    <ProgressBar now={qstTwo / Object.keys(this.props.users).length * 100} label={(qstTwo / Object.keys(this.props.users).length * 100).toPrecision(4) + '%'} />
                                    <br />
                                </Col>
                                : <Col>
                                    <h3>Would you rather</h3>
                                    <br />
                                    <input type="radio" name="resp" /> <label>{this.props.questions[window.location.pathname.slice(10)].optionOne.text}</label>
                                    <h4>or</h4>
                                    <input type="radio" name="resp" /> <label>{this.props.questions[window.location.pathname.slice(10)].optionTwo.text}</label>                            <br />
                                    <br />
                                </Col>
                        }


                    </Row>
                    <br />
                    <Row>
                        {
                            this.state.answered
                                ? <Link to={`/`}>
                                    <Button >
                                        Back
                                    </Button>
                                </Link>
                                : <Button>
                                    Submit
                                </Button>
                        }

                    </Row>
                </Card.Body>

            </Card>
        )
    }
}
const MapStateToProps = ({ questions, users, authUser }) => {
    return { questions, users, authUser }
}
export default connect(MapStateToProps)(QuestionDetails);
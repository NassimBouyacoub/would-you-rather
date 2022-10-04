import React from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class Question extends React.Component {
    render() {
        console.log(this.props.question_id)
        return (
            <Card style={{ margin: "1%", padding: "1%" }}>
                <Card.Header style={{ textAlign: "left" }}>{this.props.users[this.props.Question.author].id} asks:</Card.Header>
                <Card.Body>
                    <Row>
                        <Col >
                            <Image src={this.props.users[this.props.Question.author].avatarURL} fluid thumbnail />
                        </Col>
                        <Col>
                            <h3>Would you rather</h3>
                            <br />
                            <h4>{this.props.Question.optionOne.text}</h4>
                            <h4>or</h4>
                            <h4>{this.props.Question.optionTwo.text}</h4>
                            <br />
                            <br />
                            <Link to={`/question/` + this.props.Question.id}>
                                <Button>
                                    {this.props.answered
                                        ? "View Results"
                                        : "Answer Question"
                                    }
                                </Button>
                            </Link>

                        </Col>
                    </Row>
                </Card.Body>
            </Card >
        )
    }
}
const MapStateToProps = ({ questions, users }) => {
    return { questions, users }
}
export default connect(MapStateToProps)(Question);
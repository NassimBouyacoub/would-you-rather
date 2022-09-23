import React from 'react'
import { connect } from 'react-redux'
import { Card, Row, Col, Image, Button } from 'react-bootstrap'

class Response extends React.Component {
    render() {
        console.log(window.location.pathname)
        return (
            <Card style={{ margin: "1%", padding: "1%" }}>
                <Card.Header style={{ textAlign: "left" }}>{this.props.users[this.props.questions[window.location.pathname.slice(10)].author].id} asks:</Card.Header>
                <Card.Body>
                    <Row>
                        <Col >
                            <Image src={this.props.users[this.props.questions[window.location.pathname.slice(10)].author].avatarURL} fluid thumbnail />
                        </Col>
                        <Col>
                            <h3>Would you rather</h3>
                            <br />
                            <input type="radio" name="resp" /> <label>{this.props.questions[window.location.pathname.slice(10)].optionOne.text}</label>
                            <h4>or</h4>
                            <input type="radio" name="resp" /> <label>{this.props.questions[window.location.pathname.slice(10)].optionTwo.text}</label>                            <br />
                            <br />
                        </Col>

                    </Row>
                    <br/>
                    <Row>
                            <Button>Submit</Button>
                    </Row>
                </Card.Body>

            </Card>
        )
    }
}
const MapStateToProps = ({ questions, users, authUser }) => {
    return { questions, users, authUser }
}
export default connect(MapStateToProps)(Response);
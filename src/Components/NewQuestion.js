import React from 'react'
import { Button, Card, Row, Col, Image } from "react-bootstrap";
import { connect } from 'react-redux';
import { addQuestion } from '../Actions/questions';
class NewQuestion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionOne: null,
            optionTwo: null
        }
        this.submit = this.submit.bind(this);

    }
    submit(event) {
       this.props.addQuestion(this.state.optionOne, this.state.optionTwo, this.props.authUser)
    }

    render() {
        console.log(this.props.authUser)
        return (
            <Card>
                <Card.Title>New Question</Card.Title>
                <Card.Body>
                    <Row>
                        <Col >
                            <Image src={this.props.users[this.props.authUser].avatarURL} fluid thumbnail />
                        </Col>
                        <Col>
                            <h2>Would you rather</h2>
                            <br />
                            <input
                                type="text"
                                name="optionOne"
                                onChange={event => this.state.optionOne = event.target.value}
                            />
                            <h3>or</h3>
                            <input
                                type="text"
                                name="optionTwo"
                                onChange={event => this.state.optionTwo = event.target.value}
                            />
                            <br />
                            <br />
                            <Button onClick={this.submit}>Submit</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        )
    }
}
const MapStateToProps = ({ users, authUser }) => {
    return { users, authUser }
}
export default connect(MapStateToProps,{addQuestion})(NewQuestion);
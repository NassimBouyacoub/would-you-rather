import React from 'react'
import { Button, Card, Row, Col, Image } from "react-bootstrap";
import { connect } from 'react-redux';
import { getInitialData } from '../Actions/all';
class NewQuestion extends React.Component {
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
                            <input type="text" />
                            <h3>or</h3>
                            <input type="text" />
                            <br />
                            <br />
                            <Button>Submit</Button>
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
export default connect(MapStateToProps)(NewQuestion);
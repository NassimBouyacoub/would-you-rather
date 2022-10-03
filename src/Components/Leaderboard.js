import React from 'react'
import { Card, Col, Row, Image } from 'react-bootstrap'
import { connect } from 'react-redux'


class Leaderboard extends React.Component {
    render() {
        return (
            <Card>
                {Object.values(this.props.users).map(user => ({
                    id: user.id,
                    name: user.name,
                    avatarURL: user.avatarURL,
                    answerCount: Object.values(user.answers).length,
                    questionCount: user.questions.length,
                    total: Object.values(user.answers).length + user.questions.length
                })).sort((a, b) => a.total - b.total).reverse().map((user, index) =>
                    <>
                        <br />
                        <Card key={index} style={{ margin: "1%" }}>
                            <Card.Header data-testid={user.name}>
                                {user.name}
                            </Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>
                                        <Image src={user.avatarURL} fluid thumbnail />
                                    </Col>
                                    <Col>
                                        <Card>
                                            <Card.Title style={{ border: "4mm solid green" }}>Score: {user.total}</Card.Title>
                                            <Card.Body>
                                                <p>Number of questions :</p>
                                                <label data-testid={user.name+"_question"}> {user.questionCount}</label>
                                                <p>Number of answers :</p>
                                                <label data-testid={user.name+"_answers"}>  {user.answerCount}</label>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </>
                )
                }
            </Card>

        )
    }
}

const MapStateToProps = ({ users }) => {
    return { users }
}
export default connect(MapStateToProps)(Leaderboard)
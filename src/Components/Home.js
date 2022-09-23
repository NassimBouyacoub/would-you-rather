import React from 'react'
import { Tabs, Tab, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import Question from './Question'
class Home extends React.Component {
    render() {
        return (
            <Card>
                <Tabs
                    defaultActiveKey="answered"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    fill
                >
                    <Tab eventKey="answered" title="Answered" >
                        {Object.keys(this.props.users[this.props.authUser].answers).map(question =>
                            <Question answered={true} key={this.props.questions[question].id} Question={this.props.questions[question]} />
                        )}
                    </Tab>
                    <Tab eventKey="not answered" title="Not Answered">
                        {
                            (Object.keys(this.props.questions).filter(question =>
                                !Object.keys(this.props.users[this.props.authUser].answers).includes(question)
                            )
                            ).map(question=>{return(
                                <Question answered={false} key={this.props.questions[question].id} Question={this.props.questions[question]} />
                            )})
                        }
                    </Tab>
                </Tabs>
            </Card>
        )
    }
}
const MapStateToProps = ({ questions, users, authUser }) => {
    return { questions, users, authUser }
}
export default connect(MapStateToProps)(Home);
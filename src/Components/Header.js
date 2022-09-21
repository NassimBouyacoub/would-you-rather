import React from 'react'
import { Nav, Navbar, Container, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { getInitialData } from '../Actions/all'
import { setAuthedUser } from '../Actions/authedUser'

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Would you rather?</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">New Question</Nav.Link>
                        <Nav.Link href="#pricing">Leaderboard</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {this.props.authUser != null
                            ? <Navbar.Text>
                                Welcome {this.props.authUser} <Button onClick={() => this.props.setAuthedUser(null)} variant="danger">Disconnect</Button>
                            </Navbar.Text>
                            : <h2>none</h2>}

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

const MapStateToProps = ({ authUser }) => {
    return { authUser }
}
export default connect(MapStateToProps, { getInitialData,setAuthedUser })(Header);
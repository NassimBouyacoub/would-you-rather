import React from 'react'
import { Nav, Navbar, Container, Button, Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getInitialData } from '../Actions/all'
import { setAuthedUser } from '../Actions/authedUser'

class Header extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Would you rather?</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/newQuestion">New Question</Nav.Link>
                        <Nav.Link as={NavLink} to="/leaderboard" >Leaderboard</Nav.Link>
                    </Nav>
                    <Navbar.Collapse className="justify-content-end">
                        {this.props.authUser != null
                            ?
                            <>
                                <Image style={{ width: "4%" }} src={this.props.users[this.props.authUser].avatarURL} />
                                &nbsp;
                                <label style={{ color: "white" }}> Welcome {this.props.authUser}</label>
                                &nbsp;
                                <Button onClick={() => this.props.setAuthedUser(null)} variant="danger">Disconnect</Button>
                            </>
                            : <h2>none</h2>}
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

const MapStateToProps = ({ authUser, users }) => {
    return { authUser, users }
}
export default connect(MapStateToProps, { getInitialData, setAuthedUser })(Header);
import React from 'react'
import { Card, Dropdown,Image } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setAuthedUser } from '../Actions/authedUser'

class Login extends React.Component {
    render() {
        return (
            <Card data-testid="authUser" style={{ textAlign: "center" }}>
                <Card.Body >
                    <Card.Img src='http://www.webstickersmuraux.com/fr/img/foma288-jpg/folder/products-listado-merchant/poster-xxl-bob-leponge.jpg' />
                    &nbsp;
                    <Dropdown >
                        <Dropdown.Toggle variant="success" id="dropdown-basic" >
                            Choose a user
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {Object.keys(this.props.users).map(user => {
                                return <Dropdown.Item key={user} onClick={() => this.props.setAuthedUser(user)}>
                                    <Image style={{width:"15%"}} src={this.props.users[user].avatarURL}/>
                                    &nbsp;
                                    <span>{user}</span>
                                    </Dropdown.Item>
                            })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
        )
    }
}
const MapStateToProps = ({ users,authedUser }) => {
    return { users,authedUser }
}
export default connect(MapStateToProps, { setAuthedUser })(Login);


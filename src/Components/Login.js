import React from 'react'
import { Card, Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { setAuthedUser } from '../Actions/authedUser'

class Login extends React.Component {
    render() {
        return (
            <Card style={{ margin: '1%' }}>
                <Card.Title>LOGIN</Card.Title>
                <Card.Body>
                    <Card.Img src='http://www.webstickersmuraux.com/fr/img/foma288-jpg/folder/products-listado-merchant/poster-xxl-bob-leponge.jpg' />
                    &nbsp;
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Choose a user
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {Object.keys(this.props.users).map(user => {
                                return <Dropdown.Item key={user} onClick={() => this.props.setAuthedUser(user)}>{user}</Dropdown.Item>
                            })
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </Card.Body>
            </Card>
        )
    }
}
const MapStateToProps = ({ users }) => {
    return { users }
}
export default connect(MapStateToProps, { setAuthedUser })(Login);


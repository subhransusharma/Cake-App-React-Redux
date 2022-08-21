import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux';
import {fetchUsers, addUsers} from '../redux'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';


function UserContainer({userData, fetchUsers, addUsers}) {

  const [userName, setUserName] = useState('')

  useEffect(() =>{
    fetchUsers()
  }, [])
  
  return userData.loading ? (
  <h2>Loading Date....</h2>) :
  userData.error ? (
    <h2>{userData.error}</h2>
  ) :
  <Container>
  <div>
    <h2>Users List</h2>
    <InputGroup className="mb-3">
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          value={userName} onChange={(e) => setUserName(e.target.value)}
        />
    </InputGroup>
    <Button variant="primary"  onClick={(e) => addUsers(userName)}>Add Name</Button>
    <Container className="mt-2" >
    {userData && userData.users &&
    userData.users.map((user, index) =>
    <Row className="justify-content-md-center">
      <Col lg="4">
      <ListGroup>
      <ListGroup.Item key={index}>{user.name}</ListGroup.Item>
      </ListGroup>
      </Col>
    </Row>
    ) }
    </Container>
    </div>
    </Container>

}

const mapStateToProps = (state, ownProps) => {
  return {
    userData: state.users
  } 

}

const mapDispatchToProps = (dispatch, ownProps) => {
return {
  fetchUsers: () => dispatch(fetchUsers()),
  addUsers: (user) => dispatch(addUsers({name: user}))
}

}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
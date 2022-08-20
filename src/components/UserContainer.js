import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import {fetchUsers} from '../redux'


function UserContainer({userData, fetchUsers}) {

  useEffect(() =>{
    fetchUsers()
  }, [])
  
  return userData.loading ? (
  <h2>Loading Date....</h2>) :
  userData.error ? (
    <h2>{userData.error}</h2>
  ) :
  <div>
    <h2>Users List</h2>
    {userData && userData.users &&
    userData.users.map((user) => <p>{user.name}</p>) }
  </div>

}

const mapStateToProps = (state, ownProps) => {
  return {
    userData: state.users
  } 

}

const mapDispatchToProps = (dispatch, ownProps) => {
return {
  fetchUsers: () => dispatch(fetchUsers())
}

}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
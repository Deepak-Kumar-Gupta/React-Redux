import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

function UserContainer() {
    return (
        <div>
            users
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersContainer)

export default UserContainer

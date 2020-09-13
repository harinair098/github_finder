import React from 'react'
import Useritem from './Useritem'
import Spinner from '../layouts/Spinner'
import Proptypes from 'prop-types'

const Users= ({user,loading}) => {
    if(loading){
        return <Spinner />
    }else{
        return (
            <div style={userStyle}>
                {user.map(user => (
                    <Useritem key={user.id} user={user}></Useritem>
                ))}
            </div>
        )
    }
        
    }
const userStyle={
    display:'grid',
    gridTemplateColumns:'repeat(3, 1fr)',
    gridGap:'1rem'
}
Users.Proptypes={
    user:Proptypes.array.isRequired,
    loading:Proptypes.bool.isRequired
}
export default Users

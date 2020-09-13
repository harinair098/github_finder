import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Useritem = (props)=>{
        const { login,avatar_url,html_url}=props.user
        return (
            <div className='card text-center'>
                <img src={avatar_url}alt='avatar of {login}' className="round-img" style={{width:'50px'}} />       
                <h3>{login}</h3> 
                <div>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">more info</Link>
                </div>  
            </div>
        )
    }
Useritem.propTypes ={
    user:PropTypes.object.isRequired,
}
export default Useritem

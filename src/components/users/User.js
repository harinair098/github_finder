import React, { Fragment,Component } from 'react'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Repos from '../repos/Repos'
 
class User extends Component {
     componentDidMount(){
         this.props.getUser(this.props.match.params.login)
         this.props.getUserRepos(this.props.match.params.login)
     }
     static propTypes={
         loading:PropTypes.bool,
         user:PropTypes.object.isRequired,
         repos:PropTypes.array.isRequired,
         getUser:PropTypes.func.isRequired,
         getUserRepos:PropTypes.func.isRequired
     }
    render() {
        const{
            name,
            avatar_url,
            location,
            bio,
            html_url,
            blog,
            login,
            company,
            followers,
            following,
            public_repos,
            public_gists,
            hireable
        }=this.props.user
        const{loading,repos}=this.props
        if(loading) return <Spinner/>
        return <Fragment>
            <Link to='/' classname='btn btn-dark'>back to home page</Link>
            Hireable:{' '}
            {hireable ? (<i className='fas fa-check text-success'/>):(
                <i className='fas fa-times-circle text-danger'/>    
            ) }
            <div className='card grid-2'>
                <div className='all-center'>
                    <img src={avatar_url} className='round-img' alt='' style={{width:'150px'}} />
                <h1>
                    {name}
                </h1>
                <p>location:{location}</p>
                </div>
                <div>
                    {bio && <Fragment>
                        <h3>bio</h3>
                        <p>{bio}</p>
                    </Fragment>}
                    <a href={html_url} className='btn btn-dark my-1'>Visit GitHub profile</a>
                    <ul>
                        <li>
                            {login && <Fragment>
                                <strong>{login}</strong>
                            </Fragment>}
                        </li>
                        <li>
                            {company && <Fragment>
                              <p><strong>Company: </strong>
                              {company}</p>
                            </Fragment>}
                        </li>
                        <li>
                            {blog && <Fragment>
                                <p><strong>Website: </strong>
                                {blog}</p>
                            </Fragment>}
                        </li>
                    </ul>
                </div>
            </div>
            <div className='card text-center'>
                <div className='badge badge-primary'>Followers: {followers}</div>  
                <div className='badge badge-success'>Following: {following}</div>
                <div className='badge badge-danger'>Public repos: {public_repos}</div>
                <div className='badge badge-dark'>Public gists: {public_gists}</div>
            </div>
            <Repos repos={repos}/>
        </Fragment>
        
    }
}

export default User

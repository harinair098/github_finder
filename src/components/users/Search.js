import React, { Component, Profiler } from 'react'
import propTypes from 'prop-types'
class Search extends Component {
    state={
        text:''
    }
    static propTypes={
        searchUsers: propTypes.func.isRequired,
        clearUser:propTypes.func.isRequired,
        showClear:propTypes.bool.isRequired,
        setAlert:propTypes.func.isRequired
    }
    onChange=(event)=>this.setState({
            [event.target.name]:event.target.value})
    onSubmit(event){
        event.preventDefault();
        if(this.state.text === ''){
            this.props.setAlert('please enter something','light')
        }else{
            this.props.searchUsers(this.state.text);
            this.setState({
            text:''
        })
        }
    }        
    // if not using an arrow function then we have to bind this with the function where we pass instanceof; in this case in the form tag and also we have to write preventDefault()
    render() {
        return (
            <div className='form'>
                <form onSubmit={this.onSubmit.bind(this)} >
                    <input type='text' name='text' value={this.state.text} placeholder='search for users' onChange={this.onChange}></input>
                    <input type='submit' value='search' className='btn btn-dark'></input>
                </form> 
                {this.props.showClear && <button className='btn btn-dark btn-block' onClick={this.props.clearUser} style={{backgroundColor:'red'}}>
                    Clear
                </button> }
                
            </div>
            
        )
    }
}

export default Search

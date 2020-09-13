import React, { Component, Fragment } from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';
import Navbar from './components/layouts/Navbar'
import Users from './components/users/Users'
import axios from 'axios'
import Search from './components/users/Search' 
import Alert from './components/layouts/Alert'
import About from './components/pages/About'
import User from './components/users/User'


class App extends Component {
  state={
    users:[],
    user:{},
    repos:[],
    loading:false,
    alert:null
  }
  // async componentDidMount(){
  //   this.setState({loading:true});
   
  //   const res= await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrets=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   console.log(res.data)
  //   this.setState({user:res.data, loading:false})
  // }
  // search github users 
  searchUsers = async (text) => {
    this.setState({loading: true})
    const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrets=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    console.log(res.data)
    this.setState({users:res.data.items, loading:false})
  }
  //get single user
  getUser = async (username) =>{
    this.setState({loading: true})
    const res= await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrets=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    console.log(res.data)
    this.setState({user:res.data, loading:false})
  }
  //getuser repos
  getUserRepos = async (username)=>{
    this.setState({loading: true})
    const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secrets=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    console.log(res.data)
    this.setState({repos:res.data, loading:false})
  }
  clearUser = () =>{
    this.setState({
      users:[], loading:false
    })
  }
  setAlert=(msg,type)=>{
    this.setState({alert:{msg,type}})

    setTimeout(()=> this.setState({alert:null}),5000)
  }
  render() {
    return (
      <Router>
        <div>
        <Navbar />
        <div className='container'>
        <Alert alert={this.state.alert}/>
        <Switch>
          <Route exact path='/' render={props =>(
            <Fragment>
              <Search 
                searchUsers={this.searchUsers}
                clearUser={this.clearUser}
                showClear={this.state.users.length > 0 ? true:false}
                setAlert={this.setAlert} />
                <Users
                loading={this.state.loading} 
                user={this.state.users} 
                />
            </Fragment>
          )}></Route>
          <Route exact path='/about' component={About} />
          <Route exact path='/user/:login' render={props=>(
            <User{...props} 
            getUser={this.getUser}
            getUserRepos={this.getUserRepos}
            user={this.state.user}
            repos={this.state.repos}
            loading={this.state.loading}
            />
          )} />
        </Switch>
        </div> 
      </div>
      </Router>
      
    )
  }
}
  
export default App




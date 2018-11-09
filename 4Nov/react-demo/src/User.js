import React, {Component} from 'react'
import Details from './components/UserDetails'
import Address from './components/UserAddress'
import Company from './components/UserCompany'

const FETCHURL = 'https://jsonplaceholder.typicode.com/users';

export default class User extends Component{
    state = {
        users: null,
        loading: true
    }

    componentDidMount(){
        fetch(FETCHURL)
        .then(res => res.json())
        .then( users => this.setState({users, loading: false}))
        .catch(err => console.log(err))
      }
    render() {
        const {users, loading} = this.state;
        if(loading) {
            return <div>'Loading...'</div>
        }
        return (
            <div>
                {users.map( user => (
                    <>
                    <Details details={user}/>
                    <Address address={user.address}/>
                    <Company company={user.company}/>
                    </>
                ))}
                
            </div>
        )
    }
}
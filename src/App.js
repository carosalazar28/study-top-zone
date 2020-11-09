import React from 'react'
import {uuid} from 'uuidv4'
import Form from './Components/Form'
import Profiles from './Components/Profiles'
import {data} from './Data'
import './App.css'



class App extends React.Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    terms: false,
    userType: '',
    profiles: data,
  }
  
  handleChange = (e) => {
    const { name, type, checked, value } = e.target
    this.setState({ [name]: type === 'checkbox' ? checked : value })
  }

  handleSubmit = (e) => {
    console.log(this.setState)
    e.preventDefault();

    const { name, lastName, email, password } = this.state
    const newProfile = { id:uuid(), name, lastName, email, password }
    this.setState({
      profiles: [ newProfile, ...this.state.profiles ]
    })
  }

  render () {
    const { name, lastName, email, password, terms, userType, profiles } = this.state
    return (
        <>
          <h1>Formulario</h1>
          <Form
            name = {name}
            lastName = {lastName}
            email = {email}
            password = {password}
            terms = {terms}
            userType = {userType}
            handleSubmit = {this.handleSubmit}
            handleChange = {this.handleChange}
          />
          <h1>Información Perfil</h1>
          <Profiles 
            profiles = {profiles}
            //handleDeleteProfile = {this.handleDeleteProfile}
          />

        </>
      )
    }
}

export default App

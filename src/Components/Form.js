import React from 'react'
import App from '../App.css'

class Form extends React.Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    terms: false,
    userType: '',
  }

  handleChange = (e) => {
    const { name, lastName, email, password, terms, userType, type, checked, value } = e.target
    this.setState({ [name]: type === 'checkbox' ? checked : value })
  }

  handleSubmit = (e) => {
    console.log(this.setState)
    e.preventDefault()
    this.setState({
      name: '',
      lastName: '',
      email: '',
      password: '',
      terms: false,
      userType: '',
    })
  }

  render() {
    console.log(this.state)
    return(
      <form
        className='App'
        onSubmit={this.handleSubmit}
      >
        <label
          htmlFor='name'
        >
          Nombre
        </label>
        <input
          id='name'
          type='text'
          name='name'
          value={this.name}
          onChange={this.handleChange}
        />
        <label
          htmlFor='lastName'
        >
          Apellido
        </label>
        <input
          id='lastName'
          type='text'
          name='lastName'
          value={this.lastName}
          onChange={this.handleChange}
        />
        <label
          htmlFor='email'
        >
          Correo Electrónico
        </label>
        <input
          id='email'
          type='email'
          name='email'
          value={this.email}
          onChange={this.handleChange}
        />
        <label
          htmlFor='password'
        >
          Contraseña
        </label>
        <input
          id='password'
          type='password'
          name='password'
          value={this.pasword}
          onChange={this.handleChange}
        />
        <label
          htmlFor='terms'
        ><input
          id='terms'
          type='checkbox'
          name='terms'
          value={this.terms}
          onChange={this.handleChange}
        />
          Acepto los Términos y Condiciones
        </label>
        <label>Tipo de Usuario:
        </label>
        <select
          id='userType'
          name='userType'
          value={this.userType}
          onChange={this.handleChange}
          >
          <option value='cliente'>
          Cliente
          </option>
          <option value='restaurante'>
          Restaurante
          </option>
        </select>
        <input
          type='submit'
          value='Enviar'
        />
      </form>
    )
  }
}

export default Form

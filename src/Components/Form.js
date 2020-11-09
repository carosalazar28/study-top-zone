import React from 'react'
import './styles/Form.css'
class Form extends React.Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    terms: false,
    userType: '',
  }

  render() {
    console.log(this.state)
    return(
      <form
        className='Form'
        onSubmit={this.handleSubmit}
      >
        <span>
          <label
            className='Form__name-label'
            htmlFor='name'
          >
            Nombre
          </label>
          <input
            className='Form__name-input'
            id='name'
            type='text'
            name='name'
            value={this.name}
            onChange={this.handleChange}
          />
        </span>
        <span>
          <label
            className='Form__lastName-label'
            htmlFor='lastName'
          >
            Apellido
          </label>
          <input
            className='Form__lastName-input'
            id='lastName'
            type='text'
            name='lastName'
            value={this.lastName}
            onChange={this.handleChange}
          />
        </span>
        <span>
          <label
            className='Form__email-label'
            htmlFor='email'
          >
            Correo Electrónico
          </label>
          <input
            className='Form__email-input'
            id='email'
            type='email'
            name='email'
            value={this.email}
            onChange={this.handleChange}
          />
        </span>
        <span>
          <label
            className='Form__password-label'
            htmlFor='password'
          >
            Contraseña
          </label>
          <input
            className='Form__password-input'
            id='password'
            type='password'
            name='password'
            value={this.pasword}
            onChange={this.handleChange}
          />
        </span>
        <span>
          <label
            className='Form__terms-label'
            htmlFor='terms'
          >
            Acepto los Términos y Condiciones
          </label>
          <input
            className='Form__terms-input'
            id='terms'
            type='checkbox'
            name='terms'
            value={this.terms}
            onChange={this.handleChange}
          />
        </span>
        <span>
          <label
            className='Form__userType-label'
          >Tipo de Usuario:
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
        </span>
        <span className='Form__subtmit-span'>
          <button
            className='Form__submit-input'
          >
          </button>
        </span>
      </form>
    )
  }
}

export default Form

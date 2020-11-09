function Profile ( {name, lastName, email, password, handleDeleteUser } ) {
    return (
        <div className = 'Profile'>
            <p>
                {name}
            </p>
            <p>
                {lastName}
            </p>
            <p>
                {email}
            </p>
            <p>
                {password}
            </p>
            <a href = '#healhtRegister' >
                Registro Sanitario
            </a>
            <button 
                type = 'button'
                //onClick = {handleDeleteUser}
            >
                Eliminar Cuenta
            </button>
        </div>
    )
        
}

export default Profile
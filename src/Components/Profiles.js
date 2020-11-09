import Profile from './Profile'

function Profiles ({ profiles, handleDeleteProfile }) {
    return (
        <section className = 'profiles' >
            <h1>
                Lista de perfiles
            </h1>
            {
                !!profiles && profiles.length > 0 && profiles.map(({ id, name, lastName, email, password }) => { 
                    return (
                        <Profile 
                            key = {id}
                            name = {name}
                            lastName = {lastName}
                            email = {email}
                            password = {password}
                        />
                    )
                })
            }
        </section>
    )
}

export default Profiles
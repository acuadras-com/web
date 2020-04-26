import React from 'react'
import Context from '../Context'

export const  UserNotAuth =() => (
    <Context.Consumer>
        {
            ({activateAuth}) => {
                return(
                    <section>
                        <form onSubmit={activateAuth}>
                            <button>Iniciar Sesión</button>
                        </form>
                    </section>
                )
            }
        }
     </Context.Consumer>
)
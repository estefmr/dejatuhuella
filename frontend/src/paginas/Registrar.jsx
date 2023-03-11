/* import axios from 'axios'; */
import { useState } from 'react';
import {Link} from 'react-router-dom'
import Alerta from '../components/Alerta';
import axios from 'axios';



const Registrar = () => {
    const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword ] = useState('')

    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if([nombre, email, password, repetirPassword].includes('')) {
            setAlerta({ msg: 'Hay campo vacios', error: true });
            return;
        }

        if(password !== repetirPassword) {
            setAlerta({ msg: 'Los password no son iguales', error: true });
            return;
        }

        if(password.length < 6 ) {
            setAlerta({ msg: 'El password es muy corto, agrega minimo 6 caracteres', error: true });
            return;
        }

        setAlerta({})
        /* crear usuario en la api */

        try {
            const url = `http://localhost:4000/api/veterinarios/`
            const respuesta = await axios.post(url, {nombre, email, password })
            setAlerta({
                msg: 'Creado Correctamente, revisa tu email',
                error: false
            })
            console.log(respuesta)
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
            
        }
    }

    const { msg } = alerta;

    return ( 
        <>
           
            <div>
                <h1 className="text-teal-900 font-black text-4xl">Crea tu<span className="text-white"> Cuenta</span> </h1>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10'>

                { msg && <Alerta alerta = {alerta} />}

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="uppercase text-white block text-xl font-bold">
                            Nombre
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={nombre}
                            onChange={ e => setNombre(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="uppercase text-white block text-xl font-bold">
                            Email
                        </label>
                        <input
                            type="text"
                            placeholder="Email"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={email}
                            onChange={ e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="uppercase text-white block text-xl font-bold">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={password}
                            onChange={ e => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="uppercase text-white block text-xl font-bold">
                            Repite tu password
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                            value={repetirPassword}
                            onChange={ e => setRepetirPassword(e.target.value)}
                        />
                    </div>
                    <input 
                    type="submit"
                    value="Registrate"
                    className="bg-teal-900 w-50 p-5 py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md-w-auto"
                    />
                </form>
                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link className='block text-center my-5 text-white' to="/">¿Ya tienes cuenta? Inicia sesión</Link>
                </nav>
            </div>
           
        </>
     );
}
 
export default Registrar;
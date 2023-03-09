import {Link} from 'react-router-dom'

const Registrar = () => {
    return ( 
        <>
           
            <div>
                <h1 className="text-teal-900 font-black text-4xl">Crea tu<span className="text-white"> Cuenta</span> </h1>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10'>
                <form>
                    <div>
                        <label className="uppercase text-white block text-xl font-bold">
                            Nombre
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
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
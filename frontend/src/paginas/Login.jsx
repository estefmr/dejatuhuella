import {Link} from 'react-router-dom'

const Login = () => {
    return ( 
        <>
           
            <div>
                <h1 className="text-teal-900 font-black text-4xl">Deja tu <span className="text-white">HUELLA</span> </h1>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10'>
                <form>
                    <div>
                        <label className="uppercase text-white block text-xl font-bold">
                            Email
                        </label>
                        <input
                            type="email"
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
                    <input 
                    type="submit"
                    value="iniciar sesion"
                    className="bg-teal-900 w-50 p-5 py-3 rounded-xl text-white uppercase font-bold mt-5 hover:cursor-pointer hover:bg-indigo-800 md-w-auto"
                    />
                </form>
                <nav className='mt-10 lg:flex lg:justify-between'>
                    <Link className='block text-center my-5 text-white' to="/registrar">¿No tienes una cuenta? Registrate</Link>
                    <Link className='block text-center my-5 text-white' to="/olvidePassword">Olvide mi password</Link>
                </nav>
            </div>
           
        </>
     );
}
 
export default Login;
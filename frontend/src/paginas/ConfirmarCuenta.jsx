import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Alerta from '../components/Alerta'
import axios from 'axios';


const ConfirmarCuenta = () => {
    const [cuentaConfirmada, setCuentaConfirmada] = useState(false)
    const [cargando, setCargando] = useState(true)
    const [alerta, setAlerta] = useState({})

    const params = useParams()
    const { id } = params;
    alert(id);

    useEffect(() => {
        const confirmarCuenta = async () => {
          try {
            const url = `http://localhost:4000/api/veterinarios/confirmar/${id}`
            console.log(url)
            const { data } = await axios(url)
            setCuentaConfirmada(true)
            setAlerta({
              msg: data.msg
            })
          } catch (error) {
            setAlerta({
              msg: error.response.data.msg,
              error: true
            })
          }

          setCargando(false)
        }
        confirmarCuenta();
    }, [])
    return ( 
        <>
           
            <div>
                <h1 className="text-teal-900 font-black text-4xl">Confirma tu<span className="text-white"> Cuenta</span> </h1>
            </div>
            <div className='mt-20 md:mt-5 shadow-lg px-5 py-10'>
            { !cargando &&
            <Alerta alerta={alerta} />}

            { cuentaConfirmada && (
                <Link className='block text-center my-5 text-white' to="/">Inicia sesión</Link>
            )}
            </div>
           
        </>
     );
};
 
export default ConfirmarCuenta;
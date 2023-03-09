import { Outlet } from 'react-router-dom';


const AuthLayout = () => {
    return ( 
        <>
            <h1>
                Administrar pacientes de Veterinarios
            </h1>
            <main className="container mx-auto md:grid md:grid-cols-2 mt-12 gap-16 p-15 items-center">
                <Outlet/>
            </main>
            <h1>
                Administrar pacientes de Veterinarios
            </h1>
        </>
     );
}
 
export default AuthLayout;
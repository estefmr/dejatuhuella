import Veterinario from "../models/veterinario.js";
import generarJWT from "../helpers/generarJWT.js";
import generarId from "../helpers/gererarId.js";

const registrar = async (req, res) => {
    const { email } = req.body
    /* prevenir o revisar usuarios duplicados */
    /* consultar bd para ver si existe */
    const existeUsuario = await Veterinario.findOne({email})

    if (existeUsuario) {
        const error = new Error("Usuario ya registrado");
        return res.status(400).json({msg: error.message});
    }
    /* consultar bd para almacenar */


    try {
        /* guardar usuario nuevo veterinario */
        const veterinario = new Veterinario(req.body);
        const veterinarioGuardado = await veterinario.save();

        res.json(veterinarioGuardado)
    } catch (error) {
        console.log(error);
    }
};

/* mostrar info del veterinario */
const perfil = (req, res) => {
    const { veterinario } = req;
    res.json({perfil: veterinario})
}

const confirmar = async (req, res) => {
    /* confirmar cuenta con token */
    const {token} = req.params

    const usuarioConfirmar = await Veterinario.findOne({token});
    if(!usuarioConfirmar) {
        const error = new Error('Token no valido')
        return res.status(404).json({msg: error.message})
    }

    try {
        usuarioConfirmar.token = null;
        usuarioConfirmar.confirmado = true
        await usuarioConfirmar.save()
        res.json({msg: "usuario confirmado correctamente"})
    } catch (error) {
        console.loh(error)
    }

    
};

const autenticar = async (req, res) => {
    const {email, password} = req.body

    /* comprobar si usuario existe */
    const usuario = await Veterinario.findOne({email})

    if (!usuario) {
        const error = new Error("El usuario no existe");
        return res.status(403).json({ msg: error.message});
    } 

    /* comprobar si usuario esta confirmado */
    if (!usuario.confirmado) {
        const error = new Error("tu cuenta no ha sido confirmada");
        return res.status(403).json({ msg: error.message});
    } 

    /* comprobar password del usuario */
    if(await usuario.comprobarPassword(password)) {
        /* autenticar */
        res.json({token: generarJWT(usuario.id)});
    } else {
        console.log('password incorrecto');
        const error = new Error("password incorrecto");
        return res.status(403).json({ msg: error.message}); 
    }
};

const olvidePassword = async (req, res) => {
const { email } = req.body;

const existeVeterinario = await Veterinario.findOne({email})

if(!existeVeterinario) {
    const error = new Error("usuario no existe");
    return res.status(400).json({ msg: error.message })
}

try {
    existeVeterinario.token = generarId()
    await existeVeterinario.save();
    res.json({msg: "hemos mandado un email con las instrucciones"})
} catch (error) {
    console.log(error);
}

};

const comprobarToken = async (req, res) => {
    const { token } = req.params

    const tokenValido = await Veterinario.findOne({ token });

    if(tokenValido) {
        /* si el token es valido el usuario existe */
        res.json({msg: "Token valido y el usuario existe"})
    } else {
        const error = new Error('token no valido')
        return res.status(400).json({msg: error.message})
    }
};

/* almacenar password */
const nuevoPassword = async (req, res) => {
    const { token } = req.params
    const { password } = req.body

    const veterinario = await Veterinario.findOne({token})
    if(!veterinario) {
        const error = new Error('hay un error')
        return res.status(400).json({msg: error.message})
    }

    try {
        veterinario.token = null;
        veterinario.password = password;
        await veterinario.save()
        res.json({msg: 'se ha modificado el password correctamente'})
    } catch (error) {
        console.log(error)
        
    }
};
export { registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword};
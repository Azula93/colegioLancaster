import User from "../models/user.model.js";
import { createAccesstoken } from "../libs/jwt.js";
import bcrypt from 'bcryptjs'
//  bcryptjs sirve para encriptar las contraseñas y datos, para que cuando se devuelvan se muestren encriptados

// AQUI SE CREAN LAS RUTAS (login, register,etc) QUE LUEGO SE EXPORTAN A AUTHS.ROUTE.JS

// Funcion para hacer un registro
export const register = async (req,res) => {
    // en el body de de la peticion(thunderclient) se hace el requerimiento, sin estos datos no se envia a la DB
    const { email, password, username} = req.body
    
  try {

    // con esta linea se encripta el password
   const passwordHashs = await bcrypt.hash(password,10)

    const newUser =  new User({
        // datos requeridos para crear un usuario
        email,
        password: passwordHashs,
        username
    })

    const userSaved =  await newUser.save();
    const token = await createAccesstoken({id:userSaved._id});

    res.cookie('token', token);
    res.json({
            // encripta los datos que se envian
            id: userSaved._id,
            username: userSaved.username,
            email: userSaved.email, 
            createdAt: userSaved.createdAt,
            updatedAt: userSaved.updatedAt
        });
    } catch (error) {
        // muestra el error en caso de que lo haya
    res.status(500).json({message: error.message})
  }};

  // Funcion para hacer login
export const login = async (req,res) => {
    // en el body de de la peticion(thunderclient) se hace el requerimiento, sin estos datos no se envia a la DB
    const { email, password, } = req.body
    
  try {

    // verifica que el email sea el correcto
     const userFound = await User.findOne({email});
     if (!userFound) return res.status(400).json({message: "User not Found"});
    
    // compara las contraseñas (la ingresada y la que esta guardada en la DB y de ser necesario muestra mensaje de error)
   const isMatch = await bcrypt.compare(password,userFound.password);
   if (!isMatch) return res.status(400).json({message: "Incorrect Password"})

    
    const token = await createAccesstoken({id:userFound._id});

    res.cookie('token', token);
    res.json({
            // encripta los datos que se envian
            id: userFound._id,
            username: userFound.username,
            email: userFound.email, 
            createdAt: userFound.createdAt,
            updatedAt: userFound.updatedAt
        });
    } catch (error) {
        // muestra el error en caso de que lo haya
    res.status(500).json({message: error.message})
  }};

// Funcion para hacer desloguearse
 export const logOut =  (req,res) =>{
    res.cookie('token', "", {
        expires: new Date(0),
    })
    return res.sendStatus(200);
  }

// Funcion para crear un perfil
export const profile = async (req, res) =>{

  const userFound = await User.findById(req.user.id);

  if (!userFound) return res.status(400).json({message: 'User Not Found'});
    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt
    });

    res.send('profile');

    
}
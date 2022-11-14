import {getConnection} from "../database/database";


export const getUsers = async (request, response) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT nombre, documento, fechaDeNacimiento, correo FROM usuarios");
        response.json(result);
        console.log(result);    
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

export const getUser = async (request, response) => {
    try {
        console.log(request.params);
        const {documento} = request.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT nombre, documento, fechaDeNacimiento, correo FROM usuarios WHERE documento = ?", documento);
        response.json(result);
        console.log(result);
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

export const postUser = async (request, response) => {
    try {
        const {nombre, documento, fechaDeNacimiento, correo} = request.body;

        if(nombre === undefined || documento === undefined || fechaDeNacimiento === undefined || correo === undefined){
            response.status(400).json({message : "Bad request. Please fill all field"});
        }

        var fechaDeRegistro = new Date();

        const user = {nombre, documento, fechaDeNacimiento, correo, fechaDeRegistro}
        
        const connection = await getConnection();
        await connection.query("INSERT INTO usuarios SET ?", user);
        response.json({message: "User added"})
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

export const putUser = async (request, response) => {
    try {
        console.log(request.params);
        const {documento} = request.params;
        const {nombre, fechaDeNacimiento, correo} = request.body;
        // const {nombre, documento, fechaDeNacimiento, correo} = request.body;

        if(nombre === undefined || documento === undefined || fechaDeNacimiento === undefined || correo === undefined){
            response.status(400).json({message : "Bad request. Please fill all field"});
        }

        const user = {nombre, fechaDeNacimiento, correo}
        // const user = {nombre, documento, fechaDeNacimiento, correo}

        const connection = await getConnection();
        const result = await connection.query("UPDATE usuarios SET ? WHERE documento = ?", [user, documento]);
        // const result = await connection.query("UPDATE usuarios SET `documento` = '1007973000' WHERE `usuarios`.`id` = 3;", [user, documentoId]);
        response.json(result);
        console.log(result);    
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

export const deleteUser = async (request, response) => {
    try {
        console.log(request.params);
        const {documento} = request.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM usuarios WHERE documento = ?", documento);
        response.json(result);
        console.log(result);    
    } catch (error) {
        response.status(500);
        response.send(error.message);
    }
}

